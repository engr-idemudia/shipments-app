import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useNavigate } from "react-router-dom";

const ShipmentsTable = (props) => {
  const navigate = useNavigate();

  const viewShipment = (index) => {
    navigate(`shipments/${index}`);
  };

  return (
    <div>
      <h1 className="mb-4">Shipments</h1>
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>#</th>
            <th>Order Number</th>
            <th>Date</th>
            <th>Customer</th>
            <th>Tracking Number</th>
            <th>Status</th>
            <th>Consignee</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {props.shipments.map((shipment, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{shipment.orderNo}</td>
                <td>{shipment.date}</td>
                <td>{shipment.customer}</td>
                <td>{shipment.trackingNo}</td>
                <td>{shipment.status}</td>
                <td>{shipment.consignee}</td>
                <td>
                  <Button
                    size="sm"
                    variant="secondary"
                    onClick={() => viewShipment(index)}
                  >
                    view
                  </Button>
                </td>
                <td>
                  <Button
                    size="sm"
                    variant="danger"
                    onClick={() => props.deleteShipment(index)}
                  >
                    delete
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default ShipmentsTable;
