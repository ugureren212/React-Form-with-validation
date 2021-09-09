import { Row, Col } from "react-bootstrap";

//This component is rendered once the form is submitted successfully
export const FormSuccess = () => {
  return (
    <Row>
      <Col id="SuccessMessage" className="text-center">
        <h1>Thank You</h1>
      </Col>
    </Row>
  );
};
