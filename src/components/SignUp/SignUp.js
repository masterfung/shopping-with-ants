import {
  Form,
  Input,
  Select,
  Row,
  Col,
  Button,
  Typography,
  notification
} from "antd";
import { useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { createUserProfileDocument } from "../../firebase/firebase.utils";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import "./SignUp.scss";

const { Option } = Select;
const { Title } = Typography;


const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const SignUpForm = () => {
  const [form] = Form.useForm();
  const currentUser = useSelector((state) => state.user.currentUser);
  const onFinish = (values) => {
    const { email, password, confirm, gender, displayName } = values;
    if (password !== confirm) {
      notification["error"](
        {
          message: "Password does not match confirmation",
          description:
            "Please correct issue before proceeding.",
          duration: 5,
        }
      );
      return;
    }

    try {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          console.log('successful on creation of user with function', userCredential);
          // ...
        })
        .catch((error) => {
          console.log('Sign up error has occurred', error);
          // ..
        });
      createUserProfileDocument({email, displayName}, {gender});
      notification["success"](
        {
          message: "Sign Up Was Successful",
          description:
            "Please log in with your account information.",
          duration: 5,
        }
      );
      form.resetFields();
    } catch (err) {
      console.log("An error has occurred with sign up", err);
    }
    
  };

  return (
    currentUser?.id 
    ? <Navigate to="/"></Navigate>
    : <Row className="sign-up-container">
      <Col span={6} offset={8}>
      <Title className="title">Sign Up</Title>
        <Form
          form={form}
          name="signUp-form"
          onFinish={onFinish}
          scrollToFirstError
        >
          <Form.Item
            name="email"
            label="E-mail"
            rules={[
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
              {
                required: true,
                message: "Please input your E-mail!",
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
                message: "Please input your password!",
              },
              {
                len: 7,
                message: "Passwords need to be at least 7 characters"
              }
            ]}
            hasFeedback
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="confirm"
            label="Confirm Password"
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please confirm your password!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }

                  return Promise.reject(new Error("The two passwords that you entered do not match!"));
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="displayName"
            label="Display Name"
            tooltip="What do you want others to call you?"
            rules={[
              {
                required: true,
                message: "Please input your nickname!",
                whitespace: true,
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="gender"
            label="Gender"
            rules={[
              {
                required: true,
                message: "Please select gender!",
              },
            ]}
          >
            <Select placeholder="select your gender">
              <Option value="male">Male</Option>
              <Option value="female">Female</Option>
              <Option value="other">Other</Option>
            </Select>
          </Form.Item>

          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
              Register
            </Button>
            {"  "}
              or <Link to="/signin">Sign In</Link>
          </Form.Item>
        </Form>
      </Col>
    </Row>
    
  );
};

export default SignUpForm;