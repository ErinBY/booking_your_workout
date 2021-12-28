import React from 'react'
//import { Button } from 'reactstrap';
import Button from 'react-bootstrap/Button';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from "react-router-dom";

function LandingPage() {
    return (
        <div>
            <div className="float-start">
                <Button variant="secondary" type="submit"><Link to="/">BANANA</Link></Button>
            </div>
            <div className="float-end">
            <Button variant="secondary" type="submit"><Link to="/login">Login</Link></Button>
            <Button variant="secondary" type="submit"><Link to="/login">무료로 시작하기</Link></Button>
            </div>
        </div>
    )
}

export default LandingPage
