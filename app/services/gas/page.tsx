import { ServiceDetailContent } from "../../components/service-detail-content";

export const metadata = {
  title: "GAS Web Business Application - Digitra",
  description:
    "Detail layanan GAS Web Business Application Digitra untuk dashboard, workflow, approval, reporting, dan automation berbasis Google Apps Script.",
  alternates: {
    canonical: "/services/gas",
  },
};

export default function GasServicePage() {
  return <ServiceDetailContent kind="gas" />;
}
