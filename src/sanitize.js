import {isNotEmptyString, includesChar} from './utilities';
/**
 * Convert a modern/ancient Greek characters text containing diacritics to its simple equivalent without diacritics.
 *
 * @method sanitizeDiacritics
 * @static
 * @param {String} text
 * @returns {String}
 */
export function sanitizeDiacritics(text) {
  if (!isNotEmptyString(text)) {
    return text;
  }
  let response = '';
  for (let index = 0; index < text.length; index++) {
    if (includesChar(text[index], 'άἀἁἂἃἄἅἆἇὰάᾀᾁᾂᾃᾄᾅᾆᾇᾰᾱᾲᾳᾴᾶᾷ')) {
      response += 'α';
    } else if (includesChar(text[index], 'ΆἈἉἊἋἌἍἎἏᾈᾉᾊᾋᾌᾍᾎᾏᾸᾹᾺΆᾼ')) {
      response += 'Α';
    } else if (includesChar(text[index], 'έἐἑἒἓἔἕὲέ')) {
      response += 'ε';
    } else if (includesChar(text[index], 'ΈἘἙἚἛἜἝ')) {
      response += 'Ε';
    } else if (includesChar(text[index], 'ήἠἡἢἣἤἥἦἧῆὴῇ')) {
      response += 'η';
    } else if (includesChar(text[index], 'ΉἨἩἪἫἬἭἮἯ')) {
      response += 'Η';
    } else if (includesChar(text[index], 'ίἰἱἲἳἴἵὶῖ')) {
      response += 'ι';
    } else if (includesChar(text[index], 'ΊἶἷἸἹἺἻἼἽἾἿ')) {
      response += 'Ι';
    } else if (includesChar(text[index], 'όὀὁὂὃὄὅὸ')) {
      response += 'ο';
    } else if (includesChar(text[index], 'ΌὈὉὊὋὌὍ')) {
      response += 'Ο';
    } else if (includesChar(text[index], 'ύὐὑὒὓὔὕὖὗ')) {
      response += 'υ';
    } else if (includesChar(text[index], 'ΎὙὛὝὟ')) {
      response += 'Υ';
    } else if (includesChar(text[index], 'ώὠὡὢὣὤὥὦὧῶ')) {
      response += 'ω';
    } else if (includesChar(text[index], 'ΏὨὩὪὫὬὭὮὯ')) {
      response += 'Ω';
    } else {
      response += text[index];
    }
  }
  return response;
}

/**
 * Convert a modern/ancient Greek characters text containing diacritics to its simple equivalent without diacritics in lowercase.
 *
 * @method sanitizeDiacriticsLowercase
 * @static
 * @param {String} text
 * @returns {String}
 */
export function sanitizeDiacriticsLowercase(text) {
  if (!isNotEmptyString(text)) {
    return text;
  }
  let response = '';
  for (let index = 0; index < text.length; index++) {
    if (includesChar(text[index], 'άἀἁἂἃἄἅἆἇὰάᾀᾁᾂᾃᾄᾅᾆᾇᾰᾱᾲᾳᾴᾶᾷΆἈἉἊἋἌἍἎἏᾈᾉᾊᾋᾌᾍᾎᾏᾸᾹᾺΆᾼ')) {
      response += 'α';
    } else if (includesChar(text[index], 'έἐἑἒἓἔἕὲέΈἘἙἚἛἜἝ')) {
      response += 'ε';
    } else if (includesChar(text[index], 'ήἠἡἢἣἤἥἦἧῆὴῇΉἨἩἪἫἬἭἮἯ')) {
      response += 'η';
    } else if (includesChar(text[index], 'ίἰἱἲἳἴἵὶῖΊἶἷἸἹἺἻἼἽἾἿ')) {
      response += 'ι';
    } else if (includesChar(text[index], 'όὀὁὂὃὄὅὸΌὈὉὊὋὌὍ')) {
      response += 'ο';
    } else if (includesChar(text[index], 'ύὐὑὒὓὔὕὖὗΎὙὛὝὟ')) {
      response += 'υ';
    } else if (includesChar(text[index], 'ώὠὡὢὣὤὥὦὧῶΏὨὩὪὫὬὭὮὯ')) {
      response += 'ω';
    } else {
      response += text[index].toLowerCase();
    }
  }
  return response;
}
