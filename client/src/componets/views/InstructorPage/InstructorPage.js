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
import InstructorModal from './InstructorModal';
import { Link } from "react-router-dom";
import '../../../css/common.css';
import '../../../css/main.css';

function InstructorPage() {
    
    return (
      
        <div className="wrap col-xs-12 col-md-12 col-lg-12">
            <NavBar/>
            <div className='container banna_container bg-gray'>
                <div className='instructor_form'>
                    <h2 className='title'>강사 관리</h2>
                    <span>새로운 강사 프로필을 등록하거나 관리할 수 있습니다.</span>
                    <div className="line"></div>
                        <div className="btnarea">
                            <InstructorModal buttonLabel="강사 등록" className="instructorModal"/>
                        </div>
                    <div>
                    <div className="listitem">
                      <div className="leftArea">
                        <div className="profile-img"></div>
                      </div>
                      <div className="rightArea">
                        <div className="itemtitle">홍길동</div><div className="setIcon"></div>
                        <div className="item">연락처 : 010 - 1234 - 5678</div>
                        <div className="item">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris rutrum ultrices ex, vitae tincidunt nibh congue pulvinar. Nunc et...</div>
                      </div>
                    </div>
                    <div className="listitem">
                      <div className="leftArea">
                        <div className="profile-img"></div>
                      </div>
                      <div className="rightArea">
                        <div className="itemtitle">홍길동</div><div className="setIcon"></div>
                        <div className="item">연락처 : 010 - 1234 - 5678</div>
                        <div className="item">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris rutrum ultrices ex, vitae tincidunt nibh congue pulvinar. Nunc et...</div>
                      </div>
                    </div>
                    <div className="listitem">
                      <div className="leftArea">
                        <div className="profile-img"></div>
                      </div>
                      <div className="rightArea">
                        <div className="itemtitle">홍길동</div><div className="setIcon"></div>
                        <div className="item">연락처 : 010 - 1234 - 5678</div>
                        <div className="item">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris rutrum ultrices ex, vitae tincidunt nibh congue pulvinar. Nunc et...</div>
                      </div>
                    </div>
                  </div>
            </div>
        </div>
        </div>
    )
}

export default InstructorPage
