"use client";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNotification } from "@/context/NotificationContext";

const CallToActions = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const { showSuccessNotification, showErrorNotification } = useNotification();
  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setEmail("");
    try {
      const { token } = await fetch("/api/getAuthToken").then((response) =>
        response.json()
      );
      if (!token) {
        throw new Error("Authentication token not received");
      }
      const response = await fetch("/api/mail", {
        method: "POST",
        body: JSON.stringify({
          type: "newsletter",
          email: email,
        }),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        credentials: "include",
      });

      if (response.status === 200) {
        showSuccessNotification();
      } else {
        showErrorNotification();
      }
    } catch (error) {
      console.error("Error sending newsletter:", error);
      showErrorNotification();
    }
  };

  return (
    <section className="layout-pt-md layout-pb-md bg-dark-2">
      {/* <Toaster position="top-right" richColors /> */}
      <div className="container">
        <div className="row y-gap-30 justify-between items-center">
          <div className="col-auto">
            <div className="row y-gap-20 flex-wrap items-center">
              <div className="col-auto">
                <div className="icon-newsletter text-60 sm:text-40 text-white" />
              </div>
              <div className="col-auto">
                <h4 className="text-26 text-white fw-600">
                  {t("common:call-to-action-title")}
                </h4>
                <div className="text-white">
                  {t("common:call-to-action-subtitle")}
                </div>
              </div>
            </div>
          </div>

          <div className="col-auto">
            <div className="single-field -w-410 d-flex x-gap-10 y-gap-20">
              <input
                onChange={handleChange}
                className="bg-white h-60"
                required
                type="email"
                value={email}
                placeholder={t("common:your-email")}
              />
              <button
                className="button -md h-60 bg-blue-1 text-white"
                onClick={handleSubmit}
              >
                {t("common:subscribe")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActions;
