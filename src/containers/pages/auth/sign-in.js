import React from 'react'
import { Form, Input, Button } from 'antd'
import { Link } from 'react-router-dom'
import { connect  } from 'react-redux'
import { AUTH_PATHS } from 'constants/paths'
import { createStructuredSelector } from 'reselect'
import { getError, getIsLoading } from 'store/selectors/auth'
import { signIn } from 'store/actions/auth'

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 8 },
};

const validateMessages = {
  required: 'Please input your ${label}!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};

const SignIn = () => {
  const onFinish = values => {
    console.log(values);
  };

  return (
    <Form 
      {...layout}
      className='auth-form'
      onFinish={onFinish} 
      validateMessages={validateMessages}
    >
      <Form.Item name={['user', 'email']} label="Email" rules={[{ required: true, type: 'email' }]}>
        <Input />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input password!' }]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Sign in
        </Button>
        <div>
          Doesn't have an account? <Link to={AUTH_PATHS.SIGN_UP}>Sign up here</Link>
        </div>
      </Form.Item>
    </Form>
  );
};

export default connect(
  createStructuredSelector({
    error: getError,
    isLoading: getIsLoading
  }),
  {
    onSignIn: signIn
  }
)(SignIn)