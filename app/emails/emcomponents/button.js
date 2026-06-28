import { Button } from "@react-email/components";

export default function PrimaryButton({ href, children }) {
  return (
    <Button href={href} style={{
      backgroundColor: "#3b82f6",
      color: "#ffffff",
      padding: "13px 24px",
      borderRadius: "10px",
      fontWeight: "600",
      fontSize: "14px",
      display: "inline-block",
      textDecoration: "none",
    }}>
      {children}
    </Button>
  );
}