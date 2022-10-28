import React, { useContext } from 'react'
import { useEffect } from 'react';
import { EmpleadosContext } from '../../context/EmpleadosContext';
import { useFetch } from '../../hooks/useFetch';
import useForm from '../../hooks/useForm';

export const FormLogin = () => {
    const {identificacion,clave,onInputChange,onResetForm} = useForm({
        identificacion: '',
        clave: ''
    });
    const {setEmpleados} = useContext(EmpleadosContext); 
    const {Login} = useFetch();

    useEffect(() => {
        const infoAuthenticated= JSON.parse(localStorage.getItem("infoAuthenticated"));
        if(infoAuthenticated && infoAuthenticated.isAuthenticated){
            alert("ya estas registrado")
        }
    }, [])
    

    const onSubmit=(event)=>{
        event.preventDefault();
        const {isAuthenticated,empleados} = Login(identificacion,clave);
        if(isAuthenticated){
            setEmpleados([...empleados]);
        }
    }

    return (
        <form onSubmit={onSubmit}>
            <input 
                type="number" 
                name="identificacion"
                value={identificacion}
                onChange={onInputChange}
                />
            <input 
                type="password" 
                name="clave"
                value={clave}
                onChange={onInputChange}
                />
            <input type="submit" value="Enviar" />
        </form>
    );
}
