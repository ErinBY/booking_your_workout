import React,{ useEffect} from 'react'
import axios from 'axios'
//import { Button } from 'reactstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from "react-router-dom";

function LandingPage() {
    // useEffect(()=> {
    //   axios.get('/api/hello')
    //   .then(response=>{console.log(response)})
  
    // },[])
    
    return (
        <div className="h-100">
            <div className="header w-100">
                <div className="float-start col-4">
                    <Button className="m-3" variant="secondary" type="submit"><Link to="/">BANANA</Link></Button>
                </div>
                <div className="float-end col-8 text-end">
                    <Button variant="secondary" type="submit"><Link to="/login">Login</Link></Button>
                    <Button className="m-3" variant="secondary" type="submit"><Link to="/register">무료로 시작하기</Link></Button>
                </div>
            </div>
            <Container className="float-none text-center h-100">
                <Container className="h-100">
                    <Button variant="primary" type="submit"><Link to="/register">무료로 시작하기</Link></Button>
                </Container>
            </Container>
        </div>
    )
}

export default LandingPage
