import React from 'react';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import UserList from "./components/UserList";
//import LoginUser from './components/LoginUser';
import AddUser from "./components/AddUser";
import EditUser from "./components/EditUser";
 
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserList/>}/>
        <Route path="add" element={<AddUser/>}/>
        <Route path="edit/:id" element={<EditUser/>}/>
      </Routes>
    </BrowserRouter>
  );
}
 
export default App;
// import React from 'react';
// import logo from './logo.svg';
// import './App.css';


//<Route path="/login" element={<LoginUser/>}/>

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
