import AvailableBooks from "./components/Books/AvailableBooks";
import BooksSummary from "./components/Books/BooksSummary";
import Header from "./components/Layout/Header";

function App() {
  return (
    <div>
      <Header />
      <main>
        <BooksSummary />
        <AvailableBooks />
      </main>
    </div>
  );
}

export default App;
