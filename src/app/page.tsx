"use client";

import InfoIcon from "@mui/icons-material/Info";
import {
  Box,
  Button,
  Checkbox,
  Chip,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  FormControlLabel,
  IconButton,
  LinearProgress,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import ReactMarkdown from "react-markdown";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
type Book = {
  id: string;
  title: string;
  author: string;
  translation?: string;
  year: number;
  genre: string;
  category: string;
  notes: string;
  done?: boolean;
};

import { READING_LIST } from "./readingList";

const GENRES = ["all", "literature", "history", "philosophy"];
const CATEGORIES = [
  "all",
  "greece",
  "rome",
  "christianity",
  "renaissance",
  "protestant",
  "science",
  "enlightenment",
  "kant",
  "hegel",
  "marx",
  "russia",
  "nietzsche",
  "capitalism",
  "modern",
];

export default function ReadingListApp() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  // const [books, setBooks] = useState<Book[]>(INITIAL_BOOKS);

  const [genre, setGenre] = useState("all");
  const [category, setCategory] = useState("all");
  const [open, setOpen] = useState(false);
  const [activeBook, setActiveBook] = useState<Book | null>(null);
  const [books, setBooks] = useState<Book[]>(READING_LIST);

  const filtered = useMemo(() => {
    let list = [...books];

    if (genre !== "all") list = list.filter((b) => b.genre === genre);
    if (category !== "all") list = list.filter((b) => b.category === category);

    return list;
  }, [books, genre, category]);
  const completedCount = filtered.filter((b) => b.done).length;
  const progress = Math.round((completedCount / filtered.length) * 100);

  const openNotes = (book: Book) => {
    setActiveBook(book);
    setOpen(true);
  };

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#222" }}>
      <Box position="sticky" sx={{ p: 2, marginLeft: { xs: 0, md: 15 } }}>
        <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 700 }}>
          {"Leo's Reading List"}
        </Typography>
      </Box>

      <Container maxWidth="lg" sx={{ py: 3 }}>
        <Box>
          <Typography variant="subtitle2" sx={{ opacity: 0.7, mb: 1 }}>
            Overall Progress
          </Typography>
          <LinearProgress variant="determinate" value={progress} />
          <Typography variant="caption" sx={{ mt: 0.5, display: "block" }}>
            {completedCount}/{filtered.length} completed ({progress}%)
          </Typography>
        </Box>
        <Stack spacing={2} sx={{ mb: 3 }}>
          <Stack
            direction={"column"}
            spacing={2}
            justifyContent={"space-between"}
            alignItems={"stretch"}
          >
            <Box display="flex" flexDirection="row" alignItems="center">
              <Typography
                sx={{
                  display: "block",
                  mb: 0.5,
                  fontWeight: "600",
                  // paddingX: 2,
                }}
              >
                Genre:
              </Typography>
              <ToggleButtonGroup
                color="primary"
                exclusive
                size="small"
                value={genre}
                onChange={(_, val) => val && setGenre(val)}
              >
                {GENRES.map((g) => (
                  <ToggleButton
                    key={g}
                    value={g}
                    sx={{ textTransform: "capitalize", color: "white" }}
                  >
                    {g}
                  </ToggleButton>
                ))}
              </ToggleButtonGroup>
            </Box>
            <Box display="flex" flexDirection="row" alignItems="center">
              <Typography
                sx={{
                  display: "block",
                  mb: 0.5,
                  fontWeight: "600",
                  // paddingX: 2,
                }}
              >
                Category:
              </Typography>
              <ToggleButtonGroup
                color="secondary"
                exclusive
                size="small"
                value={category}
                onChange={(_, val) => val && setCategory(val)}
                sx={{ overflowX: "scroll" }}
              >
                {CATEGORIES.map((c) => (
                  <ToggleButton
                    key={c}
                    value={c}
                    sx={{ textTransform: "capitalize", color: "white" }}
                  >
                    {c}
                  </ToggleButton>
                ))}
              </ToggleButtonGroup>
            </Box>
          </Stack>
        </Stack>

        <Divider sx={{ mb: 2 }} />

        <Stack spacing={2}>
          {filtered.map((book) => (
            <Box
              key={book.id}
              display="flex"
              flexDirection="row"
              justifyContent={"space-between"}
              sx={{
                bgcolor: "#333",
                p: { xs: 0.5, md: 2 },
                borderRadius: "16px",
              }}
            >
              <Box
                display="flex"
                flexDirection="row"
                alignItems="center"
                // width={{ xs: "200px", md: "750px" }}
                sx={{
                  marginLeft: 1,
                  overflowX: "auto", // enables horizontal scrolling
                  whiteSpace: "nowrap", // keep text on one line
                }}
              >
                <FormControlLabel
                  control={
                    <Checkbox
                      // disabled
                      checked={!!book.done}
                      // onChange={() => toggleDone(book.id)}
                    />
                  }
                  label=""
                />
                <Typography
                  variant="subtitle1"
                  sx={{
                    display: { xs: "block", md: "inline" },
                    whiteSpace: "pre-line",
                  }}
                >
                  {book.title} {`by ${book.author}`}{" "}
                  {book.translation
                    ? isMobile
                      ? ""
                      : `${book.translation}`
                    : ""}
                </Typography>
              </Box>
              <Stack
                direction="row"
                spacing={{ xs: 0.5, md: 1 }}
                minWidth={"140px"}
                alignItems={"center"}
                justifyContent={"flex-end"}
                sx={{ mt: 1, flexWrap: "wrap", backgroundColor: "red" }}
              >
                <Chip
                  size="small"
                  sx={{
                    backgroundColor: "white",
                    display: { xs: "none", md: "block" },
                  }}
                  label={
                    book.year > 0
                      ? `${book.year} CE`
                      : `${Math.abs(book.year)} BCE`
                  }
                />
                <Chip
                  size="small"
                  color="primary"
                  label={
                    isMobile
                      ? capitalize(book.genre).slice(0, 3) + "."
                      : capitalize(book.genre)
                  }
                />
                <Chip
                  size="small"
                  color="secondary"
                  label={
                    isMobile
                      ? capitalize(book.category).slice(0, 3) + "."
                      : capitalize(book.category)
                  }
                />
                <IconButton onClick={() => openNotes(book)}>
                  <InfoIcon />
                </IconButton>
              </Stack>
            </Box>
          ))}
        </Stack>

        <Dialog
          open={open}
          onClose={() => setOpen(false)}
          maxWidth="md"
          fullWidth
        >
          <DialogTitle>
            {activeBook ? `${activeBook.title} — Notes` : "Notes"}
          </DialogTitle>
          <DialogContent dividers>
            {activeBook ? (
              <Box
                sx={{
                  "& h1, & h2, & h3": { mt: 2 },
                  "& p": { lineHeight: 1.75 },
                }}
              >
                <ReactMarkdown>
                  {activeBook.notes || "No notes yet."}
                </ReactMarkdown>
              </Box>
            ) : null}
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpen(false)}>Close</Button>
          </DialogActions>
        </Dialog>
      </Container>
    </Box>
  );
}

function capitalize(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}
