// in src/App.js
import * as React from "react";
import { Admin, Resource } from 'react-admin';
import {PostCreate, PostList, PostEdit} from './posts';
import { UserList, UserCreate } from './users';
import { DeviceList, DeviceCreate } from './devices';
import jsonServerProvider from 'ra-data-json-server';
import Dashboard from "./Dashboard";
import authProvider from "./authProvider";
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import LaptopIcon from '@material-ui/icons/Laptop';

import DataProvider from "./DataProvider";
//const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const App = () => (
    <Admin dashboard={Dashboard} authProvider={authProvider} dataProvider={DataProvider} >
        <Resource name="Tasks" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon}/>
        <Resource name="users" list={UserList} create={UserCreate} icon={UserIcon}/>
        <Resource name="devices" list={DeviceList} create={DeviceCreate} icon={LaptopIcon}/>
    </Admin>
);

export default App;