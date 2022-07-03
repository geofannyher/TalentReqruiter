import React from 'react';

import { faker } from '@faker-js/faker';
// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';

// use params
import { useParams } from 'react-router-dom';

// components
import Page from '../components/Page';
import Iconify from '../components/Iconify';
// sections
import {
  AppTasks,
  AppNewsUpdate,
  AppOrderTimeline,
  AppCurrentVisits,
  AppWebsiteVisits,
  AppTrafficBySite,
  AppWidgetSummary,
  AppCurrentSubject,
  AppConversionRates,
  AppWidgetWinter,
} from '../sections/@dashboard/app';
// Base Url API Heroku
import { baseUrl } from '../constant';

const axios = require('axios').default;

// ----------------------------------------------------------------------

export default function Detail() {
  const theme = useTheme();

  // Get Params
  const { jobId, applicantId } = useParams();
  // Data Score
  const [dataScore, setScore] = React.useState({
    score: 0,
    applicant: {
      name: '',
      location: '',
      sosmed: [
        {
          id_sosmed: 0,
          id_applicant: 0,
          twitter: ' ',
          instagram: ' ',
          linkedin: ' ',
          gmail: ' ',
          github: ' ',
          whatsapp: '',
        },
      ],
    },
    job: {
      job_name: '',
    },
  });
  /// Data Experience
  const [dataExperience, setExperience] = React.useState([]);
  // Data Sentimen
  const [dataSentimen, setSentimen] = React.useState({
    sentimen: [
      {
        positive: 0,
        negative: 0,
      },
    ],
  });

  // Axios
  React.useEffect(() => {
    Score();
    Experience();
    Sentimen();
  }, {});

  // Get Score Use Axios
  const Score = async () => {
    await axios
      .post(`${baseUrl}score`, { idApplicant: applicantId, idJob: jobId })
      .then((res) => {
        if (res.status === 200) {
          setScore(res.data.findScore);
        } else {
          console.log(res.data.msg);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Get Experience Use Axios
  const Experience = async () => {
    await axios
      .post(`${baseUrl}experience`, { idApplicant: applicantId })
      .then((res) => {
        if (res.status === 200) {
          setExperience(res.data.findApplicant);
          // console.log(res.data.findApplicant);
        } else {
          console.log(res.data.msg);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Get Sentimen Use Axios
  const Sentimen = async () => {
    await axios
      .post(`${baseUrl}sentimen`, { idApplicant: applicantId })
      .then((res) => {
        if (res.status === 200) {
          setSentimen(res.data.findSentimen);
          // console.log(res.data.findSentimen);
        } else {
          console.log(res.data.msg);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Page title="Dashboard">
      {/* {dataScore.splice((val, index) => { */}
      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Detail User
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={8} sm={6} md={3}>
            <AppWidgetWinter
              name={dataScore.applicant.name}
              location={dataScore.applicant.location}
              role={dataScore.job.job_name}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Score" total={dataScore.score} color="info" icon={'ant-design:user-filled'} />
          </Grid>

          <Grid item xs={8} md={6} lg={4}>
            <AppTrafficBySite
              title="Identitas Diri"
              list={[
                {
                  name: 'FaceBook',
                  url: dataScore.applicant.sosmed.github,
                  icon: <Iconify icon={'eva:facebook-fill'} color="#1877F2" width={32} height={32} />,
                },
                {
                  name: 'Google',
                  url: dataScore.applicant.sosmed.gmail,
                  icon: <Iconify icon={'eva:google-fill'} color="#DF3E30" width={32} height={32} />,
                },
                {
                  name: 'Linkedin',
                  url: dataScore.applicant.sosmed.linkedin,
                  icon: <Iconify icon={'eva:linkedin-fill'} color="#006097" width={32} height={32} />,
                },
                {
                  name: 'Twitter',
                  url: dataScore.applicant.sosmed.twitter,
                  icon: <Iconify icon={'eva:twitter-fill'} color="#1C9CEA" width={32} height={32} />,
                },
                {
                  name: 'Whatsapp',
                  url: dataScore.applicant.sosmed.whatsapp,
                  icon: <Iconify icon={'eva:twitter-fill'} color="#1C9CEA" width={32} height={32} />,
                },
                {
                  name: 'Instagram',
                  url: dataScore.applicant.sosmed.instagram,
                  icon: <Iconify icon={'eva:instagram-fill'} color="#1C9CEA" width={32} height={32} />,
                },
              ]}
            />
          </Grid>
          <Grid item xs={4} md={6} lg={5}>
            <AppWebsiteVisits
              title="Analisis Sentimen"
              subheader="Data diambil berdasarkan keaktifan comentar pada media sosial"
              chartLabels={['Negatif', 'Positif']}
              chartData={[
                {
                  name: 'Team A',
                  type: 'column',
                  fill: 'solid',

                  data: [5, 1],
                },
              ]}
              chartColors={[theme.palette.primary.main, theme.palette.chart.red[0]]}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={5}>
            <AppCurrentVisits
              title="Sentiment"
              chartData={[
                { label: 'Intolerant Score', value: 1 },
                { label: 'Tolerant Score', value: 2 },
              ]}
              chartColors={[
                theme.palette.primary.main,
                theme.palette.chart.red[0],
                theme.palette.chart.violet[0],
                theme.palette.chart.yellow[0],
              ]}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={5}>
            <AppConversionRates
              title="Conversion Rates"
              // subheader="(+43%) than last year"
              chartData={[
                { label: 'Openess', value: 20 },
                { label: 'Conscientiousness', value: 40 },
                { label: 'Extraversion', value: 60 },
                { label: 'Agreeableness', value: 80 },
                { label: 'Neuroticism', value: 10 },
              ]}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={5}>
            <AppCurrentSubject
              title="Keahlian"
              chartLabels={['Agile', 'UI/UX Designer', 'Web Development', 'Mobile Dev', 'Software Testing', 'Scrum']}
              chartData={[
                { name: 'Term Frequency', data: [80, 50, 30, 40, 100, 20] },
                { name: 'Index Freqency', data: [20, 30, 40, 80, 20, 80] },
                { name: 'TF/IDF', data: [44, 76, 78, 13, 43, 10] },
              ]}
              chartColors={[...Array(6)].map(() => theme.palette.text.secondary)}
            />
          </Grid>

          {/* Experience */}
          <Grid item xs={12} md={6} lg={5}>
            <AppNewsUpdate title="Experience" list={dataExperience} />
          </Grid>
          {/* Akhir Experience */}

          <Grid item xs={12} md={6} lg={5}>
            <AppConversionRates
              title="Ketertarikan"
              // subheader="(+43%) than last year"
              chartData={[
                { label: 'Traveling', value: 20 },
                { label: 'Musik', value: 40 },
                { label: 'Art', value: 60 },
                { label: 'Sport', value: 80 },
                { label: 'Game', value: 10 },
                { label: 'Cooking', value: 10 },
                { label: 'Beauty', value: 10 },
                { label: 'Social', value: 10 },
              ]}
            />
          </Grid>
        </Grid>
      </Container>
      ;{/* })} */}
    </Page>
  );
}
