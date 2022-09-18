import React from "react";
import { Table, Card, Dropdown } from "react-bootstrap";

const styles = {
  cardd: {
    backgroundColor: "black",
    marginTop: "10vh",
  },
};
function ListTransaction() {
  return (
    <div>
      <Card style={styles.cardd}>
        <Card.Body className="text-light m-3">
          <Card.Title className="mb-4">Incoming Transaction</Card.Title>
          <Table striped bordered hover variant="dark">
            <thead>
              <tr className="text-danger">
                <th>No</th>
                <th>Users</th>
                <th>Bukti Transfer</th>
                <th>Remaining Active</th>
                <th>Status User</th>
                <th>Status Payment</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Radif Ganteng</td>
                <td>bca.jpg</td>
                <td>26/Hari</td>
                <td className="text-success">Active</td>
                <td className="text-success">Approve</td>
              </tr>
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ListTransaction;
