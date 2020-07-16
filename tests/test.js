import {getGreeklishVariants, getGreeklish} from '../src/index';

describe('get greeklish', () => {
  test('returns array of items when given Μάκης', () => {
    expect(getGreeklishVariants('Μάκης')).toEqual(['makhs', 'makis']);
  });

  test('returns array of item when given Σοκολάτα', () => {
    expect(getGreeklishVariants('Σοκολάτα')).toEqual(['sokolata']);
  });

  test('returns array of items when given Μπανάνα', () => {
    expect(getGreeklishVariants('Μπανάνα')).toEqual(['mpanana', 'banana']);
  });

  test('returns array of items when given Φυστικοβούτυρο', () => {
    expect(getGreeklishVariants('Φυστικοβούτυρο')).toEqual([
      'fystikoboutyro',
      'phystikoboutyro',
      'fustikobouturo',
      'phustikobouturo',
      'fistikoboutiro',
      'phistikoboutiro',
      'fystikovoutyro',
      'phystikovoutyro',
      'fustikovouturo',
      'phustikovouturo',
      'fistikovoutiro',
      'phistikovoutiro',
      'fystikoboytyro',
      'phystikoboytyro',
      'fustikoboyturo',
      'phustikoboyturo',
      'fistikoboytiro',
      'phistikoboytiro',
      'fystikovoytyro',
      'phystikovoytyro',
      'fustikovoyturo',
      'phustikovoyturo',
      'fistikovoytiro',
      'phistikovoytiro',
      'fystikobutyro',
      'phystikobutyro',
      'fustikobuturo',
      'phustikobuturo',
      'fistikobutiro',
      'phistikobutiro',
      'fystikovutyro',
      'phystikovutyro',
      'fustikovuturo',
      'phustikovuturo',
      'fistikovutiro',
      'phistikovutiro',
    ]);
  });

  test('returns array of items when given Τσετσένογλου', () => {
    expect(getGreeklishVariants('Τσετσένογλου')).toEqual(['tsetsenoglou', 'tsetsenogloy', 'tsetsenoglu']);
  });

  test('returns array of items when given καμπαρντινάτος', () => {
    expect(getGreeklishVariants('καμπαρντινάτος')).toEqual([
      'kamparntinatos',
      'kampardinatos',
      'kabarntinatos',
      'kabardinatos',
    ]);
  });

  test('returns array of items when given Ευθυμία', () => {
    expect(getGreeklishVariants('Ευθυμία').sort()).toEqual(
      [
        'euthymia',
        'eu8umia',
        'euthimia',
        'eu8ymia',
        'euthumia',
        'eu8imia',
        'efthumia',
        'ef8ymia',
        'efthimia',
        'ef8umia',
        'efthymia',
        'ef8imia',
        'evthumia',
        'ev8ymia',
        'evthimia',
        'ev8umia',
        'evthymia',
        'ev8imia',
        'eythumia',
        'ey8ymia',
        'eythimia',
        'ey8umia',
        'eythymia',
        'ey8imia',
      ].sort()
    );
  });

  test('returns array of items when given Ευάγγελος', () => {
    expect(getGreeklishVariants('Ευάγγελος').sort()).toEqual(
      ['euaggelos', 'efaggelos', 'evaggelos', 'eyaggelos', 'euagelos', 'efagelos', 'evagelos', 'eyagelos'].sort()
    );
  });

  test('returns array of items when given Αθήνα', () => {
    expect(getGreeklishVariants('Αθήνα').sort()).toEqual(['athhna', 'a8hna', 'athina', 'a8ina'].sort());
  });

  test('returns array of items when given Μάθε μπαλίτσα αγόρι μου', () => {
    expect(getGreeklishVariants('Μάθε μπαλίτσα αγόρι μου').sort()).toEqual(
      [
        'ma8e balitsa agori mou',
        'ma8e balitsa agori moy',
        'ma8e balitsa agori mu',
        'ma8e mpalitsa agori mou',
        'ma8e mpalitsa agori moy',
        'ma8e mpalitsa agori mu',
        'mathe balitsa agori mou',
        'mathe balitsa agori moy',
        'mathe balitsa agori mu',
        'mathe mpalitsa agori mou',
        'mathe mpalitsa agori moy',
        'mathe mpalitsa agori mu',
      ].sort()
    );
  });

  test('returns array of items when given καταλαβαίνεις', () => {
    expect(getGreeklishVariants('καταλαβαίνεις').sort()).toEqual(
      [
        'katalabaineis',
        'katalavaineis',
        'katalabeneis',
        'katalaveneis',
        'katalavainis',
        'katalabainis',
        'katalavenis',
        'katalabenis',
      ].sort()
    );
  });

  test('returns array of items when given Εύξεινος', () => {
    expect(getGreeklishVariants('Εύξεινος').sort()).toEqual(
      [
        'eukseinos',
        'euxeinos',
        'euksinos',
        'euxinos',
        'efkseinos',
        'efxeinos',
        'efksinos',
        'efxinos',
        'evkseinos',
        'evxeinos',
        'evksinos',
        'evxinos',
        'eykseinos',
        'eyxeinos',
        'eyksinos',
        'eyxinos',
      ].sort()
    );
  });

  test('returns array of items when given χορεύουνε', () => {
    expect(getGreeklishVariants('χορεύουνε').sort()).toEqual(
      [
        'chorefoune',
        'chorefoyne',
        'chorefune',
        'choreuoune',
        'choreuoyne',
        'choreuune',
        'chorevoune',
        'chorevoyne',
        'chorevune',
        'choreyoune',
        'choreyoyne',
        'choreyune',
        'horefoune',
        'horefoyne',
        'horefune',
        'horeuoune',
        'horeuoyne',
        'horeuune',
        'horevoune',
        'horevoyne',
        'horevune',
        'horeyoune',
        'horeyoyne',
        'horeyune',
        'xorefoune',
        'xorefoyne',
        'xorefune',
        'xoreuoune',
        'xoreuoyne',
        'xoreuune',
        'xorevoune',
        'xorevoyne',
        'xorevune',
        'xoreyoune',
        'xoreyoyne',
        'xoreyune',
      ].sort()
    );
  });
});

describe('get greeklish', () => {
  test('returns greeklish string when given Μάκης', () => {
    expect(getGreeklish('Μάκης')).toEqual('makhs');
  });

  test('returns array of item when given Σοκολάτα', () => {
    expect(getGreeklish('Σοκολάτα')).toEqual('sokolata');
  });

  test('returns greeklish string when given Μπανάνα', () => {
    expect(getGreeklish('Μπανάνα')).toEqual('mpanana');
  });

  test('returns greeklish string when given Ηλία', () => {
    expect(getGreeklish('Ηλία')).toEqual('hlia');
  });

  test('returns greeklish string when given Χατζηγιάννης-Πετρόπουλος', () => {
    expect(getGreeklish('Χατζηγιάννης-Πετρόπουλος')).toEqual('xatzhgiannhs-petropoulos');
  });

  test('returns greeklish string when given Σκουληκομυρμηγκότρυπα', () => {
    expect(getGreeklish('Σκουληκομυρμηγκότρυπα')).toEqual('skoulhkomurmhgkotrupa');
  });

  test('returns greeklish string when given Άγγελος', () => {
    expect(getGreeklish('Άγγελος')).toEqual('aggelos');
  });

  test('returns greeklish string when given Πλατεία', () => {
    expect(getGreeklish('Πλατεία')).toEqual('plateia');
  });

  test('returns greeklish string when given Οικονομία', () => {
    expect(getGreeklish('Οικονομία')).toEqual('oikonomia');
  });

  test('returns greeklish string when given Φυστικοβούτυρο', () => {
    expect(getGreeklish('Φυστικοβούτυρο')).toEqual('fustikobouturo');
  });

  test('returns greeklish string when given Απορρυπαντικό', () => {
    expect(getGreeklish('Απορρυπαντικό')).toEqual('aporrupantiko');
  });
});
