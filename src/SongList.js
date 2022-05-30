import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import ListItemText from "@mui/material/ListItemText";
import MusicIcon from "@mui/icons-material/MusicVideo";
import DeleteIcon from "@mui/icons-material/Delete";

const SongList = () => {
  const [songName, setSongName] = useState("");
  const [songs, setSongs] = useState([]);
  const addSong = (e) => {
    e.preventDefault();
    console.log(songName);
    setSongs([...songs, songName]);
    setSongName("");
  };

  const SongListItem = ({ idx, title }) => {
    return (
      <Paper>
        <ListItem
          button
          component="a"
          href={`https://www.youtube.com/results?search_query=노래방+${title}`}
          target="_blank"
          sx={{ mb: 1, backgroundColor: "beige" }}
          secondaryAction={
            <IconButton
              edge="end"
              onClick={(e) => {
                const deleted = [...songs];
                deleted.splice(idx, 1);
                setSongs(deleted);
                e.preventDefault();
              }}
            >
              <DeleteIcon />
            </IconButton>
          }
        >
          <ListItemAvatar>
            <Avatar>
              <MusicIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={title}
            secondary={`https://www.youtube.com/results?search_query=노래방+${title}`}
          />
        </ListItem>
      </Paper>
    );
  };

  return (
    <>
      <Box component="form" onSubmit={addSong} sx={{ mt: 3 }}>
        <TextField
          required
          autoFocus
          fullwidth
          id="songInput"
          name="songInput"
          label="노래 제목"
          value={songName}
          onChange={(e) => setSongName(e.currentTarget.value)}
        />
        <Button
          type="submit"
          fullwidth
          variant="contained"
          sx={{ mt: 2, mb: 3 }}
        >
          노래 추가
        </Button>
      </Box>
      <List>
        {songs.map((song, index) => (
          <SongListItem key={index} idx={index} title={song} />
        ))}
      </List>
    </>
  );
};

export default SongList;
