import React, { useEffect, useState } from 'react';

import './cars.scss';
import '../../styles/basic-form.scss'

const Cars = ({ cars, user, reservationsForm, fetchCars, addCar, updateCar, deleteCar, createReservation, checkAvailability, updateReservationForm, updateCarForm, updateUpdateCarForm, clearUpdateCarForm }) => {

    useEffect(() => {
        fetchCars();
    }, []);

    const [activeCarFormId, setActiveCarFormId] = useState(undefined);

    const onDateChange = (field, value, id) => updateReservationForm({ id, [field]: value });


    return (
    <div className="cars">
        <h3>Godziny odbioru: 8.00 - 10.00</h3>
        <h3>Godzina zwrotu: do 22.00</h3>
        <div className="cars__cars-list">
            {cars.map(({ brand, model, _id, price, quantity }) => {
                const carReservationForm = reservationsForm.find(({ carId }) => carId === _id) || {};

                return (
                <div key={`car-${_id}`} className="cars__car-tab">
                    <div><b> {brand} {model} </b></div>
                    <div> Dostępnych modeli: {quantity} </div>
                    <div> Cena (za dzień): {price} PLN </div>
                    <div>
                        <input type="date" placeholder="termin rezerwacji" value={carReservationForm.from} onChange={({ target }) => onDateChange('from', target.value, _id)}/>
                        <input type="date" placeholder="termin zwrotu" value={carReservationForm.to} onChange={({ target }) => onDateChange('to', target.value, _id)}/>
                    </div>
                    {carReservationForm.available === undefined && <button onClick={() => checkAvailability(carReservationForm)}>Sprawdź dostępność</button>}
                    {carReservationForm.available !== undefined && <div>{carReservationForm.available ? <span className="available">Dostępny</span> : <span className="inavailable">Niedostępny</span>}</div> }
                    {carReservationForm.available && <button onClick={() => createReservation(carReservationForm)}>Zarezerwuj</button>}
                    {user.isAdmin && activeCarFormId !== _id && <button onClick={() => setActiveCarFormId(_id)}>Modyfikuj</button>}
                    {user.isAdmin && activeCarFormId === _id && <div className="cars__update-car-form basic-form">
                        <input type="text" placeholder={brand} value={updateCarForm.brand} onChange={({ target }) => updateUpdateCarForm({ brand: target.value })} />
                        <input type="text" placeholder={model} value={updateCarForm.model} onChange={({ target }) => updateUpdateCarForm({ model: target.value })} />
                        <input type="number" placeholder={`${price} PLN`} value={updateCarForm.price} onChange={({ target }) => updateUpdateCarForm({ price: target.value })} />
                        <input type="number" placeholder={`${quantity} sztuk(a)`} value={updateCarForm.quantity} onChange={({ target }) => updateUpdateCarForm({ quantity: target.value })} />
                        <button onClick={() => updateCar({ _id, ...updateCarForm })}>Zapisz</button>
                        <button onClick={() => { setActiveCarFormId(undefined); clearUpdateCarForm(); }}>Zamknij</button>
                    </div>}
                    {user.isAdmin && <button onClick={() => deleteCar(_id)}>Usuń</button>}
                </div>
            )})}
        </div>
    </div>
)};

export default Cars;
