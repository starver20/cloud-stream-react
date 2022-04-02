import React from 'react';
import ReactDOM from 'react-dom';
import classes from './Modal.module.css';

const Backdrop = ({ onClick }) => {
  return (
    <div
      className={classes.backdrop}
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
    />
  );
};
const ModalOverlay = ({ children }) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{children}</div>
    </div>
  );
};

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClick={props.onClick} />,
        document.getElementById('overlays')
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        document.getElementById('overlays')
      )}
    </>
  );
};

export { Modal };
