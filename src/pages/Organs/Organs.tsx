import { fetchOrgans } from 'api';
import HomeView from 'components/HomeView';
import List from 'components/List';

import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Modal from '@mui/material/Modal';
import AddOrganForm from 'components/AddOrganForm';
import { useState } from 'react';
import OrganItem from 'components/OrganItem';

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
