import React from 'react';
import './PatientModal.css';

const PatientModal = ({ patient, onClose }) => {
  if (!patient) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>{patient.name}</h2>
        <p>Age: {patient.age}</p>
        <p>Contact: {patient.contact}</p>
        <p>Email: {patient.email}</p>
        <p>Address: {patient.address}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default PatientModal;
