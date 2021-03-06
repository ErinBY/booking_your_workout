import React, { useState } from 'react'
import Axios from 'axios'
import {
    Button,
    Form,
    FormGroup,
    Input,
    Label
  } from 'reactstrap';
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import '../../../css/common.css';
import '../../../css/main.css';
import { registerMember } from '../../../_actions/user_action';
import { useNavigate } from 'react-router-dom';

function RegisterPage(props) {
    const dispatch = useDispatch();
    const [id, setId] = useState("");
    const [pwd, setPwd] = useState("");
    const [pwd2, setPwd2] = useState("");
    const [email, setEmail] = useState("");
    const [bs_company, setBsCompany] = useState("");
    const [bs_owner_name, setBsOwnerNameHandler] = useState("");
    const [bs_company_hp, setBsCompanyHp] = useState("");
    
    let navigate = useNavigate();
    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value);
    }

    const onIdHandler = (event) => {
        setId(event.currentTarget.value);
    }

    const onPasswordHandler = (event) => {
        setPwd(event.currentTarget.value);
    }

    const onPasswordHandler2 = (event) => {
        setPwd2(event.currentTarget.value);
    }

    const onBsCompanyHandler = (event) => {
        setBsCompany(event.currentTarget.value);
    }

    const onBsOwnerNameHandler = (event) => {
        setBsOwnerNameHandler(event.currentTarget.value);
    }

    const onBsCompanyHpHandler = (event) => {
        setBsCompanyHp(event.currentTarget.value);
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();

        console.log(id);
        console.log(pwd);
        console.log(pwd2);
        console.log(email);
        console.log(bs_company);
        console.log(bs_owner_name);
        console.log(bs_company_hp);
        let body = {
            id : id,
            pwd : pwd,
            pwd2 : pwd2,
            email: email,
            bs_company : bs_company,
            bs_owner_name : bs_owner_name,
            bs_company_hp : bs_company_hp            
        }

       dispatch(registerMember(body)) 
            .then(response=>{
                console.log(response);
                console.log(response.payload);
                
                if(response.payload.success) {
                    console.log(props);
                    navigate(process.env.PUBLIC_URL + '/');
                } else alert('Error')
            })
    }

    return (
        <div className="wrap col-xs-12 col-md-12 col-lg-12">
            <div className="header w-100">
                <Link to="/" className='header_link'>BANANA</Link>
            </div>
            <div className='container banna_container'>
                <div className='register_form'>
                    <h2 className='title'>????????????</h2>
                    <Form onSubmit={onSubmitHandler}>
                        <h3 className='sub_title'>????????????</h3>
                        <Input id="id" name="id" placeholder="?????????" type="text" value={id} onChange={onIdHandler}/>                        
                        <Input id="pwd" name="pwd" placeholder="????????????" type="password" value={pwd} onChange={onPasswordHandler}/>
                        <Input id="pwd" name="pwd2" placeholder="???????????? ??????" type="password" value={pwd2} onChange={onPasswordHandler2}/>
                        <Input id="email" name="email" placeholder="?????????" type="email" value={email} onChange={onEmailHandler}/>
                        <h3 className='sub_title'>????????? ??????</h3>
                        <Input id="bs_company" name="bs_company" placeholder="????????????" type="text" value={bs_company} onChange={onBsCompanyHandler}/>
                        <Input id="bs_owner_name" name="bs_owner_name" placeholder="????????????" type="text" value={bs_owner_name} onChange={onBsOwnerNameHandler}/>
                        <Input id="bs_company_hp" name="bs_company_hp" placeholder="????????? ?????????" type="text" value={bs_company_hp} onChange={onBsCompanyHpHandler}/>
                        <Button className='regiser_btn' type="submit">????????????</Button>
                    </Form>
                    <div className='login_go'>
                        <span>?????? ????????? ????????????????</span>
                        <Link to={process.env.PUBLIC_URL + '/login'} className='login_link'>?????????</Link>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default RegisterPage
