import { fetchOrganRequests } from 'api';
import HomeView from 'components/HomeView';
import List from 'components/List';

import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import { OrganRequest } from 'api/types';

type RequestItemProps = {
  data: OrganRequest;
}

const RequestItem = ({data: {id, organ, date}}: RequestItemProps) => {
  return (
    <ListItem key={id}>
      <ListItemAvatar>
        <Avatar>
          <ImageIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={organ} secondary={new Date(date).toLocaleDateString()} />
    </ListItem>
  );
}

const Requests = () => {
  return (
    <HomeView title="Organ Requests" subtitle='List of reuqests for organs that patient are waiting for'>
      <List
        itemsKey='organ-requests' 
        fetchItems={fetchOrganRequests} 
        renderItem={(organRequest) => <RequestItem key={organRequest.id} data={organRequest} />}
      />
    </HomeView>
  );
};

export default Requests;
