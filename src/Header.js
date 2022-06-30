import React from "react";
import Logo from "./Image/logo.png";
import Button from "@mui/material/Button";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
const Header = (props) => {
  const DelData = () => {
    props.del();
  };
  return (
    <div className="header">
      <img src={Logo} alt="Logo" width="70" height="60" />
      <h1>KeepNotes</h1>
      <Button className="deletebtn" onClick={DelData}>
        <DeleteOutlineIcon className="delete-sign" />
      </Button>
    </div>
  );
};

export default Header;
