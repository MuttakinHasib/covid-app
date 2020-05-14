import axios from 'axios';

const API_1 = 'https://covid19.mathdro.id/api';
const API_2 = 'https://disease.sh/v2';
export const globalData = async () => {
  const {
    data: {todayCases, cases, recovered, deaths, updated},
  } = await axios.get(`${API_2}/all`);

  const data = {
    confirmed: cases,
    recovered,
    deaths,
    todayCases,
    updated,
  };
  return data;
};

export const countryData = async () => {
  const {data} = await axios.get(`${API_2}/countries`);
  return data;
};
export const staticData = async () => {
  const {
    data: {
      country,
      countryInfo,
      cases,
      recovered,
      deaths,
      critical,
      todayCases,
      todayDeaths,
      updated,
    },
  } = await axios.get(`${API_2}/countries/BD`);
  const data = {
    country,
    flag: countryInfo.flag,
    confirmed: cases,
    recovered,
    deaths,
    critical,
    todayCases,
    todayDeaths,
    updated,
  };
  return data;
};
