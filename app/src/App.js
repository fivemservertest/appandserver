import { useState, useRef, useEffect } from "react";
import {
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  Button,
  Form,
} from "react-bootstrap";
import { useLocalStorage } from "react-use";
import Quotation from "./components/Quotation";
import ProductManagement from "./components/ProductManagement";
import QuotationManagement from "./components/QuotationManagement";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Login } from "./components/Login";

function App() {
  const [user, setUser] = useState();
  const handleLogin = (data) => {
    console.log('handleLogin', data)
    fetch('${API_URL}/users/login',{ 
      method: "POST",
      mode: "cors", 
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => {
      if (data.error) {
        window.alert("Error: "+data.error)
      } else {
        window.alert("Welcome "+data.name)
        console.log(data)
        setUser(data)
      }
    })
    ;
  };
  return (
    <Router>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">VMS Company</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/react-quotation">Home</Nav.Link>
            <Nav.Link href="/react-quotation/quotation">Quotation</Nav.Link>
            <Nav.Link href="/react-quotation/quotation-management">
              Quotation Management
              </Nav.Link>
            {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
            <Nav.Link href="/react-quotation/product-management">
              Product Management
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route
          path="/react-quotation/quotation-management"
          element={<QuotationManagement />}
        />
        <Route
          path="/react-quotation/product-management"
          element={<ProductManagement />}
        />

        <Route path="/react-quotation/quotation" element={<Quotation />} />
        <Route
          path="/react-quotation"
          element={
            
            <Container>
              {/* {user ? (
                  <div>Hello {user.name}</div>
                  ) : (
                  <Login onLogin={handleLogin}/>
                  )
              } */}
              <br/>
              <h2>Welcome!</h2>
            </Container>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
