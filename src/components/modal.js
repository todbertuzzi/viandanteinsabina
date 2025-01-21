import React, { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';

const MyModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>Apri Modal</button>

      <Transition show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => setIsOpen(false)}>
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
              <button onClick={() => setIsOpen(false)}>Chiudi</button>
            </Dialog.Panel>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default MyModal;
