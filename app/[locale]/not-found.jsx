import dynamic from "next/dynamic";

import NotFoundScreen from "@/components/notFound/NotFoundScreen";
export const metadata = {
  title: "404 || HolidayAir",
  description: "HolidayAir",
};
const index = async ({params}) => {

  console.log('ESTOY CAACACACACACA CUANDO FALLA')
  return (
    <NotFoundScreen/>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
