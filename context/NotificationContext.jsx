"use client";
import { useEffect } from "react";
import { createContext, useContext, useState } from "react";
import { Toaster, toast } from "sonner";
import faker from "faker";
import { useTranslation } from "react-i18next";
import getRandomRoutes from "@/utils/getRandomRoutes";

const NotificationContext = createContext();

export const NotificationProvider = ({ children }) => {
  const { t } = useTranslation();

  const [notification, setNotification] = useState(null);

  const hideNotification = () => {
    setNotification(false);
  };

  const routes = getRandomRoutes();

  const showNotification = () => {
    const passengerName = `${faker.Name.firstName()} ${faker.Name.lastName()}`;
    toast.message(
      t("common:fly-sell-title", {
        passengerName,
        route1: routes[0],
        route2: routes[1],
      }),
      {
        description: `${t("common:fly-sell-description")}`,
        duration: 5000,
        position: "bottom-left",
      }
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      showNotification();
    }, 20000);
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
