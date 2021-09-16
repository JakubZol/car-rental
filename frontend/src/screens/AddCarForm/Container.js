import AddCarForm from './AddCarForm'
import { connect } from 'react-redux';
import addCar, { updateNewCarForm } from '../../actions/addCar';
import { getNewCarForm } from "../../selectors";

const mapStateToProps = state => ({
    carForm: getNewCarForm(state),
});

const mapDispatchToProps = {
    addCar,
    updateNewCarForm,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddCarForm);
