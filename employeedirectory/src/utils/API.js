import axios from "axios";

export default {
    getUsers: function(){
        return new Promise((resolve, reject) => {
        axios.get("https://randomuser.me/api/?inc=name,email,dob,phone,picture?results=20").then((res) => {
            const users = res.data.results;
            const results = users.map((user) => {
                return {
                    firstname: user.name.first,
                    lastname: user.name.last,
                    email: user.email,
                    dob: user.dob.age,
                    phone: user.phone,
                    picture: user.picture.medium,
                };
            });
            resolve(results);
        }).catch((err) => reject(err));
     });
    }
};