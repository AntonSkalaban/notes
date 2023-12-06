import React, { useState } from "react";
import { Box, IconButton, Modal, Paper } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { EditableNote } from "components/EditableNote/EditableNote";
import { Note } from "types/types";
import { useAction } from "hooks";
import { style } from "./style";
import { NoteText } from "shares/components/NoteText/NoteText";
import { NoteHashtags } from "shares/components/NoteHashtags/NoteHashtags";

interface ReadableNoteProps {
  note: Note;
}

export const ReadableNote: React.FC<ReadableNoteProps> = ({ note }) => {
  const { editNote, deleteNote } = useAction();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleDelete = () => {
    deleteNote(note);
  };

  return (
    <>
      <Paper variant="elevation" sx={style.readableNote}>
        <Box sx={{ marginBottom: "20px" }}>
          <NoteText
            text={note.title}
            style={{ fontSize: "18px", fontWeight: 600 }}
          />
          <NoteText text={note.body} style={{ fontSize: "14px" }} />
        </Box>

        <Box>
          <NoteHashtags hashtags={note.hashtags} />
          <Box className="btns-box" sx={style.readableBtnsBox}>
            <IconButton aria-label="edit" onClick={openModal}>
              <EditIcon />
            </IconButton>
            <IconButton aria-label="delete" onClick={handleDelete}>
              <DeleteIcon />
            </IconButton>
          </Box>
        </Box>
      </Paper>

      <Modal
        open={isModalOpen}
        onClose={closeModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style.modalBox}>
          <EditableNote
            closeNote={closeModal}
            saveNote={editNote}
            noteData={note}
          />
        </Box>
      </Modal>
    </>
  );
};
