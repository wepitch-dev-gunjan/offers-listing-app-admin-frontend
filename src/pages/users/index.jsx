import React from 'react'
import './style.scss'

const Users = () => {
    let data = [
        { id: 1, name: "xyz", email: "abcd@gmail.com", phone: "7458963215", brands: "Gucci", offers: "70%" },
        { id: 1, name: "xyz", email: "abcd@gmail.com", phone: "7458963215", brands: "Gucci", offers: "70%" },
        { id: 1, name: "xyz", email: "abcd@gmail.com", phone: "7458963215", brands: "Gucci", offers: "70%" },
        { id: 1, name: "xyz", email: "abcd@gmail.com", phone: "7458963215", brands: "Gucci", offers: "70%" },
        { id: 1, name: "xyz", email: "abcd@gmail.com", phone: "7458963215", brands: "Gucci", offers: "70%" },
        { id: 1, name: "xyz", email: "abcd@gmail.com", phone: "7458963215", brands: "Gucci", offers: "70%" },
        { id: 1, name: "xyz", email: "abcd@gmail.com", phone: "7458963215", brands: "Gucci", offers: "70%" },
        { id: 1, name: "xyz", email: "abcd@gmail.com", phone: "7458963215", brands: "Gucci", offers: "70%" },
        { id: 1, name: "xyz", email: "abcd@gmail.com", phone: "7458963215", brands: "Gucci", offers: "70%" },
        { id: 1, name: "xyz", email: "abcd@gmail.com", phone: "7458963215", brands: "Gucci", offers: "70%" },
        { id: 1, name: "xyz", email: "abcd@gmail.com", phone: "7458963215", brands: "Gucci", offers: "70%" },
        { id: 1, name: "xyz", email: "abcd@gmail.com", phone: "7458963215", brands: "Gucci", offers: "70%" },
        { id: 1, name: "xyz", email: "abcd@gmail.com", phone: "7458963215", brands: "Gucci", offers: "70%" },
        { id: 1, name: "xyz", email: "abcd@gmail.com", phone: "7458963215", brands: "Gucci", offers: "70%" },
        { id: 1, name: "xyz", email: "abcd@gmail.com", phone: "7458963215", brands: "Gucci", offers: "70%" },
        { id: 1, name: "xyz", email: "abcd@gmail.com", phone: "7458963215", brands: "Gucci", offers: "70%" },
        { id: 1, name: "xyz", email: "abcd@gmail.com", phone: "7458963215", brands: "Gucci", offers: "70%" },
        { id: 1, name: "xyz", email: "abcd@gmail.com", phone: "7458963215", brands: "Gucci", offers: "70%" },
        { id: 1, name: "xyz", email: "abcd@gmail.com", phone: "7458963215", brands: "Gucci", offers: "70%" },
        { id: 1, name: "xyz", email: "abcd@gmail.com", phone: "7458963215", brands: "Gucci", offers: "70%" },
        { id: 1, name: "xyz", email: "abcd@gmail.com", phone: "7458963215", brands: "Gucci", offers: "70%" },
        { id: 1, name: "xyz", email: "abcd@gmail.com", phone: "7458963215", brands: "Gucci", offers: "70%" },
        { id: 1, name: "xyz", email: "abcd@gmail.com", phone: "7458963215", brands: "Gucci", offers: "70%" },
        { id: 1, name: "xyz", email: "abcd@gmail.com", phone: "7458963215", brands: "Gucci", offers: "70%" },
      ];
      const view = () => {};
  return (
    <div class="table-container">
    <div class="row header">
      <div class="col">Name</div>
      <div class="col">Email</div>
      <div class="col">Phone</div>
      <div class="col">Brands</div>
      <div class="col">Offers</div>
    </div>
  
    {data.map((x, i) => (
      <div class="row" key={i}>
        <div class="col">{x.name}</div>
        <div class="col">{x.email}</div>
        <div class="col">{x.phone}</div>
        <div class="col">{x.brands}</div>
        <div class="col">{x.offers}</div>
      </div>
    ))}
  </div>
  
    
  )
}

export default Users
