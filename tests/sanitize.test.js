import {sanitizeDiacritics, sanitizeDiacriticsLowercase} from '../src/sanitize';

describe('sanitize diacritics', () => {
  test('returns all 26 α when given άἀἁἂἃἄἅἆἇὰάᾀᾁᾂᾃᾄᾅᾆᾇᾰᾱᾲᾳᾴᾶᾷ', () => {
    expect(sanitizeDiacritics('άἀἁἂἃἄἅἆἇὰάᾀᾁᾂᾃᾄᾅᾆᾇᾰᾱᾲᾳᾴᾶᾷ')).toBe('αααααααααααααααααααααααααα');
  });

  test('returns all 11 Ι when given ΊἶἷἸἹἺἻἼἽἾἿ', () => {
    expect(sanitizeDiacritics('ΊἶἷἸἹἺἻἼἽἾἿ')).toBe('ΙΙΙΙΙΙΙΙΙΙΙ');
  });

  test('returns Μακης when given Μάκης', () => {
    expect(sanitizeDiacritics('Μάκης')).toBe('Μακης');
  });

  test('returns Αρχαια Ελληνικα Κειμενα when given Ἀρχαῖα Ἑλληνικὰ Κείμενα', () => {
    expect(sanitizeDiacritics('Ἀρχαῖα Ἑλληνικὰ Κείμενα')).toBe('Αρχαια Ελληνικα Κειμενα');
  });

  test('returns number when given a number', () => {
    expect(sanitizeDiacritics(4)).toBe(4);
  });

  test('returns undefined when given undefined', () => {
    expect(sanitizeDiacritics(undefined)).toBe(undefined);
  });

  test('returns "" when given an empty string', () => {
    expect(sanitizeDiacritics('')).toBe('');
  });
});

describe('sanitize diacritics lowercase', () => {
  test('returns all 26 α when given άἀἁἂἃἄἅἆἇὰάᾀᾁᾂᾃᾄᾅᾆᾇᾰᾱᾲᾳᾴᾶᾷ', () => {
    expect(sanitizeDiacriticsLowercase('άἀἁἂἃἄἅἆἇὰάᾀᾁᾂᾃᾄᾅᾆᾇᾰᾱᾲᾳᾴᾶᾷ')).toBe('αααααααααααααααααααααααααα');
  });

  test('returns all 11 Ι when given ΊἶἷἸἹἺἻἼἽἾἿ', () => {
    expect(sanitizeDiacriticsLowercase('ΊἶἷἸἹἺἻἼἽἾἿ')).toBe('ιιιιιιιιιιι');
  });

  test('returns Μακης when given Μάκης', () => {
    expect(sanitizeDiacriticsLowercase('Μάκης')).toBe('μακης');
  });

  test('returns αρχαια ελληνικα κειμενα when given Ἀρχαῖα Ἑλληνικὰ Κείμενα', () => {
    expect(sanitizeDiacriticsLowercase('Ἀρχαῖα Ἑλληνικὰ Κείμενα')).toBe('αρχαια ελληνικα κειμενα');
  });

  test('returns σκιας οναρ ανθρωπος. when given Σκιάς όναρ άνθρωπος.', () => {
    expect(sanitizeDiacriticsLowercase('Σκιάς όναρ άνθρωπος.')).toBe('σκιας οναρ ανθρωπος.');
  });

  test('returns number when given a number', () => {
    expect(sanitizeDiacriticsLowercase(4)).toBe(4);
  });

  test('returns undefined when given undefined', () => {
    expect(sanitizeDiacriticsLowercase(undefined)).toBe(undefined);
  });

  test('returns "" when given an empty string', () => {
    expect(sanitizeDiacriticsLowercase('')).toBe('');
  });
});
