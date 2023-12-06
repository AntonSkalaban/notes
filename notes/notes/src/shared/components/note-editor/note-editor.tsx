import React from "react";
import { Box } from "@mui/material";
import { NoteText } from "shared/components";
import { NoteTextaria } from "shared/ui";
import { style } from "./style";

interface EditNoteFieldProps {
  fieldName: "title" | "body";
  text: string;
  handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}
export const EditNoteField: React.FC<EditNoteFieldProps> = ({
  fieldName,
  text,
  handleChange,
}) => {
  return (
    <Box sx={{ marginBottom: "20px" }}>
      <Box sx={{ position: "relative" }}>
        <NoteText text={text} style={style[fieldName]} />

        <NoteTextaria
          sx={style[fieldName]}
          variant="standard"
          type="text"
          minRows={1}
          multiline={true}
          InputProps={{
            disableUnderline: true,
            sx: { ...style.input, ...style[fieldName] },
          }}
          autoFocus={true}
          placeholder={`Enter ${fieldName}...`}
          name={fieldName}
          value={text}
          onChange={handleChange}
        />
      </Box>
    </Box>
  );
};
