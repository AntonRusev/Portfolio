import { useEffect } from 'react';

import css from './Modal.module.css';

export const Modal = ({
    modalTrigger,
    formErrors
}) => {

    useEffect(() => {
        setTimeout(() => {
            modalTrigger();
        }, 3000);
    }, []);


    return (
        <div onClick={modalTrigger} className={css.overlay}>
            <div className={css['modal-container']}>
                <p className={css.message}>
                    {
                        (formErrors.username) ? `${formErrors.username}`
                            : (formErrors.email) ? `${formErrors.email}`
                                : (formErrors.message) ? `${formErrors.message}`
                                    : <span className={css.success}>Message Sent</span>
                    }
                </p>
            </div>
        </div>
    );
};