import React, { Component } from 'react';
import './App.css';
import Content from "./Component/Content";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSyncAlt, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

library.add(faSyncAlt, faShoppingCart);
class App extends Component {
  state = {
    Bigcount: 0,
    users: [0, 0, 0,0]
  }


  checkBigCounter = (type, index) => {
    const value = this.state.users[index]
    if (value === 1 && type === "-")
      this.setState({ Bigcount: this.state.Bigcount - 1 })


    if (value === 0 && type === "+")
      this.setState({ Bigcount: this.state.Bigcount + 1 })

  }

  clearcounters = () => {
    var newArray = [...this.state.users].map((v) => { return v = 0 })
    this.setState({
      Bigcount: 0,
      users: newArray
    })

  }

  eventCounter = (type, index) => {
    this.checkBigCounter(type, index)
    console.log("type: " + type + " index: " + index);
    var usersCopy = this.state.users;

    if (type === "+") {
      usersCopy[index] = usersCopy[index] + 1;
      this.setState({
        users: usersCopy
      })
    } else {
      usersCopy[index] = usersCopy[index] - 1;
      this.setState({
        users: usersCopy
      })
    }
  }


  render() {
    let counterr = this.state.Bigcount;
    var rows = [];
    this.state.users.forEach((value, i) => {
      var view = <Content key={i} key2={i} onChangeValue={this.eventCounter} user={value} />;
      rows.push(view);
    })


    return (
      <div className="Container">
<header className="header">
        <div className="header-wraper">
        <FontAwesomeIcon icon="shopping-cart" />
          <button className="btn-header">{counterr}</button>
          <span className="txt-header"> items </span>
        </div>
        </header>


        <div className="body"><button className="ref" onClick={this.clearcounters}> <FontAwesomeIcon icon="sync-alt"  className="ico-ref"/> </button></div>
        <div className="footer"> {rows}</div>

      </div>
    )
  }

} export default App