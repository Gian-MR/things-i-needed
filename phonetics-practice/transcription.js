(() => {
  const get = id => document.getElementById(id);
  const element = (tag, className, text) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  };
  const button = (label, className = 'secondary') => {
    const node = element('button', className, label); node.type = 'button'; return node;
  };
  function updateScore(kind, total) {
    const correct = get(`${kind}-list`).querySelectorAll('[data-result="correct"]').length;
    get(`${kind}-score`).textContent = `${correct} of ${total} words correct${correct === total ? ' · Perfect practice!' : ''}`;
  }
  function setResult(row, result, message) {
    if (result) row.dataset.result = result; else delete row.dataset.result;
    row.classList.toggle('transcription-correct', result === 'correct');
    row.classList.toggle('transcription-wrong', result === 'wrong');
    row.querySelector('.transcription-feedback').textContent = message;
  }
  function focusNextUnanswered(row, selector) {
    const rows = [...row.parentElement.children], start = rows.indexOf(row);
    for (let offset = 1; offset < rows.length; offset++) {
      const next = rows[(start + offset) % rows.length];
      if (next.dataset.result === 'correct') continue;
      next.querySelector(selector).focus({preventScroll:true});
      next.scrollIntoView({block:'nearest'});
      return;
    }
  }

  function renderOrthographic(words) {
    get('orthographic-list').replaceChildren();
    words.forEach((word, index) => {
      const item = transcriptionWords[word], row = element('form', 'orthographic-row');
      row.dataset.word = word; row.noValidate = true;
      const label = element('label', 'orthographic-prompt', `${index + 1}. /${item.prompt || item.sounds.join('')}/`);
      const input = element('input', 'orthographic-input');
      input.type = 'text'; input.id = `spelling-${word}`; label.htmlFor = input.id;
      input.autocomplete = 'off'; input.spellcheck = false; input.autocapitalize = 'none';
      input.setAttribute('aria-label', `English spelling for /${item.prompt || item.sounds.join('')}/`);
      input.placeholder = 'Type the English word';
      const feedback = element('p', 'transcription-feedback'); feedback.id = `spelling-feedback-${word}`;
      feedback.setAttribute('role', 'status'); input.setAttribute('aria-describedby', feedback.id);
      const check = button('Check'); check.type = 'submit';
      const correct = () => input.value.trim().toLowerCase() === word;
      const grade = (advance = false) => {
        const right = correct();
        setResult(row, right ? 'correct' : 'wrong', right ? '✓ Correct!' : input.value.trim() ? '✗ Not quite. Try again.' : 'Type a word first.');
        input.setAttribute('aria-invalid', String(!right)); updateScore('orthographic', words.length);
        if (right && advance) focusNextUnanswered(row, 'input');
      };
      input.oninput = () => {
        if (correct()) grade(true);
        else if (row.dataset.result) grade();
      };
      input.onblur = () => {if (input.value.trim()) grade();};
      row.onsubmit = event => {event.preventDefault(); grade(true);};
      row.append(label, input, check, feedback); get('orthographic-list').appendChild(row);
    });
    updateScore('orthographic', words.length);
  }

  const symbolTiles = new Map();
  const allowedSymbols = new Set(transcriptionSymbolGroups.flatMap(group => group.symbols.map(([symbol]) => symbol)));
  let selectedSymbol = null;
  function selectSymbol(symbol) {
    selectedSymbol = symbol;
    for (const [key, tile] of symbolTiles) {
      tile.classList.toggle('selected', key === symbol);
      tile.setAttribute('aria-pressed', String(key === symbol));
    }
    get('phonemic-message').textContent = symbol
      ? `/${symbol}/ selected. Choose a blank; this sound stays available for reuse.`
      : 'Select a sound, then choose a blank.';
  }
  function buildSymbolBank() {
    for (const group of transcriptionSymbolGroups) {
      const heading = element('h4', '', group.name), bank = element('div', 'transcription-symbol-grid');
      group.symbols.forEach(([symbol, example]) => {
        const tile = button(symbol, 'transcription-symbol'); tile.draggable = true;
        tile.title = `/${symbol}/ as in ${example}`;
        tile.setAttribute('aria-label', `Select /${symbol}/ as in ${example}`);
        tile.setAttribute('aria-pressed', 'false');
        tile.onclick = () => selectSymbol(selectedSymbol === symbol ? null : symbol);
        tile.ondragstart = event => {
          selectSymbol(symbol); event.dataTransfer.setData('text/plain', symbol);
          event.dataTransfer.effectAllowed = 'copy';
        };
        tile.ondragend = () => get('phonemic-list').querySelectorAll('.drag-over').forEach(slot => slot.classList.remove('drag-over'));
        symbolTiles.set(symbol, tile); bank.appendChild(tile);
      });
      get('transcription-symbols').append(heading, bank);
    }
  }

  function renderPhonemic(words) {
    get('phonemic-list').replaceChildren(); selectSymbol(null);
    words.forEach((word, index) => {
      const item = transcriptionWords[word], values = Array(item.sounds.length).fill(null);
      const row = element('div', 'phonemic-row'); row.dataset.word = word;
      const exercise = element('div', 'phonemic-exercise');
      const label = element('h3', 'phonemic-word', `${index + 1}. ${word}`);
      const blanks = element('div', 'phonemic-blanks');
      blanks.setAttribute('role', 'group'); blanks.setAttribute('aria-label', `Build the transcription of ${word}`);
      const startSlash = element('span', 'transcription-slash', '/'), endSlash = element('span', 'transcription-slash', '/');
      startSlash.setAttribute('aria-hidden', 'true'); endSlash.setAttribute('aria-hidden', 'true');
      blanks.appendChild(startSlash);
      const slots = [];
      const invalidate = () => {
        setResult(row, '', '');
        slots.forEach(slot => slot.classList.remove('sound-correct', 'sound-wrong'));
        updateScore('phonemic', words.length);
      };
      function fillSlot(position, symbol) {
        if (symbol !== null && !allowedSymbols.has(symbol)) return;
        values[position] = symbol;
        const slot = slots[position]; slot.textContent = symbol || '·';
        slot.classList.toggle('has-symbol', !!symbol);
        slot.setAttribute('aria-label', `${word}, sound ${position + 1} of ${values.length}: ${symbol ? `/${symbol}/` : 'empty'}`);
        invalidate();
      }
      item.sounds.forEach((_, position) => {
        const slot = button('·', 'transcription-slot');
        slot.setAttribute('aria-label', `${word}, sound ${position + 1} of ${values.length}: empty`);
        slot.onclick = () => {
          if (selectedSymbol) fillSlot(position, selectedSymbol);
          else get('phonemic-message').textContent = 'Select a sound from the bank first, then choose a blank.';
        };
        slot.onkeydown = event => {
          if (event.key === 'Backspace' || event.key === 'Delete') {
            event.preventDefault(); fillSlot(position, null);
          }
        };
        slot.ondragover = event => {
          event.preventDefault(); event.dataTransfer.dropEffect = 'copy'; slot.classList.add('drag-over');
        };
        slot.ondragleave = () => slot.classList.remove('drag-over');
        slot.ondrop = event => {
          event.preventDefault(); slot.classList.remove('drag-over');
          const symbol = event.dataTransfer.getData('text/plain');
          if (allowedSymbols.has(symbol)) fillSlot(position, symbol);
        };
        slots.push(slot); blanks.appendChild(slot);
      });
      blanks.appendChild(endSlash); exercise.append(label, blanks);
      const feedback = element('p', 'transcription-feedback'); feedback.setAttribute('role', 'status');
      const controls = element('div', 'phonemic-controls'), check = button('Check word'), clear = button('Clear');
      check.onclick = () => {
        const forms = [item.sounds, ...(item.variants || [])];
        const matchCount = form => form.reduce((n, symbol, i) => n + Number(values[i] === symbol), 0);
        const best = forms.reduce((a, b) => matchCount(b) > matchCount(a) ? b : a);
        const missing = values.filter(value => !value).length;
        const right = !missing && matchCount(best) === values.length;
        slots.forEach((slot, i) => {
          slot.classList.toggle('sound-correct', !!values[i] && values[i] === best[i]);
          slot.classList.toggle('sound-wrong', values[i] !== best[i]);
        });
        setResult(row, right ? 'correct' : 'wrong', right ? '✓ Correct transcription!'
          : missing ? `Fill ${missing} empty sound${missing === 1 ? '' : 's'} before checking again.`
          : '✗ Not quite. Change the red sounds and check again.');
        updateScore('phonemic', words.length);
      };
      clear.onclick = () => {slots.forEach((_, i) => fillSlot(i, null));};
      controls.append(check, clear); row.append(exercise, controls, feedback);
      get('phonemic-list').appendChild(row);
    });
    updateScore('phonemic', words.length);
  }

  get('orthographic-reset').onclick = () => renderOrthographic(shuffled(orthographicWords));
  get('phonemic-reset').onclick = () => renderPhonemic(shuffled(phonemicWords));
  get('phonemic-deselect').onclick = () => selectSymbol(null);
  renderOrthographic(orthographicWords); buildSymbolBank(); renderPhonemic(phonemicWords);
})();
