import React from 'react';

const UpdateReservationForm = ({ updateReservationForm, updateUpdateReservationForm, updateReservation, clearUpdateReservationForm, setActiveReservationFormId, reservationId }) => {

    return (
        <div className='basic-form reservations__update-reservation-form'>
            <input type="date" value={updateReservationForm.from} onChange={({ target }) => updateUpdateReservationForm({ from: target.value })} />
            <input type="date" value={updateReservationForm.to} onChange={({ target }) => updateUpdateReservationForm({ to: target.value })} />
            <button onClick={() => updateReservation({ _id: reservationId, active: false })}>Anuluj rezerwację</button>
            <button onClick={() => updateReservation({ _id: reservationId, ...updateReservationForm })}>Zapisz</button>
            <button onClick={() => { setActiveReservationFormId(undefined); clearUpdateReservationForm(); }}>Zamknij</button>
        </div>
    )
};

export default UpdateReservationForm;
