import { createStackNavigator } from 'react-navigation';

import Login from './pages/Login';
import Timeline from './pages/Timeline';
import Newtweet from './pages/Newtweet';

const Routes = createStackNavigator({
    Login,
    Timeline,
    Newtweet,
});

export default Routes;