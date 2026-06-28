import { Section } from "@react-email/components";

export default function Spacer({
  height = 24,
}) {
  return (
    <Section
      style={{
        height,
      }}
    />
  );
}