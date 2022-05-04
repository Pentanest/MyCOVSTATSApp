import Home from '../screens/home/Home';
import Map from '../screens/map/Map';
import Education from '../screens/education/Education';
import Discovery from '../screens/discovery/Discovery';
import News from '../screens/news/News';

const TAB_ROUTES = [
  {id: 1, name: 'Home', component: Home, label: 'COVID-19'},
  {id: 2, name: 'Map', component: Map, label: 'World Wide Map'},
  {id: 3, name: 'Education', component: Education, label: 'Education'},
  {id: 4, name: 'Discovery', component: Discovery, label: 'Discovery'},
  {id: 5, name: 'News', component: News, label: 'News'},
];

export {TAB_ROUTES};
