import BookSlot from "./Calendar";
import React, { useState } from 'react';
import Header from '../PageComponents/Header';

import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Modal from 'react-bootstrap/Modal';

function Example() {
  const [selected, setSelected] = React.useState();

  let footer = <p>Please pick a day.</p>;
  if (selected) {
    footer = <p>You picked {format(selected, 'PP')}.</p>;
  }
  return (
    <DayPicker
      mode="single"
      selected={selected}
      onSelect={setSelected}
      footer={footer}
    />
  );
}

function ModalExample() {
  const [show, setShow] = useState(false);
  const [buttonText, setButtonText] = useState("Click for selecting slot");
  const [preButtonText, setPreButtonText] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button onClick={handleShow}>
        {buttonText}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!
          <BookSlot setPreButtonText={setPreButtonText} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={e => {
            handleClose()
            setButtonText(preButtonText);
          }



          }>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}




function GridComplexExample() {
  return (
    <Form>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Select bike</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            <option>Gepida Alboin 500crs</option>
            <option>CUBE Aim Pro 29" MTB</option>
            <option>Kross Hexagon 3.0 blue grey 2022</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Select service</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            <option>Centering</option>
            <option>Inner tube replacement</option>
            <option>General Servic</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Label>Select slot</Form.Label>
          <br></br>
          <Form.Label><ModalExample /></Form.Label>

        </Form.Group>
      </Row>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}


export default function Service() {

  return (
    <div>
      <div><Header /></div>
      <p>Bike Service</p>
      <div>
        <GridComplexExample />
      </div>
    </div>
  );
}