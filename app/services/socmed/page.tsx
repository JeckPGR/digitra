import { SocmedServiceContent } from "../../components/socmed-service-content";

export const metadata = {
  title: "Social Media Feeds - Digitra",
  description:
    "Detail layanan social media feeds Digitra untuk feed design, logo, brosur, dan visual campaign brand yang konsisten.",
  alternates: {
    canonical: "/services/socmed",
  },
};

export default function SocmedServicePage() {
  return <SocmedServiceContent />;
}
