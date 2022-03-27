import { fetchUtils, Admin, Resource } from 'react-admin';
//import simpleRestProvider from 'ra-data-simple-rest';
import { stringify } from 'query-string';
import {useState} from "react";
import {element} from "prop-types";


const apiUrl = `http://localhost:8000/users`;
const httpClient = fetchUtils.fetchJson;

export default {

    getList: (resource, params) => {
        console.log("PARAMS: LIST :: ", params);
        const { page, perPage } = params.pagination;
        const { field, order } = params.sort;
        const query = {
            sort: JSON.stringify([field, order]),
            range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
            filter: JSON.stringify(params.filter),
        };
        const url = `${apiUrl}`;

        /**
         *
         * @param response the response from the api in json format
         * @returns @object result a javascript object containing the new response, and the number of rows affected
         */

        function parseID(response){
            let result = {};

            response.forEach(element => {

                if (element["UserId"]){
                    element["id"] = element["UserId"];
                }
                result["count"] = element["id"];
                delete element["UserId"];
                console.log("element with new id: ", element)
            });
            result["rows"] = response;

            console.log("RESP: ", result);

            return result;
            //response.forEach(element => console.log(element));
        }

        return httpClient(url).then(({ headers, json }) => ({
            data: parseID(json)["rows"],
            total: parseID(json)["count"],
            //data: json,
            //total: json.total,
        }));
    },

    getOne: (resource, params) =>
        httpClient(`${apiUrl}/${resource}/${params.id}`).then(({ json }) => ({
            data: json,
        })),

    getMany: (resource, params) => {
        const query = {
            filter: JSON.stringify({ id: params.ids }),
        };
        const url = `${apiUrl}/${resource}?${stringify(query)}`;
        return httpClient(url).then(({ json }) => ({ data: json }));
    },

    getManyReference: (resource, params) => {
        const { page, perPage } = params.pagination;
        const { field, order } = params.sort;
        const query = {
            sort: JSON.stringify([field, order]),
            range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
            filter: JSON.stringify({
                ...params.filter,
                [params.target]: params.id,
            }),
        };
        const url = `${apiUrl}/${resource}?${stringify(query)}`;

        return httpClient(url).then(({ headers, json }) => ({
            data: json,
            total: parseInt(headers.get('content-range').split('/').pop(), 10),
        }));
    },

    update: (resource, params) =>
        httpClient(`${apiUrl}/${resource}/${params.id}`, {
            method: 'PUT',
            body: JSON.stringify(params.data),
        }).then(({ json }) => ({ data: json })),

    updateMany: (resource, params) => {
        const query = {
            filter: JSON.stringify({ id: params.ids}),
        };
        return httpClient(`${apiUrl}/${resource}?${stringify(query)}`, {
            method: 'PUT',
            body: JSON.stringify(params.data),
        }).then(({ json }) => ({ data: json }));
    },

    create: async (resource, params) => {
        const url = `http://localhost:8000/user`;
        console.log("create params: ", params);
        console.log("create params: ", params.data.UserName);
        params = params.data;

        async function checkLogin() {
            const requestOptions = {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type' : 'application/json',
                },
                //userName, password, qualificationId, type
                body: JSON.stringify({userName: params.UserName, password: params.Password,
                                            qualificationId: params.QualificationId, type: params.Type})
            };
            const request = await fetch(url, requestOptions);
            const data = request.json();
            return data;
        }

        const response = await checkLogin().then();
        console.log(response.loggedInUser);
    },




    delete: (resource, params) =>
        httpClient(`${apiUrl}/${resource}/${params.id}`, {
            method: 'DELETE',
        }).then(({ json }) => ({ data: json })),

    deleteMany: (resource, params) => {
        const query = {
            filter: JSON.stringify({ id: params.ids}),
        };
        return httpClient(`${apiUrl}/${resource}?${stringify(query)}`, {
            method: 'DELETE',
        }).then(({ json }) => ({ data: json }));
    }
};