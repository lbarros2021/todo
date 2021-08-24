import React, { Component } from "react";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import "./styles.css";

const GlobalStyle = createGlobalStyle` body 
 {@import url("https://fonts.googleapis.com/css2?family=Inconsolata:wght@300;400;500&display=swap");
    margin: 0;
    padding: 0;
    background-image: linear-gradient(180deg, #00bfff, #1e90ff, #00c5cd);
    font-family: "Inconsolata", monospace;
    min-height: 100vh;   
}
`;

const TrashImg = styled.img`
  width: 15px;
`;

const Box = styled.input`
  width: 30vw;
  height: 6vh;
  border: none;
  font-size: 20px;
`;
const Add = styled.button`
  background-color: #00ffff;
  border: none;
  width: 10vw;
  height: 5vh;
  border-radius: 20%;
  margin: 1rem;
  font-size: 20px;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TodoGif = styled.img`
  width: 200px;
  margin: 3rem;
`;
const List = styled.li`
  list-style: none;
  color: #b22222;
  font-size: 1.5rem;
`;
const BoxList = styled.button`
  margin: 0.75rem;
  background-color: #00ffff;
  border: none;
`;
export default class Todo extends Component {
  state = {
    task: "",
    listTask: []
  };

  removeTask = (ev, id) => {
    ev.preventDefault();
    this.setState({
      listTask: this.state.listTask.filter((item) => {
        return item.id !== id;
      })
    });
  };

  handleChange = (event) => {
    this.setState({
      task: event.target.value
    });
  };

  addTask = (event) => {
    if (this.state.task.length !== 0) {
      this.setState({
        listTask: this.state.listTask.concat({
          task: this.state.task,
          id: Date.now()
        }),
        task: ""
      });
    }
    event.preventDefault();
  };

  render() {
    return (
      <>
        <GlobalStyle />
        <Form>
          <TodoGif
            src="https://www.primecursos.com.br/blog/wp-content/uploads/2018/08/CooperativeSinfulFieldmouse-size_restricted.gif"
            alt="Gif To Do List Nothing"
          />
          <h1>ToDo</h1>
          <Box value={this.state.task} onChange={this.handleChange} />
          <Add onClick={this.addTask}>Add</Add>
          <div>
            {this.state.listTask.map((item, index) => (
              <div key={index}>
                <List>
                  {item.task}
                  <BoxList
                    onClick={(ev) => {
                      this.removeTask(ev, item.id);
                    }}
                  >
                    <TrashImg
                      src="https://img.icons8.com/material-outlined/24/000000/delete-trash.png"
                      alt="lixeira todo"
                    />
                  </BoxList>
                </List>
              </div>
            ))}
          </div>
        </Form>
      </>
    );
  }
}
