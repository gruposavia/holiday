"use client";
import { useEffect } from "react";
import { createContext, useContext, useState } from "react";
import { Toaster, toast } from "sonner";
import faker from "Faker";
import { useTranslation } from "react-i18next";
import getRandomRoutes from "@/utils/getRandomRoutes";

const getRandomMessageType = () => {
  const randomValue = Math.random();
  if (randomValue < 0.5) {
    return "membership-purchase";
  } else {
    return "fly-sell";
  }
};
const NotificationContext = createContext();

export const NotificationProvider = ({ children, locale }) => {
  const { t } = useTranslation();

  const [notification, setNotification] = useState(null);

  const hideNotification = () => {
    setNotification(false);
  };

  const routes = getRandomRoutes();

  const showNotification = (messageType) => {
    const passengerName = `${faker.Name.firstName()} ${faker.Name.lastName()}`;
    let message;
    let description;
    const getMembershipCategory = (locale) => {
      const types = {
        es: ["ORO", "BRONCE", "PLATA", "DIAMANTE"],
        en: ["GOLD", "BRONZE", "SILVER", "DIAMOND"],
      };
      const randomIndex = Math.floor(Math.random() * types[locale].length);
      return types[locale][randomIndex];
    };

    switch (messageType) {
      case "fly-sell":
        message = t("common:fly-sell-title", {
          passengerName,
          route1: routes[0],
          route2: routes[1],
        });
        description = t("common:fly-sell-description");
        break;

      case "membership-purchase":
        const membershipType = getMembershipCategory(locale);
        message = t("common:membership-purchase-title", {
          passengerName,
          membershipType,
        });
        description = t("common:membership-purchase-description");
        break;

      default:
        return;
    }
    toast.message(message, {
      description,
      duration: 5000,
      position: "bottom-right",
      duration: 7000,
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      showNotification(getRandomMessageType());
    }, 40000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const showSuccessNotification = () => {
    toast.success(t("common:sent-success"), {
      duration: 7000,
      position: "top-right",
    });
  };
  const showErrorNotification = () => {
    toast.error(t("common:sent-error"), {
      duration: 7000,
      position: "top-right",
    });
  };

  const contextValue = {
    notification,
    showNotification,
    hideNotification,
    showErrorNotification,
    showSuccessNotification,
  };
  return (
    <NotificationContext.Provider value={contextValue}>
      {children}
      <Toaster richColors />
    </NotificationContext.Provider>
  );
};

export const useNotification = () => {
  return useContext(NotificationContext);
};
