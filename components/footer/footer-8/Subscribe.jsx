"use client";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNotification } from "@/context/NotificationContext";
import Loader from "@/components/common/Loader";

const Subscribe = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { showSuccessNotification, showErrorNotification } = useNotification();

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setEmail("");
    setIsSubmitting(true);

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
    } finally {
      setIsSubmitting(false);
    }
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit(e);
    }
  };
  return (
    <div className="single-field relative d-flex justify-end items-center pb-30">
      <input
        className="bg-white rounded-8"
        type="email"
        placeholder={t("common:your-email")}
        required
        onChange={handleChange}
        value={email}
        onKeyDown={handleKeyDown}
      />
      <div className="absolute d-flex justify-center">
        {isSubmitting ? (
          <Loader height={20} width={20} className={"px-20"} />
        ) : (
          <button
            type="submit"
            onClick={handleSubmit}
            className="px-20 h-full text-15 fw-500 underline text-dark-1"
            disabled={isSubmitting}
          >
            {t("common:subscribe")}
          </button>
        )}
      </div>
    </div>
  );
};

export default Subscribe;
