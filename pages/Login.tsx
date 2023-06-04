import Link from "next/link";
import { Button, Container, Form, FormControl, FormGroup, FormLabel, Row } from "react-bootstrap";

const Login = () => {
    return ( 
        <div>
            <Container className=" bg-white rounded justify-center flex-col w-50">
                <Row >
                <Form className=" justify-content-center">
                <h1 className="h3 mb-3 font-weight-normal text-center mt-3">Please sign in</h1>
                    <FormGroup className=" ms-5">
                        <FormLabel>Email</FormLabel>
                        <FormControl type="text" placeholder="useremail@domain.com" className="w-75 mr-sm-2 mb-4" />
                    </FormGroup>
                    <FormGroup className=" ms-5">
                        <FormLabel>Password </FormLabel>
                        <FormControl type="password" className=" w-75 mr-sm-2 " />
                    </FormGroup>
                    <Link href="/" className=" ms-5 mb-3">Forgot Password?</Link><br />
                    <Button className="btn-lg btn-block mb-3 mt-5 justify-content-center" variant="primary">Sign In</Button>
                </Form>
                </Row>
            
            </Container>
        </div>
     );
}
 
export default Login;