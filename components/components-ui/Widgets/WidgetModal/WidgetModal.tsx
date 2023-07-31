"use client";
import { Children, PropsWithChildren, ReactNode, useState } from "react";
import { ModalDialogProps, ModalHeaderProps } from "react-bootstrap";
import Button, { ButtonProps } from "react-bootstrap/Button";
import Modal, { ModalProps } from "react-bootstrap/Modal";
import { BsPrefixRefForwardingComponent } from "react-bootstrap/esm/helpers";
type TitleProps = PropsWithChildren;
type Props = PropsWithChildren<{
  buttonProps: ButtonProps;
  modalProps?: ModalProps;
  headerProps?: ModalHeaderProps;
  titleProps?: TitleProps;
  footerProps?: {
    BtnCancelProps?: ButtonProps;
    BtnSaveProps?: ButtonProps;
  };
  dialogProps?: ModalDialogProps;
}>;

export default function WidgetModal({
  buttonProps,
  children,
  headerProps = {},
  modalProps = {},
  dialogProps = {},
  footerProps = {},
  titleProps = {},
}: Props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  modalProps;
  return (
    <>
      <Button
        {...buttonProps}
        onClick={(...args) => [handleShow(), buttonProps?.onClick?.(...args)]}
      />

      <Modal
        {...modalProps}
        show={modalProps.show === false ? false : modalProps.show || show}
        onHide={(...args) =>
          [handleClose, modalProps.onHide].map((fn) => fn?.(...args))
        }
      >
        {(headerProps.children || titleProps.children) && (
          <Modal.Header closeButton={modalProps.closeButton}>
            {titleProps.children && (
              <Modal.Title>{titleProps.children}</Modal.Title>
            )}
            {headerProps.children}
          </Modal.Header>
        )}

        <Modal.Body> {children} </Modal.Body>
        {(footerProps.BtnCancelProps || footerProps.BtnSaveProps) && (
          <Modal.Footer>
            {footerProps.BtnCancelProps && (
              <Button
                {...footerProps.BtnCancelProps}
                onClick={(...args) =>
                  [handleClose, footerProps.BtnCancelProps?.onClick].map((fn) =>
                    fn?.(...args)
                  )
                }
              />
            )}
            {footerProps.BtnSaveProps && (
              <Button
                {...footerProps.BtnSaveProps}
                onClick={(...args) =>
                  [handleClose, footerProps.BtnSaveProps?.onClick].map((fn) =>
                    fn?.(...args)
                  )
                }
              />
            )}
          </Modal.Footer>
        )}
      </Modal>
    </>
  );
}
