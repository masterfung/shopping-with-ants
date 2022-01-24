import { Form, Input, Button, Checkbox, Col, Row, Typography } from 'antd';
import { Link } from 'react-router-dom';
import { signInWithGoogle } from '../../firebase/firebase.utils';

import "./SignIn.scss";

const { Title } = Typography;

const SignInForm = () => {
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };

  return (
    <Row className="sign-in-container">
      <Col span={6} offset={8}>
        <Title className="title">Sign In</Title>
        <Form
          name="signIn-form"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
        <Form.Item
          name="email"
          label="E-mail"
          rules={[
            {
              type: 'email',
              message: 'The input is not valid E-mail!',
            },
            {
              required: true,
              message: 'Please input your E-mail!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="password"
          label="Password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
          hasFeedback
        >
          <Input.Password />
        </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <a className="login-form-forgot" href="">
              Forgot password
            </a>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button>
            {"  "}
            Or <Link to="/signUp">register now</Link>
          </Form.Item>
          
          <Form.Item>
          <Button type="primary" className="login-form-button" onClick={signInWithGoogle}>
              Sign In With Google
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};


export default SignInForm;