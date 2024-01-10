// pages/api/searchData.js

import CraneSearchAPI from 'https://book-pia.crane.aero/ibe/js/hitit-ui/1.0.0/searchapi.js';

export async function fetchData() {
  const api = new CraneSearchAPI('https://book-pia.crane.aero/ibe');

  // Fetch and return the data you need
  const portCodes = api.portCodes();
  const portNames = api.portNames();
  // Add more data fetching logic as needed

  return {
    portCodes,
    portNames,
    // Add more data as needed
  };
}
