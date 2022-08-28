import HomeView from "components/HomeView";

const Hospitals = () => {
  return (
    <HomeView title="Hospitals" subtitle='List of hospitals registered in the system'>
      <ul style={{marginLeft: 20}}>
        <li>hospital 1</li>
        <li>hospital 2</li>
        <li>hospital 3</li>
        <li>hospital 4</li>
        <li>hospital 5</li>
        <li>hospital 6</li>
      </ul>
    </HomeView>
  );
};

export default Hospitals;
