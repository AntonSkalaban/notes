import React, { useState } from "react";
import { Paper, TextField } from "@mui/material";
import { useAction } from "shared/hooks";
import { EditableNote } from "shared/components";
import { style } from "./style";

export const NoteCreator = () => {
  const { addNote } = useAction();

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      {isOpen ? (
        <EditableNote closeNote={toggle} saveNote={addNote} />
      ) : (
        <Paper variant="elevation" sx={style.noteCreator}>
          <TextField
            variant="standard"
            type="text"
            fullWidth={true}
            minRows={1}
            multiline={true}
            InputProps={{
              disableUnderline: true,
            }}
            placeholder="Note..."
            onClick={toggle}
          />
        </Paper>
      )}
    </>
  );
};
