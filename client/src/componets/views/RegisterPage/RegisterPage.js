import React from 'react'
import {
    Button,
    Form,
    FormGroup,
    Input,
    Label
  } from 'reactstrap';
import { Link } from "react-router-dom";

function RegisterPage() {
    return (
        <div className="h-100">
            <div className="header w-100">
                <div className="float-start col-4">
                    <Button className="m-3" variant="secondary" type="submit"><Link to="/">BANANA</Link></Button>
                </div>
            </div>
            <div>
                <h2>Sign In</h2>
                    <Form className="form">
                    <FormGroup>
                        <Label for="exampleEmail">Username</Label>
                        <Input
                        type="email"
                        name="email"
                        id="exampleEmail"
                        placeholder="example@example.com"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">Password</Label>
                        <Input
                        type="password"
                        name="password"
                        id="examplePassword"
                        placeholder="********"
                        />
                    </FormGroup>
                    <Button>Submit</Button>
                </Form>
            </div>
        </div>
    )
}

export default RegisterPage
