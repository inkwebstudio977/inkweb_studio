import { Section, Text, Link } from "@react-email/components";

export default function Footer() {
  return (
    <Section style={{ backgroundColor: "#f8fafc", padding: "28px 32px", textAlign: "center", borderTop: "1px solid #e2e8f0" }}>
      <Text style={{ margin: 0, color: "#0f172a", fontWeight: "700", fontSize: "15px" }}>
        Inkweb Studioz
      </Text>
      <Text style={{ color: "#64748b", fontSize: "13px", margin: "4px 0" }}>
        Building Modern Digital Experiences
      </Text>
      <Link href="https://inkwebstudioz.netlify.app" style={{ color: "#3b82f6", fontSize: "13px" }}>
        www.inkwebstudioz.netlify.app
      </Link>
      <Text style={{ color: "#94a3b8", fontSize: "11px", marginTop: "14px" }}>
        © 2026 Inkweb Studioz. All Rights Reserved.
      </Text>
    </Section>
  );
}