import React, { useEffect } from 'react';
import ReservationTab from "./ReservationTab";

import './reservations.scss'
import '../../styles/basic-form.scss'

const Reservations = ({ reservations, user, fetchReservations, updateReservation, updateReservationForm, updateUpdateReservationForm, clearUpdateReservationForm }) => {
    const { isAdmin } = user;

    useEffect(() => {
        fetchReservations();
    },[]);

    return (
        <div className="reservations">
            {reservations.length === 0 && <h2>Brak Rezerwacji</h2>}
            {reservations.map(reservation => (
                <ReservationTab
                    isAdmin={isAdmin}
                    reservation={reservation}
                    updateReservationForm={updateReservationForm}
                    updateUpdateReservationForm={updateUpdateReservationForm}
                    updateReservation={updateReservation}
                    clearUpdateReservationForm={clearUpdateReservationForm}
                />
            ))}
        </div>)
};

export default Reservations;
