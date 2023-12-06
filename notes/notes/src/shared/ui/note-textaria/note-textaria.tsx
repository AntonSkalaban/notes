import { TextField, styled } from "@mui/material";

export const NoteTextaria = styled(TextField)(() => ({
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
  lineHeight: "1.15rem",
  letterSpacing: "0.05rem",
  "& ::placeholder": {
    color: "green",
  },
}));
