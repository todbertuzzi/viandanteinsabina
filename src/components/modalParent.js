import React, { useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import ExternalButton from './ExternalButton';

const ModalParent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div>
      {/* Bottone esterno */}
      <ExternalButton openModal={openModal} />

      {/* Modale */}
      <Transition show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 flex items-center justify-center p-4">
            <Dialog.Panel className="bg-white p-6 rounded">
              <Dialog.Title>Benvenuto nella Modal!</Dialog.Title>
              <p>Questo è il contenuto della modale.</p>
              <button onClick={closeModal} className="mt-4 bg-red-500 text-white p-2 rounded">
                Chiudi
              </button>
            </Dialog.Panel>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default ModalParent;
