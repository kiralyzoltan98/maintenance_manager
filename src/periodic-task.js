import {Create, Datagrid, List, ReferenceInput, SelectInput, SimpleForm, TextField, TextInput} from "react-admin";
import * as React from "react";

export const PeriodicList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="username" />
            <TextField source="qualification" />
            <TextField source="type" />
        </Datagrid>
    </List>
);
/**
 *
 * <ReferenceInput source="periodtype" reference="periodic-task">
 *    <SelectInput optionText="periodtype" />
 * </ReferenceInput>
 */

export const PeriodicCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="periodtype" />
            <TextInput source="period" />
        </SimpleForm>
    </Create>
);