import dynamic from "next/dynamic";
import InvoiceComponent from "@/components/invoice/Invoice";

export const metadata = {
  title: "Services || HolidayAir",
  description: "HolidayAir",
};

const Invoice = () => {
  return (
    <>
      <InvoiceComponent />
    </>
  );
};

export default dynamic(() => Promise.resolve(Invoice), { ssr: false });
