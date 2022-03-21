// in src/users.js
import * as React from "react";
import { List, Datagrid, TextField, EmailField } from 'react-admin';
import MyUrlField from './MyUrlField';

export const UserList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="UserName" />
            <EmailField source="Password" />
            <TextField source="QualificationId" />
            <MyUrlField source="Type" />
        </Datagrid>
    </List>
);