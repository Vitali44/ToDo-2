import React from "react";
import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newItem: "",
      list: [],
    };
  }

  updateInput = event => {
    this.setState({
      newItem: event.target.value});
  }

  deleteItem = id => {
    const list = [...this.state.list];
    const updatedList = list.filter(item => item.id !== id);

    this.setState({ list: updatedList });
  };

  setUpdate = (value, id) => {
    const { list } = this.state;
    const updatedList = list.map(item => {
      if (item.id === id) {
        return {
          ...item,
          value,
        };
      }
      return item;
    });

    this.setState({
      list: updatedList,
    });
  };

  addItem = () => {
    //создаём элемент с уникальным айдишником
    //значение добавляется в текущий массив через метод slice
    // console.log("this.state.newItem");
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem,
    };

    console.log(newItem);

    this.setState(prevState => ({
      list: [...prevState.list, newItem],
      newItem: '',
    }));
  };

  render() {
    return (
      <div className="App">
        <div id="form">
          <span id="title">To Do List</span>
          <br />
          <input
            id="input-form"
            type="text"
            placeholder="Enter task"
            value={this.state.newItem} //когда юзер будет вводить данные они будут записаны в новый айтем в стейте
            onChange={this.updateInput} //event.target.value это значение выбранного селектора
          />
          <button id="btn-add" onClick={this.addItem}>
            Add Task
          </button>
          <br />
          <ul>
            {this.state.list.map(item => {
              return (
                <li key={item.id}>
                  <div className="list">
                    {/* {item.value} */}
                    <input
                      className="inputTask"
                      type="text"
                      id={item.id}
                      value={item.value}
                      onChange={e => {
                        this.setUpdate(e.target.value, item.id);
                      }}/>
                    {/* <button className={this.state.text === "EDIT" ? "edit" : "save"} onClick={() => this.editItem(item.id)}>!</button> */}
                    {/* <button onClick={() => this.editItem(item.id)}>!</button> */}
                    <button
                      id="btn-delete"
                      onClick={() => this.deleteItem(item.id)}
                    >
                      X
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
