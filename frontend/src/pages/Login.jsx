import React, { useEffect, useState } from 'react';
import { Form, useNavigate } from 'react-router-dom';
import { useUserDetail } from '../contexts/useUserContext';
import { getUser } from "../controllers/getUser"

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [userMail] = useUserDetail()
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  useEffect(() => {
    const fetchUserData = async () => {
      setUser(await getUser(credentials.email))
    };

    if (userMail)
      fetchUserData();

  }, [credentials.email]);

  const validateForm = async (e) => {
    e.preventDefault();
    const loginData = {
      email: e.target.email.value,
      password: e.target.pass.value,
    };
    setCredentials(loginData);
  };

  useEffect(() => {
    try
    {
      if (user && credentials.email === user.email[0] && credentials.password === user.password[0])
        navigate('/');

      if (credentials && user && credentials.password !== user.password[0])
        throw new Error("Incorrect Password")
    }
    catch (error)
    {
      console.error(error.message)
      alert("Incorrect Password")
    }
  }, [user, credentials, navigate]);



  return (
    <div>
      <section className="form-container">
        <Form
          method="post"
          encType="multipart/form-data"
          onSubmit={validateForm}
        >
          <h3>login now</h3>
          <p>Your Email <span>*</span></p>
          <input
            type="email"
            name="email"
            placeholder="enter your email"
            required
            maxLength="50"
            className="box"
          />
          <p>Your Password <span>*</span></p>
          <input
            type="password"
            name="pass"
            placeholder="enter your password"
            required
            maxLength="20"
            className="box"
          />

          <input type="submit" value="login new" name="submit" className="btn" />
        </Form>
      </section>
    </div>
  );
};

export default Login;
