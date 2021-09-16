import React, { useEffect, useState } from 'react';

import './reservations.scss'
import '../../styles/basic-form.scss'

const Reservations = ({ reservations, user, fetchReservations, updateReservation, updateReservationForm, updateUpdateReservationForm, clearUpdateReservationForm }) => {
    const { isAdmin } = user;
    const today = new Date();

    const [activeReservationFormId, setActiveReservationFormId] = useState(undefined);

    useEffect(() => {
        fetchReservations();
    },[]);

    return (
        <div className="reservations">
            {reservations.map(({ _id, user, car: { brand, model, price }, from, to, active }) => {
                const { name, surname, email } = user || {};
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
                        {(isAdmin || !reservationInProgress) && activeReservationFormId === _id && active && <div className='basic-form reservations__update-reservation-form'>
                            <input type="date" value={updateReservationForm.from} onChange={({ target }) => updateUpdateReservationForm({ from: target.value })} />
                            <input type="date" value={updateReservationForm.to} onChange={({ target }) => updateUpdateReservationForm({ to: target.value })} />
                            <button onClick={() => updateReservation({ _id, active: false })}>Anuluj rezerwację</button>
                            <button onClick={() => updateReservation({ _id, ...updateReservationForm })}>Zapisz</button>
                            <button onClick={() => { setActiveReservationFormId(undefined); clearUpdateReservationForm(); }}>Zamknij</button>
                        </div>}
                    </div>
                )})}
        </div>)
};

export default Reservations;
