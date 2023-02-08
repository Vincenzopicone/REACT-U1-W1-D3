import "./App.css";
import NavBar from "./component/MyNav";
import FooterSide from "./component/MyFooter";
import WelcomeSide from "./component/Welcome";
import SectionBook from "./component/AllTheBooks";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <WelcomeSide></WelcomeSide>
      <SectionBook></SectionBook>
      <FooterSide></FooterSide>
    </div>
  );
}

export default App;
