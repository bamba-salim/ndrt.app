import React from 'react';
import {Modal} from "react-bootstrap";

function ModalTpl({isOpen, component: Component, closeModal, data, size = 'md'}) {

    return (
        <Modal show={isOpen} onHide={closeModal} backdrop="static" centered size={size} dialogClassName="rounded-0">
            <Component closeModal={closeModal} data={data}  />
        </Modal>
    );
}

export default ModalTpl;
