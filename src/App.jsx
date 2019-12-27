import React from "react";
import { Component } from "react";
import "./App.css";

import { connect } from "react-redux";
import {addItemAction} from "../action/actions";
import addItemReducer from "../reducers/addItem";

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

  editItem = (value, id) => {
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
            value={this.state.newItem} 
            onChange={this.updateInput} />
          <button id="btn-add" onClick={this.addItem}>
            Add Task
          </button>
          <br />
          <ul>
            {this.state.list.map(item => {
              return (
                <li key={item.id}>
                  <div className="list">
                    <input
                      className="inputTask"
                      type="text"
                      id={item.id}
                      value={item.value}
                      onChange={e => {
                        this.editItem(e.target.value, item.id);
                      }}/>
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

export default connect() (App);
