import React, { useState } from "react";
import CreateNote from "./CreateNote";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";
import "./KeepNote.css";

const Home = (props) => {
  const [addItem, setAddItem] = useState([]);
  const AddNote = (note) => {
    setAddItem((olddata) => {
      return [...olddata, note];
    });
    console.log(note);
  };

  const onDelete = (id) => {
    setAddItem((olddata) => {
      return olddata.filter((Elm, index) => {
        return index !== id;
      });
    });

    console.log("Deleted");
  };

  const DeleteWhole = () => {
    console.log("Delete Whole");
    setAddItem([]);
  };
  return (
    <div>
      <Header del={DeleteWhole} />
      <CreateNote passNote={AddNote} />

      {addItem.map((val, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={val.title}
            content={val.content}
            deleteItem={onDelete}
          />
        );
      })}
      <Footer />
    </div>
  );
};

export default Home;
