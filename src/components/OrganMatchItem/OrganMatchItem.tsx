import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { OrganMatchItemProps } from './types';
import { OrganMatchStatus, PatientPriority } from 'constants/enums';
import { updateOrganMatch } from 'api';
import { useQueryClient } from '@tanstack/react-query';

const priorityNames = {
  [PatientPriority.Critical]: 'Critical',
  [PatientPriority.Normal]: 'Normal',
  [PatientPriority.Low]: 'Low',
} as const;


const OrganMatchItem = ({data}: OrganMatchItemProps) => {
  const queryClient = useQueryClient();
  const {id, organ, request, status} = data;
  const isActive = status === OrganMatchStatus.Pending;

  const handleUpdateOrganMatch = async (status: OrganMatchStatus) => {
    try {
      await updateOrganMatch(id, status);
      await queryClient.invalidateQueries(['organ-matches'])
    } catch (_) {}
  }

  return (
    <Card elevation={3} sx={{ marginY: 2 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          Matched {organ.type} (Priority: {priorityNames[request.priority]})
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Status: {status}
        </Typography>
        <Typography variant="body2">
          From hospital: {organ.hospital.name}, {organ.hospital.city}
        </Typography>
      </CardContent>
      <CardActions>
        <Button 
          size="small" 
          variant="contained" 
          color="success" 
          disabled={!isActive}
          onClick={() => handleUpdateOrganMatch(OrganMatchStatus.Accepted)}
        >Accept</Button>
        <Button 
          size="small" 
          variant="contained" 
          color="error" 
          disabled={!isActive}
          onClick={() => handleUpdateOrganMatch(OrganMatchStatus.Rejected)}
        >Reject</Button>
      </CardActions>
    </Card>
  );
}

export default OrganMatchItem;
