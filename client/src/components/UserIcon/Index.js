import React from "react";
import Circle from "../CircleComponent/Index";
import { Dropdown } from 'react-bootstrap'
import { Link } from "react-router-dom";
import { withRouter } from 'react-router-dom'
import {connect} from 'react-redux'
import { attemptLogout }  from '../../Actions/index'

function Index({history,userNameAlphabet,attemptLogout}) {

  const logout =()=>{
    history.push('/user/blogs')
  }
  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
      href=""
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}                          
    >
      <Circle className="user-icon" radius={50}>
        <div style={{ fontFamily: "poppinsBold" }}>{userNameAlphabet}</div>
      </Circle>
      {children}
    </a>
  ));

  return (
    <Dropdown>
      <Dropdown.Toggle as={CustomToggle} id="dropdown-basic"></Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={()=>history.push('/blog/create')} > Write a Story </Dropdown.Item>
        <Dropdown.Item onClick={logout} > My Blogs</Dropdown.Item>
        <Dropdown.Item onClick={()=>attemptLogout(history)} >Logout</Dropdown.Item>
        <Dropdown.Item  >Change Password</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

const mapStateToProps=(state)=>{
  return {}
}

const mapActionsToProps={
  attemptLogout
}


export default connect(mapStateToProps,mapActionsToProps)(withRouter(Index));
