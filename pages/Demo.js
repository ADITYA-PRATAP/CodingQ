import React, { useState } from 'react';
import Modal from './Modal2';
import styles1 from '@/styles/Modal.module.css';


const HomePage = () => {
  const [showModal, setShowModal] = useState(false);

  const handleToggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div>
      <h1 className={styles1.title}>My Page</h1>
      <button className={styles1.button} onClick={handleToggleModal}>
        Toggle Modal
      </button>

      {showModal && (
        <Modal onClose={handleToggleModal}>
          <h2>This is a modal!</h2>
          <p>Some content in the modal.</p>
        </Modal>
      )}
    </div>
  );
};

export default HomePage;
