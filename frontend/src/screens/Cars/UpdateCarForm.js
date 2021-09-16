import React from 'react';

const UpdateCarForm = ({ updateUpdateCarForm, updateCarForm, updateCar, clearUpdateCarForm, setActiveCarFormId, car: { brand, model, price, quantity } }) => (
    <div className="cars__update-car-form basic-form">
        <input type="text" placeholder={brand} value={updateCarForm.brand} onChange={({ target }) => updateUpdateCarForm({ brand: target.value })} />
        <input type="text" placeholder={model} value={updateCarForm.model} onChange={({ target }) => updateUpdateCarForm({ model: target.value })} />
        <input type="number" placeholder={`${price} PLN`} value={updateCarForm.price} onChange={({ target }) => updateUpdateCarForm({ price: target.value })} />
        <input type="number" placeholder={`${quantity} sztuk(a)`} value={updateCarForm.quantity} onChange={({ target }) => updateUpdateCarForm({ quantity: target.value })} />
        <button onClick={() => updateCar(updateCarForm)}>Zapisz</button>
        <button onClick={() => { setActiveCarFormId(undefined); clearUpdateCarForm(); }}>Zamknij</button>
    </div>
);

export default UpdateCarForm;
