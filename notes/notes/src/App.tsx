import React, { useEffect } from "react";
import { Box, Container, CssBaseline } from "@mui/material";
import { NotesList } from "entities";
import { NoteCreator, NotesFilters } from "features";
import { useAction } from "shared/hooks";

export function App() {
  const { initNotes } = useAction();

  useEffect(() => {
    initNotes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
