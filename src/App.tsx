import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import { ChakraProvider } from "@chakra-ui/react";
import Login from "./pages/Login";
import { RecoilRoot } from "recoil";
import "./App.css";

function App() {
  return (
    <ChakraProvider>
      <RecoilRoot>
        <BrowserRouter>
          <Routes>
            <Route path="/main" element={<Main />} />
            <Route path="/" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </ChakraProvider>
  );
}

export default App;
