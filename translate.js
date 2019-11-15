var characterMap = {
  a: {
    character: 'a',
    pronunciation: 'u',
  },
  ai: {
    character: 'ai',
    pronunciation: 'ua',
  },
  b: {
    character: 'b',
    pronunciation: 'k',
  },
  ch: {
    character: 'ch',
    pronunciation: 'th',
  },
  ':': {
    character: 'colon',
    pronunciation: ':',
  },
  '"': {
    character: 'colon',
    pronunciation: ':',
  },
  ',': {
    character: 'comma',
    pronunciation: ',',
  },
  d: {
    character: 'd',
    pronunciation: 'b',
  },
  dr: {
    character: 'dr',
    pronunciation: 'bis',
  },
  e: {
    character: 'e',
    pronunciation: 'o',
  },
  '!': {
    character: 'exclamation',
    pronunciation: '!',
  },
  f: {
    character: 'f',
    pronunciation: 'sh',
  },
  fl: {
    character: 'fl',
    pronunciation: 'shr',
  },
  fr: {
    character: 'fr',
    pronunciation: 'z',
  },
  g: {
    character: 'g',
    pronunciation: 'p',
  },
  gr: {
    character: 'gr',
    pronunciation: 'pas',
  },
  h: {
    character: 'h',
    pronunciation: 'n',
  },
  i: {
    character: 'i',
    pronunciation: 'a',
  },
  j: {
    character: 'jz',
    pronunciation: 'w',
  },
  k: {
    character: 'k',
    pronunciation: 't',
  },
  kl: {
    character: 'kl',
    pronunciation: 'tr',
  },
  kr: {
    character: 'kr',
    pronunciation: 'ts',
  },
  l: {
    character: 'l',
    pronunciation: 'd',
  },
  m: {
    character: 'm',
    pronunciation: 'd',
  },
  n: {
    character: 'n',
    pronunciation: 'f',
  },
  o: {
    character: 'o',
    pronunciation: 'e',
  },
  p: {
    character: 'p',
    pronunciation: 'm',
  },
  '.': {
    character: 'period',
    pronunciation: '.',
  },
  pr: {
    character: 'pr',
    pronunciation: 'mus',
  },
  '?': {
    character: 'question',
    pronunciation: '?',
  },
  r: {
    character: 'r',
    pronunciation: 's',
  },
  s: {
    character: 's',
    pronunciation: 'l',
  },
  sh: {
    character: 'sh',
    pronunciation: 'kl',
  },
  sk: {
    character: 'sk',
    pronunciation: 'lat',
  },
  sl: {
    character: 'sl',
    pronunciation: 'lr',
  },
  sm: {
    character: 'sm',
    pronunciation: 'led',
  },
  sn: {
    character: 'sn',
    pronunciation: 'luf',
  },
  sp: {
    character: 'sp',
    pronunciation: 'lum',
  },
  st: {
    character: 'st',
    pronunciation: 'lag',
  },
  sw: {
    character: 'sw',
    pronunciation: 'luv',
  },
  t: {
    character: 't',
    pronunciation: 'g',
  },
  th: {
    character: 'th',
    pronunciation: 'j',
  },
  tr: {
    character: 'tr',
    pronunciation: 'gis',
  },
  tw: {
    character: 'tw',
    pronunciation: 'giv',
  },
  u: {
    character: 'u',
    pronunciation: 'i',
  },
  v: {
    character: 'vw',
    pronunciation: 'v',
  },
  w: {
    character: 'vw',
    pronunciation: 'v',
  },
  y: {
    character: 'y',
    pronunciation: 'ch',
  },
  z: {
    character: 'jz',
    pronunciation: 'w',
  },
}

// getMappedLetters returns an array of strings that can be mapped to character file names.
function getMappedLetters(string, leaveIfNotExists) {
  var result = [];
  var characters = string.toLowerCase().split('');
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
    
    result.push(false);  // If character not in map, set false.
  }
  return result;
}

function insertCharacters(string, container, options) {
  options = typeof options !== 'undefined' ? options : {};
  options.display = typeof options.display !== 'undefined' ? options.display : 'both';
  options.type = typeof options.type !== 'undefined' ? options.type : 'block';
  options.size = typeof options.size !== 'undefined' ? options.size : '16pt';

  container.setAttribute('dir', 'rtl');
  container.style.direction = 'rtl';
  container.style.fontSize = options.size;
  container.style.lineHeight = options.size;

  var result = '';
  var characters = getMappedLetters(string, options.display === 'pronunciation');
  for (var i = 0; i < characters.length; i++) {
    var character = characters[i]
    if (!character) {
      result += options.display === 'pronunciation'
        ? ' '
        : '<span style="display:inline-block;vertical-align:baseline;width:' + options.size + ';"> </span>';
      continue;
    }
    var filename = 'characters/' + options.type + '/' + character.character + '.svg';
    console.log(character);
    var img = '<img src="' + filename + '" alt="Zirka character: ' + character.pronunciation + '" style="display:inline-block;vertical-align:baseline;width:auto;height:' + options.size + ';">';
    switch (options.display) {
      default:
      case 'both': {
        result += '<ruby>' + img + '<rp>"</rp><rt>' + character.pronunciation + '</rt><rp>"</rp></ruby>';
        break;
      }
      case 'characters': {
        result += img;
        break;
      }
      case 'pronunciation': {
        container.setAttribute('dir', '');
        container.style.direction = '';
        result += character.pronunciation;
        break;
      }
    }
  }
  container.innerHTML = result;
}

function translate() {
  var zirkaElements = document.getElementsByTagName('zirka');
  for (var i = 0; i < zirkaElements.length; i++) {
    var element = zirkaElements[i];
    var options = {};
    if (element.getAttribute('size')) {
      options.size = element.getAttribute('size');
    }
    if (element.getAttribute('type')) {
      options.type = element.getAttribute('type');
    }
    insertCharacters(element.innerText, element, options);
  }
  var zirkaOnlyElements = document.getElementsByTagName('zirka-only');
  for (var i = 0; i < zirkaOnlyElements.length; i++) {
    var element = zirkaOnlyElements[i];
    var options = {display:'characters'};
    if (element.getAttribute('size')) {
      options.size = element.getAttribute('size');
    }
    if (element.getAttribute('type')) {
      options.type = element.getAttribute('type');
    }
    insertCharacters(element.innerText, element, options);
  }
  var zirkaPronounceElements = document.getElementsByTagName('zirka-pronounce');
  for (var i = 0; i < zirkaPronounceElements.length; i++) {
    var element = zirkaPronounceElements[i];
    var options = {display:'pronunciation'};
    if (element.getAttribute('size')) {
      options.size = element.getAttribute('size');
    }
    if (element.getAttribute('type')) {
      options.type = element.getAttribute('type');
    }
    insertCharacters(element.innerText, element, options);
  }
}

translate();