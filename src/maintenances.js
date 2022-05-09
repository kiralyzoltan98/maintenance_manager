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
    DateInput,
} from 'react-admin';

export const MaintanenceList = props => (
    <List {...props}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="maintenanceName" />
            <TextField source="status" />
            <EditButton />
        </Datagrid>
    </List>
);

export const MaintanenceCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput source="deviceId" reference="devices">
                <SelectInput optionText="deviceName" />
            </ReferenceInput>
            <TextInput source="type" />
            <DateInput source="deadline" />
            <TextInput source="priority" />
            <TextInput source="status" />
            <TextInput source="maintenanceName" />
            <TextInput source="ignoreMessage" />            
        </SimpleForm>
    </Create>
);
export const MaintanenceEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            <ReferenceInput source="deviceId" reference="devices">
                <SelectInput optionText="deviceName" />
            </ReferenceInput>
            <TextInput source="type" />
            <DateInput source="deadline" />
            <TextInput source="priority" />
            <TextInput source="status" />
            <TextInput source="maintenanceName" />
            <TextInput source="ignoreMessage" />
        </SimpleForm>
    </Edit>
);