import LoginForm from './LoginForm';
import { connect } from 'react-redux';
import { getLoginForm } from "../../selectors";
import login, { updateLoginForm } from "../../actions/login";

const mapStateToProps = state => ({
    loginForm: getLoginForm(state),
});

const mapDispatchToProps = {
    updateLoginForm,
    login,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
