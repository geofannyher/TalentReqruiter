import { filter } from 'lodash';
import { sentenceCase } from 'change-case';
// axios
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
// material
import {
  Card,
  Table,
  Stack,
  Avatar,
  Button,
  Checkbox,
  TableRow,
  TableBody,
  TableCell,
  Container,
  Typography,
  TableContainer,
  TablePagination,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';
// components
import Page from '../components/Page';
import Label from '../components/Label';
import Scrollbar from '../components/Scrollbar';
import Iconify from '../components/Iconify';
import SearchNotFound from '../components/SearchNotFound';
import { UserListHead, UserListToolbar, UserMoreMenu } from '../sections/@dashboard/user';
// mock
// import USERLIST from '../_mock/user';
// base url
import { baseUrl } from '../constant';
// ----------------------------------------------------------------------

const TABLE_HEAD = [
  { id: 'name', label: 'Pelamar', alignRight: false },
  { id: 'score', label: 'Score', alignRight: false },
  { id: 'role', label: 'Role', alignRight: false },
  // { id: 'isVerified', label: 'Verified', alignRight: false },
  // { id: 'status', label: 'Status', alignRight: false },
  { id: '' },
];
// ----------------------------------------------------------------------
// ----------------------------------------------------------------------

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function applySortFilter(array, comparator, query) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  if (query) {
    return filter(array, (_user) => _user.name.toLowerCase().indexOf(query.toLowerCase()) !== -1);
  }
  return stabilizedThis.map((el) => el[0]);
}

// table configuration
export default function User() {
  const [page, setPage] = useState(0);
  const navigate = useNavigate();
  const [order, setOrder] = useState('asc');
  const [selected, setSelected] = useState([]);
  const [orderBy, setOrderBy] = useState('name');
  const [filterName, setFilterName] = useState('');
  // Pilih role
  const [roles, setRoles] = useState([]);
  // active role
  const [activeRole, setActiveRole] = useState(0);
  // applicants by role
  const [applicants, setApplicants] = useState([]);

  const [rowsPerPage, setRowsPerPage] = useState(10);

  // get roles
  const getRoles = async () => {
    await axios
      .get(`${baseUrl}getJobs`)
      .then((res) => {
        if (res.status === 200) {
          setRoles(res.data.jobs);
          setActiveRole(res.data.jobs[0].id_job);
        } else {
          console.log(res.data.msg);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getApplicants = async () => {
    await axios
      .post(`${baseUrl}getApplicantScoreByJob`, { jobId: activeRole })
      .then((res) => {
        if (res.status === 200) {
          setApplicants(res.data.score);
        } else {
          console.log(res.data.msg);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getRoles();
  }, []);
  useEffect(() => {
    getApplicants();
  }, [activeRole]);
  // set active role on dropdown menu
  const roleSelected = (val) => {
    setActiveRole(val);
  };
  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = applicants.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];
    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
    }
    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleFilterByName = (event) => {
    setFilterName(event.target.value);
  };

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - applicants.length) : 0;

  const filteredUsers = applySortFilter(applicants, getComparator(order, orderBy), filterName);

  const isUserNotFound = filteredUsers.length === 0;

  return (
    <Page title="User">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Data Pelamar Pekerja
          </Typography>
          {/* <Button variant="contained" component={RouterLink} to="#" startIcon={<Iconify icon="eva:plus-fill" />}>
            New User
          </Button> */}
        </Stack>
        <Card>
          <UserListToolbar
            numSelected={selected.length}
            filterName={filterName}
            onFilterName={handleFilterByName}
            roles={roles}
            roleSelected={roleSelected}
          />
          <Scrollbar>
            <TableContainer sx={{ minWidth: 800 }}>
              <Table>
                <UserListHead
                  order={order}
                  orderBy={orderBy}
                  headLabel={TABLE_HEAD}
                  rowCount={applicants.length}
                  numSelected={selected.length}
                  onRequestSort={handleRequestSort}
                  onSelectAllClick={handleSelectAllClick}
                />
                <TableBody>
                  {filteredUsers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                    const isItemSelected = selected.indexOf(row.applicant.name) !== -1;

                    return (
                      <TableRow
                        hover
                        key={row.applicant.id_applicant}
                        tabIndex={-1}
                        role="checkbox"
                        selected={isItemSelected}
                        aria-checked={isItemSelected}
                      >
                        <TableCell padding="checkbox">
                          <Checkbox
                            checked={isItemSelected}
                            onChange={(event) => handleClick(event, row.applicant.name)}
                          />
                        </TableCell>
                        <TableCell component="th" scope="row" padding="none">
                          <Stack direction="row" alignItems="center" spacing={2}>
                            <Avatar alt={row.applicant.name} src={''} />

                            {/* // field name ------------------------------------------------ */}
                            <Typography variant="subtitle2" noWrap>
                              {row.applicant.name}
                            </Typography>
                          </Stack>
                        </TableCell>
                        {/* show field */}

                        {/* field score ------------------------------------------------ */}
                        <TableCell align="left">{row.score}</TableCell>

                        {/* field role ------------------------------------------------ */}
                        <TableCell align="left">{row.applicant.name}</TableCell>
                        {/* <TableCell align="left">{isVerified ? 'Yes' : 'No'}</TableCell> */}
                        {/* <TableCell align="left">
                          <Label variant="ghost" color={(status === 'banned' && 'error') || 'success'}>
                            {sentenceCase(status)}
                          </Label>
                        </TableCell> */}
                        <TableCell>
                          {/* button detail pelamar------------------------------------------------ */}
                          <Button
                            variant="contained"
                            onClick={() => navigate(`/dashboard/detail/${activeRole}/${row.applicant.id_applicant}`)}
                          >
                            Detail
<<<<<<< HEAD
                          </Button>
                          
                          <Button
                            variant="contained"
                            onClick={() => navigate(`/dashboard/detail/${activeRole}/${row.applicant.id_applicant}`)}
                          >
                            Delete
=======
>>>>>>> 87cfcad64181685816857ea712d6ab93aef35d5a
                          </Button>
                          {/* <Button
                           style={{
                            marginLeft: '15px',
                            backgroundColor: "red",
                            color: "white"
                          }}  
                            marginRight={10}
                            variant="contained"
                            onClick={() => navigate(`/dashboard/detail/${activeRole}/${row.applicant.id_applicant}`)}
                          >
                            Delete
                          </Button> */}
                          
                          <UserMoreMenu />
                        </TableCell>
                      </TableRow>
                    );
                  })}
                  {emptyRows > 0 && (
                    <TableRow style={{ height: 53 * emptyRows }}>
                      <TableCell colSpan={6} />
                    </TableRow>
                  )}
                </TableBody>

                {isUserNotFound && (
                  <TableBody>
                    <TableRow>
                      <TableCell align="center" colSpan={6} sx={{ py: 3 }}>
                        <SearchNotFound searchQuery={filterName} />
                      </TableCell>
                    </TableRow>
                  </TableBody>
                )}
              </Table>
            </TableContainer>
          </Scrollbar>

          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={applicants.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Card>
      </Container>
    </Page>
  );
}
