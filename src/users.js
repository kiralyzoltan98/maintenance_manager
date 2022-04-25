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
            <TextField source="username" />
            <TextField source="qualification" />
            <TextField source="type" />
        </Datagrid>
    </List>
);

export const UserCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="userName" />
            <TextInput source="password" />
            <ReferenceInput source="qualificationId" reference="qualifications">
                <SelectInput optionText="qualification" />
            </ReferenceInput>
            <TextInput source="type" />
        </SimpleForm>
    </Create>
);

export const UserEdit = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="userName" />
            <TextInput source="password" />
            <ReferenceInput source="mainCategoryId" reference="qualifications">
                <SelectInput optionText="Qualification" />
            </ReferenceInput>
            <TextInput source="type" />
        </SimpleForm>
    </Create>
);