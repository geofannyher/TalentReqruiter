// @mui
import PropTypes from 'prop-types';
import { Box, Stack, Link, Card, Button, Divider, Typography, CardHeader } from '@mui/material';
// utils
import { fToNow } from '../../../utils/formatTime';
// components
import Iconify from '../../../components/Iconify';
import Scrollbar from '../../../components/Scrollbar';

// ----------------------------------------------------------------------

AppNewsUpdate.propTypes = {
  title: PropTypes.string,
  subheader: PropTypes.string,
  list: PropTypes.array.isRequired,
};

export default function AppNewsUpdate({ list, ...other }) {
  return (
    <Card {...other}>
      <Scrollbar>
        <Stack spacing={3} sx={{ p: 3, pr: 0 }}>
          {list.map((news, index) => (
            // <NewsItem key={news.id} news={news} />
            <NewsItem key={index + 1} news={news} />
          ))}
        </Stack>
      </Scrollbar>

      <Divider />
    </Card>
  );
}

// ----------------------------------------------------------------------

function NewsItem({ news }) {
  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <Box sx={{ minWidth: 240, flexGrow: 1 }}>
        <Typography color="inherit" variant="subtitle2" noWrap>
          <h4>{news.employment}</h4>
        </Typography>

        <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
          <div>{news.company}</div>
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
          <div>{news.location}</div>
        </Typography>
      </Box>

      <Typography variant="caption" sx={{ pr: 3, flexShrink: 0, color: 'text.secondary' }}>
        <h3>
          {news.start.slice(0, 10)} - {news.end.slice(0, 10)}
        </h3>
      </Typography>
    </Stack>
  );
}
