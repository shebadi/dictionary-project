import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="continer">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer className="App-footer">
          This project was coded by Shabnam Ebadi and is{" "}
          <a
            href="https://github.com/shebadi/dictionary-project"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub{" "}
          </a>
          and hosted in{" "}
          <a
            href="https://amazing-mousse-e9443c.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}

export default App;
