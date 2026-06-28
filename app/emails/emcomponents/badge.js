import { Text } from "@react-email/components";

export default function Badge({ children }) {
  return (
    <Text style={{
      display: "inline-block",
      backgroundColor: "#eff6ff",
      color: "#1d4ed8",
      border: "1px solid #bfdbfe",
      padding: "6px 14px",
      borderRadius: "999px",
      fontSize: "12px",
      fontWeight: "600",
      marginRight: "8px",
      marginBottom: "8px",
    }}>
      {children}
    </Text>
  );
}