import Card from '@mui/material/Card';
import * as React from 'react';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Container, Stack } from '@mui/material';

export default function DescriptionCard() {
  return (
    <Container>
      <Stack>
        <Card sx={{ maxWidth: 1820 }}>
            <CardMedia
            component="img"
            alt="ui"
            height="140"
            image="../../../../public/static/preview.jpg"/>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    User Interface / User Experience Design
                </Typography>
                <Typography variant="body2" color="text.secondary" component="div">
                         UI Designer merupakan sebutan untuk orang yang mendesain interface untuk perangkat lunak komputer, ponsel pintar, dan lainnya.UX Designer adalah jenis pekerjaan yang berhubungan dengan bagaimana meningkatkan kepuasan pengguna aplikasi maupun pengunjung situs yang dilihat dari nilai guna, manfaat, juga kesenangan yang didapatkan si pengguna dari suatu aplikasi atau situs.
                </Typography>
            </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
      </Stack>
    </Container>
  );
}
