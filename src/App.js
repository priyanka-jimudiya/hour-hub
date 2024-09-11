import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Employee from './Components/Employee';
import Project from './Components/Project';
// import Sidebar from './Components/Sidebar';
import Layout from './Components/Layout';

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            {/* <Route path='/' element={<Sidebar />} /> */}
            <Route path='/' element={<Project />} />
            <Route path='/employee' element={<Employee />} />
          </Routes>
        </Layout>
      </BrowserRouter>

    </>
  );
}

export default App;
