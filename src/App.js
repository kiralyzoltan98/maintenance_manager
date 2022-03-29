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
import {QualificationList, QualificationCreate} from "./qualifications";
import {CategoryList, CategoryCreate} from "./categories";
//const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const App = () => (
    <Admin dashboard={Dashboard} authProvider={authProvider} dataProvider={DataProvider} >
        <Resource name="task" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon}/>
        <Resource name="users" list={UserList} create={UserCreate} icon={UserIcon}/>
        <Resource name="devices" list={DeviceList} create={DeviceCreate} icon={LaptopIcon}/>
        <Resource name="qualifications" list={QualificationList} create={QualificationCreate} icon={LaptopIcon}/>
        <Resource name="devicecategory" list={CategoryList} create={CategoryCreate} icon={LaptopIcon}/>
    </Admin>
);

export default App;