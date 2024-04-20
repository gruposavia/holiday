"use client";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNotification } from "@/context/NotificationContext";
import Loader from "@/components/common/Loader";

const ContactForm = () => {
  const { t } = useTranslation();
  const { showSuccessNotification, showErrorNotification } = useNotification();
  const [isSubmitting, setIsSubmitting] = useState(false);
  console.log("🚀 ~ ContactForm ~ isSubmitting:", isSubmitting);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
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
          type: "contact",
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          name: formData.name,
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
  return (
    <form className="row y-gap-20 pt-20" onSubmit={handleSubmit}>
      {/* <Toaster position="top-right" richColors /> */}
      {["name", "email", "subject"].map((field) => (
        <div key={field} className="col-12">
          <div className="form-input">
            <input
              type={field === "email" ? "email" : "text"}
              id={field}
              required
              name={field}
              value={formData[field]}
              onChange={handleChange}
            />
            <label htmlFor={field} className="lh-1 text-16 text-light-1">
              {t(`contact:form-${field}`)}
            </label>
          </div>
        </div>
      ))}
      <div className="col-12">
        <div className="form-input">
          <textarea
            id="message"
            required
            rows="4"
            name="message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <label htmlFor="message" className="lh-1 text-16 text-light-1">
            {t("contact:form-request-message")}
          </label>
        </div>
      </div>
      <div className="col-auto  ">
        {isSubmitting ? (
          <Loader
            height={20}
            width={20}
            className={
              "d-flex justify-center px-24 h-50 -dark-1 bg-blue-1 button"
            }
          />
        ) : (
          <button
            type="submit"
            className="button text-white d-flex justify-center px-24 h-50 -dark-1 bg-blue-1"
          >
            {t("contact:form-send-button")}
            <div className="icon-arrow-top-right ml-15"></div>
          </button>
        )}
      </div>
    </form>
  );
};

export default ContactForm;
