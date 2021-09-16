import Routing from './Main';
import { connect } from 'react-redux';
import { getUser } from "../selectors";
import fetchUser from "../actions/fetchUser";


const mapStateToProps = state => ({
    user: getUser(state),
});

const mapDispatchToProps = {
    fetchUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(Routing);
