import CallToActions from "@/components/common/CallToActions";

import DefaultFooter from "@/components/footer/default";
import StepperBooking from "@/components/booking-page/stepper-booking";

export const metadata = {
  title: "Hotel Booking Page || HolidayAir",
  description: "HolidayAir",
};

const index = () => {
  return (
    <>
      {/* End Page Title */}

      <div className="header-margin"></div>
      {/* header top margin */}


      {/* End Header 1 */}

      <section className="pt-40 layout-pb-md">
        <div className="container">
          <StepperBooking />
        </div>
        {/* End container */}
      </section>
      {/* End stepper */}

      <CallToActions />
      {/* End Call To Actions Section */}

      <DefaultFooter />
    </>
  );
};

export default index;
