import { fetchOrganRequests } from 'api';
import HomeView from 'components/HomeView';
import List from 'components/List';

import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import ImageIcon from '@mui/icons-material/Image';
import { OrganRequest } from 'api/types';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import { useState } from 'react';
import AddRequestForm from 'components/AddRequestForm';

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
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <HomeView 
      title="Organ Requests" 
      subtitle='List of reuqests for organs that patient are waiting for'
      rigleElement={
        <Button variant="contained" startIcon={<AddIcon />} onClick={() => setIsModalOpen(true)}>
          Add request
        </Button>
      }
    >
      <List
        itemsKey='organ-requests' 
        fetchItems={fetchOrganRequests}
        renderItem={(organRequest) => <RequestItem key={organRequest.id} data={organRequest} />}
      />
      <Modal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <AddRequestForm closeModal={() => setIsModalOpen(false)} />
      </Modal>

    </HomeView>
  );
};

export default Requests;
