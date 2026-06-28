import { Section, Row, Column, Link, Img } from "@react-email/components";

const socials = [
  {
    href: "https://inkwebstudioz.com",
    src: "https://cdn-icons-png.flaticon.com/32/1006/1006771.png",
    alt: "Website",
  },
  {
    href: "https://linkedin.com/company/inkwebstudioz",
    src: "https://cdn-icons-png.flaticon.com/32/145/145807.png",
    alt: "LinkedIn",
  },
  {
    href: "https://instagram.com/inkwebstudioz",
    src: "https://cdn-icons-png.flaticon.com/32/2111/2111463.png",
    alt: "Instagram",
  },
  {
    href: "https://github.com/inkwebstudioz",
    src: "https://cdn-icons-png.flaticon.com/32/25/25231.png",
    alt: "GitHub",
  },
  {
    href: "https://behance.net/inkwebstudioz",
    src: "https://cdn-icons-png.flaticon.com/32/145/145799.png",
    alt: "Behance",
  },
];

export default function SocialLinks() {
  return (
    <Section style={{ textAlign: "center", padding: "16px 0" }}>
      <Row>
        {socials.map((s) => (
          <Column key={s.alt} style={{ textAlign: "center", width: "20%" }}>
            <Link href={s.href}>
              <Img
                src={s.src}
                alt={s.alt}
                width="30"
                height="30"
                style={{
                  display: "inline-block",
                  borderRadius: "8px",
                }}
              />
            </Link>
          </Column>
        ))}
      </Row>
    </Section>
  );
}