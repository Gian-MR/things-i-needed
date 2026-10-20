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
  bite: {sounds:['b','aɪ','t']}
};
const orthographicWords = ['strength','etymology','transcription','northeast','application','pin','bin','thin','this','ship','chin','sing','teacher','soup','mission','jungle','elephant','fish','cat','book'];
const phonemicWords = ['jungle','elephant','soup','teacher','mission','pin','thin','this','ship','chin','sing','fish','cat','book','judge','zebra','win','yes','bite','bin'];
const transcriptionSymbolGroups = [
  {name:'Vowels', symbols:[['i','beat'],['ɪ','bit'],['e','bait'],['ɛ','bet'],['æ','bat'],['ə','about'],['ʌ','cup'],['ɑ','father'],['ɔ','bought'],['o','boat'],['ʊ','book'],['u','soup'],['ɝ','bird'],['ɚ','teacher']]},
  {name:'Diphthongs', symbols:[['eɪ','day'],['oʊ','go'],['aɪ','bite'],['aʊ','house'],['ɔɪ','boy']]},
  {name:'Consonants', symbols:consonantSounds.map(sound => [sound.symbol, sound.symbol === 'j' ? 'yes' : sound.word])}
];
