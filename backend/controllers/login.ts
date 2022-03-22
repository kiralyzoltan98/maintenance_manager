import { getAllUsers } from './getAllUsers.ts';

export async function login(){
    const res = await fetch('http://localhost/users');
    const data = await res.json();
    
    console.log({data})
}