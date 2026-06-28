import { Img } from "@react-email/components";

export default function Logo() {
  return (
    <Img
      src="https://your-domain.com/email/logo.png"
      width="52"
      height="52"
      alt="Inkweb Studioz"
      style={{ borderRadius: "12px", display: "block", margin: "0 auto" }}
    />
  );
}