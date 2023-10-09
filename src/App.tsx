import React from "react";
import styled from "styled-components";
import Login from "./components/Login";
// import Sidebar from "./components/Sidebar";
// import PageNotFound from "./components/PageNotFound";
// import Error500Page from "./components/Error500Page";

const AppWrapper = styled.div`
  background: #fff;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: row;
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
