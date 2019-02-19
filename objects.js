var playlist = {ACDC: "TNT", 'Super Tramp': "School"}

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, { [artistName]: songTitle })
}