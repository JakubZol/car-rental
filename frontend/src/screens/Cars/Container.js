import Cars from './Cars';
import { connect } from 'react-redux';
import { getCars, getReservationsForm, getUpdateCarForm } from "../../selectors";
import addCar from '../../actions/addCar';
import updateCar, { updateUpdateCarForm, clearUpdateCarForm } from '../../actions/updateCar';
import deleteCar from '../../actions/deleteCar';
import fetchCars from '../../actions/fetchCars';
import createReservation, { updateReservationForm } from '../../actions/createReservation';
import checkAvailability from '../../actions/checkAvailability';


const mapStateToProps = state => ({
    cars: getCars(state),
    reservationsForm: getReservationsForm(state),
    updateCarForm: getUpdateCarForm(state)
});

const mapDispatchToProps = {
    fetchCars,
    addCar,
    updateCar,
    deleteCar,
    createReservation,
    checkAvailability,
    updateReservationForm,
    updateUpdateCarForm,
    clearUpdateCarForm,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cars);
