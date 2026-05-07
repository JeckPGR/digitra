import { ServiceDetailContent } from "../../components/service-detail-content";

export const metadata = {
  title: "Company Profile & Landing Page - Digitra",
  description:
    "Detail layanan website Company Profile dan Landing Page Digitra untuk menjelaskan bisnis, membangun trust, dan mengarahkan calon klien.",
};

export default function WebsiteServicePage() {
  return <ServiceDetailContent kind="website" />;
}
