import React from 'react'
import {
    Button,
    Form,
    FormGroup,
    Input,
    Label
  } from 'reactstrap';
import { Link } from "react-router-dom";
import '../../../css/common.css';
import '../../../css/main.css';

function RegisterPage() {
    return (
        <div className="wrap col-xs-12 col-md-12 col-lg-12">
            <div className="header w-100">
                <Link to="/" className='header_link'>BANANA</Link>
            </div>
            <div className='container banna_container'>
                <div className='register_form'>
                    <h2 className='title'>회원가입</h2>
                    <Form>
                        <h3 className='sub_title'>기본정보</h3>
                        <Input id="id" name="id" placeholder="아이디" type="text"/>                        
                        <Input id="pwd" name="pwd" placeholder="비밀번호" type="password"/>
                        <Input id="pwd" name="pwd" placeholder="비밀번호 확인" type="password"/>
                        <Input id="email" name="email" placeholder="이메일" type="email"/>
                        <h3 className='sub_title'>사업장 정보</h3>
                        <Input id="bs_company" name="bs_company" placeholder="사업장명" type="text"/>
                        <Input id="bs_owner_name" name="bs_owner_name" placeholder="대표자명" type="text"/>
                        <Input id="bs_company_hp" name="bs_company_hp" placeholder="사업장 연락처" type="text"/>
                        <Button className='regiser_btn'>가입하기</Button>
                    </Form>
                    <div className='login_go'>
                        <span>이미 계정이 있으신가요?</span>
                        <Link to="/login" className='login_link'>로그인</Link>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default RegisterPage
