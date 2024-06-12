import React, { useState } from 'react';
import Modal from '../Modal/Modal.js';
import './Box.css';

const Box = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const clickHandler = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="main_box">
      <img className='img' src={props.image} alt={props.name} />
      <div className="main_box_info">
        <h2>{props.name}</h2>
        <p>{props.title}</p>
      </div>
      <button type="button" onClick={clickHandler}>
        Know Me
      </button>
      {isModalOpen && (
        <Modal
          image={props.image}
          name={props.name}
          title={props.title}
          education={props.education}
          experience={props.experience}
          about={props.about}
          onClose={clickHandler}
        />
      )}
    </div>
  );
};

export default Box;
