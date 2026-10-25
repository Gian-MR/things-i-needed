// Broad American English in class-style IPA: /ɛ/, /ɹ/, /ɚ/, no length or
// stress marks. Spaces deliberately align with English orthographic words;
// this is a reading exercise, not a narrow record of connected speech.
// Conversation 1 adapts the supplied doctor's-office worksheet. The other
// two dialogues are original practice material. Contractions are one word.
function conversationLine(speaker, english, ipa) {
  const words = english.split(/\s+/), sounds = ipa.split(/\s+/);
  if (words.length !== sounds.length) throw new Error(`Conversation alignment error: ${english}`);
  return {speaker, words:words.map((word, index) => ({english:word, ipa:sounds[index]}))};
}
const conversationExercises = [
  {id:'doctors-office', source:'Adapted from your worksheet', lines:[
    conversationLine('Title', "In the doctor's office", 'ɪn ðə dɑktɚz ɑfɪs'),
    conversationLine('A', 'How long have you been here?', 'haʊ lɔŋ hæv ju bɪn hɪɹ?'),
    conversationLine('B', 'A couple of hours.', 'ə kʌpəl əv aʊɚz.'),
    conversationLine('A', "You're kidding. And they still haven't taken you?", 'jɚ kɪdɪŋ. ænd ðeɪ stɪl hævənt teɪkən ju?'),
    conversationLine('B', "No, and I don't think we'll ever get out of here.", 'noʊ ænd aɪ doʊnt θɪŋk wil ɛvɚ gɛt aʊt əv hɪɹ.'),
    conversationLine('A', 'Did you remember to call your secretary to tell her to cancel your afternoon appointments?', 'dɪd ju ɹɪmɛmbɚ tə kɔl jɚ sɛkɹətɛɹi tə tɛl hɚ tə kænsəl jɚ æftɚnun əpɔɪntmənts?'),
    conversationLine('B', "Oh my God, I forgot. Excuse me a minute. I'll be right back.", 'oʊ maɪ gɑd aɪ fɚgɑt. ɪkskjuz mi ə mɪnɪt. aɪl bi ɹaɪt bæk.')
  ]},
  {id:'coffee-shop', source:'Original practice conversation', lines:[
    conversationLine('Title', 'At the coffee shop', 'æt ðə kɑfi ʃɑp'),
    conversationLine('A', 'Good morning. What would you like to drink?', 'gʊd mɔɹnɪŋ. wʌt wʊd ju laɪk tə dɹɪŋk?'),
    conversationLine('B', "I'd like a small coffee and a cheese sandwich, please.", 'aɪd laɪk ə smɔl kɑfi ænd ə tʃiz sændwɪtʃ pliz.'),
    conversationLine('A', 'Would you like milk or sugar in your coffee?', 'wʊd ju laɪk mɪlk ɔɹ ʃʊgɚ ɪn jɚ kɑfi?'),
    conversationLine('B', 'Just milk, please. How much is everything?', 'dʒʌst mɪlk pliz. haʊ mʌtʃ ɪz ɛvɹiθɪŋ?'),
    conversationLine('A', 'That will be seven dollars. You can sit by the window.', 'ðæt wɪl bi sɛvən dɑlɚz. ju kən sɪt baɪ ðə wɪndoʊ.'),
    conversationLine('B', 'Thank you. My friend will meet me here in a minute.', 'θæŋk ju. maɪ fɹɛnd wɪl mit mi hɪɹ ɪn ə mɪnɪt.')
  ]},
  {id:'library', source:'Original practice conversation', lines:[
    conversationLine('Title', 'At the library', 'æt ðə laɪbɹɛɹi'),
    conversationLine('A', 'Excuse me. Can you help me find a book for my English class?', 'ɪkskjuz mi. kən ju hɛlp mi faɪnd ə bʊk fɚ maɪ ɪŋglɪʃ klæs?'),
    conversationLine('B', 'Of course. Do you know the name of the book?', 'əv kɔɹs. du ju noʊ ðə neɪm əv ðə bʊk?'),
    conversationLine('A', 'Yes. I wrote it on this paper. Can I take it home today?', 'jɛs. aɪ ɹoʊt ɪt ɑn ðɪs peɪpɚ. kən aɪ teɪk ɪt hoʊm tədeɪ?'),
    conversationLine('B', 'Yes, but you must bring it back in two weeks.', 'jɛs bət ju mʌst bɹɪŋ ɪt bæk ɪn tu wiks.'),
    conversationLine('A', 'Where can I sit and read while I wait for my sister?', 'wɛɹ kən aɪ sɪt ænd ɹid waɪl aɪ weɪt fɚ maɪ sɪstɚ?'),
    conversationLine('B', 'There is a quiet table next to the window.', 'ðɛɹ ɪz ə kwaɪət teɪbəl nɛkst tə ðə wɪndoʊ.')
  ]}
];
