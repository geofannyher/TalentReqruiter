
// material
import { styled } from '@mui/material/styles';
import {
  Toolbar,
  Tooltip,
  IconButton,
  Typography,
  OutlinedInput,
  InputAdornment,
<<<<<<< HEAD
<<<<<<< HEAD
  Chip,
  Container,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
=======
  FormControl,
>>>>>>> 87cfcad64181685816857ea712d6ab93aef35d5a
=======
  FormControl,
>>>>>>> b74a6ad91c017b8ff1a81939ed7ece1052abbed5
  Box,
} from '@mui/material';
// component
import Iconify from '../../../components/Iconify';

// ----------------------------------------------------------------------

const RootStyle = styled(Toolbar)(({ theme }) => ({
  height: 96,
  display: 'flex',
  justifyContent: 'space-between',
  padding: theme.spacing(0, 1, 0, 3),
}));

const SearchStyle = styled(OutlinedInput)(({ theme }) => ({
  width: 240,
  transition: theme.transitions.create(['box-shadow', 'width'], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter,
  }),
  '&.Mui-focused': { width: 320, boxShadow: theme.customShadows.z8 },
  '& fieldset': {
    borderWidth: `1px !important`,
    borderColor: `${theme.palette.grey[500_32]} !important`,
  },
}));

// ----------------------------------------------------------------------


<<<<<<< HEAD
export default function UserListToolbar({ numSelected, filterName, onFilterName, roles, roleSelected }) {
=======

export default function UserListToolbar({ numSelected, roles, roleSelected }) {
>>>>>>> b74a6ad91c017b8ff1a81939ed7ece1052abbed5
  return (
    <RootStyle
      sx={{
        ...(numSelected > 0 && {
          color: 'primary.main',
          bgcolor: 'primary.lighter',
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography component="div" variant="subtitle1">
          {numSelected} selected
        </Typography>
      ) : (
        // search input field ------------------------------------------------
        <SearchStyle
<<<<<<< HEAD
          // value={filterName}
          // onChange={onFilterName}
=======
       
>>>>>>> b74a6ad91c017b8ff1a81939ed7ece1052abbed5
          placeholder="Search user..."
          startAdornment={
            <InputAdornment position="start">
              <Iconify icon="eva:search-fill" sx={{ color: 'text.disabled', width: 20, height: 20 }} />
            </InputAdornment>
          }
        />
      )}

      {/* Delete selected users------------------------------------------------ */}
      {numSelected > 0 ? (
        <Tooltip title="Delete">
          <IconButton>
            <Iconify icon="eva:trash-2-fill" />
          </IconButton>
        </Tooltip>
      ) : (
        // Select to filter by role
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItem: 'center' }}>
          <FormControl sx={{ m: 1, minWidth: 200 }}>
            {/* <InputLabel id="demo-simple-select-helper-label">Pilih Role</InputLabel> */}
            <select
              labelId="demo-simple-select-helper-label"
<<<<<<< HEAD
=======
              style={{
                border: '1px solid #ccc',
                fontSize: '14px',
                color: '#333',
                backgroundColor: '#fff',
                cursor: 'pointer',
                outline: 'none',
                 appearance: 'none',
                MozAppearance: 'none',
                borderRadius: '4px',
                width: '100%',
                padding: '10px',
                WebkitAppearance: 'none',
                boxShadow: '0 1px 3px -2px #9098A9',
              }}
>>>>>>> b74a6ad91c017b8ff1a81939ed7ece1052abbed5
              id="demo-simple-select-helper"
              label="Pilih Role"
              defaultValue={roles.length > 0 ? roles[0].id_job : ''}
              onChange={(e) => {
                roleSelected(e.target.value);
              }}
            >
              {/* item option role ------------------------------------------------  */}
              {roles.length > 0 ? (
                roles.map((val) => (
                  <option value={val.id_job} key={val.id_job}>
                    {val.job_name}
                  </option>
                ))
              ) : (
                <option value="">-- Empty --</option>
              )}
            </select>

            {/* Filter list table------------------------------------------------ */}
          </FormControl>
          <Tooltip title="Filter list">
            <IconButton>
              <Iconify icon="ic:round-filter-list" />
            </IconButton>
          </Tooltip>
        </Box>
      )}
    </RootStyle>
  );
}
