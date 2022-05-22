import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,Input,Form,FormGroup,Label,Col } from 'reactstrap';

class MembershipModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      nestedModal: false,
      closeAll: false
    };

    this.toggle = this.toggle.bind(this);
    this.toggleNested = this.toggleNested.bind(this);
    this.toggleAll = this.toggleAll.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  toggleNested() {
    this.setState({
      nestedModal: !this.state.nestedModal,
      closeAll: false
    });
  }

  toggleAll() {
    this.setState({
      nestedModal: !this.state.nestedModal,
      closeAll: true
    });
  }

  selectDay(e){
    if(e.target.classList.contains('select')){
      document.getElementById('allbtn').classList.remove('select');
    }
    e.target.classList.toggle('select');
    //e.target.classList.add('bar');
    // e.target.classList.remove('bar', 'baz');
    //document.getElementById('ex').classList.toggle('foo', cnt % 3 === 0);
    //document.getElementById('ex').classList.contains(className);
  }

  selectDays(e){
    const days = document.getElementsByClassName('day');
    if(e.target.classList.contains('select')){
      for(let i=0;i<days.length;i++){
        days[i].classList.remove('select');
      }
    }else{
      for(let i=0;i<days.length;i++){
        days[i].classList.add('select');
      }
    }
    e.target.classList.toggle('select');
  }
  render() {
    return (
      <div>
        <Button className="button btn-secondary" onClick={this.toggle}>{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} centered>
          <ModalHeader toggle={this.toggle} close={<button className="btn-close" onClick={function noRefCheck(){}}>닫기</button>}>{this.props.buttonLabel}</ModalHeader>
          <ModalBody>

          <Form>
            <FormGroup row>
              <Label
                for="membershipnm"
                sm={3}
              >
                이용권명
              </Label>
              <Col sm={9}>
                <Input
                  id="membershipnm"
                  name="membershipnm"
                  placeholder="이용권명을 입력해주세요"
                />
              </Col>
              <div className="t_right"><span>0</span>/20자</div>
              <Label className="title"
                for="membershipcnt"
                sm={3}
              >
                이용횟수
              </Label>
              <Col sm={3}>
                <Input  className="t_right"
                  id="membershipcnt"
                  name="membershipcnt"
                />
              </Col>
              <Label
                sm={6} className="pl_0"
              >회</Label>
              <Label
                for="membershipcnt"
                sm={3} className="title"
              >
                수업요일
              </Label>
              <Col sm={9}>
                <div className="days">
                  <span className="day" onClick={this.selectDay}>일</span>
                  <span className="day" onClick={this.selectDay}>월</span>
                  <span className="day" onClick={this.selectDay}>화</span>
                  <span className="day" onClick={this.selectDay}>수</span>
                  <span className="day" onClick={this.selectDay}>목</span>
                  <span className="day" onClick={this.selectDay}>금</span>
                  <span className="day" onClick={this.selectDay}>토</span>
                  <span className="all" id="allbtn" onClick={this.selectDays}>전체</span>
                </div>
              </Col>
              <Label
                for="registPeriod"
                sm={3} className="title"
              >
                유효기간
              </Label>
              <Col sm={3}>
                <Input className="t_right"
                  id="registPeriod"
                  name="registPeriod"
                />
                </Col>
                <Col sm={3} className="pl_0">
                <Input
                  id="dateunit"
                  name="dateunit"
                  type="select"
                >
                  <option>
                    일
                  </option>
                  <option>
                    개월
                  </option>
                </Input>
              </Col>
            </FormGroup>
          </Form>
          </ModalBody>
          <ModalFooter>
          <Button color="light" onClick={this.toggle}>취소</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>적용</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default MembershipModal;