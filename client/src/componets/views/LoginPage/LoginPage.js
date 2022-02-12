import React, { useState } from 'react';

import Toast from 'react-bootstrap/Toast';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import '../../../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const ExampleToast = ({ children }) => {
  const [show, toggleShow] = useState(true);

  return (
    <>
      {!show && <Button onClick={() => toggleShow(true)}>Show Toast</Button>}
      <Toast show={show} onClose={() => toggleShow(false)}>
        <Toast.Header>
          <strong className="mr-auto">React-Bootstrap</strong>
        </Toast.Header>
        <Toast.Body>{children}</Toast.Body>
      </Toast>
    </>
  );
};

const App = () => (
  <Container className="p-3">
    <Container className="p-5 mb-4 bg-light rounded-3">
      <h1 className="header">로그인</h1>
    
    <Form>
  <Form.Group className="mb-3" controlId="formBasicId">
    <Form.Control type="id" placeholder="아이디" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Control type="password" placeholder="패스워드" />
  </Form.Group>
  <p className="float-end">비밀번호찾기</p>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="자동 로그인" />
  </Form.Group>
  <div className="text-center">
  <Button variant="primary" type="submit">
  <Link to="/category">로그인</Link>
  </Button>
  </div>
  <div className="text-center">
      <span className="m-md-2">아직 계정이 없으신가요?</span><span className="m-md-2">회원가입</span></div>
  
</Form>
    </Container>
  </Container>
);

export default App;
