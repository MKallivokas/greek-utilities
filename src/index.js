import {isNotEmptyString, cartesian} from './utilities';
import {sanitizeDiacritics, sanitizeDiacriticsLowercase} from './sanitize';
import {ONE_TO_ONE_MAPPINGS, ONE_TO_MANY_MAPPINGS, DIPHTHONGS_MAPPINGS} from './mappings';

export const getSanitizedDiacritics = sanitizeDiacritics;
export const getSanitizedDiacriticsLowercase = sanitizeDiacriticsLowercase;
/**
 * Converts a modern/ancient Greek characters text containing diacritics to an array of "all" greeklish possibilities.
 *
 * @method getGreeklishVariants
 * @static
 * @param {String} text
 * @returns {String[]}
 */
export function getGreeklishVariants(text) {
  if (!isNotEmptyString(text)) {
    return text;
  }
  let result = [];
  let variants = [];
  let sanitizedText = sanitizeDiacriticsLowercase(text);
  let sanitizedTextWithoutDiphthongss = sanitizedText;
  // store the possible diphthongss included in text
  let diphthongsArray = [];
  // store letters with multiple variants
  let lettersArray = [];
  for (let item in DIPHTHONGS_MAPPINGS) {
    let index = sanitizedText.indexOf(item);
    let temp = [];
    if (index >= 0) {
      DIPHTHONGS_MAPPINGS[item].forEach((element) => {
        temp = [...temp, {find: item, replace: element}];
      });
      diphthongsArray = [...diphthongsArray, temp];
      sanitizedTextWithoutDiphthongss = sanitizedTextWithoutDiphthongss.replace(new RegExp(item, 'g'), '');
    }
  }
  for (let item in ONE_TO_MANY_MAPPINGS) {
    let index = sanitizedTextWithoutDiphthongss.indexOf(item);
    let temp = [];
    if (index >= 0) {
      ONE_TO_MANY_MAPPINGS[item].forEach((element) => {
        temp = [...temp, {find: item, replace: element}];
      });
      lettersArray = [...lettersArray, temp];
    }
  }
  variants = cartesian(...diphthongsArray, ...lettersArray);
  if (variants && variants.length > 0) {
    result = variants.map((item) => {
      let value = sanitizedText;
      if (Array.isArray(item)) {
        item.forEach((replacement) => (value = value.replace(new RegExp(replacement.find, 'g'), replacement.replace)));
      } else {
        value = value.replace(new RegExp(item.find, 'g'), item.replace);
      }
      return value;
    });
  }
  if (result.length === 0) {
    result = [sanitizedText];
  }
  return result.map((item) => {
    for (let index = 0; index < item.length; index++) {
      let replacement = ONE_TO_ONE_MAPPINGS[item[index]];
      if (typeof replacement === 'string') {
        item = item.replace(new RegExp(item[index], 'g'), replacement);
      }
    }
    return item;
  });
}

/**
 * Converts a modern/ancient Greek characters text containing diacritics to greeklish.
 *
 * @method getGreeklish
 * @static
 * @param {String} text
 * @returns {String}
 */
export function getGreeklish(text) {
  if (!isNotEmptyString(text)) {
    return text;
  }
  text = sanitizeDiacriticsLowercase(text);
  for (let index = 0; index < text.length; index++) {
    let replacement = ONE_TO_ONE_MAPPINGS[text[index]];
    if (typeof replacement === 'string') {
      text = text.replace(new RegExp(text[index], 'g'), replacement);
    }
  }
  return text;
}
