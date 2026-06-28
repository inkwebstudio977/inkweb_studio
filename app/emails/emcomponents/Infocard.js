import { Section, Text } from "@react-email/components";

export default function InfoCard({ label, value }) {
  return (
    <Section style={{
      border: "1px solid #e2e8f0",
      borderRadius: "10px",
      padding: "14px 16px",
      marginBottom: "12px",
      backgroundColor: "#f8fafc",
    }}>
      <Text style={{ margin: 0, color: "#64748b", fontSize: "11px", fontWeight: "600", textTransform: "uppercase", letterSpacing: "0.5px" }}>
        {label}
      </Text>
      <Text style={{ margin: "4px 0 0", color: "#0f172a", fontSize: "15px", fontWeight: "600" }}>
        {value}
      </Text>
    </Section>
  );
}