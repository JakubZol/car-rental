import Reservations from './Reservations';
import { connect } from 'react-redux';
import { getReservations, getUpdateReservationForm } from "../../selectors";
import fetchReservations from '../../actions/fetchReservations';
import updateReservation, { updateUpdateReservationForm,clearUpdateReservationForm } from '../../actions/updateReservation';


const mapStateToProps = state => ({
    reservations: getReservations(state),
    updateReservationForm: getUpdateReservationForm(state)
});

const mapDispatchToProps = {
    fetchReservations,
    updateReservation,
    updateUpdateReservationForm,
    clearUpdateReservationForm,
};

export default connect(mapStateToProps, mapDispatchToProps)(Reservations);
