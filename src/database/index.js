import axios from 'axios';

import { baseUrl } from '../constant';

const getAllJobs = async () => {
  let data = [];
  await axios.get(`${baseUrl}getAllJobs`).then((res) => {
    data = res.data.allJobs;
  });

  return data;
};

const Score = async () => {
  let data = [];
  await axios.post(`${baseUrl}score`).then((res) => {
    data = res.data.dataScore;
  });
  return data;
};

export { getAllJobs, Score };
