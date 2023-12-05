import React, { useState } from "react";
import { Note } from "types/types";
import { EditableNoteField } from "./EditableNoteField/EditableNoteField";
import { Box, IconButton, Paper } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import { style } from "./style";

interface EditableNoteProps {
  noteData?: Note;
  closeNote: () => void;
  saveNote: (note: Note) => void;
}
export const EditableNote: React.FC<EditableNoteProps> = ({
  closeNote,
  saveNote,
  noteData,
}) => {
  const [note, setNote] = useState<Note>(
    noteData ?? {
      id: Date.now().toString(),
      title: "",
      body: "",
    }
  );

  const resetState = () => {
    setNote({ id: "", title: "", body: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNote((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSave = () => {
    saveNote(note);
    resetState();
    closeNote();
  };

  const handleClose = () => {
    closeNote();
    resetState();
  };

  return (
    <Paper variant="elevation" sx={style.editableNote}>
      <EditableNoteField
        title={note.title}
        body={note.body}
        handleChange={handleChange}
      />

      <Box className="btns-box_editable" sx={style.btnsBox}>
        <IconButton
          aria-label="edit"
          onClick={handleSave}
          disabled={!note.body && !note.title}
        >
          <AddIcon />
        </IconButton>
        <IconButton aria-label="delete" onClick={handleClose}>
          <CloseIcon />
        </IconButton>
      </Box>
    </Paper>
  );
};
