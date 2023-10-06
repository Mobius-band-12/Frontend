import React from "react";
import styled from "styled-components";
import Login from "./components/Login";
// import Sidebar from "./components/Sidebar";

const AppWrapper = styled.div`
  background: #fff;
  height: 100vh;
  width: 100%;
`;

function App() {
  return (
    <>
      <AppWrapper>
        <Login/>
      </AppWrapper>
    </>
  );
}

export default App;
