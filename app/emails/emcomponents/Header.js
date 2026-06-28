import { Section, Row, Column, Img, Text } from "@react-email/components";

export default function Header() {
  return (
    <>
      <Section style={{ backgroundColor: "#0f172a", padding: "32px 30px", textAlign: "center" }}>
        <Row>
          <Column style={{ textAlign: "center" }}>
            <Img
              src="http://localhost:3000/images/logo.png"
              width="52"
              height="52"
              alt="Inkweb Studioz logo"
              style={{ display: "inline-block", borderRadius: "12px", marginBottom: "12px" }}
            />
            <Text style={{ color: "#ffffff", margin: 0, fontSize: "22px", fontWeight: "700", letterSpacing: "0.5px" }}>
              INKWEB STUDIOZ
            </Text>
            <Text style={{ color: "#94a3b8", margin: "4px 0 0", fontSize: "13px", letterSpacing: "1px" }}>
              DIGITAL STUDIO
            </Text>
            <Text style={{ color: "#94a3b8", margin: "6px 0 0", fontSize: "14px" }}>
              Building Modern Digital Experiences
            </Text>
          </Column>
        </Row>
      </Section>
      {/* Blue accent bar */}
      <Section style={{ backgroundColor: "#3b82f6", height: "4px", padding: 0 }}>
        <Text style={{ margin: 0, fontSize: "1px", lineHeight: "4px" }}>&nbsp;</Text>
      </Section>
    </>
  );
}