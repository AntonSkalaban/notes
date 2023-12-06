import * as React from "react";
import { Box, Container, CssBaseline } from "@mui/material";
import { NotesList } from "entities/notes-list/notes-list";
import { NoteCreator } from "features/note-creator/note-creator";
import "./App.css";
import { NotesFilters } from "features/notes-filters/notes-filters";

export function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl">
        <Box sx={{ height: "100vh" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "20px",
            }}
          >
            {" "}
            <NotesFilters />
            <NoteCreator />
          </Box>

          <NotesList />
        </Box>
      </Container>
    </React.Fragment>
  );
}
