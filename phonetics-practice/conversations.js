(() => {
  const get = id => document.getElementById(id);
  const node = (tag, className, text) => {
    const result = document.createElement(tag);
    if (className) result.className = className;
    if (text !== undefined) result.textContent = text;
    return result;
  };
  const normalize = text => text.normalize('NFKC').toLowerCase().replace(/[^\p{L}\p{N}]/gu, '');
  const exercises = conversationExercises.map(exercise => ({
    ...exercise,
    words:exercise.lines.flatMap((line, lineIndex) => line.words.map(word => ({...word, speaker:line.speaker, lineIndex})))
  }));
  const freshState = exercise => ({
    current:0,
    answers:exercise.words.map(() => ({status:'pending', draft:'', wrong:false})),
    feedback:'', feedbackType:''
  });
  const states = exercises.map(freshState);
  let selected = 0;
  const currentState = () => states[selected];
  const currentExercise = () => exercises[selected];
  const ipaOnly = word => word.ipa.replace(/[.,!?;:]+$/u, '');

  function nextUnfinished(state) {
    // New words first; return to skipped words once the first pass is done.
    for (const status of ['pending', 'skipped']) {
      for (let offset = 1; offset <= state.answers.length; offset++) {
        const index = (state.current + offset) % state.answers.length;
        if (state.answers[index].status === status) return index;
      }
    }
    return -1;
  }
  function message(text, type = '') {
    currentState().feedback = text; currentState().feedbackType = type;
  }
  function selectWord(index) {
    const state = currentState();
    if (state.answers[index].status === 'correct') return;
    state.current = index; message(''); render(true);
  }
  function renderPicker() {
    get('conversation-picker').replaceChildren();
    exercises.forEach((exercise, index) => {
      const correct = states[index].answers.filter(answer => answer.status === 'correct').length;
      const button = node('button', 'conversation-choice'); button.type = 'button';
      button.classList.toggle('active', selected === index);
      button.setAttribute('aria-pressed', String(selected === index));
      button.append(node('strong', '', `Conversation ${index + 1}`), node('span', '', `${correct} / ${exercise.words.length} words`));
      button.onclick = () => {selected = index; render(false);};
      get('conversation-picker').appendChild(button);
    });
  }
  function renderLines(exercise, state, english) {
    const area = get(english ? 'conversation-english' : 'conversation-transcript');
    area.replaceChildren();
    let index = 0;
    exercise.lines.forEach(line => {
      const row = node('div', 'conversation-line');
      row.appendChild(node('span', 'conversation-speaker', `${line.speaker}:`));
      const words = node('div', 'conversation-words');
      line.words.forEach(word => {
        const wordIndex = index++, answer = state.answers[wordIndex], complete = answer.status === 'correct';
        const token = node(english && complete ? 'span' : 'button', english ? 'conversation-english-word' : 'conversation-ipa-word');
        if (token.tagName === 'BUTTON') {
          token.type = 'button'; token.disabled = complete;
          token.onclick = () => selectWord(wordIndex);
        }
        token.textContent = english ? complete ? word.english : '____' : word.ipa;
        token.dataset.index = String(wordIndex);
        token.classList.toggle('decoded', complete);
        token.classList.toggle('skipped', answer.status === 'skipped');
        const isCurrent = state.current === wordIndex && !complete;
        token.classList.toggle('current', isCurrent);
        if (isCurrent) token.setAttribute('aria-current', 'step');
        if (!english || !complete) {
          token.setAttribute('aria-label', `${line.speaker}, word ${wordIndex + 1}: ${english ? answer.status === 'skipped' ? 'skipped' : 'unfinished' : `/${ipaOnly(word)}/, ${complete ? 'decoded' : answer.status}`}`);
        }
        words.append(token, ' ');
      });
      row.appendChild(words); area.appendChild(row);
    });
  }
  function render(focusInput = false) {
    const exercise = currentExercise(), state = currentState();
    const correct = state.answers.filter(answer => answer.status === 'correct').length;
    const skipped = state.answers.filter(answer => answer.status === 'skipped').length;
    const complete = correct === exercise.words.length;
    renderPicker(); renderLines(exercise, state, false); renderLines(exercise, state, true);
    get('conversation-stats').textContent = `${correct} of ${exercise.words.length} words decoded · ${skipped} skipped`;
    const percent = Math.round(correct / exercise.words.length * 100);
    get('conversation-progress-fill').style.width = `${percent}%`;
    get('conversation-progress').setAttribute('aria-valuenow', String(percent));
    get('conversation-progress').setAttribute('aria-valuetext', `${correct} of ${exercise.words.length} words decoded`);
    get('conversation-review').disabled = skipped === 0;
    get('conversation-review').textContent = `Review skipped words${skipped ? ` (${skipped})` : ''}`;
    get('conversation-form').classList.toggle('hidden', complete);
    get('conversation-complete').classList.toggle('hidden', !complete);
    get('conversation-source').textContent = exercise.source;
    get('conversation-feedback').textContent = state.feedback;
    get('conversation-feedback').className = `conversation-feedback ${state.feedbackType}`;
    if (!complete) {
      const word = exercise.words[state.current], answer = state.answers[state.current];
      get('conversation-form').dataset.current = String(state.current);
      get('conversation-word-label').textContent = `${word.speaker} · Word ${state.current + 1} of ${exercise.words.length}${answer.status === 'skipped' ? ' · Skipped' : ''}`;
      get('conversation-current-ipa').textContent = `/${ipaOnly(word)}/`;
      get('conversation-input').value = answer.draft;
      get('conversation-input').setAttribute('aria-invalid', String(answer.wrong));
      get('conversation-input').setAttribute('aria-label', `English word ${state.current + 1} for /${ipaOnly(word)}/`);
      if (focusInput) get('conversation-input').focus({preventScroll:true});
    }
  }
  get('conversation-input').addEventListener('input', () => {
    const state = currentState(), answer = state.answers[state.current];
    answer.draft = get('conversation-input').value; answer.wrong = false;
    get('conversation-input').setAttribute('aria-invalid', 'false');
    message(''); get('conversation-feedback').textContent = ''; get('conversation-feedback').className = 'conversation-feedback';
  });
  get('conversation-form').addEventListener('submit', event => {
    event.preventDefault();
    const exercise = currentExercise(), state = currentState(), answer = state.answers[state.current];
    const input = get('conversation-input').value.trim(), expected = exercise.words[state.current];
    answer.draft = get('conversation-input').value;
    if (!normalize(input)) {message('Type an English word, or choose Skip word.'); render(true); return;}
    if (input.split(/\s+/).length !== 1) {
      answer.wrong = true; message('Check one word at a time. A contraction counts as one word.', 'wrong'); render(true); return;
    }
    if (normalize(input) !== normalize(expected.english)) {
      answer.wrong = true; message('Not quite. Try again, or skip this word and return later.', 'wrong'); render(true); return;
    }
    answer.status = 'correct'; answer.wrong = false;
    const next = nextUnfinished(state);
    if (next === -1) message('Every word is correct. Conversation complete!', 'correct');
    else {
      state.current = next;
      message(`Correct: ${expected.english}${state.answers[next].status === 'skipped' ? ' Now return to a skipped word.' : ' Keep going!'}`, 'correct');
    }
    render(next !== -1);
    if (next === -1) get('conversation-reset').focus({preventScroll:true});
  });
  get('conversation-skip').onclick = () => {
    const state = currentState(), answer = state.answers[state.current], previous = state.current;
    answer.draft = get('conversation-input').value; answer.status = 'skipped'; answer.wrong = false;
    state.current = nextUnfinished(state);
    message(state.current === previous
      ? 'This is the only word left. Try it again when you are ready.'
      : state.answers[state.current].status === 'skipped'
        ? 'First pass finished. Return to your skipped words; none count as decoded yet.'
        : 'Word skipped. You can return to it at any time.');
    render(true);
  };
  get('conversation-review').onclick = () => {
    const state = currentState(), index = state.answers.findIndex(answer => answer.status === 'skipped');
    if (index !== -1) {state.current = index; message('Return to this skipped word.'); render(true);}
  };
  get('conversation-reset').onclick = () => {
    states[selected] = freshState(currentExercise()); message('Conversation restarted.'); render(false);
  };
  render();
})();
