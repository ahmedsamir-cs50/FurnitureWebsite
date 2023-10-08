import { Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function AdminAllOrdersItem({ orderItem }) {
  return (
    <Col sm={12} md={6}>
    <Link  to={`/admin/orders/${orderItem._id}`}  style={{ textDecoration: "none" }}>
    <Card className="Item-Card bg-dark text-light my-3 mx-auto"style={{ width: '20rem' ,fontSize:"13px",textAlign:"start"}} >
      <Card.Body>
        <Card.Title> Order No #{orderItem.id}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Name: {orderItem.user.name || ""}</Card.Subtitle>
        <Card.Text>
        E-mail:{orderItem.user.email || ""}
        </Card.Text>
        <Card.Text>
        isDelivered:  {orderItem.isDelivered === true ? " Done" : "Not Yet  "}
        </Card.Text>
        <Card.Text>
        Payment:  {orderItem.isPaid === true ? " Paid" : "Not Yet paid  "}
        </Card.Text>
        <Card.Text>
        {orderItem.totalOrderPrice || 0} L.E
        </Card.Text>
      </Card.Body>
    </Card>
    </Link>
    </Col>
  );
}

export default AdminAllOrdersItem;