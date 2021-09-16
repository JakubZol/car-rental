import React from 'react';
import CreateReservationForm from './CreateReservationForm';
import UpdateCarForm from "./UpdateCarForm";

const CarTab = ({ car, isAdmin, activeCarFormId, setActiveCarFormId, carReservationForm, updateCarForm, updateUpdateCarForm, checkAvailability, updateCar, deleteCar, clearUpdateCarForm, createReservation, updateReservationForm }) => {
    const { _id, brand, model, quantity, price } = car;

    const onDateChange = (field, value) => updateReservationForm({ id: _id, [field]: value });

    return (
    <div key={`car-${_id}`} className="cars__car-tab">
        <div><b> {brand} {model} </b></div>
        <div> Dostępnych modeli: {quantity} </div>
        <div> Cena (za dzień): {price} PLN </div>
        <CreateReservationForm checkAvailability={checkAvailability} createReservation={createReservation} carReservationForm={carReservationForm} onDateChange={onDateChange}/>
        {isAdmin && activeCarFormId !== _id && <button onClick={() => setActiveCarFormId(_id)}>Modyfikuj</button>}
        {isAdmin && activeCarFormId === _id &&
        <UpdateCarForm
            updateCar={updateCar}
            car={car}
            clearUpdateCarForm={clearUpdateCarForm}
            updateCarForm={{ ...updateCarForm, _id }}
            updateUpdateCarForm={updateUpdateCarForm}
            setActiveCarFormId={setActiveCarFormId}
        />}
        {isAdmin && <button onClick={() => deleteCar(_id)}>Usuń</button>}
    </div>);
};

export default CarTab;
