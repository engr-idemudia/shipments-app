import { useEffect, useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";

const ShipmentDetail = (props) => {
  const params = useParams();
  const navigate = useNavigate();
  const shipment = props.findShipment(params.index);

  const [orderNo, setOrderNo] = useState("")
  const [date, setDate] = useState("")
  const [customer, setCustomer] = useState("")
  const [trackingNo, setTrackingNo] = useState("")
  const [status, setStatus] = useState("")
  const [consignee, setConsignee] = useState("")

  useEffect(() => {
    if (shipment) {
        setOrderNo(shipment.orderNo);
        setDate(shipment.date);
        setCustomer(shipment.customer);
        setTrackingNo(shipment.trackingNo);
        setStatus(shipment.status);
        setConsignee(shipment.consignee);
    }
  }, [shipment])

  const updateShipment = () => {
    const newShipment = {
        orderNo,
        date,
        customer,
        trackingNo,
        status,
        consignee,
    }

    props.updateShipment(parseInt(params.index), newShipment);
    navigate('/')
  }

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2>Shipment Detail</h2>
        <Button size="sm" variant="link" onClick={() => navigate("/")}>
          back
        </Button>
      </div>
      <Row className="mb-3">
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Order Number</Card.Title>
              <Form.Control value={orderNo} onChange={(event) => setOrderNo(event.target.value)} />
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Date</Card.Title>
              <Form.Control value={date} onChange={(event) => setDate(event.target.value)} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Customer</Card.Title>
              <Form.Control value={customer} onChange={(event) => setCustomer(event.target.value)} />
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Tracking Number</Card.Title>
              <Form.Control value={trackingNo} onChange={(event) => setTrackingNo(event.target.value)} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row className="mb-3">
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Status</Card.Title>
              <Form.Control value={status} onChange={(event) => setStatus(event.target.value)} />
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body>
              <Card.Title>Consignee</Card.Title>
              <Form.Control value={consignee} onChange={(event) => setConsignee(event.target.value)} />
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Button onClick={() => updateShipment()}>Update shipment</Button>
    </div>
  );
};

export default ShipmentDetail;
