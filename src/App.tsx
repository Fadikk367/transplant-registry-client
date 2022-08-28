import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import { Routes, Route } from "react-router-dom";

import Home from 'pages/Home';
import Login from 'pages/Login';
import Register from 'pages/Register';
import Organs from 'pages/Organs';
import Patients from 'pages/Patients';
import Hospitals from 'pages/Hospitals';
import Profile from 'pages/Profile';

const App = () => {
  return (
    <Stack sx={{minHeight: '100vh'}}>
      <Box sx={{ flex: 1 }}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />}>
            <Route index  element={<Organs />} />
            <Route path="/organs" element={<Organs />} />
            <Route path="/patients" element={<Patients />} />
            <Route path="/hospitals" element={<Hospitals />} />
            <Route path="/profile" element={<Profile />} />
          </Route>
        </Routes>
      </Box>
    </Stack>
  );
}

export default App;
