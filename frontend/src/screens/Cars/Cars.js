import React, {useEffect, useState} from 'react';
import CarTab from "./CarTab";

import './cars.scss';
import '../../styles/basic-form.scss'

const Cars = ({ cars, user, reservationsForm, fetchCars, addCar, updateCar, deleteCar, createReservation, checkAvailability, updateReservationForm, updateCarForm, updateUpdateCarForm, clearUpdateCarForm }) => {

    useEffect(() => {
        fetchCars();
    }, []);

    const [activeCarFormId, setActiveCarFormId] = useState(undefined);

    return (
        <div className="cars">
            <h3>Godziny odbioru: 8.00 - 10.00</h3>
            <h3>Godzina zwrotu: do 22.00</h3>
            <div className="cars__cars-list">
                {cars.map(car => {
                    const carReservationForm = reservationsForm.find(({ carId }) => carId === car._id) || {};

                    return (
                        <CarTab
                            car={car}
                            carReservationForm={carReservationForm}
                            isAdmin={user.isAdmin}
                            updateCar={updateCar}
                            updateCarForm={updateCarForm}
                            deleteCar={deleteCar}
                            createReservation={createReservation}
                            checkAvailability={checkAvailability}
                            updateUpdateCarForm={updateUpdateCarForm}
                            clearUpdateCarForm={clearUpdateCarForm}
                            updateReservationForm={updateReservationForm}
                            activeCarFormId={activeCarFormId}
                            setActiveCarFormId={setActiveCarFormId}
                        />
                    );
                })}
        </div>
    </div>
)};

export default Cars;
