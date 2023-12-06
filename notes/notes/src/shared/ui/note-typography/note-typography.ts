import { Typography, styled } from "@mui/material";

export const NoteTypography = styled(Typography)(() => ({
  width: "100%",
  minHeight: "26px",
  boxSizing: "border-box",
  whiteSpace: "pre-wrap",
  wordWrap: "break-word",
  color: "black",
  fontSize: "14px",
  letterSpacing: "0.05rem",
  padding: 0,
  lineHeight: "1.15rem",
}));
