import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { OrganRequestStatus, PatientPriority } from 'constants/enums';

import { OrganRequestItemProps } from './types';

const priorityNames = {
  [PatientPriority.Critical]: 'Critical',
  [PatientPriority.Normal]: 'Normal',
  [PatientPriority.Low]: 'Low',
} as const;

const OrganRequestItem = ({data}: OrganRequestItemProps) => {
  const {organ, hla, status, priority, hospital} = data;
  const isFulfilled = status === OrganRequestStatus.Fulfilled;

  return (
    <Card elevation={3} sx={{ marginY: 2, opacity: isFulfilled ? 0.5 : 1 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {organ} ({priorityNames[priority]})
        </Typography>
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

export default OrganRequestItem;
