import Card from '@mui/material/Card';
import * as React from 'react';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import List from '@mui/material/List';
import Collapse from '@mui/material/Collapse';
import ListItem from '@mui/material/ListItem';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import { Container, ListItemText, Stack } from '@mui/material';

const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
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

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Container>
      <Stack sx={{ mb: 5 }}>
        <Card sx={{ maxWidth: 1820 }}>
            <CardMedia
            component="img"
            alt="ui"
            height="340"
            src="/static/illustrations/Ui.jpeg"/>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    User Interface / User Experience Design
                </Typography>
                <Typography variant="body1" color="text.secondary" component="div" sx={{ mb: 5 }}>
                         UI Designer merupakan sebutan untuk orang yang mendesain interface untuk perangkat lunak komputer, ponsel pintar, dan lainnya.UX Designer adalah jenis pekerjaan yang berhubungan dengan bagaimana meningkatkan kepuasan pengguna aplikasi maupun pengunjung situs yang dilihat dari nilai guna, manfaat, juga kesenangan yang didapatkan si pengguna dari suatu aplikasi atau situs.
                </Typography>
            </CardContent>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Deskripsi Pekerja
                </Typography>
                <Typography variant="body2" color="text.secondary" component="div" sx={{ mb: 5 }}>
                    <Typography gutterBottom variant='body1' component="div">
                        Berikut Merupakan Deskripsi Pekerjaan UI/UX :
                    </Typography>
                    <ListItem>
                        <ListItemText>
                            <ul>
                                <li>
                                Menyelidiki persyaratan desain pengalaman pengguna untuk rangkaian aset digital kami (aplikasi seluler/web).
                                </li>
                                <li>
                                Mengembangkan dan membuat konsep strategi desain UI/UX yang komprehensif untuk aplikasi seluler. Memproduksi solusi desain UX berkualitas tinggi melalui gambar rangka, desain visual dan grafis, diagram alur, storyboard, peta situs, dan prototipe.
                                </li>
                                <li>
                                Merancang elemen dan alat UI seperti menu navigasi, kotak pencarian, tab, dan widget untuk aset digital kami. Menguji elemen UI seperti CTA, spanduk, tata letak halaman, desain halaman, alur halaman, dan tautan target untuk halaman arahan.                                </li>
                                <li>
                                Berkolaborasi dengan tim pemasaran, dan desainer internal dan eksternal untuk memastikan pembuatan dan penyampaian pengalaman yang disesuaikan untuk pengguna digital. Memberikan saran dan panduan tentang penerapan metodologi penelitian UX dan aktivitas pengujian untuk menganalisis dan memprediksi perilaku pengguna.
                                </li>
                                <li>
                                Mengikuti standar gaya pada tipografi dan desain grafis.
                                </li>
                            </ul>
                        </ListItemText>
                    </ListItem>
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                    Requirement Job
                </Typography>
                <Typography variant='body1' color="text.secondary" component="div" sx={{ mb: 5}}>
                <ListItem>
                        <ListItemText>
                            <ul>
                                <li>
                                Menyelidiki persyaratan desain pengalaman pengguna untuk rangkaian aset digital kami (aplikasi seluler/web).
                                </li>
                                <li>
                                Mengembangkan dan membuat konsep strategi desain UI/UX yang komprehensif untuk aplikasi seluler. Memproduksi solusi desain UX berkualitas tinggi melalui gambar rangka, desain visual dan grafis, diagram alur, storyboard, peta situs, dan prototipe.
                                </li>
                                <li>
                                Merancang elemen dan alat UI seperti menu navigasi, kotak pencarian, tab, dan widget untuk aset digital kami. Menguji elemen UI seperti CTA, spanduk, tata letak halaman, desain halaman, alur halaman, dan tautan target untuk halaman arahan.                                </li>
                                <li>
                                Berkolaborasi dengan tim pemasaran, dan desainer internal dan eksternal untuk memastikan pembuatan dan penyampaian pengalaman yang disesuaikan untuk pengguna digital. Memberikan saran dan panduan tentang penerapan metodologi penelitian UX dan aktivitas pengujian untuk menganalisis dan memprediksi perilaku pengguna.
                                </li>
                                <li>
                                Mengikuti standar gaya pada tipografi dan desain grafis.
                                </li>
                            </ul>
                        </ListItemText>
                    </ListItem>
                </Typography>
                </CardContent>
            </Collapse>
      <CardActions>
      <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
            <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
        </Card>
      </Stack>
      <Stack>
        <Card sx={{ maxWidth: 1820 }}>
            <CardMedia
            component="img"
            alt="ui"
            height="340"
            src="/static/illustrations/web.webp"/>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Web Developer
                </Typography>
                <Typography variant="body1" color="text.secondary" component="div" sx={{ mb: 5 }}>
                Web developer adalah orang yang bertugas membuat dan mengembangkan website. Untuk melakukannya, mereka menulis kode dengan berbagai bahasa pemrograman web sesuai keahlian mereka. Contohnya,  Python, JavaScript, dan HTML. 
                </Typography>
            </CardContent>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Deskripsi Pekerja
                </Typography>
                <Typography variant="body2" color="text.secondary" component="div" sx={{ mb: 5 }}>
                    <Typography gutterBottom variant='body1' component="div">
                        Berikut Merupakan Deskripsi Pekerjaan Web Programmer :
                    </Typography>
                    <ListItem>
                        <ListItemText>
                            <ul>
                                <li>
                                Memastikan website punya tampilan responsif agar tampak rapi di layar komputer,smartphone dan tablet. Untuk melakukannya, developer perlu mahir menggunakan framework seperti React dan Angular.
                                </li>
                                <li>
                                Melakukan usability testing secara berkala untuk memaksimalkan user experience atau pengalaman pengunjung. Dengan user experience yang baik, pengunjung akan senang ketika mengunjungi website Anda.
                                </li>
                                <li>
                                Merancang alur website sesuai jenis website yang dibuat. Misalnya, untuk toko online, developer bisa membuat alur agar setiap pengunjung diarahkan untuk membuat akun atau log in, sebelum akhirnya memilih produk dan melakukan pembayaran.                                
                                </li>
                                <li>
                                Membuat database untuk menyimpan data website, seperti berbagai foto dan informasi produk, akun pengunjung, dan data pesanan. Selain itu, developer juga harus mengelola database agar tidak membebani kinerja website 
                                </li>
                            </ul>
                        </ListItemText>
                    </ListItem>
                </Typography>
                </CardContent>
            </Collapse>
      <CardActions>
      <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
            <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
        </Card>
      </Stack>
    </Container>
  );
}
