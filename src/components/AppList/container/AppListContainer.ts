import { connect, Dispatch, MapDispatchToProps, MapStateToProps } from 'react-redux';
import { getApps } from '../../../actions/app';
import { State } from '../../../reducers';
import { AppList, AppListDispatchProps, AppListOwnProps, AppListProps, AppListStateProps } from '../components/AppList';

const mapDispatchToProps: MapDispatchToProps<AppListDispatchProps, AppListOwnProps> = (dispatch: Dispatch<any>) => ({
    getApps() {
        return dispatch(getApps());
    }
});

const mapStateToProps: MapStateToProps<AppListStateProps, AppListOwnProps> = (state: State) => {

    const { app } = state;
    return {
        apps: app.apps
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AppList);