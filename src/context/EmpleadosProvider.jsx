import { useState } from "react"
import { EmpleadosContext } from "./EmpleadosContext"

export const EmpleadosProvider = ({children}) => {
    const [empleados, setEmpleados] = useState();
    return (
        <EmpleadosContext.Provider value={{empleados,setEmpleados}}>
            {children}
        </EmpleadosContext.Provider>
    )
}
