import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Footer from 'components/Footer';
import withAuth from 'providers/Auth/withAuth';
import { Outlet } from 'react-router-dom';

import Navbar from 'components/Navbar';

const Home = () => {
  return (
    <Stack sx={{minHeight: '100vh'}}>
      <Navbar />
      <Box sx={{ flex: 1, width: 1200, margin: 'auto', boxShadow: 8 }}>
        <Outlet />
      </Box>
      <Footer />
    </Stack>
  );
};

export default withAuth(Home);

