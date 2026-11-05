// Broad American English in class-style IPA: /ɛ/, /ɹ/, /ɚ/, no length or
// stress marks. Spaces deliberately align with English orthographic words;
// this is a reading exercise, not a narrow record of connected speech.
// Conversation 1 adapts the supplied doctor's-office worksheet. The other
// dialogues are original practice material. Contractions are one word.
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
  ]},
  {id:'bus-stop', source:'Original practice conversation', lines:[
    conversationLine('Title', 'Waiting for the bus', 'weɪtɪŋ fɚ ðə bʌs'),
    conversationLine('A', 'Does this bus go downtown?', 'dʌz ðɪs bʌs goʊ daʊntaʊn?'),
    conversationLine('B', 'Yes, but it stops at the park first.', 'jɛs bət ɪt stɑps æt ðə pɑɹk fɝst.'),
    conversationLine('A', 'How long does the trip take?', 'haʊ lɔŋ dʌz ðə tɹɪp teɪk?'),
    conversationLine('B', 'About twenty minutes if traffic is light.', 'əbaʊt twɛnti mɪnɪts ɪf tɹæfɪk ɪz laɪt.'),
    conversationLine('A', 'Can I pay with my card?', 'kən aɪ peɪ wɪð maɪ kɑɹd?'),
    conversationLine('B', 'Yes. Tap it when you get on.', 'jɛs. tæp ɪt wɛn ju gɛt ɑn.')
  ]},
  {id:'market', source:'Original practice conversation', lines:[
    conversationLine('Title', 'At the market', 'æt ðə mɑɹkət'),
    conversationLine('A', 'Are these peaches ready to eat?', 'ɑɹ ðiz pitʃɪz ɹɛdi tə it?'),
    conversationLine('B', 'Yes, the soft ones are sweet.', 'jɛs ðə sɔft wʌnz ɑɹ swit.'),
    conversationLine('A', 'Can I have three peaches and some grapes?', 'kən aɪ hæv θɹi pitʃɪz ænd sʌm gɹeɪps?'),
    conversationLine('B', 'Sure. Would you like a bag?', 'ʃʊɹ. wʊd ju laɪk ə bæg?'),
    conversationLine('A', 'Thanks, but I brought my own bag.', 'θæŋks bət aɪ bɹɔt maɪ oʊn bæg.'),
    conversationLine('B', 'Great. Enjoy the fruit!', 'gɹeɪt. ɪndʒɔɪ ðə fɹut!')
  ]},
  {id:'group-project', source:'Original practice conversation', lines:[
    conversationLine('Title', 'A group project', 'ə gɹup pɹɑdʒɛkt'),
    conversationLine('A', 'Did you finish the slides for class?', 'dɪd ju fɪnɪʃ ðə slaɪdz fɚ klæs?'),
    conversationLine('B', 'Almost. I still need a picture for the last slide.', 'ɔlmoʊst. aɪ stɪl nid ə pɪktʃɚ fɚ ðə læst slaɪd.'),
    conversationLine('A', 'Use the photo from our field trip.', 'juz ðə foʊtoʊ fɹəm aʊɚ fild tɹɪp.'),
    conversationLine('B', 'Good idea. Can you send it to me?', 'gʊd aɪdiə. kən ju sɛnd ɪt tə mi?'),
    conversationLine('A', 'Yes. I can send it after lunch.', 'jɛs. aɪ kən sɛnd ɪt æftɚ lʌntʃ.'),
    conversationLine('B', 'Thanks. Then we can practice together.', 'θæŋks. ðɛn wi kən pɹæktɪs təgɛðɚ.')
  ]},
  {id:'movie-tickets', source:'Original practice conversation', lines:[
    conversationLine('Title', 'At the movies', 'æt ðə muviz'),
    conversationLine('A', 'What time does the movie start?', 'wʌt taɪm dʌz ðə muvi stɑɹt?'),
    conversationLine('B', 'It starts at seven. We have plenty of time.', 'ɪt stɑɹts æt sɛvən. wi hæv plɛnti əv taɪm.'),
    conversationLine('A', 'Should we get popcorn before we sit down?', 'ʃʊd wi gɛt pɑpkɔɹn bɪfɔɹ wi sɪt daʊn?'),
    conversationLine('B', 'Yes. Get a small bag so we can share.', 'jɛs. gɛt ə smɔl bæg soʊ wi kən ʃɛɹ.'),
    conversationLine('A', 'Do you have the tickets?', 'du ju hæv ðə tɪkɪts?'),
    conversationLine('B', "They're on my phone. Let's go inside.", 'ðɛɹ ɑn maɪ foʊn. lɛts goʊ ɪnsaɪd.')
  ]},
  {id:'beach-plans', source:'Original practice conversation', lines:[
    conversationLine('Title', 'A day at the beach', 'ə deɪ æt ðə bitʃ'),
    conversationLine('A', 'Did you pack a towel?', 'dɪd ju pæk ə taʊəl?'),
    conversationLine('B', 'Yes. I put it in my backpack.', 'jɛs. aɪ pʊt ɪt ɪn maɪ bækpæk.'),
    conversationLine('A', 'Look at those dark clouds.', 'lʊk æt ðoʊz dɑɹk klaʊdz.'),
    conversationLine('B', 'We can wait here until the sky clears.', 'wi kən weɪt hɪɹ əntɪl ðə skaɪ klɪɹz.'),
    conversationLine('A', 'Should we eat our sandwiches now?', 'ʃʊd wi it aʊɚ sændwɪtʃɪz naʊ?'),
    conversationLine('B', "Yes, and then we'll take a walk.", 'jɛs ænd ðɛn wil teɪk ə wɔk.')
  ]},
  {id:'lost-keys', source:'Original practice conversation', lines:[
    conversationLine('Title', 'The lost keys', 'ðə lɔst kiz'),
    conversationLine('A', "I can't find my keys anywhere.", 'aɪ kænt faɪnd maɪ kiz ɛniwɛɹ.'),
    conversationLine('B', 'Did you check your jacket pocket?', 'dɪd ju tʃɛk jɚ dʒækɪt pɑkət?'),
    conversationLine('A', "Yes. There's only a coin in there.", 'jɛs. ðɛɹz oʊnli ə kɔɪn ɪn ðɛɹ.'),
    conversationLine('B', 'Maybe you left them on the kitchen table.', 'meɪbi ju lɛft ðɛm ɑn ðə kɪtʃən teɪbəl.'),
    conversationLine('A', 'Here they are, under the newspaper!', 'hɪɹ ðeɪ ɑɹ ʌndɚ ðə nuzpeɪpɚ!'),
    conversationLine('B', "Good. Now we won't be late.", 'gʊd. naʊ wi woʊnt bi leɪt.')
  ]},
  {id:'bike-repair', source:'Original practice conversation', lines:[
    conversationLine('Title', 'Fixing a bike', 'fɪksɪŋ ə baɪk'),
    conversationLine('A', 'My back tire is flat. Can you help?', 'maɪ bæk taɪɚ ɪz flæt. kən ju hɛlp?'),
    conversationLine('B', 'Of course. Is there a hole in it?', 'əv kɔɹs. ɪz ðɛɹ ə hoʊl ɪn ɪt?'),
    conversationLine('A', 'I think so. I rode over some glass.', 'aɪ θɪŋk soʊ. aɪ ɹoʊd oʊvɚ sʌm glæs.'),
    conversationLine('B', 'We can fix it with a small patch.', 'wi kən fɪks ɪt wɪð ə smɔl pætʃ.'),
    conversationLine('A', 'How much time will that take?', 'haʊ mʌtʃ taɪm wɪl ðæt teɪk?'),
    conversationLine('B', "Give me ten minutes and you'll be ready.", 'gɪv mi tɛn mɪnɪts ænd jul bi ɹɛdi.')
  ]}
];
