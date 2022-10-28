import axios from 'axios'
import { useState } from 'react';

export const useFetch = () => {
    const [requestStatus, setrequestStatus] = useState({
        isLoading: true,
        isAuthenticated: false
    })
    const routeApi="http://127.0.0.1:8000/api";

    const getEmpleados = async()=>{
        const {data} = await axios.get(`${routeApi}/empleados`);
        return data;
    }
    
    const Login = async(identificacion,clave)=>{
        const login = await axios.get(`${routeApi}/login`);
        const infoLogin = login.data.filter(user=>user.identificacion==identificacion && user.clave==clave)[0]

        setrequestStatus({
            ...requestStatus,
            isLoading: false,
        })

        if(infoLogin){
            setrequestStatus({
                ...requestStatus,
                isAuthenticated: true,
                
            })
            const empleados = await getEmpleados();
            const infoAuthenticated = {
                empleadoInfo:{
                    ...empleados.data.filter(empleado=>empleado.identificacion==infoLogin.identificacion)[0]
                }
            }
            infoAuthenticated["hasGroup"]=empleados.id_grupo ? true : false;
            infoAuthenticated["isAdmin"]=empleados.id_lider_fk==empleados.id_empleado? true : false;

            localStorage.setItem("infoAuthenticated",JSON.stringify(infoAuthenticated));

        }else{
            alert("No existe el usuario");
        }

        return {
            ...requestStatus,
        }
    }
    
    const updateUser=()=>{}

    return {
        Login
    }
}
