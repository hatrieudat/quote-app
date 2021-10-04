import QuoteAction from "./component/QuoteAction";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <main id="quote-box">
        <fieldset>
          <legend>
            <span>&#128630;</span>
          </legend>
          {/* Quote Section */}
          <QuoteAction />
          {/* ============== */}
        </fieldset>
      </main>
    </div>
  );
};

export default App;
