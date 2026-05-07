import { ServiceDetailContent } from "../../components/service-detail-content";

export const metadata = {
  title: "GAS Web Business Developer - Digitra",
  description:
    "Detail layanan GAS Web Business Developer Digitra untuk dashboard, workflow, approval, reporting, dan automation berbasis Google Apps Script.",
};

export default function GasServicePage() {
  return <ServiceDetailContent kind="gas" />;
}
