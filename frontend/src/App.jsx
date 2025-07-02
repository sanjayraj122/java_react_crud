
import './App.css'
import EmployeeComponent from './components/EmployeeComponent';
import FooterComponents from './components/FooterComponents';
import HeaderComponents from './components/HeaderComponents';
import ListEmployeeComponents from './components/ListEmployeeComponents'
import { BrowserRouter ,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
      <HeaderComponents />
    
        <Routes>
          <Route path="/" element={<ListEmployeeComponents />} />
          <Route path="/employees" element={<ListEmployeeComponents />} /> 
          <Route path='/add-employee' element={<EmployeeComponent />} />
              
        </Routes>

    
      <FooterComponents />
       </BrowserRouter>
    </>
  );
}

export default App
