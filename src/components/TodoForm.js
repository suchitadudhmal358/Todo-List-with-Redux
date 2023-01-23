import React, { useState } from "react";
import {
  Container,
  Form,
  FormGroup,
  Input,
  InputGroup,
  Button,
} from "reactstrap";
import { v4 } from "uuid";

import { connect } from "react-redux";
import { addTodo } from "../action/todo";

const TodoForm = ({ addTodo }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title === "") {
      return alert("please enter some todo");
    }

    const todo = {
      title,
      id: v4(),
    };

    addTodo(todo);
    setTitle("");
  };
  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <InputGroup>
          <Input
            type="text"
            name="todo"
            id="todo"
            placeholder="Enter your todo"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Button type="submit" color="primary">
            Add +
          </Button>
        </InputGroup>
      </FormGroup>
    </Form>
  );
};

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({
  addTodo: (todo) => {
    dispatch(addTodo(todo));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
