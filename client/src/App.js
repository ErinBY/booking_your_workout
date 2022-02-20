import './App.css'; 
import './css/index.css';
import 'bootstrap/dist/css/bootstrap.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import { Routes } from 'react-router-dom';
import LandingPage from './componets/views/LandingPage/LandingPage';
import LoginPage from './componets/views/LoginPage/LoginPage';
import RegisterPage from './componets/views/RegisterPage/RegisterPage';
import CategoryPage from './componets/views/CategoryPage/CategoryPage';

function App() {
  return (
    <Router>
      <div className="h-100">
        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Routes>
          <Route basename={process.env.PUBLIC_URL} exact path="/" element={<LandingPage/>}/>
          <Route exact path="/login"  element={<LoginPage/>}/>
          <Route exact path="/register" element={<RegisterPage/>}/>
          <Route exact path="/category" element={<CategoryPage/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
