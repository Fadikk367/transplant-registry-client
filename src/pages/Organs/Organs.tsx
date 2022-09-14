import { fetchOrgans } from 'api';
import HomeView from 'components/HomeView';
import List from 'components/List';

import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import ImageIcon from '@mui/icons-material/Image';
import AddIcon from '@mui/icons-material/Add';
import { Organ } from 'api/types';
import Modal from '@mui/material/Modal';
import AddOrganForm from 'components/AddOrganForm';
import { useState } from 'react';

type OrganItemProps = {
  data: Organ;
}

const OrganItem = ({data: {id, type, donationDate}}: OrganItemProps) => {
  return (
    <ListItem key={id}>
      <ListItemAvatar>
        <Avatar>
          <ImageIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={type} secondary={new Date(donationDate).toLocaleDateString()} />
    </ListItem>
  );
}

const Organs = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <HomeView 
      title="Organs" 
      subtitle='List of available organs from donors' 
      rigleElement={
        <Button variant="contained" startIcon={<AddIcon />} onClick={() => setIsModalOpen(true)}>
          Add organ
        </Button>
      }
    >
      <List
        itemsKey='organs' 
        fetchItems={fetchOrgans} 
        renderItem={(organ) => <OrganItem key={organ.id} data={organ} />}
      />
      <Modal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <AddOrganForm closeModal={() => setIsModalOpen(false)} />
      </Modal>
    </HomeView>
  );
};

export default Organs;
