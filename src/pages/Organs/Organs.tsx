import HomeView from 'components/HomeView';

const Organs = () => {
  return (
    <HomeView title="Organs" subtitle='List of available organs from donors'>
      <ul style={{marginLeft: 20}}>
        <li>organ 1</li>
        <li>organ 2</li>
        <li>organ 3</li>
        <li>organ 4</li>
        <li>organ 5</li>
        <li>organ 6</li>
      </ul>
    </HomeView>
  );
};

export default Organs;
