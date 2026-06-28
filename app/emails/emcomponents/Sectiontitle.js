import { Heading } from "@react-email/components";

export default function SectionTitle({ children }) {
  return (
    <Heading as="h2" style={{
      fontSize: "17px",
      fontWeight: "700",
      color: "#0f172a",
      marginBottom: "16px",
      marginTop: "0",
    }}>
      {children}
    </Heading>
  );
}