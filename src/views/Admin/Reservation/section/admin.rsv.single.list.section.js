import React, {useState} from 'react';
import ModalTpl from "../../../../components/_template/modal.tpl";
import UserSingleTripModal from "../../../User/section/user.single.trip.modal";

function AdminRsvSingleListSection({item, i}) {
    const [isOpen, openModal] = useState(false)

    const closeModal = () => openModal(false)

    return (
        <div key={i}>
            {JSON.stringify(item)}
            <button className="" onClick={() => openModal(true)} >open Modal</button>
            <ModalTpl size="lg"  label={`Réservation #${item.id}`} isOpen={isOpen} closeModal={closeModal} component={UserSingleTripModal} data={item} />
        </div>
    );
}

export default AdminRsvSingleListSection;
