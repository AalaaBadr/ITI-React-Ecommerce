import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function RegisterForm({ userForm, userFormError, handleInputChange, handleSubmit }) {
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formUser">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter Your Name" name="name" value={userForm.name}
            onChange={handleInputChange}/>
        <Form.Text className="text-danger"> {userFormError.name} </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" name="email" value={userForm.email}
            onChange={handleInputChange}/>
        <Form.Text className="text-danger"> {userFormError.email} </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formUserName">
        <Form.Label>User Name</Form.Label>
        <Form.Control type="text" placeholder="Enter User Name" name="userName" value={userForm.userName}
            onChange={handleInputChange}/>
        <Form.Text className="text-danger"> {userFormError.userName} </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name="password" value={userForm.password}
            onChange={handleInputChange}/>
        <Form.Text className="text-danger"> {userFormError.password} </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formConfirmPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" placeholder="Confirm Password" name="confirmPassword" value={userForm.confirmPassword}
            onChange={handleInputChange}/>
        <Form.Text className="text-danger"> {userFormError.confirmPassword} </Form.Text>
      </Form.Group>
      
      <Button variant="success" type="submit">
        Submit
      </Button>
    </Form>
  )
}