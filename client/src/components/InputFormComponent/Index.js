import Button from "../Button";
import React, { useState } from "react";
import InputLabel from "../Input-Label/Index";
import FLexLayout from "../FlexLayout";
import { connect } from "react-redux";
import { attemptSignUp,attemptLogin } from "../../Actions/index";
import Joi from "joi";
import { withRouter } from 'react-router-dom'

function Index(props) {
  const {inputFields, btnText, isLogin,history ,signUpAction,attemptLogin}=props
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [name, setName] = useState("");
  const [reEnterPassword, setReEnterPassword] = useState("");

  const onLoginEmailChanged = (event) => setLoginEmail(event.target.value);
  const onLoginPasswordChanged = (event) => setLoginPassword(event.target.value);

  const onSignupEmailChanged = (event) => setSignupEmail(event.target.value);

  const onSignUpPasswordChanged = (event) => setSignupPassword(event.target.value);

  const onNameChanged = (event) => setName(event.target.value);

  const onRenterPasswordChanged = (event) => setReEnterPassword(event.target.value);

  const SignUpSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email({ tlds: { allow: false } }),
    password: Joi.string().required(),
    reEnterPassword: Joi.string().required(),
  });

  const loginSchema = Joi.object({
    email: Joi.string().email({ tlds: { allow: false } }).required(),
    password: Joi.string().required(),
  });

  const handleClick = async () => {
    console.log("clicked");
    if (isLogin === true) {
      try {
        await loginSchema.validateAsync({
          email: loginEmail,
          password: loginPassword,
        });

        attemptLogin({email:loginEmail,password:loginPassword,history})

      } catch (error) {
        console.log(error.message);
        alert(error.message);
      }
    } else {
      try {
        await SignUpSchema.validateAsync({
          name,
          email: signupEmail,
          password: signupPassword,
          reEnterPassword: reEnterPassword,
        });

        if (signupPassword.localeCompare(reEnterPassword) != 0) {
          return alert("Password does not match");
        }

        signUpAction({email:signupEmail,password:signupPassword,name,history:history})

      } catch (error) {
        console.log(error.message);
        alert(error.message);
      }
    }
  };

  return (
    <FLexLayout
      rowORColumn="column"
      style={{ backgroundColor: "#202027", width: "600px", padding: "20px" }}
      alignItem="center"
      justifyContent="center"
    >
      {isLogin && (
        <div>
          <InputLabel value={loginEmail} onChange={onLoginEmailChanged} label="Email" />
          <InputLabel
            value={loginPassword}
            onChange={onLoginPasswordChanged}
            label="Password"
            type='password'
          />
        </div>
      )}

      {!isLogin && (
        <div>
          <InputLabel label="Name" type="text" value={name} onChange={onNameChanged} />
          <InputLabel
            label="Email"
            type="email"
            value={signupEmail}
            onChange={onSignupEmailChanged}
          />
          <InputLabel
            label="Password"
            type="password"
            value={signupPassword}
            onChange={onSignUpPasswordChanged}
  
          />
          <InputLabel
            label="Re enter Password"
            type="password"
            value={reEnterPassword}
            onChange={onRenterPasswordChanged}
          />
        </div>
      )}

      <Button onClick={handleClick} className="Button-Login" text={btnText} />
    </FLexLayout>
  );
}

const mapStateToProps = (state) => {
  return {
    pageWidth: state.pageWidth.value,
  };
};

const mapActionsToProps = {
  signUpAction: attemptSignUp,
  attemptLogin
};

export default connect(mapStateToProps, mapActionsToProps)(withRouter(Index));
