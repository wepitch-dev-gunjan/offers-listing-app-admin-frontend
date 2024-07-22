import React, { useEffect, useState } from "react";
import "./style.scss";
import axios from "axios";

const Users = () => {
  const [users, setUsers] = useState([]);
  let data = [
    {
      id: 1,
      name: "xyz",
      email: "abcd@gmail.com",
      phone: "7458963215",
      brands: "Gucci",
      offers: "70%",
    },
    {
      id: 1,
      name: "xyz",
      email: "abcd@gmail.com",
      phone: "7458963215",
      brands: "Gucci",
      offers: "70%",
    },
    {
      id: 1,
      name: "xyz",
      email: "abcd@gmail.com",
      phone: "7458963215",
      brands: "Gucci",
      offers: "70%",
    },
    {
      id: 1,
      name: "xyz",
      email: "abcd@gmail.com",
      phone: "7458963215",
      brands: "Gucci",
      offers: "70%",
    },
    {
      id: 1,
      name: "xyz",
      email: "abcd@gmail.com",
      phone: "7458963215",
      brands: "Gucci",
      offers: "70%",
    },
    {
      id: 1,
      name: "xyz",
      email: "abcd@gmail.com",
      phone: "7458963215",
      brands: "Gucci",
      offers: "70%",
    },
    {
      id: 1,
      name: "xyz",
      email: "abcd@gmail.com",
      phone: "7458963215",
      brands: "Gucci",
      offers: "70%",
    },
    {
      id: 1,
      name: "xyz",
      email: "abcd@gmail.com",
      phone: "7458963215",
      brands: "Gucci",
      offers: "70%",
    },
    {
      id: 1,
      name: "xyz",
      email: "abcd@gmail.com",
      phone: "7458963215",
      brands: "Gucci",
      offers: "70%",
    },
    {
      id: 1,
      name: "xyz",
      email: "abcd@gmail.com",
      phone: "7458963215",
      brands: "Gucci",
      offers: "70%",
    },
    {
      id: 1,
      name: "xyz",
      email: "abcd@gmail.com",
      phone: "7458963215",
      brands: "Gucci",
      offers: "70%",
    },
    {
      id: 1,
      name: "xyz",
      email: "abcd@gmail.com",
      phone: "7458963215",
      brands: "Gucci",
      offers: "70%",
    },
    {
      id: 1,
      name: "xyz",
      email: "abcd@gmail.com",
      phone: "7458963215",
      brands: "Gucci",
      offers: "70%",
    },
    {
      id: 1,
      name: "xyz",
      email: "abcd@gmail.com",
      phone: "7458963215",
      brands: "Gucci",
      offers: "70%",
    },
    {
      id: 1,
      name: "xyz",
      email: "abcd@gmail.com",
      phone: "7458963215",
      brands: "Gucci",
      offers: "70%",
    },
    {
      id: 1,
      name: "xyz",
      email: "abcd@gmail.com",
      phone: "7458963215",
      brands: "Gucci",
      offers: "70%",
    },
    {
      id: 1,
      name: "xyz",
      email: "abcd@gmail.com",
      phone: "7458963215",
      brands: "Gucci",
      offers: "70%",
    },
    {
      id: 1,
      name: "xyz",
      email: "abcd@gmail.com",
      phone: "7458963215",
      brands: "Gucci",
      offers: "70%",
    },
    {
      id: 1,
      name: "xyz",
      email: "abcd@gmail.com",
      phone: "7458963215",
      brands: "Gucci",
      offers: "70%",
    },
    {
      id: 1,
      name: "xyz",
      email: "abcd@gmail.com",
      phone: "7458963215",
      brands: "Gucci",
      offers: "70%",
    },
    {
      id: 1,
      name: "xyz",
      email: "abcd@gmail.com",
      phone: "7458963215",
      brands: "Gucci",
      offers: "70%",
    },
    {
      id: 1,
      name: "xyz",
      email: "abcd@gmail.com",
      phone: "7458963215",
      brands: "Gucci",
      offers: "70%",
    },
    {
      id: 1,
      name: "xyz",
      email: "abcd@gmail.com",
      phone: "7458963215",
      brands: "Gucci",
      offers: "70%",
    },
    {
      id: 1,
      name: "xyz",
      email: "abcd@gmail.com",
      phone: "7458963215",
      brands: "Gucci",
      offers: "70%",
    },
  ];

  const fetchUsers = async () => {
    try {
      const { data } = await axios.get(`http://localhost:8080/user/users`);
      setUsers(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <div class="table-container">
      <div class="row header">
        <div class="col">Name</div>
        <div class="col">Email</div>
        <div class="col">Phone</div>
        <div class="col">Brands</div>
        <div class="col">Offers</div>
      </div>

      {users.map((user, i) => (
        <div class="row" key={i}>
          <div class="col">{user.name}</div>
          <div class="col">{user.email}</div>
          <div class="col">{user.gender}</div>
          <div class="col">{user.phone_no}</div>
          <div class="col"></div>
        </div>
      ))}
    </div>
  );
};

export default Users;
