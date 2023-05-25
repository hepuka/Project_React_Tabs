import "./App.css";
import Tabs from "./Tabs";

function App() {
  return (
    <div className="App">
      <div className="headers">
        <h1>KunPao's Coffee</h1>
        <p>Bejelentkezve: Admin</p>
      </div>
      <Tabs />
      <div className="footers">
        <p>Created by Zoltan KUN-FAGYAL</p>
        <p>Computer Science Engineering</p>
        <p>2023</p>
      </div>
    </div>
  );
}

export default App;
