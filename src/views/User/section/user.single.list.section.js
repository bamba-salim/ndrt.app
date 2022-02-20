import React, {useState} from 'react';
import ModalTpl from "../../../components/_template/modal.tpl";
import UserSingleTripModal from "./user.single.trip.modal";

function UserSingleListSection({item = {}, i}) {

    const [isOpen, setOpenModal] = useState(false);
    const closeModal = () => {
        setOpenModal(false)
    }
    return (
        <div key={i}>
            <button className="" onClick={() => setOpenModal(true)} >open Modal</button>
            <ModalTpl size="lg"  label={`Réservation #${item.id}`} isOpen={isOpen} closeModal={closeModal} component={UserSingleTripModal} data={item} />
        </div>
    );
}

export default UserSingleListSection;
