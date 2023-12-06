import React, { useState } from "react";
import { Box, IconButton, Paper } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { PopUp } from "features";
import { EditableNote, NoteText, NoteHashtags } from "shared/components";
import { useAction } from "shared/hooks";
import { Note } from "shared/types";
import { style } from "./style";

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

      <PopUp isOpen={isModalOpen} onClose={closeModal}>
        <EditableNote
          closeNote={closeModal}
          saveNote={editNote}
          noteData={note}
        />
      </PopUp>
    </>
  );
};
