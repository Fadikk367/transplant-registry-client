import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';

import type {HomeViewProps} from './types';

const HomeView = ({title, subtitle, rigleElement, children}: HomeViewProps) => {
  return (
    <Stack spacing={2} marginX={4} marginY={6}>
      <Stack flexDirection="row" justifyContent="space-between">
        <Stack spacing={2}>
        <Typography variant='h4'>{title}</Typography>
        {subtitle ? <Typography variant='body1'>{subtitle}</Typography> : null}
        </Stack>
        <Stack justifyContent="center" alignItems="center">
          {rigleElement}
        </Stack>
      </Stack>
      <Divider />
      {children}
    </Stack>
  );
};

export default HomeView;