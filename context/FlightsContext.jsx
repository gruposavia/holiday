"use client";

import React, { createContext, useContext, useState } from "react";

const flightsData = [
  {
    id: 1,
    name: "Miami",
    code: "MIA",
    destinations: ["EZE", "PUJ"],
  },
  {
    id: 2,
    name: "Orlando",
    code: "MCO",
    destinations: ["EZE", "PUJ"],
  },
  {
    id: 3,
    name: "Buenos Aires",
    code: "EZE",
    destinations: ["MIA", "MCO"],
  },
  {
    id: 4,
    name: "Punta Cana",
    code: "PUJ",
    destinations: ["MIA", "MCO"],
  },
];

const FlightsContext = createContext();

export const FlightsProvider = ({ children }) => {
  const [departure, setDeparture] = useState(undefined);

  const setDepartureLocation = (location) => {
    setDeparture(location);
  };

  const getAvailableDestinations = () => {
    const selectedFlight =
      departure && flightsData.find((flight) => flight.code === departure.code);
    return (
      (selectedFlight &&
        flightsData.filter((flight) => {
          return selectedFlight.destinations.includes(flight.code);
        })) ||
      []
    );
  };

  return (
    <FlightsContext.Provider
      value={{
        departure,
        setDepartureLocation,
        getAvailableDestinations,
        flightsData,
      }}
    >
      {children}
    </FlightsContext.Provider>
  );
};

export const useFlights = () => {
  return useContext(FlightsContext);
};
