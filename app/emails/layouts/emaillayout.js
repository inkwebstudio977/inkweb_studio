import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Section,
} from "@react-email/components";

import Header from "../emcomponents/Header";
import Footer from "../emcomponents/Footer";
import Spacer from "../emcomponents/Spacer";

export default function EmailLayout({
  preview,
  children,
}) {
  return (
    <Html>
      <Head />

      <Preview>{preview}</Preview>

      <Body
        style={{
          margin: 0,
          padding: "40px 20px",
          backgroundColor: "#f3f4f6",
          fontFamily:
            "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif",
        }}
      >
        <Container
          style={{
            maxWidth: "620px",
            margin: "0 auto",
            backgroundColor: "#ffffff",
            borderRadius: "18px",
            overflow: "hidden",
            border: "1px solid #e5e7eb",
          }}
        >
          {/* Header */}

          <Header />

          {/* Content */}

          <Section
            style={{
              padding: "32px",
            }}
          >
            {children}
          </Section>

          <Spacer height={10} />

          {/* Footer */}

          <Footer />
        </Container>
      </Body>
    </Html>
  );
}