// @mui
import PropTypes from 'prop-types';
import { alpha, styled } from '@mui/material/styles';
import { Card, Typography } from '@mui/material';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
// utils
import { fShortenNumber } from '../../../utils/formatNumber';
// components
import Iconify from '../../../components/Iconify';

// ----------------------------------------------------------------------

const IconWrapperStyle = styled('div')(({ theme }) => ({
  margin: 'auto',
  display: 'flex',
  borderRadius: '50%',
  alignItems: 'center',
  width: theme.spacing(8),
  height: theme.spacing(8),
  justifyContent: 'center',
  marginBottom: theme.spacing(3),
}));

// ----------------------------------------------------------------------

AppWidgetSummary.propTypes = {
  color: PropTypes.string,
  icon: PropTypes.string,
  title: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
  sx: PropTypes.object,
};

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      backgroundColor: '#44b700',
      color: '#44b700',
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
      '&::after': {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        animation: 'ripple 1.2s infinite ease-in-out',
        border: '1px solid currentColor',
        content: '""',
      },
    },
    '@keyframes ripple': {
      '0%': {
        transform: 'scale(.8)',
        opacity: 1,
      },
      '100%': {
        transform: 'scale(2.4)',
        opacity: 0,
      },
    },
  }));
  
  const SmallAvatar = styled(Avatar)(({ theme }) => ({
    width: 22,
    height: 22,
    border: `2px solid ${theme.palette.background.paper}`,
  }));

export default function AppWidgetSummary({ title, total, icon, color = 'primary', sx, ...other }) {
  return (
    <Card
      sx={{
        py: 10,
        boxShadow: 0,
        textAlign: 'center',
        color: (theme) => theme.palette[color].darker,
        bgcolor: (theme) => theme.palette[color].lighter,
        ...sx,
      }}
      {...other}
    >
      
      <StyledBadge
        overlap="circular"
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        variant="dot" sx={{ mb: 5}}
      >
        <Avatar alt="Remy Sharp" src="/static/illustrations/Ui.jpeg" sx={{ width: 200, height: 200 }} />
      </StyledBadge>
      <Typography variant='h5' >
        NAMA USER
      </Typography>
      <Typography variant='body1' >
        deri dimmba
      </Typography>
    </Card>
  );
}
