import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './components/home';
import Task2 from './components/task2/task2';
import Task1 from './components/task1/task1';
import Login from './components/task2/login';


function App() {
  return (
    <div className="App">
      <>
        <Router>
          <Routes>
            <Route
              exact
              path="/"
              element={<Home/>}
            />
            <Route
              exact
              path="/task1"
              element={<Task1/>}
            />
            <Route
              exact
              path="/task2"
              element={<Task2/>}
            />
            <Route
              exact
              path="/login"
              element={<Login/>}
            />
          </Routes>
        </Router>
      </>
    </div>
  );
}

export default App;
