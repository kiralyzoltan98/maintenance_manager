// in src/posts.js
import * as React from "react";
import {
    List,
    Datagrid,
    TextField,
    ReferenceField,
    EditButton,
    Edit,
    Create,
    SimpleForm,
    ReferenceInput,
    SelectInput,
    TextInput,
} from 'react-admin';

const PostTitle = ({record}) => {
    return <span>Post {record ? `"${record.title}"` : ``}</span>
};

export const PostList = props => (
    <List filters={PostFilters} {...props}>
        <Datagrid>
            <TextField source="id" />
            <ReferenceField source="userId" reference="users">
                <TextField source="name" />
            </ReferenceField>
            <TextField source="title" />
            <EditButton />
        </Datagrid>
    </List>
);



export const PostCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <ReferenceInput source="Qualification" reference="users">
                <SelectInput optionText="Qualification" />
            </ReferenceInput>
            <ReferenceInput source="Qualification" reference="users">
                <SelectInput optionText="Qualification" />
            </ReferenceInput>
        </SimpleForm>
    </Create>
);

export const PostEdit = props => (
    <Edit title={<PostTitle />} {...props}>
        <SimpleForm>
            <TextInput disabled source="id" />
            <ReferenceInput source="userId" reference="users">
                <SelectInput optionText="name" />
            </ReferenceInput>
            <TextInput source="title" />
            <TextInput multiline source="body" />
        </SimpleForm>
    </Edit>
);

const PostFilters = [
    <TextInput source="q" label="Search" alwaysOn />,
    <ReferenceInput source="userId" label="User" reference="users" allowEmpty>
        <SelectInput optionText="name" />
    </ReferenceInput>

]