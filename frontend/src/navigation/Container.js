import { connect } from 'react-redux';
import Navigation from './Main';
import logout from '../actions/logout';
import { getUser } from "../selectors";

const mapStateToProps = state => ({
    user: getUser(state),
});

const mapDispatchToProps = {
    logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
