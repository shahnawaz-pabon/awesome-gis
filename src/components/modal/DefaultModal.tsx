import React from "react";
import { Button, Modal } from "@themesberg/react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Image } from "react-bootstrap";

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
        size="lg"
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
        <Modal.Body>
          <Image
            style={{
              width: "100%",
              height: "275px",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            src={children?.picture}
          />
          <div>
            <br />
          </div>
          <p>{children?.description}</p>
        </Modal.Body>
        <Modal.Footer style={{ textAlign: "center" }}>
          <Button
            variant="secondary"
            href={children?.seeMoreLink}
            target="_blank"
          >
            See More
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DefaultModal;
