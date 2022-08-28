import { fetchOrgans } from 'api';
import HomeView from 'components/HomeView';
import List from 'components/List';

import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import { Organ } from 'api/types';

type OrganItemProps = {
  data: Organ;
}

const OrganItem = ({data: {id, type, donationDate, hospitalName}}: OrganItemProps) => {
  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar>
          <ImageIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={type} secondary={donationDate.toLocaleDateString()} />
    </ListItem>
  );
}

const Organs = () => {
  return (
    <HomeView title="Organs" subtitle='List of available organs from donors'>
      <List
        itemsKey='organs' 
        fetchItems={fetchOrgans} 
        renderItem={(organ) => <OrganItem key={organ.id} data={organ} />}
      />
    </HomeView>
  );
};

export default Organs;
