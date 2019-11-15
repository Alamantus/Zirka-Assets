var characterMap = {
  a: 'a',
  ai: 'ai',
  b: 'b',
  ch: 'ch',
  ':': 'colon',
  ',': 'comma',
  d: 'd',
  dr: 'dr',
  e: 'e',
  '!': 'exclamation',
  f: 'f',
  fl: 'fl',
  fr: 'fr',
  g: 'g',
  gr: 'gr',
  h: 'h',
  i: 'i',
  j: 'jz',
  k: 'k',
  kl: 'kl',
  kr: 'kr',
  l: 'l',
  m: 'm',
  n: 'n',
  o: 'o',
  p: 'p',
  '.': 'period',
  pr: 'pr',
  '?': 'question',
  r: 'r',
  s: 's',
  sh: 'sh',
  sk: 'sk',
  sl: 'sl',
  sm: 'sm',
  sn: 'sn',
  sp: 'sp',
  st: 'st',
  sw: 'sw',
  t: 't',
  th: 'th',
  tr: 'tr',
  tw: 'tw',
  u: 'u',
  v: 'vw',
  w: 'vw',
  y: 'y',
  z: 'jz',
}

// getMappedLetters returns an array of strings that can be mapped to character file names.
function getMappedLetters(string) {
  var result = [];
  var characters = string.split('');
  for (var i = 0; i < characters.length; i++) {
    var character = characters[i];
    if (typeof characters[i + 1] !== 'undefined') {
      // If the next character exists, check if the digraph is in the map.
      var digraph = character + characters[i + 1];
      if (typeof characterMap[digraph] !== 'undefined') {
        // If the digraph exists, push it to the results and skip the next index.
        result.push(characterMap[digraph]);
        i++;
        continue;
      }
    }
    if (typeof characterMap[character] !== 'undefined') {
      // If single character is found, push it to results.
      result.push(characterMap[character]);
      continue;
    }
    push(' ');  // If character not in map, insert space.
  }
}