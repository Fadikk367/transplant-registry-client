import { fetchOrganMatches } from 'api';
import HomeView from 'components/HomeView';
import List from 'components/List';

import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import { OrganMatch } from 'api/types';

type MatchItemProps = {
  data: OrganMatch;
}

const MatchItem = ({data: {id, organ, request}}: MatchItemProps) => {
  return (
    <ListItem key={id}>
      <ListItemAvatar>
        <Avatar>
          <ImageIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={organ.type} secondary={new Date(organ.donationDate).toLocaleDateString()} />
    </ListItem>
  );
}

const Matches = () => {
  return (
    <HomeView title="Organ Requests" subtitle='List of reuqests for organs that patient are waiting for'>
      <List
        itemsKey='organ-matches' 
        fetchItems={fetchOrganMatches} 
        renderItem={(match) => <MatchItem key={match.id} data={match} />}
      />
    </HomeView>
  );
};

export default Matches;
