import React from "react";
import { SxProps, Theme, Typography, styled } from "@mui/material";
import { getHiglightText } from "helpers";

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

interface NoteTextProps {
  text: string;
  style: SxProps<Theme> | undefined;
}

export const NoteText: React.FC<NoteTextProps> = ({ text, style }) => {
  return (
    <NoteTypography
      as="p"
      sx={style}
      dangerouslySetInnerHTML={{ __html: getHiglightText(text) }}
    />
  );
};
