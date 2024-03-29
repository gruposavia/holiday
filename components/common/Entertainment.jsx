"use client";
import React, { useEffect, useState } from "react";
import { Tabs, TabPanel } from "react-tabs";
import "./styles.css";
import ReactMarkdown from "react-markdown";

import Loader from "./Loader";

const Entertainment = ({ locale }) => {
  const [entertainmentContent, setEntertainmentContent] = useState();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPrivacyTerms = async () => {
      try {
        const { token } = await fetch("/api/getAuthToken").then((response) =>
          response.json()
        );
        if (!token) {
          throw new Error("Authentication token not received");
        }
        const response = await fetch(
          `/api/getEntertainmentContent?locale=${locale}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            credentials: "include",
          }
        );
        const data = await response.json();
        setEntertainmentContent(data.entertainment);
      } catch (error) {
        console.error("Error fetching privacy terms:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPrivacyTerms();
  }, [locale]);

  if (loading && locale) {
    return <Loader />;
  }

  return (
    locale && (
      <Tabs>
        <div className="d-flex justify-center">
          {/* End .col-lg-3 */}
          <div className="col-lg-9">
            <TabPanel>
              <div className="tabs__content js-tabs-content" data-aos="fade">
                <ReactMarkdown className="markdownBaggage">
                  {entertainmentContent}
                </ReactMarkdown>
              </div>
            </TabPanel>
            {/* End  Privacy policy */}
          </div>
          {/* End col-lg-9 */}
        </div>
      </Tabs>
    )
  );
};

export default Entertainment;
