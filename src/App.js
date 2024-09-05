import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/Header";
import NotesPage from "./pages/NotesPage";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route component={NotesPage} path="/" exact />
      </div>
    </Router>
  );
}

export default App;
