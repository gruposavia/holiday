
'use client'
import React, { useEffect, useState } from 'react';
import { Tabs, TabPanel } from "react-tabs";
import './styles.css';
import ReactMarkdown from 'react-markdown';
import { useTranslation } from 'react-i18next';
import Loader from './Loader'

const LuggageContent = ({ locale }) => {
  const [baggageContent, setBaggageContent] = useState();
  const [loading, setLoading] = useState(true);
  const { t } = useTranslation();

  useEffect(() => {
    const fetchPrivacyTerms = async () => {
      try {
        const response = await fetch(`/api/getLuggageContent?locale=${locale}`);
        const data = await response.json();
        setBaggageContent(data.baggage);
      } catch (error) {
        console.error('Error fetching privacy terms:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPrivacyTerms();
  }, [locale]);

  if (loading && locale) {
    return (
      <Loader />
    );
  }

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

export default LuggageContent;
