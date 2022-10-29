import { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import { Routes, Route } from "react-router-dom";
import shipmentsData from "./api/shipments.json";
import ShipmentsTable from "./components/ShipmentsTable";
import ShipmentDetail from "./components/ShipmentDetail";

import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [shipments, setShipments] = useState([]);

  useEffect(() => {
    setShipments(shipmentsData); // initialize with offline data
  }, []);

  const deleteShipment = (index) => {
    setShipments([...shipments.slice(0, index), ...shipments.slice(index + 1)]);
  };

  const findShipment = (index) => shipments[index];

  const updateShipment = (index, shipment) => {
    setShipments([
      ...shipments.slice(0, index),
      shipment,
      ...shipments.slice(index + 1),
    ]);
  };

  return (
    <Container className="py-5">
      <Routes>
        <Route
          path="/"
          element={
            <ShipmentsTable
              shipments={shipments}
              deleteShipment={deleteShipment}
            />
          }
        />
        <Route
          path="shipments/:index"
          element={
            <ShipmentDetail
              findShipment={findShipment}
              updateShipment={updateShipment}
            />
          }
        />
      </Routes>
    </Container>
  );
};

export default App;
