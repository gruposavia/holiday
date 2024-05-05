"use client";
import React, { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useNotification } from "@/context/NotificationContext";
import evaluateErrors from "@/utils/flySearchErrors";
import { DateObject } from "react-multi-date-picker";

const FlightServiceContext = createContext();

export const buildDate = (date) => `${date.day}.${date.month}.${date.year}`;

export const FlightServiceProvider = ({ children }) => {
  const router = useRouter();
  const { showFlyErrorNotification } = useNotification();
  const [flightData, setFlightData] = useState([]);
  const [departure, setDeparture] = useState(undefined);

  const [destination, setDestination] = useState(undefined);
  const [availableDestinations, setAvailableDestination] = useState([]);
  const [loadingFlightData, setLoadingFlightData] = useState(false);
  const [loadingDestination, setLoadingDestination] = useState(false);
  const [loadingSearch, setloadingSearch] = useState(false);

  const fetchFlightData = async () => {
    try {
      setLoadingFlightData(true);
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_HITIT_URL}search/portGroups`
      );
      const data = await response.json();
      let idCounter = 1;

      const flightsData = Object.entries(data).flatMap(([country, cities]) =>
        cities.map(({ cityName, code }) => ({
          id: idCounter++,
          name: cityName,
          code,
        }))
      );
      setFlightData(flightsData);
      setLoadingFlightData(false);
    } catch (error) {
      console.error("Error fetching flight data:", error);
      setLoadingFlightData(false);
    }
  };

  const fetchDestinationFrom = async () => {
    try {
      setLoadingDestination(true);
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_HITIT_URL}search/portGroupsByCountry/${departure.code}`
      );
      const data = await response.json();

      const transformData = (data) => {
        let flightsData = [];
        let id = 1;

        data.forEach((countryData) => {
          for (let countryName in countryData) {
            countryData[countryName].forEach((city) => {
              flightsData.push({
                id: id++,
                name: city.cityName,
                code: city.code,
              });
            });
          }
        });

        return flightsData;
      };
      setAvailableDestination(transformData(data));
      setLoadingDestination(false);
    } catch (error) {
      console.error("Error fetching destination data:", error);
      setLoadingDestination(false);
    }
  };
  useEffect(() => {
    fetchFlightData();
  }, []);

  useEffect(() => {
    if (departure && departure.code) fetchDestinationFrom();
  }, [departure]);

  const getFlightData = () => {
    return flightData;
  };
  const setDepartureLocation = (location) => {
    setDeparture(location);
  };
  const setDestinationLocation = (location) => {
    setDestination(location);
  };
  const searchFlights = async (
    flyingFrom,
    flyingTo,
    departDate,
    returnDate,
    guestCounts
  ) => {
    setloadingSearch(true);
    const today = new DateObject();
    try {
      const flyErrors = evaluateErrors(
        flyingFrom,
        flyingTo,
        departDate,
        returnDate,
        today
      );
      if (flyErrors.hasErrors) {
        Object.entries(flyErrors.errors).forEach(([key, value]) => {
          if (value) {
            switch (key) {
              case "flyingFrom":
                showFlyErrorNotification("fly-complete-search:flyingFrom");
                setloadingSearch(false);
                break;
              case "flyingTo":
                showFlyErrorNotification("fly-complete-search:flyingTo");
                setloadingSearch(false);
                break;
              case "returnBeforeDepart":
                showFlyErrorNotification(
                  "fly-complete-search:returnBeforeDepart"
                );
                setloadingSearch(false);
                break;
              case "equalLocations":
                showFlyErrorNotification("fly-complete-search:equalLocations");
                setloadingSearch(false);
                break;
              case "departDatePast":
                showFlyErrorNotification("fly-complete-search:departDatePast");
                setloadingSearch(false);
                break;
              case "returnDatePast":
                showFlyErrorNotification("fly-complete-search:returnDatePast");
                setloadingSearch(false);
                break;
              default:
                break;
            }
          }
        });
        return;
      }

      const routeSearch = `${
        process.env.NEXT_PUBLIC_HITIT_URL
      }availability?tripType=ROUND_TRIP&depPort=${flyingFrom}&arrPort=${flyingTo}&departureDate=${buildDate(
        departDate
      )}&returnDate=${buildDate(returnDate)}&adult=${guestCounts.adult}&child=${
        guestCounts.child
      }&infant=${
        guestCounts.infant
      }&cabinClas=ECONOMY&currency=USD&language=EN`;
      router.push(routeSearch);
    } catch (error) {
      console.error("Error searching flights:", error);
      setloadingSearch(false);
    }
  };

  const getAvailableFlightDates = async (depCode, desCode) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_HITIT_URL}search/availableFlightDates?depPort=${depCode}&arrPort=${desCode}&startDate=05.05.2024&endDate=30.04.2025`
      );
      const data = await response.json();

      const dateObjectsArray = data.availableDates?.map((dateString) => {
        const [day, month, year] = dateString.split("."); // Dividimos la cadena de texto en día, mes y año
        return new DateObject({
          year: parseInt(year),
          month: parseInt(month),
          day: parseInt(day),
        });
      });
      return dateObjectsArray;
    } catch (error) {
      console.error("Error fetching available flight dates data:", error);
    }
  };

  const values = {
    availableDestinations,
    setDepartureLocation,
    getFlightData,
    departure,
    loadingDestination,
    loadingFlightData,
    searchFlights,
    loadingSearch,
    getAvailableFlightDates,
    destination,
    setDestinationLocation,
  };

  return (
    <FlightServiceContext.Provider value={values}>
      {children}
    </FlightServiceContext.Provider>
  );
};

export const useFlightService = () => {
  return useContext(FlightServiceContext);
};
