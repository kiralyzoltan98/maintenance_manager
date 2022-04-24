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
import { ShowButton } from 'react-admin';

export const TaskList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="MaintenanceId" />
            <TextField source="UserId" />
            <TextField source="QualificationId" />
            <TextField source="Type" />
            <TextField source="Date" />
            <ShowButton label="SHOW" />
        </Datagrid>

    </List>
);

export const TaskCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput source="id" reference="users">
                <SelectInput optionText="id" />
                <SelectInput optionText="userName" />
            </ReferenceInput>
            <ReferenceInput source="mainCategoryId" reference="qualifications">
                <SelectInput optionText="Qualification" />
            </ReferenceInput>
            <TextField source="Type" />
            <TextField source="Date" />
        </SimpleForm>
    </Create>
);