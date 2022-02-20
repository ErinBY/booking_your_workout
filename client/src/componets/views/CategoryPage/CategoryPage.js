import React from 'react'
import {
    Button,
    Form,
    FormGroup,
    Input,
    Label
  } from 'reactstrap';
import NavBar from '../NavBar/NavBar';
import { Link } from "react-router-dom";
import '../../../css/common.css';
import '../../../css/main.css';

function CategoryPage() {
    return (
      
        <div className="wrap col-xs-12 col-md-12 col-lg-12">
            <NavBar/>
            <div className='container banna_container bg-gray'>
                <div className='category_form'>
                    <h2 className='title'>수업카테고리</h2>
                    <span>수업 등록에 필요한 카테고리를 추가하거나 관리할 수 있습니다.</span>
                    <div class="line"></div>
                    <div className="btnarea"><Button className="button btn-warning">+ 수업 카테고리 등록</Button></div>
                    <div>
                      <div className="listitem"><div className="toggleIcon"></div><span>웨이트</span><div className="setIcon"></div></div></div>
                      <div className="listitem"><div className="toggleIcon"></div><span>필라테스</span><div className="setIcon"></div></div>
                      <div className="listitem"><div className="toggleIcon"></div><span>요가</span><div className="setIcon"></div></div>
                      <div className="listitem"><div className="toggleIcon"></div><span>골프</span><div className="setIcon"></div></div>
                    </div>
                        
            </div>
        </div>
    )
}

export default CategoryPage
