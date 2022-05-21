import Login from "./pages/Authentication/Login";
import Form from "./pages/Dashboard/Form";
import Dashboard from "./pages/Dashboard/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function app() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/form/:id" element={<Form />}></Route>
          <Route path="/form" element={<Form />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
        </Routes>
      </Router>
    </div>
  );
}
