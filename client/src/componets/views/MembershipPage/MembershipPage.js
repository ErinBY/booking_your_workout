import React from 'react'
import {
    Button,
    Form,
    FormGroup,
    Input,
    Label,
    Modal,
    ModalBody,
    ModalHeader,
    ModalFooter
  } from 'reactstrap';
import NavBar from '../NavBar/NavBar';
import MembershipModal from './MembershipModal';
import { Link } from "react-router-dom";
import '../../../css/common.css';
import '../../../css/main.css';

function MembershipPage() {
    
    return (
      
        <div className="wrap col-xs-12 col-md-12 col-lg-12">
            <NavBar/>
            <div className='container banna_container bg-gray'>
                <div className='membership_form'>
                    <h2 className='title'>이용권 관리</h2>
                    <span>회원 등록 시 적용할 이용권을 추가하거나 관리할 수 있습니다.</span>
                    <div className="line"></div>
                        <div className="btnarea">
                            <MembershipModal buttonLabel="이용권 등록" className="membershipModal"/>
                        </div>
                    <div>
                        <div className="listitem">
                          <div className="itemtitle">개인레슨 30회</div><div className="setIcon"></div>
                          <div className="item">이용 횟수 : 30회</div><div className="item">주간 이용 횟수 : 2회</div>
                          <div className="item">수업 요일 : 월,수,금</div><div className="item">유효기간 : 6개월</div>
                        </div>
                        <div className="listitem">
                          <div className="itemtitle">개인레슨 30회</div><div className="setIcon"></div>
                          <div className="item">이용 횟수 : 30회</div><div className="item">주간 이용 횟수 : 2회</div>
                          <div className="item">수업 요일 : 월,수,금</div><div className="item">유효기간 : 6개월</div>
                        </div>
                        <div className="listitem">
                          <div className="itemtitle">개인레슨 30회</div><div className="setIcon"></div>
                          <div className="item">이용 횟수 : 30회</div><div className="item">주간 이용 횟수 : 2회</div>
                          <div className="item">수업 요일 : 월,수,금</div><div className="item">유효기간 : 6개월</div>
                        </div>
                        <div className="listitem">
                          <div className="itemtitle">개인레슨 30회</div><div className="setIcon"></div>
                          <div className="item">이용 횟수 : 30회</div><div className="item">주간 이용 횟수 : 2회</div>
                          <div className="item">수업 요일 : 월,수,금</div><div className="item">유효기간 : 6개월</div>
                        </div>
                        
                    </div>

            </div>
        </div>
        </div>
    )
}

export default MembershipPage
