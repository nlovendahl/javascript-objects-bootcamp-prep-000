var playlist = {
  daughter: "Smother"
}

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, {[artistName]: songTitle});
}

function removeFromPlaylist(playlist, artistName) {
  a = artistName;
  delete playlist.a;
}