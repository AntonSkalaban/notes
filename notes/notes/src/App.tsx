import * as React from "react";
import { Box, Container, CssBaseline } from "@mui/material";
import { NotesList } from "components/NotesList/NotesList";
import { NoteCreator } from "components/NoteCreator/NoteCteator";
import "./App.css";

export function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="xl">
        <Box sx={{ height: "100vh" }}>
          <NoteCreator />
          <NotesList />
        </Box>
      </Container>
    </React.Fragment>
  );
}
