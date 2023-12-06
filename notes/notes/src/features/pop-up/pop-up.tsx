import React from "react";
import { Box, Modal } from "@mui/material";
import { style } from "./style";

interface PopUpProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export const PopUp: React.FC<PopUpProps> = ({ isOpen, onClose, children }) => {
  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style.modalBox}>{children}</Box>
    </Modal>
  );
};
