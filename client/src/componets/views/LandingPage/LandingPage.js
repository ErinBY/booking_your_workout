import React,{ useEffect} from 'react'
import axios from 'axios'
//import { Button } from 'reactstrap';
import Button from 'react-bootstrap/Button';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from "react-router-dom";

function LandingPage() {
    useEffect(()=> {
      axios.get('/api/hello')
      .then(response=>{console.log(response)})
  
    },[])
    
    return (
        <div>
            <div className="float-start">
                <Button variant="secondary" type="submit"><Link to="/">BANANA 22</Link></Button>
            </div>
            <div className="float-end">
            <Button variant="secondary" type="submit"><Link to="/login">Login</Link></Button>
            <Button variant="secondary" type="submit"><Link to="/register">무료로 시작하기</Link></Button>
            </div>
        </div>
    )
}

export default LandingPage
