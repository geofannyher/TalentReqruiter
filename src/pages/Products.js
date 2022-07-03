import { useState } from 'react';
// material
import { Container, Stack, Typography } from '@mui/material';
// components
import Page from '../components/Page';
import { DescriptionCard } from '../sections/@dashboard/products';
// mock

// ----------------------------------------------------------------------

export default function EcommerceShop() {
  const [openFilter, setOpenFilter] = useState(false);

  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };

  return (
    <Page title="Deskripsi Pekerjaan">
      <Container>
        <Typography variant="h4" sx={{ mb: 5 }}>
          Deskripsi Pekerjaan dan Kriteria Pelamar
        </Typography>

        <Stack direction="row" flexWrap="wrap-reverse" alignItems="center" justifyContent="flex-end" sx={{ mb: 5 }}>
          <DescriptionCard/>
        </Stack>
      </Container>
    </Page>
  );
}
