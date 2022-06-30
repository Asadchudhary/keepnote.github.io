import React from "react";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const Note = (props) => {
  const DeleteFun = () => {
    props.deleteItem(props.id);
  };
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button className="btn" onClick={DeleteFun}>
        <DeleteOutlineIcon className="deleteicon" />
      </button>
    </div>
  );
};

export default Note;
