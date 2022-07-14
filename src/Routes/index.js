//Layout
import {HeaderOnly} from '../components/Layout'
import Home from '../pages/Home';
import Following from '../pages/Following';
import Profile from '../pages/Profile';
import Upload from '../pages/Upload';

//Can access only when login
const publicRoutes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/following',
    component: Following,
  },
  {
    path: '/profile',
    component: Profile,
  },
  {
    path: '/upload',
    component: Upload,
    layout: HeaderOnly
  }
];
//Need login to access, if it not, return to login page
const privateRoutes = [];
export { publicRoutes, privateRoutes };
