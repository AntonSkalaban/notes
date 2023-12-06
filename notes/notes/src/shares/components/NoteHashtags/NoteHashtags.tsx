import React from "react";
import { NoteTypography } from "../NoteText/NoteText";

interface NoteHashtagsProps {
  hashtags: string[];
}
export const NoteHashtags: React.FC<NoteHashtagsProps> = ({ hashtags }) => {
  return (
    <NoteTypography sx={{ color: "blue" }}>{hashtags.join(" ")}</NoteTypography>
  );
};
