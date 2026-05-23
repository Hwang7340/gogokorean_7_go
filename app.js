/* ============================================================
   GoGo Korean - Game Logic
   ============================================================ */

/* ===== Data: Levels & Questions ===== */
const LEVELS = [
  {
    id: 1,
    title: "현재형 복습(동사/형용사+-아요/어요)",
    subtitle: "-아요/어요",
    desc: "동사와 형용사의 현재형을 복습해요.",
    grammar: "V/A-아요/어요"
  },
  {
    id: 2,
    title: "동사 + -고",
    subtitle: "Verb + -고",
    desc: "동사 기본형에서 '다'를 빼고 '-고'를 붙여요.",
    grammar: "V-고"
  },
  {
    id: 3,
    title: "형용사 + -고",
    subtitle: "Adjective + -고",
    desc: "형용사 기본형에서 '다'를 빼고 '-고'를 붙여요.",
    grammar: "A-고"
  },
  {
    id: 4,
    title: "현재형 문장 연결",
    subtitle: "Present Tense Connection",
    desc: "두 개의 현재형 문장을 '-고'로 연결해요.",
    grammar: "V/A-고 V/A-아요/어요"
  },
  {
    id: 5,
    title: "과거형 문장 연결",
    subtitle: "Past Tense Connection",
    desc: "과거의 두 행동을 '-고'로 연결해요.",
    grammar: "V-고 V-았/었어요"
  },
  {
    id: 6,
    title: "미래형 문장 연결",
    subtitle: "Future Tense Connection",
    desc: "앞으로 할 일을 '-고'로 연결해요.",
    grammar: "V-고 V-(으)ㄹ 거예요"
  },
  {
    id: 7,
    title: "상황 미션",
    subtitle: "Situation Mission",
    desc: "실제 상황에서 '-고'를 활용해요.",
    grammar: "V/A-고"
  }
];

const QUESTIONS = {
  1: [
    { prompt: "가다 → ?", type: "choice", choices: ["가요", "가아요", "가어요", "가고"], answer: "가요", explanation: "'가다'는 받침이 없으므로 '가요'가 돼요." },
    { prompt: "먹다 → ?", type: "choice", choices: ["먹어요", "먹아요", "먹요", "먹고"], answer: "먹어요", explanation: "'먹다'는 ㅗ/ㅏ가 아니므로 '먹어요'가 돼요." },
    { prompt: "보다 → ?", type: "choice", choices: ["봐요", "보아요", "보어요", "보고"], answer: "봐요", explanation: "'보다'는 '봐요'로 줄여서 말해요." },
    { prompt: "좋다 → ?", type: "choice", choices: ["좋아요", "좋어요", "좋요", "좋고"], answer: "좋아요", explanation: "'좋다'는 '좋아요'가 돼요." },
    { prompt: "크다 → ?", type: "choice", choices: ["커요", "크아요", "크어요", "크고"], answer: "커요", explanation: "'크다'는 '커요'로 줄여서 말해요." }
  ],
  2: [
    { prompt: "가다 + -고 → ?", type: "choice", choices: ["가요고", "가고", "가아요", "가어고"], answer: "가고", explanation: "'가다'에서 '다'를 빼고 '-고'를 붙이면 '가고'가 돼요." },
    { prompt: "먹다 + -고 → ?", type: "choice", choices: ["먹어요고", "먹고", "먹아요", "먹어고"], answer: "먹고", explanation: "'먹다'에서 '다'를 빼고 '-고'를 붙이면 '먹고'가 돼요." },
    { prompt: "보다 + -고 → ?", type: "choice", choices: ["보고", "봐고", "보아고", "보어고"], answer: "보고", explanation: "'보다'에서 '다'를 빼고 '-고'를 붙이면 '보고'가 돼요." },
    { prompt: "읽다 + -고 → ?", type: "choice", choices: ["읽고", "읽어고", "일고", "읽어요고"], answer: "읽고", explanation: "'읽다'에서 '다'를 빼고 '-고'를 붙이면 '읽고'가 돼요." },
    { prompt: "만나다 + -고 → ?", type: "choice", choices: ["만나고", "만나요고", "만나아고", "만나어고"], answer: "만나고", explanation: "'만나다'에서 '다'를 빼고 '-고'를 붙이면 '만나고'가 돼요." }
  ],
  3: [
    { prompt: "좋다 + -고 → ?", type: "choice", choices: ["좋아고", "좋고", "좋아요고", "좋어요"], answer: "좋고", explanation: "'좋다'에서 '다'를 빼고 '-고'를 붙이면 '좋고'가 돼요." },
    { prompt: "크다 + -고 → ?", type: "choice", choices: ["크고", "커고", "크아고", "커요고"], answer: "크고", explanation: "'크다'에서 '다'를 빼고 '-고'를 붙이면 '크고'가 돼요." },
    { prompt: "작다 + -고 → ?", type: "choice", choices: ["작고", "작아고", "작어고", "작아요고"], answer: "작고", explanation: "'작다'에서 '다'를 빼고 '-고'를 붙이면 '작고'가 돼요." },
    { prompt: "춥다 + -고 → ?", type: "choice", choices: ["춥고", "추고", "추워고", "추워요고"], answer: "춥고", explanation: "'춥다'에서 '다'를 빼고 '-고'를 붙이면 '춥고'가 돼요." },
    { prompt: "예쁘다 + -고 → ?", type: "choice", choices: ["예쁘고", "예뻐고", "예쁘아고", "예뻐요고"], answer: "예쁘고", explanation: "'예쁘다'에서 '다'를 빼고 '-고'를 붙이면 '예쁘고'가 돼요." }
  ],
  4: [
    { prompt: "밥을 먹어요. 학교에 가요.", type: "connect", parts: ["밥을","먹고","학교에","가요"], answer: "밥을 먹고 학교에 가요", explanation: "'먹어요'를 '먹고'로 바꾸고 두 문장을 연결해요." },
    { prompt: "책을 읽어요. 공부해요.", type: "connect", parts: ["책을","읽고","공부해요"], answer: "책을 읽고 공부해요", explanation: "'읽어요'를 '읽고'로 바꿔서 연결해요." },
    { prompt: "친구를 만나요. 영화를 봐요.", type: "connect", parts: ["친구를","만나고","영화를","봐요"], answer: "친구를 만나고 영화를 봐요", explanation: "'만나요'를 '만나고'로 바꿔서 연결해요." },
    { prompt: "커피를 마셔요. 학교에 가요.", type: "connect", parts: ["커피를","마시고","학교에","가요"], answer: "커피를 마시고 학교에 가요", explanation: "'마셔요'를 '마시고'로 바꿔서 연결해요." },
    { prompt: "숙제를 써요. 책을 읽어요.", type: "connect", parts: ["숙제를","쓰고","책을","읽어요"], answer: "숙제를 쓰고 책을 읽어요", explanation: "'써요'를 '쓰고'로 바꿔서 연결해요." }
  ],
  5: [
    { prompt: "어제 영화를 봤어요. 친구를 만났어요.", type: "connect", parts: ["어제","영화를","보고","친구를","만났어요"], answer: "어제 영화를 보고 친구를 만났어요", explanation: "과거형에서도 첫 동사를 '-고'로 바꿔요. '봤어요' → '보고'" },
    { prompt: "아침을 먹었어요. 학교에 갔어요.", type: "connect", parts: ["아침을","먹고","학교에","갔어요"], answer: "아침을 먹고 학교에 갔어요", explanation: "'먹었어요'를 '먹고'로 바꿔서 연결해요." },
    { prompt: "책을 읽었어요. 잤어요.", type: "connect", parts: ["책을","읽고","잤어요"], answer: "책을 읽고 잤어요", explanation: "'읽었어요'를 '읽고'로 바꿔서 연결해요." },
    { prompt: "커피를 마셨어요. 공부했어요.", type: "connect", parts: ["커피를","마시고","공부했어요"], answer: "커피를 마시고 공부했어요", explanation: "'마셨어요'를 '마시고'로 바꿔서 연결해요." },
    { prompt: "친구를 만났어요. 밥을 먹었어요.", type: "connect", parts: ["친구를","만나고","밥을","먹었어요"], answer: "친구를 만나고 밥을 먹었어요", explanation: "'만났어요'를 '만나고'로 바꿔서 연결해요." }
  ],
  6: [
    { prompt: "내일 운동할 거예요. 도서관에 갈 거예요.", type: "connect", parts: ["내일","운동하고","도서관에","갈 거예요"], answer: "내일 운동하고 도서관에 갈 거예요", explanation: "미래형에서도 첫 동사를 '-고'로 바꿔요. '운동할 거예요' → '운동하고'" },
    { prompt: "주말에 친구를 만날 거예요. 영화를 볼 거예요.", type: "connect", parts: ["주말에","친구를","만나고","영화를","볼 거예요"], answer: "주말에 친구를 만나고 영화를 볼 거예요", explanation: "'만날 거예요'를 '만나고'로 바꿔서 연결해요." },
    { prompt: "저녁을 먹을 거예요. 잘 거예요.", type: "connect", parts: ["저녁을","먹고","잘 거예요"], answer: "저녁을 먹고 잘 거예요", explanation: "'먹을 거예요'를 '먹고'로 바꿔서 연결해요." },
    { prompt: "한국어를 공부할 거예요. 책을 읽을 거예요.", type: "connect", parts: ["한국어를","공부하고","책을","읽을 거예요"], answer: "한국어를 공부하고 책을 읽을 거예요", explanation: "'공부할 거예요'를 '공부하고'로 바꿔서 연결해요." },
    { prompt: "커피를 마실 거예요. 일할 거예요.", type: "connect", parts: ["커피를","마시고","일할 거예요"], answer: "커피를 마시고 일할 거예요", explanation: "'마실 거예요'를 '마시고'로 바꿔서 연결해요." }
  ],
  7: [
    { prompt: "오늘 뭐 해요?", type: "mission", scene: "🏠", instruction: "자연스럽게 대답해 보세요.", choices: ["저는 밥을 먹어요.", "저는 밥을 먹고 학교에 가요.", "저는 학교에 가요."], answer: "저는 밥을 먹고 학교에 가요.", explanation: "두 가지 행동을 '-고'로 연결해서 말하면 더 자연스러워요." },
    { prompt: "주말에 뭐 할 거예요?", type: "mission", scene: "🏫", instruction: "자연스럽게 대답해 보세요.", choices: ["친구를 만날 거예요.", "영화를 볼 거예요.", "친구를 만나고 영화를 볼 거예요."], answer: "친구를 만나고 영화를 볼 거예요.", explanation: "두 가지 미래 행동을 '-고'로 연결해서 말해요." },
    { prompt: "방이 어때요?", type: "mission", scene: "🏠", instruction: "자연스럽게 대답해 보세요.", choices: ["방이 작아요.", "방이 깨끗해요.", "방이 작고 깨끗해요."], answer: "방이 작고 깨끗해요.", explanation: "두 가지 상태를 '-고'로 나열해서 말해요." },
    { prompt: "어제 뭐 했어요?", type: "mission", scene: "🍽️", instruction: "자연스럽게 대답해 보세요.", choices: ["어제 밥을 먹었어요.", "어제 친구를 만났어요.", "어제 밥을 먹고 친구를 만났어요."], answer: "어제 밥을 먹고 친구를 만났어요.", explanation: "과거의 두 행동을 '-고'로 연결해서 말해요." },
    { prompt: "내일 뭐 할 거예요?", type: "mission", scene: "📚", instruction: "자연스럽게 대답해 보세요.", choices: ["내일 한국어를 공부할 거예요.", "내일 도서관에 갈 거예요.", "내일 한국어를 공부하고 도서관에 갈 거예요."], answer: "내일 한국어를 공부하고 도서관에 갈 거예요.", explanation: "미래의 두 행동을 '-고'로 연결해서 말해요." }
  ]
};

const WORDS = {
  verbs: [
    { ko: "가다", en: "go", ex: "학교에 가요" },
    { ko: "오다", en: "come", ex: "집에 와요" },
    { ko: "먹다", en: "eat", ex: "밥을 먹어요" },
    { ko: "마시다", en: "drink", ex: "물을 마셔요" },
    { ko: "보다", en: "see/watch", ex: "영화를 봐요" },
    { ko: "읽다", en: "read", ex: "책을 읽어요" },
    { ko: "쓰다", en: "write", ex: "편지를 써요" },
    { ko: "공부하다", en: "study", ex: "한국어를 공부해요" },
    { ko: "자다", en: "sleep", ex: "일찍 자요" },
    { ko: "만나다", en: "meet", ex: "친구를 만나요" }
  ],
  adjectives: [
    { ko: "좋다", en: "good", ex: "날씨가 좋아요" },
    { ko: "크다", en: "big", ex: "집이 커요" },
    { ko: "작다", en: "small", ex: "방이 작아요" },
    { ko: "많다", en: "many/much", ex: "사람이 많아요" },
    { ko: "적다", en: "few/little", ex: "돈이 적어요" },
    { ko: "예쁘다", en: "pretty", ex: "꽃이 예뻐요" },
    { ko: "춥다", en: "cold", ex: "날씨가 추워요" },
    { ko: "덥다", en: "hot", ex: "날씨가 더워요" },
    { ko: "재미있다", en: "interesting/fun", ex: "영화가 재미있어요" },
    { ko: "맛있다", en: "delicious", ex: "음식이 맛있어요" }
  ]
};

/* ===== State ===== */
let state = {
  currentScreen: 'loading',
  currentLevel: 1,
  currentQuestion: 0,
  score: 0,
  hearts: 5, // 문항 수와 동일
  coins: 0,
  answers: [], // { qIndex, correct, question, userAnswer, correctAnswer }
  wrongAnswers: [], // persisted
  levelProgress: {}, // levelId -> { stars, completed }
  assembled: [], // for connect questions
  totalCoins: parseInt(localStorage.getItem('ggk_coins') || '0'),
  isProcessing: false,
  isRetryMode: false,
  retryQuestions: [],
  retryCurrentQuestion: 0,
  retryScore: 0,
  retryHearts: 0,
  reviewFromResult: false
};

/* ===== Utility ===== */
function $(id) { return document.getElementById(id); }
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.overlay').forEach(o => o.classList.remove('active'));
  document.querySelectorAll('.modal').forEach(m => m.classList.remove('active'));
  const target = $(id);
  if (target) target.classList.add('active');
  state.currentScreen = id;
}

function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function saveProgress() {
  try {
    localStorage.setItem('ggk_levelProgress', JSON.stringify(state.levelProgress));
    localStorage.setItem('ggk_wrong', JSON.stringify(state.wrongAnswers));
    localStorage.setItem('ggk_coins', String(state.totalCoins));
  } catch (e) {
    console.warn('localStorage 저장 실패:', e);
  }
}

function loadProgress() {
  try {
    state.levelProgress = JSON.parse(localStorage.getItem('ggk_levelProgress') || '{}');
    state.wrongAnswers = JSON.parse(localStorage.getItem('ggk_wrong') || '[]');
    state.totalCoins = parseInt(localStorage.getItem('ggk_coins') || '0');
  } catch (e) { /* ignore */ }
}

/* ===== Navigation ===== */
function goHome() {
  hideQuitModal();
  showScreen('home-screen');
  updateDailyQuote();
}

function goToLevelSelect() {
  showScreen('level-screen');
  renderLevels();
}

function goToReview(levelFilter = null) {
  state.reviewFromResult = (levelFilter !== null);
  showScreen('review-screen');
  renderReview(levelFilter);

  // 오답 보기 타이틀 변경
  const titleEl = $('review-title');
  if (titleEl) {
    titleEl.textContent = levelFilter !== null ? `Level ${levelFilter} 오답 보기` : '오답 복습';
  }
}

function goBackFromReview() {
  if (state.reviewFromResult) {
    state.reviewFromResult = false;
    const qList = QUESTIONS[state.currentLevel];
    const completed = state.hearts > 0 && state.currentQuestion >= qList.length;
    showResult(completed);
  } else {
    goHome();
  }
}

function showMyWords() {
  showScreen('words-screen');
  const tabs = document.querySelectorAll('.tab-btn');
  tabs.forEach(t => t.classList.remove('active'));
  if (tabs[0]) tabs[0].classList.add('active');
  renderWords('verbs');
}

/* ===== Level Select ===== */
function renderLevels() {
  const container = document.querySelector('.level-path');
  // Keep path line
  container.innerHTML = '<div class="path-line"></div>';
  $('total-coins').textContent = state.totalCoins;

  LEVELS.forEach((lvl, idx) => {
    const prev = LEVELS[idx - 1];
    const prevCompleted = prev ? state.levelProgress[prev.id]?.completed : true;
    const prog = state.levelProgress[lvl.id] || {};
    const isCompleted = prog.completed;
    const isCurrent = prevCompleted && !isCompleted;
    const isLocked = !prevCompleted;

    const node = document.createElement('div');
    node.className = `level-node ${isCompleted ? 'completed' : ''} ${isCurrent ? 'current' : ''} ${isLocked ? 'locked' : ''}`;
    if (!isLocked) {
      node.onclick = () => startLevel(lvl.id);
    }

    let badge = '';
    if (isCompleted) badge = '<span class="level-badge">완료</span>';
    else if (isCurrent) badge = '<span class="level-badge">진행중</span>';

    let stars = '';
    if (isCompleted) {
      const s = prog.stars || 1;
      stars = '⭐'.repeat(s) + '☆'.repeat(3 - s);
    }

    let lockIcon = isLocked ? '<span class="level-lock">🔒</span>' : '';

    node.innerHTML = `
      ${badge}
      <div class="level-title">Level ${lvl.id}. ${lvl.title}</div>
      <div class="level-desc">${lvl.desc}</div>
      <div class="level-stars">${stars}</div>
      ${lockIcon}
    `;
    container.appendChild(node);
  });
}

/* ===== Game Start ===== */
function startLevel(levelId) {
  const prev = LEVELS[levelId - 2];
  if (prev && !state.levelProgress[prev.id]?.completed) {
    alert('이전 레벨을 먼저 완료해야 해요!');
    return;
  }

  state.currentLevel = levelId;
  state.currentQuestion = 0;
  state.score = 0;
  state.hearts = 5; // 문항 수와 동일하게 제공
  state.answers = [];
  state.assembled = [];
  state.isProcessing = false;
  state.isRetryMode = false;
  state.retryQuestions = [];
  state.retryCurrentQuestion = 0;
  state.retryScore = 0;
  state.retryHearts = 0;

  if (levelId === 7) {
    showScreen('mission-screen');
    renderMission();
  } else {
    showScreen('game-screen');
    renderQuestion();
  }
}

/* ===== Get Current Question ===== */
function getCurrentQuestion() {
  if (state.isRetryMode) {
    return state.retryQuestions[state.retryCurrentQuestion];
  }
  const qList = QUESTIONS[state.currentLevel];
  return qList[state.currentQuestion];
}

function getTotalQuestions() {
  if (state.isRetryMode) {
    return state.retryQuestions.length;
  }
  const qList = QUESTIONS[state.currentLevel];
  return qList.length;
}

function getCurrentIndex() {
  return state.isRetryMode ? state.retryCurrentQuestion : state.currentQuestion;
}

/* ===== Render Question ===== */
function renderQuestion() {
  const q = getCurrentQuestion();
  const total = getTotalQuestions();
  const idx = getCurrentIndex();
  const currentHearts = state.isRetryMode ? state.retryHearts : state.hearts;

  // Update progress
  const pct = ((idx) / total) * 100;
  $('game-progress').style.width = pct + '%';
  $('current-q').textContent = idx + 1;
  $('total-q').textContent = total;
  $('hearts-display').textContent = '❤️'.repeat(Math.max(0, currentHearts)) + '🖤'.repeat(Math.max(0, total - currentHearts));

  // Hint character alternates
  $('hint-char').textContent = idx % 2 === 0 ? '🐰' : '🐻';
  $('hint-text').textContent = idx === 0 ? '문제를 풀어보세요!' : '잘 하고 있어요!';

  // Question text
  const lvl = LEVELS[state.currentLevel - 1];
  const typeLabel = q.type === 'choice' ? '선택하기' : (q.type === 'connect' ? '문장 연결하기' : '입력하기');
  $('q-type').textContent = state.isRetryMode ? '오답 다시 풀기' : typeLabel;
  $('q-text').textContent = q.prompt;
  $('q-sub').textContent = q.type === 'connect' ? '단어를 순서대로 눌러 문장을 만드세요.' : '';

  // Clear areas
  $('choice-grid').style.display = 'none';
  $('connect-area').style.display = 'none';
  $('input-area').style.display = 'none';

  if (q.type === 'choice') {
    $('choice-grid').style.display = 'grid';
    $('choice-grid').innerHTML = '';
    const shuffled = shuffle(q.choices);
    shuffled.forEach(choice => {
      const btn = document.createElement('button');
      btn.className = 'choice-btn';
      btn.textContent = choice;
      btn.onclick = () => handleChoice(choice, btn);
      $('choice-grid').appendChild(btn);
    });
  } else if (q.type === 'connect') {
    $('connect-area').style.display = 'flex';
    state.assembled = [];
    renderConnect(q);
  }
}

/* ===== Connect Logic ===== */
function renderConnect(q) {
  const partsContainer = $('sentence-parts');
  partsContainer.innerHTML = '';

  // Shuffle for display
  const displayParts = shuffle(q.parts);
  displayParts.forEach((part, idx) => {
    const chip = document.createElement('button');
    chip.className = 'word-chip';
    chip.textContent = part;
    chip.dataset.word = part;
    chip.onclick = () => addWord(part, chip);
    partsContainer.appendChild(chip);
  });

  updateDropZone();
}

function addWord(word, chipEl) {
  const q = getCurrentQuestion();
  if (state.assembled.includes(word) && q.parts.filter(p => p === word).length <= state.assembled.filter(w => w === word).length) {
    // Word already used enough times
    return;
  }
  state.assembled.push(word);
  chipEl.classList.add('used');
  updateDropZone();
}

function resetConnect() {
  state.assembled = [];
  renderConnect(getCurrentQuestion());
}

function updateDropZone() {
  const zone = $('drop-zone');
  if (state.assembled.length === 0) {
    zone.innerHTML = '<p>여기에 단어를 순서대로 배치하세요</p>';
  } else {
    zone.innerHTML = `<div class="assembled">${state.assembled.join(' ')}</div>`;
  }
}

function submitConnect() {
  if (state.isProcessing) return;
  state.isProcessing = true;

  const q = getCurrentQuestion();
  const userAns = state.assembled.join(' ');
  checkAnswer(userAns, q.answer);
}

function submitInput() {
  if (state.isProcessing) return;
  state.isProcessing = true;

  const val = $('text-answer').value.trim();
  if (!val) {
    state.isProcessing = false;
    return;
  }
  const q = getCurrentQuestion();
  checkAnswer(val, q.answer);
}

/* ===== Handle Choice ===== */
function handleChoice(choice, btnEl) {
  if (state.isProcessing) return;
  state.isProcessing = true;

  const q = getCurrentQuestion();
  const isCorrect = choice === q.answer;

  // Visual feedback on buttons
  document.querySelectorAll('.choice-btn').forEach(btn => {
    btn.classList.add('disabled');
    if (btn.textContent === q.answer) btn.classList.add('correct');
  });
  if (!isCorrect) btnEl.classList.add('wrong');

  // 즉시 데이터 처리 및 UI 갱신
  processAnswer(isCorrect, q.explanation, q.prompt, choice, q.answer);

  // 600ms 후 오버레이 표시
  setTimeout(() => {
    showFeedbackOverlay(isCorrect, q.explanation, q.answer);
  }, 600);
}

/* ===== Process Answer (즉시 실행) ===== */
function processAnswer(isCorrect, explanation, question, userAns, correctAns) {
  const idx = getCurrentIndex();
  state.answers.push({
    qIndex: idx,
    correct: isCorrect,
    question,
    userAnswer: userAns,
    correctAnswer: correctAns,
    level: state.currentLevel,
    isRetry: state.isRetryMode
  });

  if (!isCorrect) {
    if (state.isRetryMode) {
      state.retryHearts--;
    } else {
      state.hearts--;
    }
    state.wrongAnswers = state.wrongAnswers.filter(
      w => !(w.question === question && w.correctAnswer === correctAns)
    );
    state.wrongAnswers.push({
      question,
      userAnswer: userAns,
      correctAnswer: correctAns,
      explanation,
      level: state.currentLevel
    });
    if (state.wrongAnswers.length > 50) state.wrongAnswers.shift();
  } else {
    if (state.isRetryMode) {
      state.retryScore++;
    } else {
      state.score++;
    }
  }

  // 게임 헤더 UI 즉시 갱신
  updateGameHeader();

  // localStorage 즉시 저장
  saveProgress();

  const currentScore = state.isRetryMode ? state.retryScore : state.score;
  const currentHearts = state.isRetryMode ? state.retryHearts : state.hearts;
  console.log(`[Q${idx}] isCorrect=${isCorrect}, score=${currentScore}, hearts=${currentHearts}`);
}

function updateGameHeader() {
  const total = getTotalQuestions();
  const idx = getCurrentIndex();
  const pct = total > 0 ? ((idx + 1) / total) * 100 : 0;
  const currentHearts = state.isRetryMode ? state.retryHearts : state.hearts;

  $('game-progress').style.width = pct + '%';
  $('hearts-display').textContent = '❤️'.repeat(Math.max(0, currentHearts)) + '🖤'.repeat(Math.max(0, total - currentHearts));

  if (state.currentLevel === 7 && !state.isRetryMode) {
    $('mission-hearts').textContent = '❤️'.repeat(Math.max(0, currentHearts)) + '🖤'.repeat(Math.max(0, total - currentHearts));
  }
}

/* ===== Check Answer ===== */
function checkAnswer(userAnswer, correctAnswer) {
  const isCorrect = userAnswer === correctAnswer;
  const q = getCurrentQuestion();
  processAnswer(isCorrect, q.explanation, q.prompt, userAnswer, correctAnswer);
  showFeedbackOverlay(isCorrect, q.explanation, q.answer);
}

/* ===== Show Feedback Overlay ===== */
function showFeedbackOverlay(isCorrect, explanation, correctAns) {
  const icon = isCorrect ? '✅' : '❌';
  const title = isCorrect ? '맞아요!' : '다시 생각해 보세요';
  const msg = isCorrect
    ? explanation
    : `${explanation}<br><br>정답: <b>${correctAns}</b>`;

  $('fb-icon').textContent = icon;
  $('fb-title').textContent = title;
  $('fb-message').innerHTML = msg;
  $('fb-btn').textContent = isCorrect ? '다음' : '계속';
  $('fb-btn').onclick = nextQuestion;

  $('feedback-overlay').classList.add('active');

  if (isCorrect) spawnParticles();

  // Release processing lock
  state.isProcessing = false;
}

function nextQuestion() {
  if (state.isProcessing) return;
  state.isProcessing = true;

  $('feedback-overlay').classList.remove('active');

  if (state.isRetryMode) {
    // 오답 다시 풀기 모드
    state.retryCurrentQuestion++;
    const total = state.retryQuestions.length;
    console.log(`[nextQuestion retry] retryCurrentQuestion=${state.retryCurrentQuestion}, retryHearts=${state.retryHearts}, retryScore=${state.retryScore}`);

    if (state.retryHearts <= 0) {
      console.log('[nextQuestion retry] Hearts depleted in retry mode');
      showRetryResult(false);
      return;
    }

    if (state.retryCurrentQuestion >= total) {
      console.log('[nextQuestion retry] All retry questions answered');
      showRetryResult(true);
      return;
    }

    renderQuestion();
    setTimeout(() => { state.isProcessing = false; }, 300);
    return;
  }

  // 일반 학습 모드
  state.currentQuestion++;
  const qList = QUESTIONS[state.currentLevel];

  console.log(`[nextQuestion] currentQuestion=${state.currentQuestion}, hearts=${state.hearts}, score=${state.score}`);

  if (state.hearts <= 0) {
    console.log('[nextQuestion] Hearts depleted, showing result (failed)');
    showResult(false);
    return;
  }

  if (state.currentQuestion >= qList.length) {
    console.log('[nextQuestion] All questions answered, showing result (completed)');
    showResult(true);
    return;
  }

  if (state.currentLevel === 7) {
    renderMission();
  } else {
    renderQuestion();
  }

  // Prevent ghost clicks for 300ms after rendering new buttons
  setTimeout(() => { state.isProcessing = false; }, 300);
}

/* ===== Mission Screen ===== */
function renderMission() {
  const qList = QUESTIONS[7];
  const q = qList[state.currentQuestion];

  const pct = ((state.currentQuestion) / qList.length) * 100;
  $('mission-progress').style.width = pct + '%';
  $('mission-hearts').textContent = '❤️'.repeat(Math.max(0, state.hearts)) + '🖤'.repeat(Math.max(0, qList.length - state.hearts));

  $('scene-bg').textContent = q.scene;
  $('dialogue-text').textContent = q.prompt;
  $('mission-instruction').textContent = q.instruction;

  const container = $('mission-answers');
  container.innerHTML = '';
  const shuffled = shuffle(q.choices);
  shuffled.forEach(choice => {
    const btn = document.createElement('button');
    btn.className = 'mission-btn';
    btn.textContent = choice;
    btn.onclick = () => handleMissionChoice(choice, btn, q);
    container.appendChild(btn);
  });
}

function handleMissionChoice(choice, btnEl, q) {
  if (state.isProcessing) return;
  state.isProcessing = true;

  const isCorrect = choice === q.answer;
  document.querySelectorAll('.mission-btn').forEach(btn => {
    btn.disabled = true;
    if (btn.textContent === q.answer) btn.classList.add('correct');
  });
  if (!isCorrect) btnEl.classList.add('wrong');

  // 즉시 데이터 처리 및 UI 갱신
  processAnswer(isCorrect, q.explanation, q.prompt, choice, q.answer);

  // 600ms 후 오버레이 표시
  setTimeout(() => {
    showFeedbackOverlay(isCorrect, q.explanation, q.answer);
  }, 600);
}

/* ===== Safe set text ===== */
function setText(id, text) {
  const el = $(id);
  if (el) el.textContent = text;
}

function setDisplay(id, display) {
  const el = $(id);
  if (el) el.style.display = display;
}

/* ===== Results ===== */
function showResult(completed) {
  showScreen('result-screen');
  const qList = QUESTIONS[state.currentLevel];
  const total = qList ? qList.length : 0;
  if (total === 0) {
    goHome();
    return;
  }
  const correct = Math.min(state.score, total);
  const wrong = Math.max(0, total - correct);
  const rate = total > 0 ? Math.round((correct / total) * 100) : 0;

  console.log(`[showResult] completed=${completed}, score=${state.score}, total=${total}, correct=${correct}, wrong=${wrong}, rate=${rate}%`);

  // 1. 통계를 가장 먼저 업데이트 (saveProgress 실패해도 보여야 함)
  setText('result-level', `Level ${state.currentLevel}`);
  setText('result-correct', correct);
  setText('result-wrong', wrong);
  setText('result-rate', rate + '%');

  if (completed && rate === 100) {
    // 정답률 100%: 다음 미션 가능
    setText('result-title', '미션 완료!');
    setText('result-stars', '⭐⭐⭐');

    const earned = correct * 10;
    setText('result-coins', '+' + earned);
    state.totalCoins += earned;

    state.levelProgress[state.currentLevel] = {
      completed: true,
      stars: 3,
      date: Date.now()
    };
    setDisplay('reward-badge', 'inline-flex');
    const badgeEl = $('reward-badge');
    if (badgeEl) {
      const badgeText = badgeEl.querySelector('span:last-child');
      if (badgeText) badgeText.textContent = `Level ${state.currentLevel} 배지 획득!`;
    }
  } else if (completed && rate < 100) {
    // 완료했지만 100% 아님: 오답 다시 풀기 유도
    setText('result-title', '학습 완료! 정답율 100%에 도전해 보세요');
    let stars = 1;
    if (rate >= 60) stars = 2;
    setText('result-stars', '⭐'.repeat(stars) + '☆'.repeat(3 - stars));
    setText('result-coins', '+' + (correct * 10));
    state.totalCoins += correct * 10;
    setDisplay('reward-badge', 'none');
  } else {
    // 하트 소진
    setText('result-title', '하트가 모두 소진됐어요');
    setText('result-stars', '💔');
    setText('result-coins', '+0');
    setDisplay('reward-badge', 'none');
  }

  // 저장은 통계 업데이트 후에 시도 (실패해도 UI에는 영향 없음)
  try {
    saveProgress();
  } catch (e) {
    console.warn('진도 저장 실패:', e);
  }

  // Configure buttons based on result
  const primaryBtn = $('result-btn-primary');
  const secondaryBtn = $('result-btn-secondary');

  const currentLevelId = state.currentLevel;

  if (completed && rate === 100) {
    // 정답률 100%: 다음 미션
    if (primaryBtn) {
      primaryBtn.textContent = '다음 미션';
      primaryBtn.onclick = nextLevel;
    }
    if (secondaryBtn) {
      secondaryBtn.textContent = '오답 보기';
      secondaryBtn.onclick = () => goToReview(currentLevelId);
    }
  } else if (completed && rate < 100) {
    // 완료했지만 100% 아님: 오답 다시 풀기
    if (primaryBtn) {
      primaryBtn.textContent = '오답 다시 풀기';
      primaryBtn.onclick = startRetryMode;
    }
    if (secondaryBtn) {
      secondaryBtn.textContent = '오답 보기';
      secondaryBtn.onclick = () => goToReview(currentLevelId);
    }
  } else {
    // 하트 소진
    if (primaryBtn) {
      primaryBtn.textContent = '다시 도전';
      primaryBtn.onclick = () => startLevel(state.currentLevel);
    }
    if (secondaryBtn) {
      secondaryBtn.textContent = '오답 다시 풀기';
      secondaryBtn.onclick = startRetryMode;
    }
  }
}

function nextLevel() {
  const nextId = state.currentLevel + 1;
  if (!QUESTIONS[nextId]) {
    goHome();
    return;
  }

  // 이전 레벨이 정답률 100%로 완료되었는지 확인
  const prevProg = state.levelProgress[state.currentLevel];
  if (!prevProg || !prevProg.completed) {
    // 결과 화면에서 버튼을 이미 분기했으므로, 이건 레벨 선택 화면 등에서 직접 누를 때
    startLevel(nextId); // startLevel 내부에서 locked 처리됨
    return;
  }

  startLevel(nextId);
}

/* ===== Start Retry Mode (오답 다시 풀기) ===== */
function startRetryMode() {
  const wrongQs = getWrongQuestionsForLevel(state.currentLevel);
  if (wrongQs.length === 0) {
    alert('복습할 오답이 없어요!');
    return;
  }

  state.isRetryMode = true;
  state.retryQuestions = wrongQs;
  state.retryCurrentQuestion = 0;
  state.retryScore = 0;
  state.retryHearts = wrongQs.length;
  state.isProcessing = false;

  showScreen('game-screen');
  renderQuestion();
}

function getWrongQuestionsForLevel(levelId) {
  const wrongPrompts = new Set();
  state.wrongAnswers
    .filter(w => w.level === levelId)
    .forEach(w => wrongPrompts.add(w.question));

  const allQs = QUESTIONS[levelId] || [];
  return allQs.filter(q => wrongPrompts.has(q.prompt));
}

/* ===== Show Retry Result ===== */
function showRetryResult(completed) {
  showScreen('result-screen');
  const total = state.retryQuestions.length;
  const correct = Math.min(state.retryScore, total);
  const wrong = Math.max(0, total - correct);
  const rate = total > 0 ? Math.round((correct / total) * 100) : 0;

  console.log(`[showRetryResult] completed=${completed}, retryScore=${state.retryScore}, total=${total}, correct=${correct}, wrong=${wrong}, rate=${rate}%`);

  // 통계 업데이트
  setText('result-level', `Level ${state.currentLevel} 오답 복습`);
  setText('result-correct', correct);
  setText('result-wrong', wrong);
  setText('result-rate', rate + '%');

  if (completed && rate === 100) {
    // 오답 다시 풀기 100% 달성!
    setText('result-title', '축하해요! 다음 미션에 도전이 가능합니다');
    setText('result-stars', '⭐⭐⭐');
    setText('result-coins', '+' + (correct * 10));
    state.totalCoins += correct * 10;
    setDisplay('reward-badge', 'inline-flex');
    const badgeEl = $('reward-badge');
    if (badgeEl) {
      const badgeText = badgeEl.querySelector('span:last-child');
      if (badgeText) badgeText.textContent = `Level ${state.currentLevel} 배지 획득!`;
    }

    // 레벨 완료 처리
    state.levelProgress[state.currentLevel] = {
      completed: true,
      stars: 3,
      date: Date.now()
    };

    // 다음 미션 버튼 활성화
    const retryPrimary = $('result-btn-primary');
    const retrySecondary = $('result-btn-secondary');
    if (retryPrimary) {
      retryPrimary.textContent = '다음 미션';
      retryPrimary.onclick = nextLevel;
    }
    if (retrySecondary) {
      retrySecondary.textContent = '오답 보기';
      retrySecondary.onclick = () => goToReview(state.currentLevel);
    }
  } else if (completed && rate < 100) {
    // 완료했지만 100% 아님
    setText('result-title', '조금 더 연습해 볼까요?');
    let stars = 1;
    if (rate >= 60) stars = 2;
    setText('result-stars', '⭐'.repeat(stars) + '☆'.repeat(3 - stars));
    setText('result-coins', '+0');
    setDisplay('reward-badge', 'none');

    const retryPrimary = $('result-btn-primary');
    const retrySecondary = $('result-btn-secondary');
    if (retryPrimary) {
      retryPrimary.textContent = '오답 다시 풀기';
      retryPrimary.onclick = startRetryMode;
    }
    if (retrySecondary) {
      retrySecondary.textContent = '오답 보기';
      retrySecondary.onclick = () => goToReview(state.currentLevel);
    }
  } else {
    // 하트 소진
    setText('result-title', '하트가 모두 소진됐어요');
    setText('result-stars', '💔');
    setText('result-coins', '+0');
    setDisplay('reward-badge', 'none');

    const retryPrimary = $('result-btn-primary');
    const retrySecondary = $('result-btn-secondary');
    if (retryPrimary) {
      retryPrimary.textContent = '오답 다시 풀기';
      retryPrimary.onclick = startRetryMode;
    }
    if (retrySecondary) {
      retrySecondary.textContent = '오답 보기';
      retrySecondary.onclick = () => goToReview(state.currentLevel);
    }
  }

  try {
    saveProgress();
  } catch (e) {
    console.warn('진도 저장 실패:', e);
  }
}

/* ===== Review ===== */
function renderReview(levelFilter = null) {
  const list = $('review-list');

  let filtered = [...state.wrongAnswers].reverse();
  if (levelFilter !== null) {
    filtered = filtered.filter(w => w.level === levelFilter);
  }

  if (filtered.length === 0) {
    list.innerHTML = `
      <div class="empty-review">
        <p>복습할 문제가 없어요!</p>
        <p>학습을 먼저 진행해 보세요.</p>
      </div>`;
    return;
  }

  list.innerHTML = '';
  // Deduplicate by question + correctAnswer, keep latest
  const seen = new Set();
  const unique = [];
  filtered.forEach(item => {
    const key = item.question + '||' + item.correctAnswer;
    if (!seen.has(key)) {
      seen.add(key);
      unique.push(item);
    }
  });
  const items = unique.slice(0, 10);
  items.forEach(item => {
    const div = document.createElement('div');
    div.className = 'review-item';
    div.innerHTML = `
      <div class="review-q">${item.question}</div>
      <div class="review-a">
        <span class="label">내 답:</span> ${item.userAnswer}<br>
        <span class="correct-ans">정답:</span> ${item.correctAnswer}<br>
        <small>${item.explanation}</small>
      </div>
    `;
    list.appendChild(div);
  });
}

/* ===== Words Screen ===== */
function switchTab(tab, el) {
  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
  if (el) el.classList.add('active');
  renderWords(tab);
}

function renderWords(type) {
  const container = $('words-list');
  container.innerHTML = '';
  WORDS[type].forEach(w => {
    const card = document.createElement('div');
    card.className = 'word-card';
    card.innerHTML = `
      <div class="word-ko">${w.ko}</div>
      <div class="word-en">${w.en}</div>
      <div class="word-ex">${w.ex}</div>
    `;
    container.appendChild(card);
  });
}

/* ===== Daily Quote ===== */
const QUOTES = [
  { text: '"같이 해 보자!"', by: '마루' },
  { text: '"천천히 말해 봐요!"', by: '누리' },
  { text: '"오늘도 화이팅!"', by: '마루' },
  { text: '"조금씩 하면 돼요!"', by: '누리' }
];

function updateDailyQuote() {
  const idx = Math.floor(Math.random() * QUOTES.length);
  $('daily-quote-text').textContent = QUOTES[idx].text;
  document.querySelector('.quote-by').textContent = '- ' + QUOTES[idx].by;
}

/* ===== Quit Modal ===== */
function confirmQuit() {
  $('quit-modal').classList.add('active');
}
function hideQuitModal() {
  $('quit-modal').classList.remove('active');
}
function quitGame() {
  hideQuitModal();
  if (state.isRetryMode) {
    goBackFromRetry();
  } else {
    goHome();
  }
}

function goBackFromRetry() {
  state.isRetryMode = false;
  state.isProcessing = false;
  const qList = QUESTIONS[state.currentLevel];
  const completed = state.hearts > 0 && state.currentQuestion >= qList.length;
  showResult(completed);
}

/* ===== Particles ===== */
function spawnParticles() {
  const icons = ['⭐', '✨', '🎉', '💖', '🌟'];
  for (let i = 0; i < 12; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.textContent = icons[Math.floor(Math.random() * icons.length)];
    p.style.left = Math.random() * 100 + 'vw';
    p.style.top = '-20px';
    p.style.fontSize = (Math.random() * 1.5 + 1) + 'rem';
    p.style.animationDuration = (Math.random() * 1.5 + 1.5) + 's';
    document.body.appendChild(p);
    setTimeout(() => p.remove(), 3000);
  }
}

/* ===== Init ===== */
window.addEventListener('DOMContentLoaded', () => {
  loadProgress();

  // Loading sequence
  setTimeout(() => {
    showScreen('home-screen');
    updateDailyQuote();
  }, 2200);
});
