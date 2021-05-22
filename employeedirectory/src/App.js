import React, { useState, useEffect } from "react";
import Card from './components/Card/Card';
import Header from './components/Header/Header';
import Searchbar from './components/Searchbar/Searchbar'
import TableHead from './components/TableHead/TableHead'
import API from "./utils/API";
import Table from 'react-bootstrap/Table'
//import BootstrapTable from 'react-bootstrap-table-next';



function App() {

  const [search, setSearch] = useState("");
  const [userState, setUser] = useState([]);
  const [nueSearch, setNue] = useState([]);


  const handleInputChange = event => {
    const { value } = event.target;
    console.log(value);
    
    const filterSearch = userState.filter((user) => {
      return user.name.first
      .toLowerCase()
      .concat(" ", user.name.last.toLowerCase())
      .includes(value);
    })
    console.log(filterSearch);
    setNue(filterSearch);
    setSearch(value);
  }

  useEffect(() => {
    API.getUsers()
      .then(res => {
        console.log(res.data.results)
        setUser(res.data.results)
        setNue(res.data.results)
      })
      .catch(err => console.log(err));
  }, []);

  const sortUsers = () => {
    const nueRes = [...nueSearch]
    const sortedUsers = nueRes.sort((a,b)=>
    a.name.first > b.name.first ? 1 : -1)
    setNue(sortedUsers);
  }

  return (
    <div>
      <Header />
      <Searchbar search={search} handleInputChange={handleInputChange} />
      <Table striped bordered hover>
      <TableHead sortUsers={sortUsers}/>
      <tbody>
      {nueSearch.map(user =>
        <Card
          photo={user.picture.medium}
          name={user.name.first + ' ' + user.name.last}
          age={user.dob.age}
          email={user.email}
          phone={user.phone}
        />
      )}
      </tbody>
      </Table>
    </div>
  );
}
export default App;
