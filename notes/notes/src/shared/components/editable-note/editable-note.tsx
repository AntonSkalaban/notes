import React, { useState } from "react";
import { Box, IconButton, Paper } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";
import { Text, getUnicArray } from "shared/helpers";
import { Note } from "shared/types";
import { EditNoteField, NoteHashtags } from "shared/components";
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
      hashtags: [],
    }
  );

  const resetState = () => {
    setNote({ id: "", title: "", body: "", hashtags: [] });
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const hashtags = Text.findHashtags(value);

    setNote((prev) => {
      return {
        ...prev,
        [name]: value,
        hashtags: hashtags ? getUnicArray(hashtags) : [],
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
      <Box sx={{ marginBottom: "20px" }}>
        <EditNoteField
          fieldName="title"
          text={note.title}
          handleChange={handleChange}
        />

        <EditNoteField
          fieldName="body"
          text={note.body}
          handleChange={handleChange}
        />
      </Box>
      <Box>
        <NoteHashtags hashtags={note.hashtags} />

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
      </Box>
    </Paper>
  );
};
