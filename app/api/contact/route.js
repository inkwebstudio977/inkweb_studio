import { NextResponse } from "next/server"
import { connectDB } from "@/app/libs/db"
import Lead from "@/app/models/Lead";
import { getTransporter } from "@/app/libs/mail";
import { render } from "@react-email/render";
import { contactSchema } from "@/app/libs/validation";

import AdminNotification from "@/app/emails/AdminNotification";
import CustomerConfirmation from "@/app/emails/CustomerConfirmation";

export async function POST(req) {
  try {

    const json = await req.json();

    const body = contactSchema.parse(json);

    await connectDB();
    const transporter = getTransporter();

    await transporter.verify();;
    console.log("✅ SMTP Connected Successfully");

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
    const adminEmail = await render(
      <AdminNotification lead={lead} />
    );

    const customerEmail = await render(
      <CustomerConfirmation lead={lead} />
    );

    await transporter.sendMail({
      from: `"Inkweb Studioz" <${process.env.SMTP_USER}>`,
      to: body.email,
      subject: "Thank you for contacting Inkweb Studioz",
      html: customerEmail,
    });
    return NextResponse.json({
      success: true,
      message: "Lead saved successfully",
      lead,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Internal Server Error",
      },
      {
        status: 500,
      }
    );
  }
}