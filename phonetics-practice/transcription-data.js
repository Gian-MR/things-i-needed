// Citation-speech practice in the notation used by the course. Original
// Part 1 prompts are copied from the supplied exercise image (including /r/
// and the instructor's /d/ in etymology); they are reading prompts, not a
// prescription for narrow phonetic transcription. No stress/length marks.
// Added forms use broad American English. Cambridge uses /e/ for our /ɛ/,
// /r/ for /ɹ/, and vowel length/stress marks that this exercise omits.
const transcriptionWords = {
  strength: {sounds:['s','t','ɹ','ɛ','ŋ','θ'], prompt:'strɛŋθ'},
  etymology: {sounds:['ɛ','t','ə','m','ɑ','l','ə','dʒ','i'], prompt:'ɛdəmɑlədʒi'},
  transcription: {sounds:['t','ɹ','æ','n','s','k','ɹ','ɪ','p','ʃ','ə','n'], prompt:'trænskrɪpʃən'},
  northeast: {sounds:['n','ɔ','ɹ','θ','i','s','t'], prompt:'nɔrθist'},
  application: {sounds:['æ','p','l','ə','k','eɪ','ʃ','ə','n'], prompt:'æpləkeɪʃən'},
  jungle: {sounds:['dʒ','ʌ','ŋ','g','ə','l']},
  elephant: {sounds:['ɛ','l','ə','f','ə','n','t'], variants:[['ɛ','l','ɪ','f','ə','n','t']]},
  soup: {sounds:['s','u','p']},
  teacher: {sounds:['t','i','tʃ','ɚ']},
  mission: {sounds:['m','ɪ','ʃ','ə','n']},
  pin: {sounds:['p','ɪ','n']},
  bin: {sounds:['b','ɪ','n']},
  thin: {sounds:['θ','ɪ','n']},
  this: {sounds:['ð','ɪ','s']},
  ship: {sounds:['ʃ','ɪ','p']},
  chin: {sounds:['tʃ','ɪ','n']},
  sing: {sounds:['s','ɪ','ŋ']},
  fish: {sounds:['f','ɪ','ʃ']},
  cat: {sounds:['k','æ','t']},
  book: {sounds:['b','ʊ','k']},
  judge: {sounds:['dʒ','ʌ','dʒ']},
  zebra: {sounds:['z','i','b','ɹ','ə']},
  win: {sounds:['w','ɪ','n']},
  yes: {sounds:['j','ɛ','s']},
  bite: {sounds:['b','aɪ','t']},
  splash: {sounds:['s','p','l','æ','ʃ']},
  spring: {sounds:['s','p','ɹ','ɪ','ŋ']},
  shrimp: {sounds:['ʃ','ɹ','ɪ','m','p']},
  brush: {sounds:['b','ɹ','ʌ','ʃ']},
  badge: {sounds:['b','æ','dʒ']},
  bridge: {sounds:['b','ɹ','ɪ','dʒ']},
  thumb: {sounds:['θ','ʌ','m']},
  thunder: {sounds:['θ','ʌ','n','d','ɚ']},
  feather: {sounds:['f','ɛ','ð','ɚ']},
  leather: {sounds:['l','ɛ','ð','ɚ']},
  velvet: {sounds:['v','ɛ','l','v','ə','t']},
  vision: {sounds:['v','ɪ','ʒ','ə','n']},
  treasure: {sounds:['t','ɹ','ɛ','ʒ','ɚ']},
  measure: {sounds:['m','ɛ','ʒ','ɚ']},
  zipper: {sounds:['z','ɪ','p','ɚ']},
  puzzle: {sounds:['p','ʌ','z','ə','l']},
  candle: {sounds:['k','æ','n','d','ə','l']},
  picnic: {sounds:['p','ɪ','k','n','ɪ','k']},
  napkin: {sounds:['n','æ','p','k','ɪ','n']},
  pumpkin: {sounds:['p','ʌ','m','p','k','ɪ','n']},
  jacket: {sounds:['dʒ','æ','k','ɪ','t']},
  backpack: {sounds:['b','æ','k','p','æ','k']},
  sunrise: {sounds:['s','ʌ','n','ɹ','aɪ','z']},
  rainbow: {sounds:['ɹ','eɪ','n','b','oʊ']},
  cloud: {sounds:['k','l','aʊ','d']},
  couch: {sounds:['k','aʊ','tʃ']},
  coin: {sounds:['k','ɔɪ','n']},
  voice: {sounds:['v','ɔɪ','s']},
  toast: {sounds:['t','oʊ','s','t']},
  moon: {sounds:['m','u','n']}
};

// Practice the added words in both directions.
const extraTranscriptionWords = [
  'splash','spring','shrimp','brush','badge','bridge','thumb','thunder','feather','leather',
  'velvet','vision','treasure','measure','zipper','puzzle','candle','picnic','napkin','pumpkin',
  'jacket','backpack','sunrise','rainbow','cloud','couch','coin','voice','toast','moon'
];
const orthographicWords = ['strength','etymology','transcription','northeast','application','pin','bin','thin','this','ship','chin','sing','teacher','soup','mission','jungle','elephant','fish','cat','book',...extraTranscriptionWords];
const phonemicWords = ['jungle','elephant','soup','teacher','mission','pin','thin','this','ship','chin','sing','fish','cat','book','judge','zebra','win','yes','bite','bin',...extraTranscriptionWords];
const transcriptionSymbolGroups = [
  {name:'Vowels', symbols:[['i','beat'],['ɪ','bit'],['e','bait'],['ɛ','bet'],['æ','bat'],['ə','about'],['ʌ','cup'],['ɑ','father'],['ɔ','bought'],['o','boat'],['ʊ','book'],['u','soup'],['ɝ','bird'],['ɚ','teacher']]},
  {name:'Diphthongs', symbols:[['eɪ','day'],['oʊ','go'],['aɪ','bite'],['aʊ','house'],['ɔɪ','boy']]},
  {name:'Consonants', symbols:consonantSounds.map(sound => [sound.symbol, sound.symbol === 'j' ? 'yes' : sound.word])}
];
