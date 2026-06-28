import { Text } from "@react-email/components";

import EmailLayout from "@/app/emails/layouts/emaillayout";

import SectionTitle from "@/app/emails/emcomponents/Sectiontitle";
import InfoCard from "@/app/emails/emcomponents/Infocard";
import Badge from "@/app/emails/emcomponents/badge";
import Divider from "@/app/emails/emcomponents/devider";
import PrimaryButton from "@/app/emails/emcomponents/button";
import Spacer from "@/app/emails/emcomponents/Spacer";
import SocialLinks from "@/app/emails/emcomponents/Sociallinks";

const paragraph = {
  color: "#374151",
  fontSize: "16px",
  lineHeight: "26px",
  margin: "0",
};

const smallText = {
  color: "#6b7280",
  fontSize: "13px",
  lineHeight: "22px",
  margin: "0",
};

export default function CustomerConfirmation({ lead }) {
  return (
    <EmailLayout preview={`We've received your inquiry, ${lead.name}! 🎉`}>

      <SectionTitle>
        👋 Hi {lead.name},
      </SectionTitle>

      <Text style={paragraph}>
        Thank you for contacting <strong>Inkweb Studioz</strong>.
      </Text>

      <Spacer height={12} />

      <Text style={paragraph}>
        We have successfully received your project inquiry.
        Our team will carefully review your requirements and
        get back to you within <strong>24 hours.</strong>
      </Text>

      <Divider />

      <SectionTitle>
        📋 Project Summary
      </SectionTitle>

      <InfoCard
        label="Selected Service"
        value={lead.service}
      />

      <Spacer height={12} />

      <Badge>
        💰 {lead.budget}
      </Badge>

      <Badge>
        ⏳ {lead.timeline}
      </Badge>

      <Divider />

      <SectionTitle>
        🚀 What Happens Next?
      </SectionTitle>

      <Text style={paragraph}>
        • Our team will review your project requirements.
      </Text>

      <Text style={paragraph}>
        • We will prepare the best solution for your business.
      </Text>

      <Text style={paragraph}>
        • You will receive a reply within 24 hours.
      </Text>

      <Spacer height={24} />

      <PrimaryButton
        href="https://inkwebstudioz.com"
      >
        Explore Inkweb Studioz →
      </PrimaryButton>

      <Spacer height={24} />

      <SocialLinks />

      <Divider />

      <Text style={smallText}>
        Need help?
        Simply reply to this email and our team will be happy to assist you.
      </Text>

      <Spacer height={10} />

      <Text style={smallText}>
        If you did not submit this inquiry, you can safely ignore this email.
      </Text>

    </EmailLayout>
  );
}