import React from 'react';
import './PatientCard.css';

const PatientCard = ({ patient, onViewDetails }) => {
  return (
    <div className="patient-card">
      <h3>{patient.name}</h3>
      <p>Age: {patient.age}</p>
      <p>Contact: {patient.contact}</p>
      <button onClick={() => onViewDetails(patient)}>View Details</button>
    </div>
  );
};

export default PatientCard;
