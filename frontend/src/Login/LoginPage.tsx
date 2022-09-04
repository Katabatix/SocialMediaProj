import React from 'react';
import { Button, Card, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

type LoginPageProps = {
    number: number;
}


const LoginPage = ({ number }: LoginPageProps): JSX.Element => {
    // return (
    //     <Form>
    //         <Form.Group className="mb-3" controlId="formBasicEmail">
    //             <Form.Label>Email address</Form.Label>
    //             <Form.Control type="email" placeholder="Enter email" />
    //             <Form.Text className="text-muted">
    //                 We'll never share your email with anyone else.
    //         </Form.Text>
    //         </Form.Group>

    //         <Form.Group className="mb-3" controlId="formBasicPassword">
    //             <Form.Label>Password</Form.Label>
    //             <Form.Control type="password" placeholder="Password" />
    //         </Form.Group>
    //         <Form.Group className="mb-3" controlId="formBasicCheckbox">
    //             <Form.Check type="checkbox" label="Check me out" />
    //         </Form.Group>
    //         <Button variant="primary" type="submit">
    //             Submit
    //       </Button>
    //     </Form>`
    // );
    const handleSubmit = () => {

    }

    return (<>
        <Card style={{ width: "100%", height: "100%" }}>
            <Form onSubmit={handleSubmit}>
                <Form.Label>
                    Username {number}
                </Form.Label>
                <Form.Control type="username" placeholder="Enter your username">
                </Form.Control>
                <Button type="submit">Submit</Button>
            </Form>
        </Card>


    </>)
}

export default LoginPage;