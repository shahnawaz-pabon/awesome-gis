import React from "react";
import { Button, Modal } from "@themesberg/react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const DefaultModal = ({
  show = false,
  loading = false,
  title = "Modal",
  className = "",
  onClose,
  children,
  ...props
}: any) => {
  return (
    <>
      <Modal
        as={Modal.Dialog}
        centered
        show={show}
        onHide={onClose}
        contentClassName={className}
      >
        <Modal.Header>
          <Modal.Title
            className="h6"
            style={{ textAlign: "center", height: "1px" }}
          >
            {title}
          </Modal.Title>
          <Button variant="close" aria-label="Close" onClick={onClose} />
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
      </Modal>
    </>
  );
};

export default DefaultModal;
