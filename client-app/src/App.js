import MyHeader from "./components/Header";
import Discover from "./components/Discover";
import DiseaseType from "./components/DiseaseType";
import Disease from "./components/Disease";
import Users from "./components/Users";
import PublicServant from "./components/PublicServant";
import Doctor from "./components/Doctor";
import Specialize from "./components/Specialize";
import Country from "./components/Country";
import Record from "./components/Record";
import Query from "./components/Queries";
import {Route, Routes} from 'react-router-dom';
import React from 'react';

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <header>
          <MyHeader/>
        </header>
        <main>
        <Routes>
          <Route path="/" element={<Disease/>} exact/>
          <Route path="/diseasetype" element={<DiseaseType/>} exact/>
          <Route path="/discover" element={<Discover/>} exact/>
          <Route path="/users" element={<Users/>} exact/>
          <Route path="/publicservant" element={<PublicServant/>} exact/>
          <Route path="/doctor" element={<Doctor/>} exact/>
          <Route path="/specialize" element={<Specialize/>} exact/>
          <Route path="/country" element={<Country/>} exact/>
          <Route path="/record" element={<Record/>} exact/>
          <Route path="/query" element={<Query/>} exact/>
        </Routes>
        </main>
      </React.Fragment>
    </div>
  );
}

export default App;