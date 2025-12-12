// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Removes duplicate tracks from a playlist.
 *
 * @param {string[]} playlist
 * @returns {string[]} new playlist with unique entries
 */
export function removeDuplicates(playlist) {
  const timeSETday = new Set();
  for (let i = 0; i < playlist.length; i++) {
    timeSETday.add(playlist[i]);
  }
  let list = Array.from(timeSETday);
  return list;
}

/**
 * Checks whether a playlist includes a track.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {boolean} whether the track is in the playlist
 */
export function hasTrack(playlist, track) {
  let set = new Set(playlist);
  const length = set.size;
  set.add(track);
  return (set.size == length);
}

/**
 * Adds a track to a playlist.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {string[]} new playlist
 */
export function addTrack(playlist, track) {
  let set = new Set(playlist);
  set.add(track);
  return Array.from(set);
}

/**
 * Deletes a track from a playlist.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {string[]} new playlist
 */
export function deleteTrack(playlist, track) {
  let set = new Set(playlist);
  set.delete(track);
  return Array.from(set);
}

/**
 * Lists the unique artists in a playlist.
 *
 * @param {string[]} playlist
 * @returns {string[]} list of artists
 */
export function listArtists(playlist) {
  let list = [];
  let song = "";
  for (let i = 0; i < playlist.length; i++) {
    song = playlist[i].split(" - ")[1];
    list.push(song);
  }
  let set = new Set(list);
  return Array.from(set);
}
