import {Navbar,FormLogin} from "./components/index";
import { EmpleadosProvider } from "./context/EmpleadosProvider";
const App = () => {
  return (
    <EmpleadosProvider>
      {/* <Navbar/> */}
      <FormLogin/>
    </EmpleadosProvider>
  )
}

export default App;