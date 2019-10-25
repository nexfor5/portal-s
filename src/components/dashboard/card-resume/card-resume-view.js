import React from 'react';
import './card-resume.scss';
import Button from 'react-bootstrap/Button';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

function CardResume(props) {
  const handleClick = () => {
    props.navigateTo(props.to);
  };

  return (
    <div className="card-resume p-2 shadow-sm text-right">
      <div className={`icon icon-${props.color} shadow d-flex justify-content-center align-items-center`}>
        <FontAwesomeIcon icon={props.icon} size="2x" className="text-light" />
      </div>
      <p className="text-muted">{props.name}</p>
      <h1>{props.value}</h1>
      <hr />
      <Button variant="link" block onClick={handleClick}><small>Ver detalle</small></Button>
    </div>
  );
}

export default CardResume;