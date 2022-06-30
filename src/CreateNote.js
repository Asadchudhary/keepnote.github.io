import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
const CreateNote = (props) => {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;

    setNote((predata) => {
      return {
        ...predata,
        [name]: value,
      };
    });
    console.log(note);
  };

  const AddEvent = () => {
    props.passNote(note);
    setNote({
      title: "",
      content: "",
    });
  };

  return (
    <div className="main-note">
      <form>
        <input
          type="text"
          name="title"
          value={note.title}
          onChange={InputEvent}
          placeholder="Title"
          autoComplete="off"
        />

        <textarea
          rows=""
          column=""
          name="content"
          value={note.content}
          onChange={InputEvent}
          placeholder="Write Your Note"
        ></textarea>

        <Button onClick={AddEvent}>
          <AddIcon className="plus-sign" />
        </Button>
      </form>
    </div>
  );
};

export default CreateNote;
