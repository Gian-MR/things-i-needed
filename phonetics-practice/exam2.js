(() => {
  const get = id => document.getElementById(id);
  const lastMode = {1:'quiz', 2:'consonant-quiz'};
  let currentExam = 1;

  function chooseExam(exam) {
    lastMode[currentExam] = active;
    currentExam = exam;
    [1, 2].forEach(n => {
      get(`exam${n}-select`).classList.toggle('active', n === exam);
      get(`exam${n}-select`).setAttribute('aria-pressed', String(n === exam));
      get(`exam${n}-tabs`).classList.toggle('hidden', n !== exam);
    });
    get('exam-tag').textContent = `Exam ${exam} practice`;
    get('exam-intro').textContent = exam === 2
      ? 'Study consonant sounds with definitions from your PDF and a draggable English consonants table. Pick a game to practice with instant feedback.'
      : 'Practice the ideas on your exam sheet with instant feedback. Try the quiz, vowel map, IPA chart puzzle, and both class worksheets.';
    setTab(lastMode[exam]);
  }
  get('exam1-select').onclick = () => chooseExam(1);
  get('exam2-select').onclick = () => chooseExam(2);
  ['consonant-quiz', 'consonant-chart'].forEach(mode => {
    get(`${mode}-tab`).onclick = () => setTab(mode);
  });
  document.querySelectorAll('[role="tab"]').forEach(tab => {
    tab.setAttribute('aria-controls', tab.id.replace(/-tab$/, '-panel'));
    tab.addEventListener('keydown', event => {
      if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
      event.preventDefault();
      const tabs = [...tab.parentElement.querySelectorAll('[role="tab"]')];
      const next = event.key === 'Home' ? 0 : event.key === 'End' ? tabs.length - 1
        : (tabs.indexOf(tab) + (event.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length;
      tabs[next].click();
      tabs[next].focus();
    });
  });

  const classification = {
    term:'the three dimensions used to classify consonants',group:'Foundations',page:3,
    definition:'voicing, place of articulation, and manner of articulation.',
    source:'Consonants are classified along three dimensions: voicing, place of articulation, and manner of articulation.',
    distractors:[
      'vocal cords vibrate',
      'Describes how sounds are produced in the vocal tract.',
      'Describes where sounds are produced in the vocal tract.'
    ]
  };
  const quizItems = [...consonantDefinitions, classification];
  let quizOrder = [], quizIndex = 0, quizScore = 0, quizMissed = [], quizAnswered = false, choices = [];

  function startDefinitions(indices) {
    quizOrder = shuffled(indices || quizItems.map((_, i) => i));
    quizIndex = 0; quizScore = 0; quizMissed = [];
    get('cq-play').classList.remove('hidden');
    get('cq-end').classList.add('hidden');
    showDefinition();
  }

  function showDefinition() {
    quizAnswered = false;
    const item = quizItems[quizOrder[quizIndex]];
    const sameGroup = shuffled(consonantDefinitions.filter(d => d !== item && d.group === item.group));
    const otherGroups = shuffled(consonantDefinitions.filter(d => d !== item && d.group !== item.group));
    const distractors = item.distractors || [...sameGroup, ...otherGroups].slice(0, 3).map(d => d.definition);
    choices = shuffled([item.definition, ...distractors]);
    get('cq-category').textContent = item.group;
    get('cq-question').textContent = `Which definition matches ${item.term}?`;
    get('cq-stats').textContent = `Question ${quizIndex + 1} of ${quizOrder.length} · Score ${quizScore}`;
    get('cq-progress').style.width = `${quizIndex / quizOrder.length * 100}%`;
    get('cq-answers').replaceChildren();
    choices.forEach((definition, index) => {
      const button = document.createElement('button');
      button.type = 'button'; button.className = 'answer';
      button.textContent = `${index + 1}. ${definition}`;
      button.onclick = () => answerDefinition(index);
      get('cq-answers').appendChild(button);
    });
    get('cq-feedback').classList.add('hidden');
    get('cq-next').classList.add('hidden');
  }

  function answerDefinition(index) {
    if (quizAnswered) return;
    quizAnswered = true;
    const item = quizItems[quizOrder[quizIndex]], correct = choices[index] === item.definition;
    if (correct) quizScore++; else quizMissed.push(quizOrder[quizIndex]);
    [...get('cq-answers').children].forEach((button, i) => {
      button.disabled = true;
      if (choices[i] === item.definition) button.classList.add('correct');
      else if (i === index) button.classList.add('wrong');
    });
    const heading = document.createElement('strong');
    heading.textContent = correct ? 'Correct!' : 'Not quite. Here is the PDF definition:';
    const quote = document.createElement('p');
    quote.textContent = item.source || item.definition;
    const source = document.createElement('span');
    source.className = 'muted'; source.textContent = `Consonant Sounds · page ${item.page}`;
    get('cq-feedback').replaceChildren(heading, quote, source);
    get('cq-feedback').classList.remove('hidden');
    get('cq-stats').textContent = `Question ${quizIndex + 1} of ${quizOrder.length} · Score ${quizScore}`;
    get('cq-progress').style.width = `${(quizIndex + 1) / quizOrder.length * 100}%`;
    get('cq-next').textContent = quizIndex === quizOrder.length - 1 ? 'See results →' : 'Next question →';
    get('cq-next').classList.remove('hidden');
    get('cq-next').focus({preventScroll:true});
  }

  function nextDefinition() {
    if (!quizAnswered) return;
    quizIndex++;
    if (quizIndex < quizOrder.length) {
      showDefinition(); get('cq-answers').firstElementChild.focus({preventScroll:true}); return;
    }
    get('cq-play').classList.add('hidden'); get('cq-end').classList.remove('hidden');
    get('cq-score').textContent = `${quizScore} / ${quizOrder.length}`;
    get('cq-end-title').textContent = quizMissed.length ? 'Keep building your score!' : 'Perfect run!';
    get('cq-note').textContent = quizMissed.length
      ? `Review your ${quizMissed.length} missed answer${quizMissed.length === 1 ? '' : 's'}, then try them again.`
      : 'Every answer correct! Try filling the English consonants table next.';
    get('cq-review').replaceChildren();
    quizMissed.forEach(index => {
      const item = quizItems[index], li = document.createElement('li');
      li.textContent = `${item.term} — ${item.source || item.definition} (page ${item.page})`;
      get('cq-review').appendChild(li);
    });
    get('cq-review-title').classList.toggle('hidden', !quizMissed.length);
    get('cq-retry').classList.toggle('hidden', !quizMissed.length);
    get('cq-restart').focus({preventScroll:true});
  }
  get('cq-next').onclick = nextDefinition;
  get('cq-restart').onclick = () => startDefinitions();
  get('cq-retry').onclick = () => startDefinitions([...quizMissed]);
  document.addEventListener('keydown', event => {
    if (active !== 'consonant-quiz' || get('cq-play').classList.contains('hidden') || event.altKey || event.ctrlKey || event.metaKey) return;
    if (!quizAnswered && /^[1-4]$/.test(event.key)) {
      event.preventDefault(); answerDefinition(Number(event.key) - 1);
    } else if (quizAnswered && event.key === 'Enter' && event.target === document.body) {
      event.preventDefault(); nextDefinition();
    }
  });

  let selectedSound = null, placedSounds = new Set(), tiles = new Map();
  const soundBySymbol = new Map(consonantSounds.map(sound => [sound.symbol, sound]));
  function soundLabel(sound) {
    const symbol = document.createElement('span'); symbol.className = 'consonant-symbol'; symbol.textContent = `/${sound.symbol}/`;
    const word = document.createElement('span'); word.className = 'consonant-word';
    const position = sound.word.indexOf(sound.mark), underline = document.createElement('u');
    underline.textContent = sound.mark;
    word.append(sound.word.slice(0, position), underline, sound.word.slice(position + sound.mark.length));
    return [symbol, word];
  }
  function selectSound(symbol) {
    if (!soundBySymbol.has(symbol) || placedSounds.has(symbol)) return;
    selectedSound = symbol;
    for (const [key, tile] of tiles) {
      tile.classList.toggle('selected', key === symbol);
      tile.setAttribute('aria-pressed', String(key === symbol));
    }
    get('consonant-message').textContent = `/${symbol}/ selected. Drag it or choose its place in the table.`;
  }
  function placeSound(symbol, expected, slot) {
    if (!soundBySymbol.has(symbol) || placedSounds.has(symbol) || slot.disabled) return;
    if (symbol !== expected.symbol) {
      slot.classList.add('miss');
      get('consonant-message').textContent = `/${symbol}/ does not belong in that space. Try again.`;
      setTimeout(() => slot.classList.remove('miss'), 650); return;
    }
    slot.replaceChildren(...soundLabel(expected)); slot.disabled = true; slot.classList.add('filled');
    const row = consonantRows[expected.row];
    slot.setAttribute('aria-label', `Correct: /${symbol}/, ${expected.word}; ${expected.place}, ${row.manner}, ${row.type}`);
    placedSounds.add(symbol); tiles.get(symbol).remove(); tiles.delete(symbol); selectedSound = null;
    for (const tile of tiles.values()) {tile.classList.remove('selected'); tile.setAttribute('aria-pressed', 'false');}
    get('consonant-counter').textContent = `${placedSounds.size} of ${consonantSounds.length} placed`;
    get('consonant-message').textContent = placedSounds.size === consonantSounds.length
      ? 'Perfect table! All 24 consonants are in place.'
      : `Correct! /${symbol}/ — ${expected.place}, ${row.manner.toLowerCase()}${row.type ? `, ${row.type}` : ''}.`;
  }
  function resetConsonants() {
    selectedSound = null; placedSounds = new Set(); tiles = new Map();
    const table = get('consonant-table');
    table.querySelectorAll('thead, tbody').forEach(node => node.remove());
    const head = table.createTHead(), header = head.insertRow();
    ['Manner', 'Type', ...consonantPlaces].forEach(label => {
      const th = document.createElement('th'); th.scope = 'col'; th.textContent = label; header.appendChild(th);
    });
    const body = table.createTBody();
    consonantRows.forEach((row, index) => {
      const tr = body.insertRow();
      const manner = document.createElement('th'); manner.scope = 'row'; manner.textContent = row.manner;
      const type = document.createElement('th'); type.scope = 'row'; type.textContent = row.type || '—';
      tr.append(manner, type);
      consonantPlaces.forEach(place => {
        const td = tr.insertCell(), expected = consonantSounds.find(sound => sound.row === index && sound.place === place);
        if (!expected) {td.className = 'consonant-empty'; return;}
        const slot = document.createElement('button'); slot.type = 'button'; slot.className = 'consonant-slot'; slot.textContent = '+';
        slot.setAttribute('aria-label', `Place a sound: ${place}, ${row.manner}${row.type ? `, ${row.type}` : ''}`);
        slot.onclick = () => {
          if (selectedSound) placeSound(selectedSound, expected, slot);
          else get('consonant-message').textContent = 'Select an answer from the bank first.';
        };
        slot.ondragover = event => {if (!slot.disabled) {event.preventDefault(); event.dataTransfer.dropEffect = 'move'; slot.classList.add('drag-over');}};
        slot.ondragleave = () => slot.classList.remove('drag-over');
        slot.ondrop = event => {
          event.preventDefault(); slot.classList.remove('drag-over');
          placeSound(event.dataTransfer.getData('text/plain'), expected, slot);
        };
        td.appendChild(slot);
      });
    });
    get('consonant-tiles').replaceChildren();
    shuffled(consonantSounds).forEach(sound => {
      const tile = document.createElement('button'); tile.type = 'button'; tile.className = 'consonant-tile'; tile.draggable = true;
      tile.setAttribute('aria-label', `Select /${sound.symbol}/, ${sound.word}`); tile.setAttribute('aria-pressed', 'false');
      tile.replaceChildren(...soundLabel(sound)); tile.onclick = () => selectSound(sound.symbol);
      tile.ondragstart = event => {selectSound(sound.symbol); event.dataTransfer.setData('text/plain', sound.symbol); event.dataTransfer.effectAllowed = 'move';};
      tile.ondragend = () => table.querySelectorAll('.drag-over').forEach(slot => slot.classList.remove('drag-over'));
      get('consonant-tiles').appendChild(tile); tiles.set(sound.symbol, tile);
    });
    get('consonant-counter').textContent = `0 of ${consonantSounds.length} placed`;
    get('consonant-message').textContent = 'Pick a sound to begin. Scroll the table sideways to see every column.';
  }
  get('consonant-reset').onclick = resetConsonants;
  startDefinitions(); resetConsonants(); setTab('quiz');
  if (window.location.hash === '#exam2') chooseExam(2);
})();
