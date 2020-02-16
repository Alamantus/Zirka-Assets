if (typeof window.Zirka === 'undefined') window.Zirka = {};
if (typeof window.Zirka !== 'object') {
  console.error('window.Zirka must be an Object! Setting it to an empty object.');
  window.Zirka = {};
}

window.Zirka.characterMap = {
  a: {
    character: 'a',
    pronunciation: 'u',
    ipa: 'u',
  },
  ai: {
    character: 'ai',
    pronunciation: 'ua',
    ipa: 'ua',
  },
  b: {
    character: 'b',
    pronunciation: 'k',
    ipa: 'k',
  },
  ch: {
    character: 'ch',
    pronunciation: 'th',
    ipa: 'ð',
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
    ipa: 'b',
  },
  dr: {
    character: 'dr',
    pronunciation: 'bis',
    ipa: 'bɪs',
  },
  e: {
    character: 'e',
    pronunciation: 'o',
    ipa: 'o',
  },
  '!': {
    character: 'exclamation',
    pronunciation: '!',
  },
  f: {
    character: 'f',
    pronunciation: 'sh',
    ipa: 'ʃ',
  },
  fl: {
    character: 'fl',
    pronunciation: 'shr',
    ipa: 'ʃɹ',
  },
  fr: {
    character: 'fr',
    pronunciation: 'z',
    ipa: 'z',
  },
  g: {
    character: 'g',
    pronunciation: 'p',
    ipa: 'p',
  },
  gr: {
    character: 'gr',
    pronunciation: 'pas',
    ipa: 'pæs',
  },
  h: {
    character: 'h',
    pronunciation: 'n',
    ipa: 'n',
  },
  i: {
    character: 'i',
    pronunciation: 'a',
    ipa: 'a',
  },
  j: {
    character: 'jz',
    pronunciation: 'w',
    ipa: 'w',
  },
  k: {
    character: 'k',
    pronunciation: 't',
    ipa: 't',
  },
  kl: {
    character: 'kl',
    pronunciation: 'tr',
    ipa: 'tɹ',
  },
  kr: {
    character: 'kr',
    pronunciation: 'ts',
    ipa: 't͡s',
  },
  l: {
    character: 'l',
    pronunciation: 'r',
    ipa: 'ɹ',
  },
  m: {
    character: 'm',
    pronunciation: 'd',
    ipa: 'd',
  },
  n: {
    character: 'n',
    pronunciation: 'f',
    ipa: 'r',
  },
  o: {
    character: 'o',
    pronunciation: 'e',
    ipa: 'e',
  },
  p: {
    character: 'p',
    pronunciation: 'm',
    ipa: 'm',
  },
  '.': {
    character: 'period',
    pronunciation: '.',
  },
  pr: {
    character: 'pr',
    pronunciation: 'mus',
    ipa: 'məs',
  },
  '?': {
    character: 'question',
    pronunciation: '?',
  },
  r: {
    character: 'r',
    pronunciation: 's',
    ipa: 's',
  },
  s: {
    character: 's',
    pronunciation: 'l',
    ipa: 'l',
  },
  sh: {
    character: 'sh',
    pronunciation: 'kl',
    ipa: 'kl',
  },
  sk: {
    character: 'sk',
    pronunciation: 'lat',
    ipa: 'lat',
  },
  sl: {
    character: 'sl',
    pronunciation: 'lr',
    ipa: 'lɞɾ',
  },
  sm: {
    character: 'sm',
    pronunciation: 'led',
    ipa: 'lɛd',
  },
  sn: {
    character: 'sn',
    pronunciation: 'luf',
    ipa: 'ləf',
  },
  sp: {
    character: 'sp',
    pronunciation: 'lum',
    ipa: 'ləm',
  },
  st: {
    character: 'st',
    pronunciation: 'lag',
    ipa: 'lag',
  },
  sw: {
    character: 'sw',
    pronunciation: 'luv',
    ipa: 'ləv',
  },
  t: {
    character: 't',
    pronunciation: 'g',
    ipa: 'g',
  },
  th: {
    character: 'th',
    pronunciation: 'j',
    ipa: 'd͡ʒ',
  },
  tr: {
    character: 'tr',
    pronunciation: 'gis',
    ipa: 'gɪs',
  },
  tw: {
    character: 'tw',
    pronunciation: 'giv',
    ipa: 'gɪv',
  },
  u: {
    character: 'u',
    pronunciation: 'i',
    ipa: 'i',
  },
  v: {
    character: 'vw',
    pronunciation: 'v',
    ipa: 'v',
  },
  w: {
    character: 'vw',
    pronunciation: 'v',
    ipa: 'v',
  },
  y: {
    character: 'y',
    pronunciation: 'ch',
    ipa: 't͡ʃ',
  },
  z: {
    character: 'jz',
    pronunciation: 'w',
    ipa: 'w',
  },
}

// getMappedLetters returns an array of strings that can be mapped to character file names.
window.Zirka.getMappedLetters = function (string, leaveIfNotExists) {
  var result = [];
  var characters = string.toLowerCase().split('');
  for (var i = 0; i < characters.length; i++) {
    var character = characters[i];
    if (typeof characters[i + 1] !== 'undefined') {
      // If the next character exists, check if the digraph is in the map.
      var digraph = character + characters[i + 1];
      if (typeof window.Zirka.characterMap[digraph] !== 'undefined') {
        // If the digraph exists, push it to the results and skip the next index.
        result.push(window.Zirka.characterMap[digraph]);
        i++;
        continue;
      }
    }
    
    if (typeof window.Zirka.characterMap[character] !== 'undefined') {
      // If single character is found, push it to results.
      result.push(window.Zirka.characterMap[character]);
      continue;
    }
    
    result.push(false);  // If character not in map, set false.
  }
  return result;
}

window.Zirka.insertCharacters = function (string, container, options) {
  options = typeof options !== 'undefined' ? options : {};
  options.display = typeof options.display !== 'undefined' ? options.display : 'both';
  options.type = typeof options.type !== 'undefined'
    ? options.type
    : (
      typeof Zirka.defaultType !== 'undefined'
      ? Zirka.defaultType
      : 'block'
    );
  options.size = typeof options.size !== 'undefined'
    ? options.size
    : (
      typeof Zirka.defaultSize !== 'undefined'
      ? Zirka.defaultSize
      : '16pt'
    );

  container.setAttribute('dir', 'rtl');
  container.style.direction = 'rtl';
  container.style.fontSize = options.size;
  container.style.lineHeight = options.size;

  var result = '';
  var characters = window.Zirka.getMappedLetters(string, options.display === 'pronunciation');
  for (var i = 0; i < characters.length; i++) {
    var character = characters[i]
    if (!character) {
      result += options.display === 'pronunciation'
        ? ' '
        : '<span style="display:inline-block;vertical-align:baseline;width:' + options.size + ';"> </span>';
      continue;
    }
    var filename = 'characters/' + options.type + '/' + character.character + '.svg';
    var img = '<img src="' + window.Zirka.getURL() + filename + '" alt="Zirka character: ' + character.pronunciation + '" style="display:inline-block;vertical-align:baseline;width:auto;height:' + options.size + ';">';
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
      case 'ipa': {
        container.setAttribute('dir', '');
        container.style.direction = '';
        result += character.ipa;
        break;
      }
    }
  }
  container.innerHTML = result;
}

window.Zirka.getURL = function () {
  if (typeof window.Zirka.url === 'undefined') {
    var scripts = document.getElementsByTagName('script');
    for (var i = 0; i < scripts.length; i++) {
      if (/translate.js$/.test(scripts[i].src)) {
        window.Zirka.url = scripts[i].src.replace(/translate.js$/, '');
        break;
      }
    }
  }
  return window.Zirka.url;
}

window.Zirka.translate = function () {
  var zirkaElements = document.getElementsByTagName('zirka');
  zirkaElements = Array.from(zirkaElements).concat(Array.from(document.getElementsByClassName('zirka')));
  for (var i = 0; i < zirkaElements.length; i++) {
    var element = zirkaElements[i];
    var options = {};
    if (element.getAttribute('size')) {
      options.size = element.getAttribute('size');
    }
    if (element.getAttribute('type')) {
      options.type = element.getAttribute('type');
    }
    window.Zirka.insertCharacters(element.innerText, element, options);
  }
  var zirkaOnlyElements = document.getElementsByTagName('zirka-only');
  zirkaOnlyElements = Array.from(zirkaOnlyElements).concat(Array.from(document.getElementsByClassName('zirka-only')));
  for (var i = 0; i < zirkaOnlyElements.length; i++) {
    var element = zirkaOnlyElements[i];
    var options = {display:'characters'};
    if (element.getAttribute('size')) {
      options.size = element.getAttribute('size');
    }
    if (element.getAttribute('type')) {
      options.type = element.getAttribute('type');
    }
    window.Zirka.insertCharacters(element.innerText, element, options);
  }
  var zirkaPronounceElements = document.getElementsByTagName('zirka-pronounce');
  zirkaPronounceElements = Array.from(zirkaPronounceElements).concat(Array.from(document.getElementsByClassName('zirka-pronounce')));
  for (var i = 0; i < zirkaPronounceElements.length; i++) {
    var element = zirkaPronounceElements[i];
    var options = {display:'pronunciation'};
    if (element.getAttribute('size')) {
      options.size = element.getAttribute('size');
    }
    if (element.getAttribute('type')) {
      options.type = element.getAttribute('type');
    }
    window.Zirka.insertCharacters(element.innerText, element, options);
  }
  var zirkaIPAElements = document.getElementsByTagName('zirka-ipa');
  zirkaIPAElements = Array.from(zirkaIPAElements).concat(Array.from(document.getElementsByClassName('zirka-ipa')));
  for (var i = 0; i < zirkaIPAElements.length; i++) {
    var element = zirkaIPAElements[i];
    var options = {display:'ipa'};
    if (element.getAttribute('size')) {
      options.size = element.getAttribute('size');
    }
    if (element.getAttribute('type')) {
      options.type = element.getAttribute('type');
    }
    window.Zirka.insertCharacters(element.innerText, element, options);
  }
}

window.Zirka.translate();