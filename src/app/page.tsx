"use client";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import LockIcon from "@mui/icons-material/Lock"; // [admin]
import LockOpenIcon from "@mui/icons-material/LockOpen"; // [admin]
import {
  AppBar,
  Box,
  Button,
  Chip,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton, // [admin]
  LinearProgress,
  Rating,
  Stack,
  TextField, // [admin]
  ToggleButton,
  ToggleButtonGroup,
  Toolbar,
  Tooltip, // [admin]
  Typography,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useEffect, useMemo, useState } from "react";
import ReactMarkdown from "react-markdown";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { Book } from "./book";
import { READING_LIST } from "./readingList";

const GENRES = ["all", "literature", "history", "philosophy"];
// const CATEGORIES = [
//   "all",
//   "greece",
//   "rome",
//   "christianity",
//   "renaissance",
//   "protestant",
//   "science",
//   "enlightenment",
//   "kant",
//   "hegel",
//   "marx",
//   "russia",
//   "nietzsche",
//   "capitalism",
//   "modern",
// ];
const CATEGORIES: string[] = ["all"];
for (let i = 0; i < READING_LIST.length; i++) {
  if (!CATEGORIES.includes(READING_LIST[i].category)) {
    CATEGORIES.push(READING_LIST[i].category);
  }
}


export default function ReadingListApp() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  // const [books, setBooks] = useState<Book[]>(INITIAL_BOOKS);

  const [genre, setGenre] = useState("all");
  const [category, setCategory] = useState("all");
  const [open, setOpen] = useState(false);
  const [activeBook, setActiveBook] = useState<Book | null>(null);
  // [admin] ——————————————————————————————————————————————
  const [isAdmin, setIsAdmin] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [loginPassword, setLoginPassword] = useState("");
  const [loginError, setLoginError] = useState(false);
  const [noteEditing, setNoteEditing] = useState(false);
  const [noteDraft, setNoteDraft] = useState("");
  const [noteSaving, setNoteSaving] = useState(false);
  const [noteMd, setNoteMd] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/auth")
      .then((r) => r.json())
      .then((data) => setIsAdmin(data.ok));
  }, []);
  // ————————————————————————————————————————————————————

  const filtered = useMemo(() => {
    let list = [...READING_LIST];

    if (genre !== "all") list = list.filter((b) => b.genre === genre);
    if (category !== "all") list = list.filter((b) => b.category === category);

    return list;
  }, [genre, category]);
  const completedCount = filtered.filter((b) => b.done).length;
  const progress =
    filtered.length === 0
      ? 0
      : Math.round((completedCount / filtered.length) * 100);

  const openNotes = (book: Book) => {
    setActiveBook(book);
    setOpen(true);
    setNoteEditing(false); // [admin]
    setNoteMd(null); // [admin]
  };

  // [admin] ——————————————————————————————————————————————
  const noteKey = activeBook
    ? (activeBook.notesPath?.replace(/^\/notes\//, "") ?? activeBook.title.toLowerCase().replace(/\s+/g, "-") + ".md")
    : "";

  const saveNote = async () => {
    setNoteSaving(true);
    await fetch(`/api/notes/${noteKey}`, { method: "PUT", body: noteDraft });
    setNoteMd(noteDraft);
    setNoteEditing(false);
    setNoteSaving(false);
  };
  // ————————————————————————————————————————————————————
  const [copied, setCopied] = useState(false);

  const [readingListString, setReadingListString] = useState("");

  const copy = async () => {
    await navigator.clipboard.writeText(readingListString);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  useEffect(() => {
    const reading_list = filtered
      .map((book) => {
        return `${book.title} by ${book.author}${
          book.translation ? " " + book.translation : ""
        } [${capitalize(book.category)}] [${capitalize(book.genre)}] (${
          book.year
        })`;
      })
      .join("\n");

    setReadingListString(reading_list);
  }, [filtered]);

  return (
    <Box
      sx={{
        minHeight: "100vh",
        // bgcolor: "#222",
        background: `linear-gradient(180deg, #000 0px, #222 250px)`,
      }}
    >
      {/* progress bar */}
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          top: 0,
          zIndex: (t) => t.zIndex.drawer + 1,
          background: "rgba(20,20,26,0.7)",
          backdropFilter: "blur(8px)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <Toolbar sx={{ py: 1, gap: 2, alignItems: "stretch" }}>
          <Box sx={{ flex: 1 }}>
            <Typography
              variant="overline"
              sx={{ opacity: 0.85, fontWeight: 600, letterSpacing: 1 }}
            >
              {`Overall Progress${category !== "all" ? ` [${category}]` : ""}${
                genre !== "all" ? ` [${genre}]` : ""
              }`}
            </Typography>
            <LinearProgress
              variant="determinate"
              value={progress}
              sx={{
                height: 10,
                borderRadius: 999,
                backgroundColor: "rgba(255,255,255,0.1)",
                "& .MuiLinearProgress-bar": {
                  background: "linear-gradient(90deg, #6366f1, #14b8a6)",
                },
              }}
            />
            <Typography
              variant="caption"
              sx={{ mt: 0.5, display: "block", opacity: 0.85 }}
            >
              {completedCount}/{filtered.length} completed ({progress}%)
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Spacer so content doesn’t hide under the fixed bar */}
      <Toolbar sx={{ py: 2 }} />
      <Box
        position="sticky"
        sx={{
          p: 2,
          paddingX: { xs: 2, md: 15 },
          marginTop: 2,
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Typography
          variant="h6"
          sx={{ flexGrow: 1, fontWeight: 700, color: "#fff" }}
        >
          {"Leo's Reading List"}
        </Typography>
        <Button
          variant="outlined"
          size="small"
          onClick={copy}
          startIcon={<ContentCopyIcon fontSize="small" />}
          sx={{
            textTransform: "none",
            minWidth: 90,
            borderColor: copied ? "#14b8a6" : undefined,
            color: copied ? "#14b8a6" : undefined,
            transition: "color 0.2s, border-color 0.2s",
          }}
        >
          {copied ? "Copied!" : "Copy"}
        </Button>
      </Box>

      <Container maxWidth="lg" sx={{ py: 0, paddingBottom: 5 }}>
        {/* genre/categories */}
        <Stack spacing={2} sx={{ mb: 3 }}>
          <Stack
            direction={"column"}
            // spacing={2}
            justifyContent={"space-between"}
            alignItems={"stretch"}
          >
            <Box
              display="flex"
              flexDirection="row"
              alignItems="center"
              paddingY={1}
            >
              <Box minWidth="75px">
                <Typography
                  sx={{
                    display: "block",
                    // mb: 0.5,
                    fontWeight: "600",
                    color: "#fff",
                    // paddingX: 2,
                  }}
                >
                  Genre:
                </Typography>
              </Box>
              <ToggleButtonGroup
                color="primary"
                exclusive
                size="small"
                value={genre}
                onChange={(_, val) => val && setGenre(val)}
                sx={{ paddingX: 2 }}
              >
                {GENRES.map((g) => (
                  <ToggleButton
                    key={g}
                    value={g}
                    sx={{
                      textTransform: "capitalize",
                      // borderRadius: 999,
                      // borderColor: "rgba(255,255,255,0.2)",
                      color: "rgba(255,255,255,0.9)",
                      "&.Mui-selected": {
                        background:
                          "linear-gradient(135deg, rgba(99,102,241,0.8), rgba(16,185,129,0.8))",
                        color: "#fff",
                      },
                    }}
                  >
                    {g}
                  </ToggleButton>
                ))}
              </ToggleButtonGroup>
            </Box>
            <Box display="flex" flexDirection="row" alignItems="center">
              <Box minWidth="75px">
                <Typography
                  sx={{
                    display: "block",
                    // mb: 0.5,
                    fontWeight: "600",
                    // paddingX: 2,
                    color: "#fff",
                  }}
                >
                  Category:
                </Typography>
              </Box>
              <ToggleButtonGroup
                color="secondary"
                exclusive
                size="small"
                value={category}
                onChange={(_, val) => val && setCategory(val)}
                sx={{ overflowX: "auto", paddingX: 2 }}
              >
                {CATEGORIES.map((c) => (
                  <ToggleButton
                    key={c}
                    value={c}
                    sx={{
                      textTransform: "capitalize",
                      // borderRadius: 999,
                      // borderColor: "rgba(255,255,255,0.2)",
                      color: "rgba(255,255,255,0.9)",
                      "&.Mui-selected": {
                        background:
                          "linear-gradient(135deg, rgba(236,72,153,0.85), rgba(249,115,22,0.85))",
                        color: "#fff",
                      },
                    }}
                  >
                    {c}
                  </ToggleButton>
                ))}
              </ToggleButtonGroup>
            </Box>
          </Stack>
        </Stack>

        <Divider sx={{ mb: 0 }} />

        {/* books */}
        <Stack spacing={{ xs: 0, md: 0.5 }}>
          {filtered.map((book) =>
            book.author === "title" ? (
              <Box key={book.title}>
                <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 700 }}>
                  {book.title}
                </Typography>
              </Box>
            ) : (
              <Box
                key={book.title}
                // display="flex"
                flexDirection="row"
                justifyContent={"space-between"}
                sx={{
                  p: book.spine ? 0 : { xs: 1, md: 1.25 },
                  borderRadius: { xs: 1, md: 2 },
                  // display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  // gap: 1.5,
                  // backgroundColor: "black",
                  background: book.spine ? "transparent" : "black",
                  transform: "translateY(0px)",
                  border: book.spine
                    ? "none"
                    : book.cover
                      ? "1px solid white"
                      : "1px solid rgba(255,255,255,0.08)",
                  transition:
                    "transform .18s ease, background .18s ease, border-color .18s ease",
                  "&:hover": {
                    transform: "translateY(-2px)",
                    background: book.spine ? "" : "rgba(255,255,255,0.055)",
                    border: "1px solid rgba(255,255,255,0.9)",
                  },
                  cursor: "pointer",
                }}
                onClick={() => openNotes(book)}
              >
                {book.spine ? (
                  <>
                    <Box
                      component="img"
                      src={book.spine}
                      alt={book.title}
                      loading="lazy"
                      sx={{
                        width: "100%",
                        height: "auto",
                        // minHeight: { xs: "30px", md: "80px" },
                        objectPosition: "0% center",
                        objectFit: "cover",
                        borderRadius: { xs: 1, md: 2 },
                        position: "relative",
                        top: 0,
                        left: 0,
                        zIndex: 0,
                      }}
                    />
                    <Box
                      sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        borderRadius: 3,
                        // background: "rgba(0,0,0,0.25)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-end",
                      }}
                    >
                      {/* <CheckCircleIcon
                        sx={{
                          position: "absolute",
                          top: isMobile ? 2 : 8,
                          right: isMobile ? 2 : 8,
                          color: "#3b82f6",
                          background: "rgba(0,0,0,0.6)",
                          borderRadius: "50%",
                          fontSize: isMobile ? 15 : 25,
                          // p: "2px",
                        }}
                      /> */}
                      {/* <Stack
                        flexDirection={{ xs: "row", md: "column" }}
                        gap={{ xs: 0.5, md: 1 }}
                        marginRight={{ xs: 1, md: 2.5 }}
                        height="100%"
                        overflow={"clip"}
                        justifyContent="center"
                        alignItems="center"
                      >
                        <Chip
                          size="small"
                          sx={{
                            backgroundColor: "white",
                            border: "1px solid #000",
                            borderRadius: "6px",
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
                          label={
                            isMobile
                              ? capitalize(book.genre).slice(0, 3) + "."
                              : capitalize(book.genre)
                          }
                          sx={{
                            background:
                              "linear-gradient(135deg, #6366f1, #14b8a6)",
                            borderRadius: "6px",
                            color: "#fff",
                            fontWeight: 600,
                          }}
                        />

                        <Chip
                          size="small"
                          label={
                            isMobile
                              ? capitalize(book.category).slice(0, 3) + "."
                              : capitalize(book.category)
                          }
                          sx={{
                            background:
                              "linear-gradient(135deg, #ec4899, #f97316)", // pink → orange
                            borderRadius: "6px",
                            color: "#fff",
                            fontWeight: 600,
                          }}
                        />
                      </Stack> */}
                    </Box>
                  </>
                ) : (
                  <Box display="flex" justifyContent={"space-between"}>
                    <Box
                      display="flex"
                      flexDirection="row"
                      alignItems="center"
                      width={"250px"}
                      minHeight={{ xs: "30px", md: "80px" }}
                      color={"#fff"}
                      sx={{
                        overflowX: "auto", // enables horizontal scrolling
                        whiteSpace: "nowrap", // keep text on one line
                      }}
                    >
                      <Box sx={{ marginRight: 1 }}>
                        {book.done ? (
                          <CheckCircleIcon
                            sx={{ color: "#3b82f6", fontSize: 25 }}
                          />
                        ) : (
                          <RadioButtonUncheckedIcon
                            sx={{ color: "rgba(59,130,246,0.4)", fontSize: 25 }}
                          />
                        )}
                      </Box>

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
                      direction={{ xs: "row", md: "column" }}
                      spacing={{ xs: 0.5, md: 1 }}
                      // marginRight={{ xs: 1, md: 0 }}
                      minWidth={"100px"}
                      alignItems={"center"}
                      justifyContent={"flex-end"}
                      sx={{ mt: 1, flexWrap: "wrap" }}
                    >
                      <Chip
                        size="small"
                        sx={{
                          backgroundColor: "white",
                          borderRadius: "6px",
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
                        label={
                          isMobile
                            ? capitalize(book.genre).slice(0, 3) + "."
                            : capitalize(book.genre)
                        }
                        sx={{
                          background:
                            "linear-gradient(135deg, #6366f1, #14b8a6)",
                          borderRadius: "6px",
                          color: "#fff",
                          fontWeight: 600,
                        }}
                      />

                      <Chip
                        size="small"
                        label={
                          isMobile
                            ? capitalize(book.category).slice(0, 3) + "."
                            : capitalize(book.category)
                        }
                        sx={{
                          background:
                            "linear-gradient(135deg, #ec4899, #f97316)", // pink → orange
                          borderRadius: "6px",
                          color: "#fff",
                          fontWeight: 600,
                        }}
                      />
                    </Stack>
                  </Box>
                )}
              </Box>
            ),
          )}
        </Stack>

        <Dialog
          open={open}
          onClose={() => setOpen(false)}
          maxWidth="md"
          fullWidth
        >
          <DialogTitle
            sx={{
              backgroundColor: "#222",
              color: "#fff",
              fontWeight: "600",
              fontSize: "1.5rem",
            }}
          >
            {activeBook ? (
              <>
                Thoughts on <em>{activeBook.title}</em>
              </>
            ) : (
              "Notes"
            )}
          </DialogTitle>

          <DialogContent
            dividers
            sx={{ backgroundColor: "#222", color: "#fff" }}
          >
            {/* Book cover link */}
            {activeBook?.cover && (
              <Box
                component="a"
                href={activeBook.link || "#"}
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  display: "block",
                  mb: 3,
                  width: isMobile ? "50%" : "25%", // keep it narrower for balance
                  mx: "auto",
                }}
              >
                <Box
                  component="img"
                  src={activeBook.cover}
                  alt={`${activeBook.title} cover`}
                  loading="lazy"
                  sx={{
                    width: "100%",
                    aspectRatio: "2 / 3", // standard book cover ratio
                    objectFit: "cover",
                    borderRadius: 1.5,
                    boxShadow: "0 4px 16px rgba(0,0,0,0.5)",
                    transition: "transform .2s ease",
                    "&:hover": {
                      transform: "scale(1.02)",
                    },
                  }}
                />

                {activeBook.rating && (
                  <Box width="100%" display="flex" justifyContent={"center"}>
                    <Rating
                      value={activeBook.rating}
                      size="large"
                      readOnly
                      precision={0.5}
                      sx={{
                        "& .MuiRating-iconEmpty": {
                          color: "#444",
                          textShadow: "0 0 2px rgba(255,255,255,0.4)",
                        },
                      }}
                    />
                  </Box>
                )}
              </Box>
            )}

            {/* Notes content */}
            {activeBook ? (
              <MarkdownNotes
                book={activeBook}
                md={noteMd}
                setMd={setNoteMd}
                editing={noteEditing}
                draft={noteDraft}
                setDraft={setNoteDraft}
              />
            ) : null}
          </DialogContent>

          <DialogActions sx={{ backgroundColor: "#222", justifyContent: "space-between" }}>
            {/* [admin] lock icon + edit/save/cancel buttons */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Tooltip title={isAdmin ? "Log out" : "Admin login"}>
                <IconButton
                  size="small"
                  onClick={async () => {
                    if (isAdmin) {
                      await fetch("/api/auth", { method: "DELETE" });
                      setIsAdmin(false);
                      setNoteEditing(false);
                    } else {
                      setLoginOpen(true);
                    }
                  }}
                  sx={{ color: isAdmin ? "#14b8a6" : "#666" }}
                >
                  {isAdmin ? <LockOpenIcon fontSize="small" /> : <LockIcon fontSize="small" />}
                </IconButton>
              </Tooltip>
              {isAdmin && !noteEditing && (
                <Button
                  size="small"
                  variant="outlined"
                  onClick={() => { setNoteDraft(noteMd ?? ""); setNoteEditing(true); }}
                  sx={{ textTransform: "none", borderColor: "#555", color: "#aaa" }}
                >
                  Edit
                </Button>
              )}
              {isAdmin && noteEditing && (
                <>
                  <Button size="small" onClick={() => setNoteEditing(false)}>Cancel</Button>
                  <Button size="small" variant="contained" onClick={saveNote} disabled={noteSaving}>
                    {noteSaving ? "Saving…" : "Save"}
                  </Button>
                </>
              )}
            </Box>
            <Button onClick={() => setOpen(false)}>Close</Button>
          </DialogActions>
        </Dialog>

        {/* [admin] login dialog */}
        <Dialog open={loginOpen} onClose={() => { setLoginOpen(false); setLoginError(false); setLoginPassword(""); }} maxWidth="xs" fullWidth>
          <DialogTitle sx={{ backgroundColor: "#222", color: "#fff" }}>Admin Login</DialogTitle>
          <DialogContent sx={{ backgroundColor: "#222" }}>
            <TextField
              autoFocus
              fullWidth
              type="password"
              label="Password"
              value={loginPassword}
              onChange={(e) => { setLoginPassword(e.target.value); setLoginError(false); }}
              onKeyDown={async (e) => {
                if (e.key === "Enter") {
                  const res = await fetch("/api/auth", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ password: loginPassword }) });
                  if (res.ok) { setIsAdmin(true); setLoginOpen(false); setLoginPassword(""); }
                  else setLoginError(true);
                }
              }}
              error={loginError}
              helperText={loginError ? "Incorrect password" : ""}
              sx={{ mt: 1, input: { color: "#fff" }, label: { color: "#aaa" }, "& .MuiOutlinedInput-root fieldset": { borderColor: "#444" } }}
            />
          </DialogContent>
          <DialogActions sx={{ backgroundColor: "#222" }}>
            <Button onClick={() => { setLoginOpen(false); setLoginError(false); setLoginPassword(""); }}>Cancel</Button>
            <Button
              variant="contained"
              onClick={async () => {
                const res = await fetch("/api/auth", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ password: loginPassword }) });
                if (res.ok) { setIsAdmin(true); setLoginOpen(false); setLoginPassword(""); }
                else setLoginError(true);
              }}
            >
              Login
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
    </Box>
  );
}

function capitalize(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

function MarkdownNotes({
  book,
  md,
  setMd,
  editing,
  draft,
  setDraft,
}: {
  book: Book;
  md: string | null;
  setMd: (md: string) => void;
  editing: boolean;
  draft: string;
  setDraft: (draft: string) => void;
}) {
  const [loading, setLoading] = useState(false);

  const key = book.notesPath?.replace(/^\/notes\//, "") ?? book.title.toLowerCase().replace(/\s+/g, "-") + ".md";

  useEffect(() => {
    if (!book) return;
    let cancelled = false;
    setLoading(true);

    fetch(`/api/notes/${key}`)
      .then((r) => (r.ok ? r.text() : Promise.reject()))
      .then((text) => { if (!cancelled) setMd(text); })
      .catch(() => { if (!cancelled) setMd(""); })
      .finally(() => { if (!cancelled) setLoading(false); });

    return () => { cancelled = true; };
  }, [book, key, setMd]);

  if (loading && md === null) {
    return (
      <Box sx={{ mt: 1 }}>
        <LinearProgress />
      </Box>
    );
  }

  if (editing) {
    return (
      <Box sx={{ mt: 1 }}>
        <textarea
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          style={{
            width: "100%",
            minHeight: 320,
            background: "#111",
            color: "#fff",
            border: "1px solid #444",
            borderRadius: 6,
            padding: 12,
            fontFamily: "monospace",
            fontSize: 14,
            resize: "vertical",
            boxSizing: "border-box",
          }}
        />
      </Box>
    );
  }

  return (
    <Box
      sx={{
        "& h1, & h2, & h3": { mt: 2, mb: 1, fontWeight: 700 },
        "& p": { lineHeight: 1.75, mb: 1 },
        "& ul, & ol": { pl: 3, mb: 1 },
      }}
    >
      <Box sx={{ whiteSpace: "pre-line" }}>
        <ReactMarkdown>{(md ?? "").trim() || "No notes yet."}</ReactMarkdown>
      </Box>
    </Box>
  );
}
