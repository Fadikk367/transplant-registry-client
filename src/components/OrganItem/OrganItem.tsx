import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import { OrganItemProps } from './types';


const OrganItem = ({data}: OrganItemProps) => {
  const {type, hla, status, hospital} = data;

  return (
    <Card elevation={3} sx={{ marginY: 2 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {type} (HLA: {hla})
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Status: {status}
        </Typography>
        <Typography variant="body2">
          From hospital: {hospital.name}, {hospital.city}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default OrganItem;
