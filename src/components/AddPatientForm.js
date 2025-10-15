import React, { useState } from 'react';
import './AddPatientForm.css';

const AddPatientForm = ({ onAddPatient }) => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    contact: '',
    email: '',
    address: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddPatient(formData);
    setFormData({
      name: '',
      age: '',
      contact: '',
      email: '',
      address: ''
    });
  };

  return (
    <form className="add-patient-form" onSubmit={handleSubmit}>
      <h3>Add New Patient</h3>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="age"
        placeholder="Age"
        value={formData.age}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="contact"
        placeholder="Contact"
        value={formData.contact}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <textarea
        name="address"
        placeholder="Address"
        value={formData.address}
        onChange={handleChange}
        required
      />
      <button type="submit">Add Patient</button>
    </form>
  );
};

export default AddPatientForm;
