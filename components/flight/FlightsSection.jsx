"use client";
import { useState } from "react";
import Flights from "@/components/flight/Flights";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { DateObject } from "react-multi-date-picker";
import { useRouter } from "next/navigation";

export const buildDate = (date) => `${date.day}.${date.month}.${date.year}`;

export default function FlightsSection() {
  const { t } = useTranslation();
  const router = useRouter();
  const today = new DateObject();

  const [departDate] = useState(today);
  const [returnDate] = useState(new DateObject().set(today).add(7, "days"));
  const handleSelect = (from, to) => {
    const routeSearch = `${
      process.env.NEXT_PUBLIC_HITIT_URL
    }availability?tripType=ROUND_TRIP&depPort=${from}&arrPort=${to}&departureDate=${buildDate(
      departDate
    )}&returnDate=${buildDate(
      returnDate
    )}&adult=1&child=1&infant=1&cabinClas=ECONOMY&currency=USD&language=en`;
    return router.push(routeSearch);
  };
  return (
    <div className="container">
      <div className="row y-gap-20 justify-between items-end">
        <div className="col-auto">
          <div className="sectionTitle -md">
            <h2 className="sectionTitle__title">{t(`flights:title`)}</h2>
            {/* <p className=" sectionTitle__text mt-5 sm:mt-0">
                {t(`flights:subtitle`)}
                </p> */}
          </div>
        </div>
        {/* End .col */}
      </div>
      {/* End .row */}

      <div className="row y-gap-30 pt-40 sm:pt-20">
        <Flights onSelected={(from, to) => handleSelect(from, to)} t={t}/>
      </div>
      {/* End .row */}
    </div>
  );
}
