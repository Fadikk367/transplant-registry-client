import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';

import type {HomeViewProps} from './types';

const HomeView = ({title, subtitle, children}: HomeViewProps) => {
  return (
    <Stack spacing={2} marginX={4} marginY={6}>
      <Typography variant='h4'>{title}</Typography>
      {subtitle ? <Typography variant='body1'>{subtitle}</Typography> : null}
      <Divider />
      {children}
    </Stack>
  );
};

export default HomeView;