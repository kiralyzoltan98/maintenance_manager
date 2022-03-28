// in src/devices.js
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

export const DeviceList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="DeviceName" />
            <TextField source="Location" />
        </Datagrid>
        
    </List>
);

export const DeviceCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="categoryId" />
            <TextInput source="deviceName" />
            <TextInput source="location" />
        </SimpleForm>
    </Create>
);