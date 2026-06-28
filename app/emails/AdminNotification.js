import { Text } from "@react-email/components";

import EmailLayout from "@/app/emails/layouts/emaillayout";

import SectionTitle from "@/app/emails/emcomponents/Sectiontitle";
import InfoCard from "@/app/emails/emcomponents/Infocard";
import Badge from "@/app/emails/emcomponents/badge";
import Divider from "@/app/emails/emcomponents/devider";
import MessageBox from "@/app/emails/emcomponents/Messagebox";
import Spacer from "@/app/emails/emcomponents/Spacer";
import PrimaryButton from "@/app/emails/emcomponents/button";
import SocialLinks from "@/app/emails/emcomponents/Sociallinks";

const smallText = {
  color: "#6b7280",
  fontSize: "13px",
  lineHeight: "22px",
};

export default function AdminNotification({ lead }) {
  return (
    <EmailLayout preview={`🚀 New inquiry from ${lead.name}`}>

      <SectionTitle>
        🚀 New Website Inquiry
      </SectionTitle>

      <Text
        style={{
          color: "#374151",
          fontSize: "16px",
          lineHeight: "26px",
        }}
      >
        A new client has submitted the contact form on the Inkweb Studioz
        website.
      </Text>

      <Spacer height={24} />

      {/* Client Information */}

      <SectionTitle>
        👤 Client Information
      </SectionTitle>

      <InfoCard
        label="Full Name"
        value={lead.name}
      />

      <InfoCard
        label="Email Address"
        value={lead.email}
      />

      <InfoCard
        label="Phone Number"
        value={lead.phone}
      />

      <InfoCard
        label="Company"
        value={lead.company || "Not Provided"}
      />

      <Divider />

      {/* Project Details */}

      <SectionTitle>
        💼 Project Details
      </SectionTitle>

      <Badge>
        🌐 {lead.service}
      </Badge>

      <Badge>
        💰 {lead.budget}
      </Badge>

      <Badge>
        ⏳ {lead.timeline}
      </Badge>

      <Divider />

      {/* Message */}

      <SectionTitle>
        📝 Client Message
      </SectionTitle>

      <MessageBox
        message={lead.message}
      />

      <Spacer height={24} />

      {/* Quick Actions */}

      <SectionTitle>
        ⚡ Quick Actions
      </SectionTitle>

      <PrimaryButton
        href={`mailto:${lead.email}`}
      >
        Reply to Client
      </PrimaryButton>

      <Spacer height={12} />

      <PrimaryButton
        href={`tel:${lead.phone}`}
      >
        Call Client
      </PrimaryButton>

      <Divider />

      {/* Social Links */}

      <SocialLinks />

      <Divider />

      <Text style={smallText}>
        This notification was automatically generated from the
        <strong> Inkweb Studioz</strong> contact form.
      </Text>

    </EmailLayout>
  );
}