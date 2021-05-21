import React, {useState, useEffect} from "react";
import Card from './components/Card/Card';
import Header from './components/Header/Header';
import Searchbar from './components/Searchbar/Searchbar'
import API from "./utils/API";

function App() {

  const [search, setSearch] = useState([]);
  const [userState, setUser] = useState([]);


  const handleInputChange = event => {
    const { value } = event.target;
    console.log(value);
    setSearch(value);
  }

  const handleSubmit = () => {}

  useEffect(() => {
    API.getUsers()
    .then(res => {
      console.log(res.data.results)
      setUser(res.data.results)
    })
    .catch(err => console.log(err));
  }, []);
  
    return (
    <div>
    <Header /> 
    <Searchbar />
    {userState.map(user => 
    <Card 
    photo = {user.picture.medium}
    name = {user.name.last + ', ' + user.name.first}
    age = {user.dob.age}
    email = {user.email}
    phone = {user.phone}
    />
    )}
    </div>
    );
}
export default App;
