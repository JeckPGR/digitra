import { ServicesContent } from "../components/services-content";

export const metadata = {
  title: "Jasa Website, Automation & Desain Logo - Digitra",
  description:
    "Layanan Digitra mencakup pembuatan website, GAS automation, company profile, landing page, jasa desain logo, brosur, poster, dan feeds Instagram profesional.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return <ServicesContent />;
}
