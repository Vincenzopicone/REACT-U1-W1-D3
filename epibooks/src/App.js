import "./App.css";
import BookCategoryBookList from "./books/scifi.json";
import NavBar from "./component/MyNav";
import FooterSide from "./component/MyFooter";
import WelcomeSide from "./component/Welcome";
/*import SectionBook from "./component/AllTheBooks";*/
import BookList from "./component/BookList";

function App() {
  return (
    <div className="App">
      <NavBar />
      <WelcomeSide />
      <section className="d-flex justify-content-evenly flex-wrap">
        <BookList category={BookCategoryBookList} />
      </section>
      <FooterSide />
    </div>
  );
}

export default App;
