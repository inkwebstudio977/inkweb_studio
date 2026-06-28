import {
  Section,
  Text,
} from "@react-email/components";

export default function MessageBox({
  message,
}) {
  return (
    <Section
      style={{
        backgroundColor: "#fafafa",
        border: "1px solid #e5e7eb",
        borderRadius: "12px",
        padding: "20px",
      }}
    >
      <Text
        style={{
          margin: 0,
          whiteSpace: "pre-wrap",
          lineHeight: 1.7,
          color: "#374151",
        }}
      >
        {message}
      </Text>
    </Section>
  );
}