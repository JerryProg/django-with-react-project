import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";

export default class CustomModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: this.props.activeItem,
    };
  }

  handleChange = (e) => {
    let { name, value } = e.target;

    if (e.target.type === "checkbox") {
      value = e.target.checked;
    }

    const activeItem = { ...this.state.activeItem, [name]: value };

    this.setState({ activeItem });
  };

  render() {
    const { toggle, onSave } = this.props;

    return (
      <Modal isOpen={true} toggle={toggle}>
        <ModalHeader toggle={toggle}>Ip Address</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="title">Numero</Label>
              <Input
                type="text"
                id="title"
                name="title"
                value={this.state.activeItem.ip_address}
                onChange={this.handleChange}
                placeholder="Ingresa tu ip de no mas de 12 caracteres"
              />
            </FormGroup>
            <FormGroup check>
                <Label for="completed">
                <Input
                  type="checkbox"
                  name="completed"
                  checked={this.state.activeItem.completed}
                  onChange={this.handleChange}
                  />
                  Completed
                </Label>
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button
            color="primary"
            onClick={() => onSave(this.state.activeItem)}
          >
            Guardar
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}