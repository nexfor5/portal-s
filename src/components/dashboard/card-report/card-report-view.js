import React from 'react';
import './card-report.scss';
import Badge from 'react-bootstrap/Badge';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function CardReport(props) {
  const handleClick = () => {
    props.navigateTo(`${props.menuId}/${props.reportId}`);
  };

  return (
    <Card className="shadow-sm">
      <Card.Img data-testid="report-image" variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.description}<br />
          {props.tags.map((item) => (
            <Badge key={item} variant="success" className="mr-1">{item}</Badge>
          ))}
        </Card.Text>
        <div className="d-flex justify-content-between">
          <Button variant="primary" onClick={handleClick}>Detalle</Button>
          <Button variant="outline-dark">Descargar</Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default CardReport;