import React from 'react';

import '../../styles/basic-form.scss'

const AddCarForm = ({ addCar, updateNewCarForm, carForm }) => (
    <div className="add-car-form basic-form">
        <h2>Dodaj nowe auto</h2>
        <input type="text" placeholder="Marka" onChange={({ target }) => updateNewCarForm({ brand: target.value })} />
        <input type="text" placeholder="Model" onChange={({ target }) => updateNewCarForm({ model: target.value })} />
        <input type="number" placeholder="Cena" onChange={({ target }) => updateNewCarForm({ price: target.value })} />
        <input type="number" placeholder="Dostępna ilość" onChange={({ target }) => updateNewCarForm({ quantity: target.value })} />
        <button onClick={() => addCar(carForm)}>Dodaj auto</button>
    </div>
);

export default AddCarForm;

