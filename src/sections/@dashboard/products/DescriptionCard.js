import Card from '@mui/material/Card';
import * as React from 'react';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import Collapse from '@mui/material/Collapse';
import ListItem from '@mui/material/ListItem';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import { Container, ListItemText, Stack } from '@mui/material';
import axios from 'axios';
import { baseUrl } from '../../../constant';

const ExpandMore = styled((props) => {
  const {  ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function DescriptionCard() {
  const [expanded, setExpanded] = React.useState(false);
  

  const [allJobs, setAllJobs] = React.useState([]);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  React.useEffect(() => {
    getAllJobs();
  }, []);

  const getAllJobs = async () => {
    await axios.get(`${baseUrl}getAllJobs`).then((res) => {
      setAllJobs(res.data.allJobs);
    });
  };
  // buatlah tombol expand hanya bisa di klik 1 kali
  return (
    <Container>
      {allJobs.map((val) => (
        <Stack sx={{ mb: 5 }} key={val.id_job}>
          {/* // image card ------------------------------------------------ */}
          <Card sx={{ maxWidth: 1820 }}>
            <CardMedia component="img" src={val.banner} alt="ui" height="340"  />
            <CardContent>
              {/* // title card ------------------------------------------------ */}
              <Typography gutterBottom variant="h5" component="div">
                {val.job_name}
              </Typography>
              {/* // DescriptionCard ------------------------------------------------ */}
              <Typography variant="body1" color="text.secondary" component="div" sx={{ mb: 5 }}>
                {val.description}
              </Typography>
            </CardContent>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                {/* title card ------------------------------------------------ */}
                <Typography gutterBottom variant="h5" component="div">
                  Deskripsi Pekerja
                </Typography>
                <Typography variant="body2" color="text.secondary" component="div" sx={{ mb: 5 }}>
                  {/* DescriptionCard ------------------------------------------------ */}
                  <Typography gutterBottom variant="body1" component="div">
                    Berikut Merupakan Deskripsi {val.job_name}:
                  </Typography>
                  <ListItem>
                    <ListItemText>
                      {val.tanggung_jawab}
                    </ListItemText>
                  </ListItem>
                </Typography>

                {/* // title card ------------------------------------------------ */}
                <Typography gutterBottom variant="h5" component="div">
                  Requirement Job
                </Typography>
                <Typography variant="body1" color="text.secondary" component="div" sx={{ mb: 5 }}>
                  <ListItem>
                    {/* DescriptionCard ------------------------------------------------ */}
                    <ListItemText>
                      {val.keahlian}
                   
                    </ListItemText>
                  </ListItem>
                </Typography>
              </CardContent>
            </Collapse>
            <CardActions>
              <ExpandMore expand={expanded} onClick={handleExpandClick} aria-expanded={expanded} aria-label="show more">
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
          </Card>
        </Stack>
      ))}
    </Container>
  );
}
