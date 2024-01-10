
'use client'

import Flights from "@/components/flight/Flights";
import Link from "next/link";
import { useTranslation } from 'react-i18next';

export default function FlightsSection() {
    const { t } = useTranslation()
  return (
    <div className="container">
          <div className="row y-gap-20 justify-between items-end">
            <div className="col-auto">
              <div className="sectionTitle -md">
                <h2 className="sectionTitle__title">{t(`flights:title`)}</h2>
                <p className=" sectionTitle__text mt-5 sm:mt-0">
                {t(`flights:subtitle`)}
                </p>
              </div>
            </div>
            {/* End .col */}

            <div className="col-auto">
              <Link
                href="/flight-list-v1"
                className="button -md -blue-1 bg-blue-1-05 text-blue-1"
              >
                More <div className="icon-arrow-top-right ml-15" />
              </Link>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}

          <div className="row y-gap-30 pt-40 sm:pt-20">
            <Flights />
          </div>
          {/* End .row */}
        </div>
  )
}
