// in src/App.js
import * as React from "react";
import { Admin, Resource } from 'react-admin';
import {PostCreate, PostList, PostEdit} from './posts';
import {UserList, UserCreate, UserEdit} from './users';
import { DeviceList, DeviceCreate } from './devices';
import {TaksList, TaskCreate, TaskList} from './tasks';
import jsonServerProvider from 'ra-data-json-server';
import Dashboard from "./Dashboard";
import authProvider from "./authProvider";
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import LaptopIcon from '@material-ui/icons/Laptop';
import CategoryIcon from '@material-ui/icons/Category';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import AccessTimeIcon from '@material-ui/icons/AccessTime';

import DataProvider from "./DataProvider";
import {QualificationList, QualificationCreate} from "./qualifications";
import {CategoryList, CategoryCreate} from "./categories";
import {MaintanenceList, MaintanenceCreate} from "./maintenances";
import {PeriodicCreate, PeriodicList} from "./periodic-task";
//const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

const App = () => (
    <Admin dashboard={Dashboard} authProvider={authProvider} dataProvider={DataProvider} >
        <Resource name="tasks" list={TaskList} edit={PostEdit} create={TaskCreate} icon={PostIcon}/>
        <Resource name="users" list={UserList} create={UserCreate} edit={UserEdit} icon={UserIcon}/>
        <Resource name="devices" list={DeviceList} create={DeviceCreate} icon={LaptopIcon}/>
        <Resource name="qualifications" list={QualificationList} create={QualificationCreate} icon={AssignmentTurnedInIcon}/>
        <Resource name="maintenances" list={MaintanenceList} create={MaintanenceCreate}/>
        <Resource name="devicecategories" list={CategoryList} create={CategoryCreate} icon={CategoryIcon}/>
        <Resource name="periodic-task" list={PeriodicList} create={PeriodicCreate} icon={AccessTimeIcon}/>
    </Admin>
);

export default App;