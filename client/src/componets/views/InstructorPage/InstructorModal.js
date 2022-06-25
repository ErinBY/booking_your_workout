import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,Input,Form,FormGroup,Label,Col } from 'reactstrap';

class InstructorModal extends React.Component {
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
          <ModalHeader toggle={this.toggle} close={<button className="btn-close" onClick={this.toggle}>닫기</button>}>{this.props.buttonLabel}</ModalHeader>
          <ModalBody>

          <Form>
            <FormGroup row>
              <Label
                className="item"
                for="instructornm"
                sm={3}
              >
                강사명
              </Label>
              <Col sm={9}>
                <Input
                  id="instructornm"
                  name="instructornm"
                  placeholder="강사명을 입력해주세요"
                />
              </Col>
              <Label
                className="item"
                for="instructornm"
                sm={3}
              >
                연락처
              </Label>
              <Col sm={3}>
                <Input
                  id="tel01"
                  name="tel01"
                />
              </Col>
              <Col sm={3}>
                <Input
                  id="tel02"
                  name="tel02"
                />
              </Col>
              <Col sm={3}>
                <Input
                  id="tel03"
                  name="tel03"
                />
              </Col>
              <Label
                className="item"
                for="instructorinfo"
                sm={3}
              >
                강사소개
              </Label>
              <Col sm={9}>
                <Input
                  id="instructorinfo"
                  name="instructorinfo"
                  type="textarea"
                />
              </Col>
              <div className="t_right"><span>0</span>/500자</div>
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

export default InstructorModal;