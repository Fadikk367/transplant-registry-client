import HomeView from "components/HomeView";

const Patients = () => {
  return (
    <HomeView title="Patients" subtitle='List of patients awaiting for organs'>
      <ul style={{marginLeft: 20}}>
        <li>patient 1</li>
        <li>patient 2</li>
        <li>patient 3</li>
        <li>patient 4</li>
        <li>patient 5</li>
        <li>patient 6</li>
      </ul>
    </HomeView>
  );
};

export default Patients;
