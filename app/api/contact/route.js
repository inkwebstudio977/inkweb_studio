import { NextResponse } from "next/server";
import { render } from "@react-email/render";

import { connectDB } from "@/app/libs/db";
import { getTransporter, verifyTransporter } from "@/app/libs/mail";
import { contactSchema } from "@/app/libs/validation";

import Lead from "@/app/models/Lead";

import AdminNotification from "@/app/emails/AdminNotification";
import CustomerConfirmation from "@/app/emails/CustomerConfirmation";

export async function POST(req) {
  try {
    const json = await req.json();

    // Validate Request
    const body = contactSchema.parse(json);

    // Connect Database
    await connectDB();

    // Verify SMTP (Development only)
    await verifyTransporter();

    const transporter = getTransporter();

    // Save Lead
    const lead = await Lead.create({
      name: body.name,
      email: body.email,
      phone: body.phone,
      company: body.company,
      service: body.service,
      budget: body.budget,
      timeline: body.timeline,
      message: body.message,
    });

    // Render Email Templates
    const adminEmail = await render(
      <AdminNotification lead={lead} />
    );

    const customerEmail = await render(
      <CustomerConfirmation lead={lead} />
    );

    // Admin Email
    await transporter.sendMail({
      from: `"Inkweb Studioz" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL,
      subject: `📩 New Inquiry from ${lead.name}`,
      html: adminEmail,
    });

    // Customer Email
    await transporter.sendMail({
      from: `"Inkweb Studioz" <${process.env.SMTP_USER}>`,
      to: lead.email,
      subject: "Thank you for contacting Inkweb Studioz",
      html: customerEmail,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Inquiry submitted successfully.",
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Contact API Error:", error);

    // Zod Validation Error
    if (error.name === "ZodError") {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid form data.",
          errors: error.flatten(),
        },
        {
          status: 400,
        }
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong. Please try again later.",
      },
      {
        status: 500,
      }
    );
  }
}