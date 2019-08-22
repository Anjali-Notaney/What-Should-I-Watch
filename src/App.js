import React, { Component } from 'react';
import styled from 'styled-components';
import Sidebar from './MainPage/Components/Sidebar/Sidebar';
import "./App.css"


function App() {
  return (
    <div id="appWrapper">
      <Sidebar/>
      <label for="male">Male</label>
    </div>
  );
}

export default App;
