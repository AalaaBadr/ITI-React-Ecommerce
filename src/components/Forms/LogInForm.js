import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function LogInForm({ error,userForm, handleInputChange, handleSubmit }) {
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" name="email" value={userForm.email}
            onChange={handleInputChange}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name="password" value={userForm.password}
            onChange={handleInputChange}/>
      </Form.Group>

      <Button variant="success" type="submit">
        Submit
      </Button>
      <Form.Text className="text-danger"> {error} </Form.Text>
    </Form>
  )
}
