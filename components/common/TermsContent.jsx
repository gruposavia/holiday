
'use client'
import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import getPrivacy from '@lib/getPrivacy'
import ReactMarkdown from 'react-markdown';

const TermsContent = ({locale}) => {
  const [privacyTerms, setPrivacyTerms] = useState('');

  useEffect(() => {
    const fetchPrivacyTerms = async () => {
      try {
        const response = await getPrivacy(locale);
        console.log("🚀 ~ fetchPrivacyTerms ~ response:", response)

      } catch (error) {
        console.error('Error fetching privacy terms:', error);
      }
    };

    fetchPrivacyTerms();
  }, [locale]);
  return (
    <Tabs>
      <div className="row y-gap-30">
        <div className="col-lg-3">
          <div className="px-30 py-30 rounded-4 border-light">
            <TabList className="tabs__controls row y-gap-10 js-tabs-controls">
              <Tab className="col-12 tabs__button js-tabs-button">
                General Terms of Use
              </Tab>
              <Tab className="col-12 tabs__button js-tabs-button">
                Privacy policy
              </Tab>
            </TabList>
          </div>
        </div>
        {/* End .col-lg-3 */}

        <div className="col-lg-9">
          <TabPanel>
            <div className="tabs__content js-tabs-content" data-aos="fade">
              <h1 className="text-30 fw-600 mb-15">General Terms of Use</h1>
               
            </div>
          </TabPanel>
          {/* End  General Terms of Use */}

          <TabPanel>
            <div className="tabs__content js-tabs-content" data-aos="fade">

              <ReactMarkdown>{privacyTerms}</ReactMarkdown>

            </div>
          </TabPanel>
          {/* End  Privacy policy */}
        </div>
        {/* End col-lg-9 */}
      </div>
    </Tabs>
  );
};

export default TermsContent;
