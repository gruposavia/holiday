
'use client'
import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import './styles.css';
import ReactMarkdown from 'react-markdown';
import { useTranslation } from 'react-i18next';

const BaggageContent = ({locale}) => {
  const [baggageContent, setBaggageContent] = useState();

  const { t } = useTranslation()

  useEffect(() => {
    const fetchPrivacyTerms = async () => {
      try {
        const response = await fetch(`/api/getBaggageContent?locale=${locale}`);
        const data = await response.json();
        setBaggageContent(data.baggage)
      } catch (error) {
        console.error('Error fetching privacy terms:', error);
      }
    };
    fetchPrivacyTerms();
  }, [locale]);

  return (
    locale && <Tabs>
      <div className="d-flex justify-center">
        {/* End .col-lg-3 */}
        <div className="col-lg-9">
          <TabPanel>
            <div className="tabs__content js-tabs-content" data-aos="fade">
              <ReactMarkdown className='markdownBaggage'>{baggageContent}</ReactMarkdown>
            </div>
          </TabPanel>
          {/* End  Privacy policy */}
        </div>
        {/* End col-lg-9 */}
      </div>
    </Tabs>
  );
};

export default BaggageContent;
