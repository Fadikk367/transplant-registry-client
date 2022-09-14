import { fetchOrganMatches } from 'api';
import HomeView from 'components/HomeView';
import List from 'components/List';
import OrganMatchItem from 'components/OrganMatchItem';


const Matches = () => {
  return (
    <HomeView title="Organ Matches" subtitle='List of organs matched to requests from your hospital'>
      <List
        itemsKey='organ-matches' 
        fetchItems={fetchOrganMatches} 
        renderItem={(match) => <OrganMatchItem key={match.id} data={match} />}
      />
    </HomeView>
  );
};

export default Matches;
