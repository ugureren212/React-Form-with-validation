import { Row, Col, Button, Form } from "react-bootstrap";
import useForm from "../hooks/useForm";
import validate from "../hooks/validateInfo";

export function FormInputs({ submitForm }) {
  //custom hook (useForm) is used to store important objects & methods
  //validate is imported from "./validateInfo" and is passed to useForm as a paremeter to validate form inputs
  //submitForm is passed to useForm to change isSubmitted to ture if form is c submitted

  const { handleChange, values, handleSubmit, errors, wordCount } = useForm(
    validate,
    submitForm
  );

  //form is broken into bootstrap rows and columns (grid system) to make form responsive

  // all three input feilds "fullName","email","notes" have the same logic.
  /*handleChange function is used to set the input fields current value to its corresponding "values" object value*/
  /*For example, the text input field named "fullName" will have its corresponding value (values.fullName) equal to whatever the user
  types into the "fullName" text input field. This process is executed by the handleChange function*/
  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col>
          <Form.Group className="mb-2">
            <Form.Label className="label">Full Name</Form.Label>

            <Form.Control
              type="text"
              name="fullName"
              id="fullName"
              placeholder="Enter Full Name"
              onChange={handleChange}
              value={values.fullName}
            />
            {/* if an error code exists a then the error message will be displayed bellow */}
            {errors.fullName && (
              <Form.Text className="ErrorText text-muted mb-2">
                <span className="ErrorText">{errors.fullName}</span>
              </Form.Text>
            )}
          </Form.Group>
        </Col>
      </Row>

      <Row>
        <Col>
          <Form.Group className="mb-2">
            <Form.Label className="label">Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              id="email"
              placeholder="Enter Email"
              onChange={handleChange}
              value={values.email}
            />
            {/* if an error code exists a then the error message will be displayed bellow */}
            {errors.email && (
              <Form.Text className=" mb-2">
                <span className="ErrorText">{errors.email}</span>
              </Form.Text>
            )}
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group className="mb-2">
            <Form.Label className="label">Notes</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter Notes"
              name="notes"
              id="notes"
              onChange={handleChange}
              value={values.notes}
            />
            {/* if an error code exists a then the error message will be displayed bellow */}
            <div className="notesStats">
              {errors.notes && (
                <span className="ErrorText">
                  <p className="ErrorText">{errors.notes}</p>
                </span>
              )}
              {/* "values.notes.length" will display the number of characters entered by the user in the notes text area.
              However, the wordCount variable is used to display the number of words in the  in the notes text area */}
              <p>Characters: {values.notes.length}</p>
              <p>Words: {wordCount}</p>
            </div>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col className="btn text-center">
          <Button variant="primary" type="submit" id="submitBtn">
            Submit
          </Button>
        </Col>
      </Row>
    </Form>
  );
}

export default FormInputs;
