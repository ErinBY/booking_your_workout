import React from 'react'
import { Button } from 'reactstrap';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from "react-router-dom";

function LandingPage() {
    return (
        <Link to = "/login">무료로 시작하기</Link>
    )
}

export default LandingPage
