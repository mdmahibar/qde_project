import React from "react";
import "./Modal.css";
import { animated, useSpring } from "@react-spring/web";

const Modal = ({
  image,
  name,
  title,
  education,
  experience,
  about,
  onClose,
}) => {
  const spring = useSpring({
    from: { transform: "translateX(-100%)" },
    to: { transform: "translateX(0)" },
  });

  return (
    <div className="modal-overlay" onClick={onClose}>
      <animated.div style={spring}>
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <button className="close-button" onClick={onClose}>
            X
          </button>
          <div className="modal-left">
            <img src={image} alt={name} />
          </div>
          <div className="modal-right">
            <h2>{name}</h2>
            <p>
              <strong>Designation:</strong> {title}
            </p>
            <p>
              <strong>Education:</strong> {education}
            </p>
            <p>
              <strong>Experience:</strong> {experience}
            </p>
            <p>
              <strong>About:</strong> {about}
            </p>
          </div>
        </div>
      </animated.div>
    </div>
  );
};

export default Modal;
