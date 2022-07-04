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
  // Data Kepribadian
  const [dataKepribadian, setKepribadian] = React.useState({
    open: 0,
    con: 0,
    extra: 0,
    agree: 0,
    neuro: 0,
  });
  // Data Ketertarikan
  const [dataKetertarikan, setKetertarikan] = React.useState({
    traveling: 0,
    musik: 0,
    art: 0,
    sport: 0,
    game: 0,
    cooking: 0,
    beauty: 0,
    social: 0,
  });
  // Data Intolerant
  const [dataIntolerant, setIntolerant] = React.useState({
    intolerant: 0,
  });
  // Data Keahlian
  const [dataKeahlian, setKeahlian] = React.useState({
    findKeahlian: [
      {
        score: 0,
        job: {
          job_name: '',
        },
      },
      {
        score: 0,
        job: {
          job_name: '',
        },
      },
      {
        score: 0,
        job: {
          job_name: '',
        },
      },
      {
        score: 0,
        job: {
          job_name: '',
        },
      },
      {
        score: 0,
        job: {
          job_name: '',
        },
      },
    ],
  });

  // Axios
  React.useEffect(() => {
    Score();
    Experience();
    Sentimen();
    Kepribadian();
    Ketertarikan();
    Intolerant();
    Keahlian();
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

  // Get Kepribadian Use Axios
  const Kepribadian = async () => {
    await axios
      .post(`${baseUrl}kepribadian`, { idApplicant: applicantId })
      .then((res) => {
        if (res.status === 200) {
          setKepribadian(res.data.findKetertarikan);
          // console.log(res.data.findKetertarikan);
        } else {
          console.log(res.data.msg);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Get Ketertarikan Use Axios
  const Ketertarikan = async () => {
    await axios
      .post(`${baseUrl}ketertarikan`, { idApplicant: applicantId })
      .then((res) => {
        if (res.status === 200) {
          setKetertarikan(res.data.findKetertarikan);
          // console.log(res.data);
        } else {
          console.log(res.data.msg);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Get Intolerant Use Axios
  const Intolerant = async () => {
    await axios
      .post(`${baseUrl}intolerant`, { idApplicant: applicantId })
      .then((res) => {
        if (res.status === 200) {
          setIntolerant(res.data.findTolerant);
          // console.log(res.data.findTolerant);
        } else {
          console.log(res.data.msg);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // Get Keahlian Use Axios
  const Keahlian = async () => {
    await axios
      .post(`${baseUrl}keahlian`, { idApplicant: applicantId })
      .then((res) => {
        if (res.status === 200) {
          setKeahlian(res.data);
          console.log(res.data);
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
                  icon: <Iconify icon={'logos:whatsapp'} color="#1C9CEA" width={32} height={32} />,
                },
                {
                  name: 'Instagram',
                  url: dataScore.applicant.sosmed.instagram,
                  icon: <Iconify icon={'akar-icons:instagram-fill'} color="#1C9CEA" width={32} height={32} />,
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
                  data: [dataSentimen.sentimen[0].negative, dataSentimen.sentimen[0].positive],
                },
              ]}
              chartColors={[theme.palette.primary.main, theme.palette.chart.red[0]]}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={5}>
            <AppCurrentVisits
              title="Intolerant"
              chartData={[
                { label: 'Intolerant Score', value: dataIntolerant.intolerant },

                { label: 'Tolerant Score', value: 100 - dataIntolerant.intolerant },
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
              title="Kepribadian"
              // subheader="(+43%) than last year"
              chartData={[
                { label: 'Open', value: dataKepribadian.open },
                { label: 'Con', value: dataKepribadian.con },
                { label: 'Extra', value: dataKepribadian.extra },
                { label: 'Aggre', value: dataKepribadian.agree },
                { label: 'Neuro', value: dataKepribadian.neuro },
              ]}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={5}>
            <AppCurrentSubject
              title="Keahlian"
              chartLabels={[
                'UI/UX Designer',
                'Front-End Developer',
                'Back-End Developer',
                'Mobile Developer',
                'Database Administrator',
              ]}
              chartData={[
                {
                  name: 'Keahlian',
                  data: [
                    dataKeahlian.findKeahlian[0].score,
                    dataKeahlian.findKeahlian[1].score,
                    dataKeahlian.findKeahlian[2].score,
                    dataKeahlian.findKeahlian[3].score,
                    dataKeahlian.findKeahlian[4].score,
                  ],
                },
              ]}
              chartColors={[...Array(dataKeahlian)].map(() => theme.palette.text.secondary)}
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
                { label: 'Traveling', value: dataKetertarikan.traveling },
                { label: 'Musik', value: dataKetertarikan.musik },
                { label: 'Art', value: dataKetertarikan.art },
                { label: 'Sport', value: dataKetertarikan.sport },
                { label: 'Game', value: dataKetertarikan.game },
                { label: 'Cooking', value: dataKetertarikan.cooking },
                { label: 'Beauty', value: dataKetertarikan.beauty },
                { label: 'Social', value: dataKetertarikan.social },
              ]}
            />
          </Grid>
        </Grid>
      </Container>
      ;{/* })} */}
    </Page>
  );
}
