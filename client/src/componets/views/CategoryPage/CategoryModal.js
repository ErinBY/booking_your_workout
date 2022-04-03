import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,Input,Form,FormGroup,Label,Col } from 'reactstrap';

class CategoryModal extends React.Component {
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

  render() {
    return (
      <div>
        <Button className="button btn-secondary" onClick={this.toggle}>{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className} centered>
          <ModalHeader toggle={this.toggle}>{this.props.buttonLabel}</ModalHeader>
          <ModalBody>

          <Form>
            <FormGroup row>
              <Label
                for="categorynm"
                sm={3}
              >
                카테고리명
              </Label>
              <Col sm={9}>
                <Input
                  id="categorynm"
                  name="email"
                />
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

export default CategoryModal;