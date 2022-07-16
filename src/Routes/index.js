//Layout
import {HeaderOnly} from '../components/Layout'
import Home from '../pages/Home';
import Following from '../pages/Following';
import Profile from '../pages/Profile';
import Upload from '../pages/Upload';
import Search from '../pages/Search';

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
  },
  {
    path: '/search',
    component: Search,
    layout: null
  }
];
//Need login to access, if it not, return to login page
const privateRoutes = [];
export { publicRoutes, privateRoutes };
