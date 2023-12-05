import { TextField } from "@mui/material";
import React from "react";

interface NoteField {
  title: string;
  body: string;
  handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}
export const EditableNoteField: React.FC<NoteField> = ({
  title,
  body,
  handleChange,
}) => {
  return (
    <>
      {" "}
      <TextField
        variant="standard"
        type="text"
        fullWidth={true}
        InputProps={{
          disableUnderline: true,
          style: { fontSize: 18 },
        }}
        name="title"
        placeholder="Enter title"
        value={title}
        onChange={handleChange}
      />
      <TextField
        variant="standard"
        type="text"
        fullWidth={true}
        minRows={1}
        multiline={true}
        InputProps={{
          disableUnderline: true,
        }}
        name="body"
        placeholder="Notes..."
        value={body}
        onChange={handleChange}
      />
    </>
  );
};
