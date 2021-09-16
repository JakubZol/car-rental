import React, { useState } from 'react';
import UpdateReservationForm from './UpdateReservationForm'

const ReservationTab = ({ isAdmin, reservation, updateReservationForm, updateUpdateReservationForm, updateReservation, clearUpdateReservationForm }) => {
    const { _id, user, car: { brand, model, price }, from, to, active } = reservation;
    const { name, surname, email } = user || {};

    const [activeReservationFormId, setActiveReservationFormId] = useState(undefined);

    const today = new Date();
    const fromDate = new Date(from);
    const toDate = new Date(to);
    const reservationInProgress = fromDate < today;
    const daysDifference = Math.ceil(Math.abs(toDate - fromDate) / (1000 * 60 * 60 * 24)) + 1;

    return (
        <div key={`reservation-${_id}`} className="reservations__reservation-tab">
            {isAdmin && <div>Rezerwacja dla: {surname}, {name} ({email})</div>}
            <div>Samochód: {brand} {model}</div>
            <div>Termin: {fromDate.toLocaleDateString('pl-PL')} - {toDate.toLocaleDateString('pl-PL')}</div>
            <div>Cena: {daysDifference * price} PLN</div>
            <div>Status: <b>{reservationInProgress ? 'W trakcie' : (active ? 'Aktualna' : 'Nieaktualna')}</b></div>
            {(isAdmin || !reservationInProgress) && activeReservationFormId !== _id && active && <button onClick={() => setActiveReservationFormId(_id)}>Modyfikuj rezerwację</button>}
            {(isAdmin || !reservationInProgress) && activeReservationFormId === _id && active &&
            <UpdateReservationForm
                updateReservationForm={updateReservationForm}
                updateUpdateReservationForm={updateUpdateReservationForm}
                updateReservation={updateReservation}
                clearUpdateReservationForm={clearUpdateReservationForm}
                setActiveReservationFormId={setActiveReservationFormId}
                reservationId={_id}
            />}
        </div>
    )
};

export default ReservationTab;
