import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

import { Routes, Route } from "react-router-dom";

import Home from 'pages/Home';
import Login from 'pages/Login';
import Register from 'pages/Register';
import Organs from 'pages/Organs';
import OrganRequests from 'pages/Requests';
import Matches from 'pages/Matches';

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
            <Route path="/organ-requests" element={<OrganRequests />} />
            <Route path="/organ-matches" element={<Matches />} />
          </Route>
        </Routes>
      </Box>
    </Stack>
  );
}

export default App;
