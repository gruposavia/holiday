"use client";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNotification } from "@/context/NotificationContext";

const Subscribe = () => {
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
    <div className="single-field relative d-flex justify-end items-center pb-30">
      <input
        className="bg-white rounded-8"
        type="email"
        placeholder={t("common:your-email")}
        required
        onChange={handleChange}
        value={email}
      />
      <button
        type="submit"
        onClick={handleSubmit}
        className="absolute px-20 h-full text-15 fw-500 underline text-dark-1"
      >
        {t("common:subscribe")}
      </button>
    </div>
  );
};

export default Subscribe;
