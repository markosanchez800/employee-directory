import React, {Component} from "react";
import Card from './components/Card/Card';
import Header from './components/Header/Header';
import Searchbar from './components/Searchbar/Searchbar'
import API from "./utils/API";

class App extends Component {
  state = {
    users: "",
    results: [],
  }

  componentDidMount(){
    this.getUsers();
  }

  getUsers = () => {
    API.getUsers()
    .then((res) => {
      console.log(res);
    this.setState({results: res.data.results})
    }).catch(err => console.log(err));
  }
  
    render(){
    return (
    <div>
  
    <Header /> 
    <Searchbar />
    <Card 
    results={this.state.results}
    />
    </div>
    );
  }
}
export default App;
