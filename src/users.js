// in src/users.js
import * as React from "react";
import { List, Datagrid, TextField, EmailField } from 'react-admin';
import MyUrlField from './MyUrlField';
import {
    ReferenceField,
    EditButton,
    Edit,
    Create,
    SimpleForm,
    ReferenceInput,
    SelectInput,
    TextInput,
} from 'react-admin';

export const UserList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="UserName" />
            <TextField source="Password" />
            <TextField source="QualificationId" />
            <TextField source="Type" />
        </Datagrid>
        
    </List>
);

export const UserCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="userName" />
            <TextInput source="password" />
            <TextInput multiline source="qualificationId" />
            <TextInput source="type" />
        </SimpleForm>
    </Create>
);