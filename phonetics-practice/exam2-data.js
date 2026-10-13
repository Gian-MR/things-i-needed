// Definitions transcribed from Consonant Sounds.pdf. Only line breaks and
// typographic fi/fl ligatures are normalized. Answers are verbatim excerpts;
// source holds the surrounding wording for feedback and review.
const consonantDefinitions = [
  {term:'Consonants',group:'Foundations',page:2,definition:'involve some kind of constriction (or more than one constriction) in the vocal tract.',source:'Consonants involve some kind of constriction (or more than one constriction) in the vocal tract.'},
  {term:'Voiced',group:'Voicing',page:4,definition:'vocal cords vibrate'},
  {term:'Voiceless',group:'Voicing',page:4,definition:'vocal cords do not vibrate'},
  {term:'Manner of Articulation',group:'Foundations',page:5,definition:'Describes how sounds are produced in the vocal tract.'},
  {term:'Stop / Plosive',group:'Manner of Articulation',page:5,definition:'The airflow through the mouth is momentarily closed off.'},
  {term:'Fricative',group:'Manner of Articulation',page:5,definition:'A tight constriction is made, so that air passing through the constriction flows turbulently, making a hissing noise.'},
  {term:'Sibilant Fricatives',group:'Manner of Articulation',page:6,definition:'A stream of air is directed at the upper teeth, creating noisy turbulent flow.'},
  {term:'Affricate',group:'Manner of Articulation',page:6,definition:'A stop followed by a fricative, made at the same location in the mouth in rapid succession so that the result has the typical duration of a single speech sound.'},
  {term:'Nasal',group:'Manner of Articulation',page:7,definition:'The velum is lowered, allowing air to escape through the nose.'},
  {term:'Taps and Flaps',group:'Manner of Articulation',page:7,definition:'An articulator makes a rapid brush against some articulatory surface. The motion of the articulator is forward in a flap, backward in a tap.'},
  {term:'Trill',group:'Manner of Articulation',page:7,definition:'An articulator is made to vibrate by placing it near an articulatory surface and letting air flow through the gap.'},
  {term:'Approximants',group:'Manner of Articulation',page:8,definition:'Consonants in which the constriction is fairly wide, so that air passes through without creating turbulence or trilling.'},
  {term:'lateral approximants',group:'Manner of Articulation',page:8,definition:'the air passes around the sides of the tongue, as in English /l/.',source:'In lateral approximants, the air passes around the sides of the tongue, as in English /l/.'},
  {term:'central approximants',group:'Manner of Articulation',page:8,definition:'the flow is through a gap in the center.',source:'In central approximants, the flow is through a gap in the center.'},
  {term:'liquids',group:'Manner of Articulation',page:8,definition:'are the sounds that have the characteristic acoustic quality of l-like and r-like sounds.',source:'The liquids are the sounds that have the characteristic acoustic quality of l-like and r-like sounds.'},
  {term:'glides (also called semivowels)',group:'Manner of Articulation',page:8,definition:'are the central approximants; that is, /j/, /w/, and similar sounds.',source:'Under this same scheme, the glides (also called semivowels) are the central approximants; that is, /j/, /w/, and similar sounds.'},
  {term:'Place of Articulation',group:'Foundations',page:9,definition:'Describes where sounds are produced in the vocal tract.'},
  {term:'Bilabial sounds',group:'Place of Articulation',page:10,definition:'are made by touching the upper and lower lips together.',source:'Bilabial sounds are made by touching the upper and lower lips together.'},
  {term:'Dental sounds',group:'Place of Articulation',page:10,definition:'are made by touching the tongue to the upper teeth.',source:'Dental sounds are made by touching the tongue to the upper teeth.'},
  {term:'interdental',group:'Place of Articulation',page:10,definition:'If the tongue is stuck out beyond the teeth, the sound is called an interdental.'},
  {term:'Alveolar sounds',group:'Place of Articulation',page:11,definition:'are made by touching the tip or blade of the tongue to a location just forward of the alveolar ridge.',source:'Alveolar sounds are made by touching the tip or blade of the tongue to a location just forward of the alveolar ridge.'},
  {term:'Palato-alveolar sounds (sometimes called postalveolar)',group:'Place of Articulation',page:12,definition:'are made by touching the blade of the tongue to a location just behind the alveolar ridge.',source:'Palato-alveolar sounds (sometimes called postalveolar) are made by touching the blade of the tongue to a location just behind the alveolar ridge.'},
  {term:'Retroflex sounds',group:'Place of Articulation',page:12,definition:'are made by curling the tongue tip backward, and touching the area just behind the alveolar ridge.',source:'Retroflex sounds are made by curling the tongue tip backward, and touching the area just behind the alveolar ridge.'},
  {term:'Palatal sounds',group:'Place of Articulation',page:13,definition:'are made by touching the tongue blade and the forward part of the tongue body to the hard palate.',source:'Palatal sounds are made by touching the tongue blade and the forward part of the tongue body to the hard palate.'},
  {term:'Velar sounds',group:'Place of Articulation',page:13,definition:'are made by touching the body of the tongue to the hard or soft palate.',source:'Velar sounds are made by touching the body of the tongue to the hard or soft palate.'},
  {term:'Uvular sounds',group:'Place of Articulation',page:14,definition:'are made by moving the tongue body straight back to touch the uvula and neighboring portions of the soft palate.',source:'Uvular sounds are made by moving the tongue body straight back to touch the uvula and neighboring portions of the soft palate.'},
  {term:'Pharyngeal sounds',group:'Place of Articulation',page:14,definition:'are made by moving the tongue body down and back into the pharynx.',source:'Pharyngeal sounds are made by moving the tongue body down and back into the pharynx.'},
  {term:'Glottal sounds',group:'Place of Articulation',page:14,definition:'are made by moving the vocal cords close to one another.',source:'Glottal sounds are made by moving the vocal cords close to one another.'},
  {term:'Orthographic transcription',group:'Transcriptions',page:17,definition:'the words are written down using the customary spelling system (orthography) of the language.'},
  {term:'Phonemic transcription',group:'Transcriptions',page:17,definition:'records words as sequences of phonemes.'},
  {term:'Phonetic transcription',group:'Transcriptions',page:17,definition:'includes allophonic detail.'},
  {term:'Citation Pronunciation',group:'Types of speech',page:18,definition:'words pronounced in isolation'},
  {term:'Careful Speech',group:'Types of speech',page:18,definition:'pronounced with more attention to detail or for reading aloud'},
  {term:'Conversational Speech',group:'Types of speech',page:18,definition:'more rapid speech'}
];

// Page 15, including its examples, column names and /ɹ/ notation.
// /w/ belongs in Bilabial in this course chart; do not relocate it.
const consonantPlaces = ['Bilabial','Labiodental','Dental','Alveolar','Palatoalveolar','Palatal','Velar','Glottal'];
const consonantRows = [
  {manner:'Stops',type:'voiceless'}, {manner:'Stops',type:'voiced'},
  {manner:'Affricates',type:'voiceless'}, {manner:'Affricates',type:'voiced'},
  {manner:'Fricatives',type:'voiceless'}, {manner:'Fricatives',type:'voiced'},
  {manner:'Nasals',type:''},
  {manner:'Approximants',type:'lateral'}, {manner:'Approximants',type:'central'}
];
const consonantSounds = [
  {symbol:'p',word:'pin',mark:'p',row:0,place:'Bilabial'},
  {symbol:'t',word:'tin',mark:'t',row:0,place:'Alveolar'},
  {symbol:'k',word:'kin',mark:'k',row:0,place:'Velar'},
  {symbol:'b',word:'bin',mark:'b',row:1,place:'Bilabial'},
  {symbol:'d',word:'din',mark:'d',row:1,place:'Alveolar'},
  {symbol:'g',word:'gill',mark:'g',row:1,place:'Velar'},
  {symbol:'tʃ',word:'chin',mark:'ch',row:2,place:'Palatoalveolar'},
  {symbol:'dʒ',word:'gin',mark:'g',row:3,place:'Palatoalveolar'},
  {symbol:'f',word:'fin',mark:'f',row:4,place:'Labiodental'},
  {symbol:'θ',word:'thin',mark:'th',row:4,place:'Dental'},
  {symbol:'s',word:'sin',mark:'s',row:4,place:'Alveolar'},
  {symbol:'ʃ',word:'shin',mark:'sh',row:4,place:'Palatoalveolar'},
  {symbol:'h',word:'hymn',mark:'h',row:4,place:'Glottal'},
  {symbol:'v',word:'vim',mark:'v',row:5,place:'Labiodental'},
  {symbol:'ð',word:'this',mark:'th',row:5,place:'Dental'},
  {symbol:'z',word:'zip',mark:'z',row:5,place:'Alveolar'},
  {symbol:'ʒ',word:'vision',mark:'s',row:5,place:'Palatoalveolar'},
  {symbol:'m',word:'mitt',mark:'m',row:6,place:'Bilabial'},
  {symbol:'n',word:'nip',mark:'n',row:6,place:'Alveolar'},
  {symbol:'ŋ',word:'sing',mark:'ng',row:6,place:'Velar'},
  {symbol:'l',word:'Lynn',mark:'L',row:7,place:'Alveolar'},
  {symbol:'w',word:'win',mark:'w',row:8,place:'Bilabial'},
  {symbol:'ɹ',word:'rim',mark:'r',row:8,place:'Alveolar'},
  {symbol:'j',word:'ying',mark:'y',row:8,place:'Palatal'}
];
