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
import MembershipPage from './componets/views/MembershipPage/MembershipPage';
import InstructorPage from './componets/views/InstructorPage/InstructorPage';
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
          <Route exact path={process.env.PUBLIC_URL + '/'} element={<LandingPage/>}/>
          <Route exact path={process.env.PUBLIC_URL + '/login'}  element={<LoginPage/>}/>
          <Route exact path={process.env.PUBLIC_URL + '/register'} element={<RegisterPage/>}/>
          <Route exact path={process.env.PUBLIC_URL + '/category'} element={<CategoryPage/>}/>
          <Route exact path={process.env.PUBLIC_URL + '/membership'} element={<MembershipPage/>}/>
          <Route exact path={process.env.PUBLIC_URL + '/instructor'} element={<InstructorPage/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
