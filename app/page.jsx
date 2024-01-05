import Wrapper from "@/components/layout/Wrapper";
import MainHome from "./(homes)/home_10/page";

export const metadata = {
  title: "Home || HolidayAir",
  description: "HolidayAir",
};

export default function Home() {
  return (
    <>
      <Wrapper>
        <MainHome />
      </Wrapper>
    </>
  );
}
