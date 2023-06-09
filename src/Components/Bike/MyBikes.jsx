import Header from "../PageComponents/Header";
import ProfileNavbar from "../Profile/ProfileNavBar";
import BikeDisplay from "./BikeDisplay";
import { Container, Row, Col } from 'react-bootstrap';

export default function MyBikes(props) {
    return (
      <div>
        <Header />
        <ProfileNavbar />
        <Container className="mt-3">
          <Row>
            <Col className="text-center">
              <h1 className="mb-4">My Bikes</h1>
              <BikeDisplay setDefValue={props.setDefValue}/>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }