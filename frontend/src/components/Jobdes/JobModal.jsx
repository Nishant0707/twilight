import React from "react";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, Text } from "@chakra-ui/react";

const JobModal = ({ isOpen, onClose, job }) => {
  if (!job) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="lg" isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader bgGradient="linear(to-r, #6042ff, #2effe7)" bgClip="text" fontWeight="extrabold" letterSpacing="wide" fontSize="2xl">
          {job.title}
        </ModalHeader>
        <ModalCloseButton color="purple.400" />
        <ModalBody bg="gray.50">
          <Text mb={4} fontSize="md" color="blue.900">{job.fullJD}</Text>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default JobModal;
