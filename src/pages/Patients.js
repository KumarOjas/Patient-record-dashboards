import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import PatientCard from '../components/PatientCard';
import PatientModal from '../components/PatientModal';
import AddPatientForm from '../components/AddPatientForm';
import './Patients.css';

const Patients = () => {
  const [patients, setPatients] = useState([]);
  const [filteredPatients, setFilteredPatients] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPatients();
  }, []);

  useEffect(() => {
    setFilteredPatients(
      patients.filter(patient =>
        patient.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  }, [patients, searchQuery]);

  const fetchPatients = async () => {
    try {
      // Using JSON Placeholder for mock data
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      const mockPatients = response.data.map(user => ({
        id: user.id,
        name: user.name,
        age: Math.floor(Math.random() * 80) + 18, // Random age between 18-98
        contact: user.phone,
        email: user.email,
        address: `${user.address.street}, ${user.address.city}`
      }));
      setPatients(mockPatients);
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch patients');
      setLoading(false);
    }
  };

  const handleViewDetails = (patient) => {
    setSelectedPatient(patient);
  };

  const handleCloseModal = () => {
    setSelectedPatient(null);
  };

  const handleAddPatient = (newPatient) => {
    const patient = {
      ...newPatient,
      id: patients.length + 1,
      age: parseInt(newPatient.age)
    };
    setPatients([...patients, patient]);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div>
      <Header />
      <main className="patients-page">
        <h2>Patients</h2>
        <AddPatientForm onAddPatient={handleAddPatient} />
        <input
          type="text"
          placeholder="Search patients by name..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-bar"
        />
        <div className="patient-grid">
          {filteredPatients.map(patient => (
            <PatientCard
              key={patient.id}
              patient={patient}
              onViewDetails={handleViewDetails}
            />
          ))}
        </div>
        <PatientModal patient={selectedPatient} onClose={handleCloseModal} />
      </main>
    </div>
  );
};

export default Patients;
