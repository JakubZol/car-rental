import { connect } from 'react-redux';
import RegisterForm from './RegisterForm';
import { getRegisterForm } from "../../selectors";
import register, { updateRegisterForm } from "../../actions/register";

const mapStateToProps = state => ({
    registerForm: getRegisterForm(state),
});

const mapDispatchToProps = {
    updateRegisterForm,
    register,
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterForm);
