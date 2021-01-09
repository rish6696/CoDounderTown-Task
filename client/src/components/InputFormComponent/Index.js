import Button from "../Button";
import React,{useState} from "react";
import InputLabel from "../Input-Label/Index";
import FLexLayout from "../FlexLayout";
import { connect } from "react-redux";
import { attemptSignUp } from "../../Actions/index";


function Index({ inputFields, btnText, isLogin }) {

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [name, setName] = useState("");
  const [reEnterPassword, setReEnterPassword] = useState("");

  const onLoginEmailChanged =(event)=>setLoginEmail(event.target.value)
  const onLoginPasswordChanged =(event)=>setLoginPassword(event.target.value)

  const onSignupEmailChanged =(event)=>setSignupEmail(event.target.value)

  const onSignUpPasswordChanged =(event)=>setSignupPassword(event.target.value)

  const onNameChanged =(event)=>setName(event.target.value)


  const onRenterPasswordChanged =(event)=>setReEnterPassword(event.target.value)



  const handleClick = async () => {
    if (isLogin === true) {
    } else {
      console.log("calling signup")

      
      
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
          <InputLabel value={loginPassword} onChange={onLoginPasswordChanged} label="Password" />
        </div>
      )}

      {!isLogin && (
        <div>
          <InputLabel  label="Name"  type='text' value={name} onChange={onNameChanged} />
          <InputLabel  label="Email" type='email' value={signupEmail} onChange={onSignupEmailChanged} />
          <InputLabel label="Password" type='password' value={signupPassword} onChange={onSignUpPasswordChanged} />
          <InputLabel label="Re enter Password" type='password' value={reEnterPassword} onChange={onRenterPasswordChanged} />
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
  attemptSignUp
};

export default connect(mapStateToProps, mapActionsToProps)(Index);
