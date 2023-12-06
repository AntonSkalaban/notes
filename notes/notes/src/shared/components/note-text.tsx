import React from "react";
import { SxProps, Theme } from "@mui/material";
import { Text } from "shared/helpers";
import { NoteTypography } from "shared/ui/note-typography/note-typography";

interface NoteTextProps {
  text: string;
  style: SxProps<Theme> | undefined;
}

export const NoteText: React.FC<NoteTextProps> = ({ text, style }) => {
  return (
    <NoteTypography
      as="p"
      sx={style}
      dangerouslySetInnerHTML={{ __html: Text.higlightHashtags(text) }}
    />
  );
};
