import { Link, useNavigate } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Stack from "@mui/material/Stack";
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import DraftsIcon from '@mui/icons-material/Drafts';
import FavoriteIcon from '@mui/icons-material/Favorite';
import JoinInnerIcon from '@mui/icons-material/JoinInner';
import LogoutIcon from '@mui/icons-material/Logout';

import { useAuth } from 'hooks';

const Navbar = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const handleLogin = async () => {
    await auth.logout();
    navigate('/login');
  };

  return (
    <AppBar position="static">
    <Toolbar>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 1 }}
      >
        <MonitorHeartIcon fontSize="large"/>
      </IconButton>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        National Transplant Registry ({auth.hospital ? `${auth.hospital.name}, ${auth.hospital.city}` : ''})
      </Typography>
      <Stack flexDirection="row" alignItems="center" justifyContent="center" gap={2}>
        <Button color="inherit" component={Link} to="/organs" startIcon={<FavoriteIcon />}>Organs</Button>
        <Button color="inherit" component={Link} to="/organ-requests" startIcon={<DraftsIcon />}>Requests</Button>
        <Button color="inherit" component={Link} to="/organ-matches" startIcon={<JoinInnerIcon />}>Matches</Button>
        <Button color="inherit" startIcon={<LogoutIcon />} onClick={handleLogin}>Logout</Button>
      </Stack>
    </Toolbar>
  </AppBar>
  );
};

export default Navbar;
