import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Image from 'images/theme.png';

import type {SideViewProps} from './types';

const SideView = ({children}: SideViewProps) => {
  const theme = useTheme();
  
  return (
    <Stack flexDirection="row">
      <Stack flex={1} minHeight='100vh' justifyContent="center" alignItems="center">
        <Stack spacing={3} padding={3} justifyContent="center" alignItems="center">
          <Typography variant="h3" gutterBottom>National Transplant Registry</Typography>
          <Box component="img" src={Image} width="100%" />
        </Stack>
      </Stack>
      <Stack flex={1} minHeight='100vh' justifyContent="center" alignItems="center" bgcolor={theme.palette.primary.main}>
        {children}
      </Stack>
    </Stack>
  );
};

export default SideView;