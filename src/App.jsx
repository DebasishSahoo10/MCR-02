import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import { DataProvider } from "./contexts/DataContext";
import { Home } from "./pages/Home";
import { Archive } from "./pages/Archive";


function App() {
  return (
    <>
      <DataProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/archive" element={<Archive/>}/>
          </Routes>
        </Router>
      </DataProvider>
    </>
  );
}

export default App;
