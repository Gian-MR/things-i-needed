// Exam 2 review from Ingle Exam.pdf (one page, including embedded slides).
// Handwriting, spelling, punctuation and line breaks are normalized for reading.
// The simple-syllable inconsistency is explained in its feedback note.
const consonantDefinitions = [
  {
    "term": "Consonants",
    "group": "Foundations",
    "page": 1,
    "definition": "involve some kind of constriction (or more than one constriction) in the vocal tract.",
    "document": "Ingle Exam",
    "section": "Consonants"
  },
  {
    "term": "the three dimensions used to classify consonants",
    "group": "Foundations",
    "page": 1,
    "definition": "voicing, place of articulation, and manner of articulation.",
    "document": "Ingle Exam",
    "section": "Consonants",
    "question": "Which three dimensions are used to classify consonants?",
    "distractors": [
      "height, backness, and lip rounding.",
      "onset, nucleus, and coda.",
      "primary stress, secondary stress, and unstressed."
    ]
  },
  {
    "term": "Voiced",
    "group": "Voicing",
    "page": 1,
    "definition": "vocal cords vibrate",
    "document": "Ingle Exam",
    "section": "Voicing"
  },
  {
    "term": "Voiceless",
    "group": "Voicing",
    "page": 1,
    "definition": "vocal cords do not vibrate",
    "document": "Ingle Exam",
    "section": "Voicing"
  },
  {
    "term": "Manner of Articulation",
    "group": "Foundations",
    "page": 1,
    "definition": "describes how sounds are pronounced in the vocal tract",
    "document": "Ingle Exam",
    "section": "Manners of articulation"
  },
  {
    "term": "Stop / Plosive",
    "group": "Manner of Articulation",
    "page": 1,
    "definition": "airflow through the mouth is momentarily closed off.",
    "document": "Ingle Exam",
    "section": "Manners of articulation"
  },
  {
    "term": "Fricative",
    "group": "Manner of Articulation",
    "page": 1,
    "definition": "a tight constriction is made, so that air passing through the constriction flows turbulently, making a hissing noise",
    "document": "Ingle Exam",
    "section": "Manners of articulation"
  },
  {
    "term": "Sibilant Fricatives",
    "group": "Manner of Articulation",
    "page": 1,
    "definition": "a stream of air is directed at the upper teeth, creating noisy turbulent flow",
    "document": "Ingle Exam",
    "section": "Manners of articulation"
  },
  {
    "term": "Affricate",
    "group": "Manner of Articulation",
    "page": 1,
    "definition": "A stop followed by a fricative, made at the same location in the mouth in rapid succession so that the result has the same duration as a single speech sound.",
    "document": "Ingle Exam",
    "section": "Manners of articulation"
  },
  {
    "term": "Nasal",
    "group": "Manner of Articulation",
    "page": 1,
    "definition": "The velum is lowered, allowing air to escape through the nose",
    "document": "Ingle Exam",
    "section": "Manners of articulation"
  },
  {
    "term": "Taps and Flaps",
    "group": "Manner of Articulation",
    "page": 1,
    "definition": "An articulator makes a rapid brush against some articulatory surface. Forward articulator motion in a flap, backwards in a tap.",
    "document": "Ingle Exam",
    "section": "Manners of articulation"
  },
  {
    "term": "Trill",
    "group": "Manner of Articulation",
    "page": 1,
    "definition": "An articulator is made to vibrate by placing it near an articulatory surface and letting air flow through the gap",
    "document": "Ingle Exam",
    "section": "Manners of articulation"
  },
  {
    "term": "Approximants",
    "group": "Manner of Articulation",
    "page": 1,
    "definition": "Consonants in which the constriction is fairly wide; air does not create turbulence or trilling",
    "document": "Ingle Exam",
    "section": "Manners of articulation"
  },
  {
    "term": "lateral approximants",
    "group": "Manner of Articulation",
    "page": 1,
    "definition": "air passes around the sides of the tongue",
    "document": "Ingle Exam",
    "section": "Manners of articulation"
  },
  {
    "term": "central approximants",
    "group": "Manner of Articulation",
    "page": 1,
    "definition": "the flow is through a gap in the center",
    "document": "Ingle Exam",
    "section": "Manners of articulation"
  },
  {
    "term": "Bilabial sounds",
    "group": "Place of Articulation",
    "page": 1,
    "definition": "sounds are made by touching the upper and lower lips together",
    "document": "Ingle Exam",
    "section": "Places of Articulation"
  },
  {
    "term": "Dental sounds",
    "group": "Place of Articulation",
    "page": 1,
    "definition": "sounds are made by touching the tongue to the upper teeth.",
    "document": "Ingle Exam",
    "section": "Places of Articulation"
  },
  {
    "term": "interdental",
    "group": "Place of Articulation",
    "page": 1,
    "definition": "If the tongue is stuck out beyond the teeth, it is called interdental.",
    "document": "Ingle Exam",
    "section": "Places of Articulation"
  },
  {
    "term": "Alveolar sounds",
    "group": "Place of Articulation",
    "page": 1,
    "definition": "sounds are made by touching the tip or blade of the tongue to a location just forward of the alveolar ridge.",
    "document": "Ingle Exam",
    "section": "Places of Articulation"
  },
  {
    "term": "Palato-alveolar sounds",
    "group": "Place of Articulation",
    "page": 1,
    "definition": "sounds are made by touching the blade of the tongue to a location just behind the alveolar ridge.",
    "document": "Ingle Exam",
    "section": "Places of Articulation"
  },
  {
    "term": "Retroflex sounds",
    "group": "Place of Articulation",
    "page": 1,
    "definition": "sounds are made by curling the tongue tip backward, and touching the area just behind the alveolar ridge.",
    "document": "Ingle Exam",
    "section": "Places of Articulation"
  },
  {
    "term": "Palatal sounds",
    "group": "Place of Articulation",
    "page": 1,
    "definition": "sounds are made by touching the tongue blade and the forward part of the tongue body to the hard palate.",
    "document": "Ingle Exam",
    "section": "Places of Articulation"
  },
  {
    "term": "Velar sounds",
    "group": "Place of Articulation",
    "page": 1,
    "definition": "sounds are made by touching the body of the tongue to the hard or soft palate.",
    "document": "Ingle Exam",
    "section": "Places of Articulation"
  },
  {
    "term": "Uvular sounds",
    "group": "Place of Articulation",
    "page": 1,
    "definition": "sounds are made by moving the tongue body straight back to touch the uvula and neighboring portions of the soft palate.",
    "document": "Ingle Exam",
    "section": "Places of Articulation"
  },
  {
    "term": "Pharyngeal sounds",
    "group": "Place of Articulation",
    "page": 1,
    "definition": "sounds are made by moving the tongue body down and back into the pharynx.",
    "document": "Ingle Exam",
    "section": "Places of Articulation"
  },
  {
    "term": "Glottal sounds",
    "group": "Place of Articulation",
    "page": 1,
    "definition": "sounds are made by moving the vocal cords close to one another.",
    "document": "Ingle Exam",
    "section": "Places of Articulation"
  },
  {
    "term": "Orthographic transcription",
    "group": "Transcriptions",
    "page": 1,
    "definition": "the words are written down using the customary spelling system (orthography) of the language",
    "document": "Ingle Exam",
    "section": "Transcriptions"
  },
  {
    "term": "Phonemic transcription",
    "group": "Transcriptions",
    "page": 1,
    "definition": "records words as sequences of phonemes.",
    "document": "Ingle Exam",
    "section": "Transcriptions"
  },
  {
    "term": "Phonetic transcription",
    "group": "Transcriptions",
    "page": 1,
    "definition": "includes allophonic details",
    "document": "Ingle Exam",
    "section": "Transcriptions"
  },
  {
    "term": "Citation Pronunciation",
    "group": "Types of speech",
    "page": 1,
    "definition": "words pronounced in isolation",
    "document": "Ingle Exam",
    "section": "Types of speech"
  },
  {
    "term": "Careful Speech",
    "group": "Types of speech",
    "page": 1,
    "definition": "pronounced with more attention to detail or for reading aloud",
    "document": "Ingle Exam",
    "section": "Types of speech"
  },
  {
    "term": "Conversational Speech",
    "group": "Types of speech",
    "page": 1,
    "definition": "more rapid speech",
    "document": "Ingle Exam",
    "section": "Types of speech"
  },
  {
    "term": "Syllable",
    "group": "Syllables",
    "page": 1,
    "definition": "Basic phonological units of language that everyone recognizes even though linguists have not been able to isolate the phonetic equivalence or to define syllable precisely",
    "document": "Ingle Exam",
    "section": "What is a syllable?"
  },
  {
    "term": "Onset (C)",
    "group": "Parts of a syllable",
    "page": 1,
    "definition": "one or more consonant sounds at the beginning of the syllable. It can be one, two, or three consonants (cluster).",
    "document": "Ingle Exam",
    "section": "Parts of a syllable"
  },
  {
    "term": "Nucleus (V)",
    "group": "Parts of a syllable",
    "page": 1,
    "definition": "usually only one vowel sound. This vowel sound could be a monophthong, diphthong, or triphthong.",
    "document": "Ingle Exam",
    "section": "Parts of a syllable"
  },
  {
    "term": "Coda (C)",
    "group": "Parts of a syllable",
    "page": 1,
    "definition": "one or more consonant sounds at the end of the syllable. It can be one, two, three, or four consonants (cluster).",
    "document": "Ingle Exam",
    "section": "Parts of a syllable"
  },
  {
    "term": "Open Syllable",
    "group": "Types of syllables",
    "page": 1,
    "definition": "ends with a vowel sound",
    "document": "Ingle Exam",
    "section": "Open Syllable"
  },
  {
    "term": "Closed Syllable",
    "group": "Types of syllables",
    "page": 1,
    "definition": "ends with a consonant sound",
    "document": "Ingle Exam",
    "section": "Closed Syllable"
  },
  {
    "term": "Simple Syllable",
    "group": "Types of syllables",
    "page": 1,
    "definition": "V, CV, VC, or CVC; no consonant cluster.",
    "document": "Ingle Exam",
    "section": "Simple Syllable",
    "source": "1–2 consonants. 2 consonants must be surrounded by a vowel; they may not be contiguous. V, CV, VC, CVC.",
    "note": "The listed V pattern has no consonant. The answer follows all four patterns in the notes: zero, one, or two consonants, with no adjacent consonants."
  },
  {
    "term": "Complex Syllable",
    "group": "Types of syllables",
    "page": 1,
    "definition": "minimum 1 consonant cluster, that is at least two consonants preceding and/or following the vowel nucleus",
    "document": "Ingle Exam",
    "section": "Complex Syllable"
  },
  {
    "term": "Primary Stress",
    "group": "Syllable stress",
    "page": 1,
    "definition": "Syllables with the highest stress are called primary or tonic syllables (marked with [ˈ]).",
    "document": "Ingle Exam",
    "section": "Stressed Syllable vs. Unstressed Syllable"
  },
  {
    "term": "Secondary Stress",
    "group": "Syllable stress",
    "page": 1,
    "definition": "Syllables with medium stress are called secondary syllables and marked with [ˌ].",
    "document": "Ingle Exam",
    "section": "Stressed Syllable vs. Unstressed Syllable"
  },
  {
    "term": "Unstressed syllables",
    "group": "Syllable stress",
    "page": 1,
    "definition": "Syllables with the lowest level of stress are unstressed syllables. These are usually left unmarked.",
    "document": "Ingle Exam",
    "section": "Stressed Syllable vs. Unstressed Syllable"
  },
  {
    "term": "Syllabic consonants",
    "group": "Syllabic consonants",
    "page": 1,
    "definition": "Those consonants that function both as consonant and nucleus of a weak syllable are called syllabic consonants.",
    "document": "Ingle Exam",
    "section": "Syllabic Consonants"
  },
  {
    "term": "the importance of syllable stress",
    "group": "Syllable stress",
    "page": 1,
    "definition": "because it affects the pronunciation of the vowel in the syllable.",
    "document": "Ingle Exam",
    "section": "Syllable stress is important",
    "question": "Why is syllable stress important?",
    "distractors": [
      "because every syllable must end with a consonant.",
      "because all syllables have primary stress.",
      "because it removes the nucleus from the syllable."
    ]
  },
  {
    "term": "the nucleus of most syllables",
    "group": "Syllables",
    "page": 1,
    "definition": "vowels",
    "document": "Ingle Exam",
    "section": "What is a syllable?",
    "question": "What forms the nucleus of most syllables?",
    "distractors": [
      "consonant clusters only",
      "onsets",
      "codas"
    ]
  },
  {
    "term": "the factors used to determine syllable division",
    "group": "Syllables",
    "page": 1,
    "definition": "preference for syllable structure across the world's languages; language-specific preferences",
    "document": "Ingle Exam",
    "section": "Determining types",
    "question": "Which preferences guide syllable division in the notes?",
    "distractors": [
      "spelling only, regardless of sounds",
      "the number of written letters only",
      "the speed of speech only"
    ]
  },
  {
    "term": "the consonants most frequently heard as syllabic consonants",
    "group": "Syllabic consonants",
    "page": 1,
    "definition": "[l], [n], and [m]",
    "document": "Ingle Exam",
    "section": "Syllabic Consonants",
    "question": "Which consonants are most frequently heard as syllabic consonants?",
    "distractors": [
      "[p], [t], and [k]",
      "[f], [θ], and [s]",
      "[w], [j], and [h]"
    ]
  },
  {
    "term": "the symbol for a syllabic consonant",
    "group": "Syllabic consonants",
    "page": 1,
    "definition": "a straight line below the phone",
    "document": "Ingle Exam",
    "section": "Syllabic Consonants",
    "question": "How are syllabic consonants symbolized?",
    "distractors": [
      "a primary stress mark before the syllable",
      "a straight line above the phone",
      "a length mark after the phone"
    ]
  },
  {
    "term": "where syllabic consonants occur more frequently",
    "group": "Syllabic consonants",
    "page": 1,
    "definition": "after homorganic stop consonants at the end of words",
    "document": "Ingle Exam",
    "section": "Syllabic Consonants",
    "question": "Where do syllabic consonants occur more frequently, according to the notes?",
    "distractors": [
      "before vowels at the beginning of words",
      "only in primary-stressed syllables",
      "only before fricatives in word-initial position"
    ]
  },
  {
    "term": "Syllable stress",
    "group": "Syllable stress",
    "page": 1,
    "document": "Ingle Exam",
    "section": "Stressed Syllable vs. Unstressed Syllable",
    "definition": "the degree of stress, or emphasis, a syllable carries",
    "question": "What does syllable stress describe?",
    "distractors": [
      "whether a syllable ends in a vowel or consonant",
      "the number of consonants in an onset",
      "the place where a consonant is produced"
    ]
  },
  {
    "term": "strong vs. weak syllables",
    "group": "Syllable stress",
    "page": 1,
    "document": "Ingle Exam",
    "section": "Stressed Syllable vs. Unstressed Syllable",
    "definition": "stressed vs. unstressed syllables",
    "question": "What are strong vs. weak syllables also called?",
    "distractors": [
      "open vs. closed syllables",
      "simple vs. complex syllables",
      "onsets vs. codas"
    ]
  },
  {
    "term": "the position of stress marks",
    "group": "Syllable stress",
    "page": 1,
    "document": "Ingle Exam",
    "section": "Stressed Syllable vs. Unstressed Syllable",
    "definition": "preceding the beginning of the syllable",
    "question": "Where are stress marks placed?",
    "distractors": [
      "after the end of the syllable",
      "below the last consonant",
      "above the vowel only"
    ]
  }
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
