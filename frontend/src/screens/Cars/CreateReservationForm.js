import React from 'react';

const CreateReservationForm = ({ carReservationForm, onDateChange, createReservation, checkAvailability }) => (
    <>
        <div>
            <input type="date" value={carReservationForm.from} onChange={({ target }) => onDateChange('from', target.value)}/>
            <input type="date" value={carReservationForm.to} onChange={({ target }) => onDateChange('to', target.value)}/>
        </div>
        {carReservationForm.available === undefined && <button onClick={() => checkAvailability(carReservationForm)}>Sprawdź dostępność</button>}
        {carReservationForm.available !== undefined && <div>{carReservationForm.available ? <span className="available">Dostępny</span> : <span className="inavailable">Niedostępny</span>}</div> }
        {carReservationForm.available && <button onClick={() => createReservation(carReservationForm)}>Zarezerwuj</button>}
    </>);

export default CreateReservationForm;
