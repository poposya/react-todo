import styles from './Home.module.scss';

import React from 'react';
import { connect } from 'react-redux';
import ShowsAction from '../../stores/shows/ShowsAction';
import LoadingIndicator from '../components/loading-indicator/LoadingIndicator';
import { selectRequesting } from '../../selectors/requesting/RequestingSelector';
import Todos from './components/todos/Todos';

const mapStateToProps = (state, ownProps) => ({
  isRequesting: selectRequesting(state, [ShowsAction.REQUEST_SHOW, ShowsAction.REQUEST_CAST]),
});

class Home extends React.Component {
  render() {
    const { isRequesting } = this.props;

    return (
      <div className={styles.wrapper}>
        <LoadingIndicator isActive={isRequesting}>
          <Todos />
        </LoadingIndicator>
      </div>
    );
  }
}

export { Home as Unconnected };
export default connect(mapStateToProps)(Home);
