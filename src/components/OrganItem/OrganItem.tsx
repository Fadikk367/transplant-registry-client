import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { OrganStatus } from 'constants/enums';

import { OrganItemProps } from './types';


const OrganItem = ({data}: OrganItemProps) => {
  const {type, hla, status, donationDate, hospital} = data;
  const isTaken = status === OrganStatus.Taken;

  return (
    <Card elevation={3} sx={{ marginY: 2, opacity: isTaken ? 0.5 : 1 }}>
      <CardContent>
        <Stack flexDirection="row" justifyContent="space-between">
          <Typography variant="h5" component="div">
            {type}
          </Typography>
          <Typography color="text.secondary">
            donation date: {new Date(donationDate).toLocaleDateString()}
          </Typography>
        </Stack>
        <Typography color="text.secondary">
          Status: {status}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          HLA: {hla}
        </Typography>
        <Typography variant="body2">
          From hospital: {hospital.name}, {hospital.city}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default OrganItem;
