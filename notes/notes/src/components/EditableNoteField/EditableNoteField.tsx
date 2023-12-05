import React from "react";
import { Box, TextField, styled } from "@mui/material";
import { style } from "./style";
import { NoteText } from "components/shares/components/NoteText/NoteText";
// import { getHiglightText } from "helpers/Hashtags";

// export const NoteTypography = styled(Typography)(() => ({
//   width: "100%",
//   minHeight: "26px",
//   boxSizing: "border-box",
//   whiteSpace: "pre-wrap",
//   wordWrap: "break-word",
//   color: "black",
//   fontSize: "18px",
//   letterSpacing: "0.05rem",
//   padding: 0,
//   lineHeight: "1.15rem",
// }));

const NoteTextField = styled(TextField)(() => ({
  width: "100%",
  minHeight: "26px",
  boxSizing: "border-box",
  resize: "none",
  "--Textarea-focusedHighlight": "none",
  backgroundColor: "transparent",
  color: "transparent",
  caretColor: "black",
  position: "absolute",
  top: "0",
  left: "0",
  zIndex: 2,
  border: "none",
  padding: 0,
  // fontSize: "14x",
  lineHeight: "1.15rem",
  letterSpacing: "0.05rem",
  "& ::placeholder": {
    color: "green",
  },
}));

interface NoteField {
  fieldName: "title" | "body";
  text: string;
  handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}
export const EditableNoteField: React.FC<NoteField> = ({
  fieldName,
  text,
  handleChange,
}) => {
  return (
    <Box sx={{ marginBottom: "20px" }}>
      <Box sx={{ position: "relative" }}>
        <NoteText text={text} style={style[fieldName]} />

        <NoteTextField
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
