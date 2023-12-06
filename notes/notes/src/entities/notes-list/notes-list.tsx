import React from "react";
import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import { ReadableNote } from "entities";
import { getNotes } from "shared/store/selectors";
import { style } from "./style";

export const NotesList = () => {
  const notes = useSelector(getNotes);
  return (
    <Box sx={style.box}>
      {notes.map((note) => {
        return <ReadableNote note={note} key={note.id} />;
      })}
    </Box>
  );
};
