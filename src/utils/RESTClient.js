import axios from 'axios';

const BASE_URL = 'https://hass.raulforamerica.com';
const BEARER_TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiI1NTdjYzgwMGUwZmY0OTJjODUwMWJmYzY3YmM1NjY1OCIsImlhdCI6MTYzOTg3ODMzNiwiZXhwIjoxOTU1MjM4MzM2fQ.071g8bVvqyk6lwQ9Awg6TxqVLELqeB2vKgdfvhMfLtU';

export { getStates };

function getStates() {
  const url = `${BASE_URL}/api/states`;
  return axios.get(url, { headers: { Authorization: `Bearer ${BEARER_TOKEN}` }}).then(response => response.data);
}