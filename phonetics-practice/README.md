# Phonetics Quest

An AI-assisted study game created to practice the phonetics material from an English class.

## Play

Open `index.html` in your browser. The game works locally without installation, a server, or a build step.

- Quick quiz: 18 questions with feedback and retries for missed answers.
- Vowel map: 13 vowel placements and 3 diphthong questions in a shuffled order.
- IPA chart puzzle: drag 28 symbols onto the full vowel chart.
- English vowel chart: place 12 symbols on the shaded chart.
- Worksheet 1: vowel descriptions and seven groups of contrasting words.
- Worksheet 2: ten word pairs, with a separate vowel answer for each word.
- Exam 2 definitions quiz: all 34 definitions from *Consonant Sounds*, plus the three classification dimensions, with shuffled choices, source page references, and retries for missed questions.
- Exam 2 English consonants: drag 24 IPA sounds and their original example words into the table by place, manner, and type. Tap/select and keyboard placement are also supported.

Drag letters and answers from the bank, or select an answer and tap its destination. Correct example words disappear from the bank; descriptive answers and worksheet symbols remain reusable. Reset restores the bank. Quiz keyboard shortcuts are 1–4 for answers and Enter for the next question.

## Files

- `index.html`: page layout and diagrams.
- `styles.css`: responsive styles.
- `quiz.js`: quiz questions and game navigation.
- `vowel-map.js`: randomized vowel placement practice.
- `charts.js`: both draggable vowel charts.
- `worksheets.js`: worksheet questions, answer banks, and grading.
- `exam2-data.js`: PDF definition excerpts and the 24 original consonant chart entries.
- `exam2.js`: exam selection, definitions quiz, and draggable consonant table.

The JavaScript files are classic scripts loaded in the order listed in the HTML. There are no external JavaScript dependencies. Progress is kept for the current page session and resets on reload.

## Learning material

The exercises were adapted from personal class notes and two completed Vowel Sounds worksheets. The original uploaded documents are not included in this repository. The game follows the course's vowel contrasts and notation; pronunciations and tense/lax classifications may differ across accents or teaching systems. One worksheet example was corrected: the final syllable of “teacher” contains /ɚ/, while “banana” does not.

Exam 2 follows *Consonant Sounds*: definitions on pages 2–14 and 17–18 and the chart on page 15. Definition answers are verbatim excerpts with line breaks and typographic ligatures normalized; feedback preserves surrounding wording when an answer omits its term. The chart keeps /w/ under Bilabial and the original example “ying” for /j/. Labiodental is a chart column and diagram label; the PDF does not supply a separate prose definition for it. Transcription practice exercises on pages 19–21 are not part of the definitions quiz.

Reference: [Classifying Vowels — Essentials of Linguistics](https://ecampusontario.pressbooks.pub/essentialsoflinguistics/chapter/2-8-vowels/).

## About this project

Created with AI assistance to support exam preparation, then refined through use and feedback. It is preserved as a small personal study tool.
