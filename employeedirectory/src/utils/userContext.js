import React from "react";

const UserContext = React.createContext({
  firstname: "",
  lastname: "",
  email: "",
  dob: "",
  phone: "",
  image: "",
  capitalizeFirstLetter: () => {},
});

export default UserContext;