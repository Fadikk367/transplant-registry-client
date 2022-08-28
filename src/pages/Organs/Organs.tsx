import { useQuery } from '@tanstack/react-query';
import { fetchOrgans } from 'api';
import HomeView from 'components/HomeView';

const Organs = () => {
  const {data: organs, isLoading, isError} = useQuery(['organs'], fetchOrgans);
  return (
    <HomeView title="Organs" subtitle='List of available organs from donors'>
      {isLoading ? (
        <div>loading...</div>
      ) : (
        <ul style={{marginLeft: 20}}>
          {(organs || []).map(organ => (
            <li>{organ.type}</li>
          ))}
        </ul>
      )}
    </HomeView>
  );
};

export default Organs;
