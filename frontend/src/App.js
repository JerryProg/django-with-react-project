import React, { Component } from "react";
import Modal from "./components/Modal";
import axios from "axios";

// const ipItems = [
//   {
//     id: 1,
//     ip_address: "1921680",
//     ip_combination: "Combinations of ...",
//   },
//   {
//     id: 2,
//     ip_address: "255255255255",
//     ip_combination: "Combinations of ...",
//   },
// ];

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      viewCompleted: false,
      ipList: [],
      activeItem: {
        ip_address: "",
        ip_combination: "",
        ip_joined: "",
        completed: false,
      },
    };
  }

  componentDidMount() {
    this.refreshList();
  }

  refreshList = () => {
    axios
      .get("/info/")
      .then((res) => this.setState({ ipList: res.data }))
      .catch((err) => console.log(err));
  };

  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };

  handleSubmit = item => {
    this.toggle();
    if (item.id) {
      axios
        .put(`/info/${item.id}/`, item)
        .then((res) => this.refreshList());
      return;  
    }
    axios
      .post("/info/", item)
      .then((res) => this.refreshList());
  };

  createItem = () => {
    const item = {ip_address: "", completed: false };
    this.setState({ activeItem: item, modal: !this.state.modal });
  };

  handleDelete = (item) => {
    axios
      .delete('/info/${item.id}')
      .then((res) => this.refreshList());
  }

  displayCompleted = status => {
    if (status) {
      return this.setState({ viewCompleted: true});
    }
    return this.setState({ viewCompleted: false});
  };

  renderTabList = () => {
    return (
      <div className="nav nav-list">
        <button 
          onClick={() => this.displayCompleted(true)}
          className={this.state.viewCompleted ? "nav-link active" : "nav-link"}
        >
          Completo
        </button>
        <button 
          onClick={() => this.displayCompleted(false)}
          className={this.state.viewCompleted ? "nav-link" : "active"}
        >
          Incompleto
        </button>
      </div>  
    );
  };

  renderItems = () => {
    const { viewCompleted } = this.state;
    const newItem = this.state.ipList.filter(
      item => item.completed === viewCompleted
    );
    return newItem.map(item => (
        <li 
          key={item.id}
          className="list-group-item d-flex justify-content-between align-items-center"
        >
          <span 
            className={`ip_title mr-2 ${
              this.state.viewCompleted ? "completed-todo" : ""
            }`}
            title={item.ip_combination}
            >
              {item.ip_address}
            </span>
            <span>
              <button
                className="btn btn-secondary mr-2"
                onClick={() => this.editItem(item)}
              >
                Editar
              </button>

            </span>
        </li>      
      ));
  }

  render() {
    return(
      <main className="content">
        <h1 className="text-white text-uppercase text-center my-4">Ip generator</h1>
        <div className="row">
          <div className="col-md-6 col-sm-10 mx-auto p-0">
            <div className="card p-3">
              <div className="mb-4">
                <button onClick={this.createItem} className="btn btn-primary">Nueva Ip</button>
              </div>
              {this.renderTabList()}
              <ul className="list-group list-group-flush">
                {this.renderItems()}
              </ul>
            </div>
          </div>
        </div>
      {this.state.modal ? (
          <Modal
            activeItem={this.state.activeItem}
            toggle={this.toggle}
            onSave={this.handleSubmit}
          />
        ): null}
    </main>
    )
  }
}

export default App;