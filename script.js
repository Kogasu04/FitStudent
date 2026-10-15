'use strict';

const STORAGE_KEY = 'fitstudent-v2';
const WATER_GOAL = 2000;
const WATER_STEP = 250;

const BRAND = window.FIT_BRAND || {};

const programs = {
    back: {
        title: {
            ru: 'Тренировка для спины',
            en: 'Back-friendly routine'
        },
        tip: {
            ru: {
                title: 'Разомнись после учёбы',
                text: 'Вставай и мягко двигайся каждые 30–60 минут. Не делай резких движений через боль; если дискомфорт сохраняется, обратись к специалисту.'
            },
            en: {
                title: 'Move after study time',
                text: 'Stand up and move gently every 30–60 minutes. Avoid pushing through pain; if discomfort persists, consult a qualified professional.'
            }
        },
        exercises: []
    },
    cardio: {
        title: {
            ru: 'Кардио и общий тонус',
            en: 'Cardio & movement'
        },
        tip: {
            ru: {
                title: 'Выбирай свой темп',
                text: 'Кардио не обязано быть изнурительным. Начни с лёгкого темпа, при необходимости делай паузы и прекращай упражнение при боли, головокружении или необычной одышке.'
            },
            en: {
                title: 'Choose your own pace',
                text: 'Cardio does not need to be exhausting. Start gently, take breaks when needed, and stop if you feel pain, dizziness, or unusual shortness of breath.'
            }
        },
        exercises: []
    },
    strength: {
        title: {
            ru: 'Базовая силовая тренировка',
            en: 'Strength basics'
        },
        tip: {
            ru: {
                title: 'Техника важнее веса',
                text: 'Начинай с лёгкого варианта упражнения и делай повторения под контролем. Оставляй время на восстановление; при боли упражнение нужно остановить.'
            },
            en: {
                title: 'Form before load',
                text: 'Start with an easier variation and use controlled repetitions. Allow time to recover, and stop an exercise if it causes pain.'
            }
        },
        exercises: []
    }
};

const translations = {
    ru: {
        brandTagline: 'Тренировки · вода · прогресс',
        glassCaption: 'Твой стакан',
        hintButton: 'Подсказка',
        frameOne: 'Исходное положение',
        frameTwo: 'Движение',
        hintLabel: 'Как выполнять',
        online: 'Готов к работе',
        offline: 'Офлайн-режим',
        language: 'Язык',
        dailyTitle: 'ТВОЙ ПЛАН НА СЕГОДНЯ',
        welcome: 'Небольшой шаг — уже прогресс.',
        welcomeCopy: 'Выбери программу, отмечай упражнения и следи за водой. Данные сохраняются на этом устройстве.',
        statWorkouts: 'Завершено тренировок в этом месяце',
        statWater: 'Выпито воды сегодня',
        statProgress: 'Выполнено в выбранной программе',
        statStreak: 'Дней подряд с тренировкой',
        chooseEyebrow: 'ПРОГРАММА',
        chooseTitle: 'Какова твоя цель?',
        goalBack: 'Спина и офис',
        goalBackDesc: 'Мягкая разминка после учёбы',
        goalCardio: 'Кардио и тонус',
        goalCardioDesc: 'Двигайся в комфортном темпе',
        goalStrength: 'Сила и мышцы',
        goalStrengthDesc: 'Базовые силовые упражнения',
        todayWorkout: 'СЕГОДНЯ',
        dailySelectionNote: 'Каждый день выбираются 4 упражнения из каталога. Завтра набор обновится.',
        checkHint: 'Отмечай упражнение после выполнения. Отметки сохраняются автоматически.',
        resetWorkout: 'Сбросить отметки',
        waterEyebrow: 'ПОЛЕЗНАЯ ПРИВЫЧКА',
        waterTitle: 'Вода сегодня',
        waterNote: 'Условная цель — 2 литра. Потребность зависит от активности, погоды и состояния здоровья.',
        undoWater: 'Отменить последний стакан',
        resetWater: 'Сбросить',
        tipEyebrow: 'НЕБОЛЬШОЙ СОВЕТ',
        disclaimer: 'Подсказки носят общий информационный характер и не заменяют рекомендации специалиста.',
        privacyTitle: 'Твои данные — твои',
        privacyCopy: 'Всё хранится локально в браузере. Аккаунт не нужен. Очистка данных браузера может удалить прогресс.',
        footerText: 'Простой фитнес-помощник для студенческих будней',
        clearData: 'Удалить все мои данные',
        waterButton: '+ 250 мл',
        waterDone: 'Цель отмечена ✓',
        waterUndo: 'Стакан отменён',
        waterReset: 'Счётчик воды сброшен',
        workoutReset: 'Отметки тренировки сброшены',
        allDoneTitle: 'Тренировка завершена!',
        allDoneText: 'Все упражнения отмечены. Отличная работа!',
        waterGoalTitle: 'Отлично!',
        waterGoalText: 'Ты достиг условной цели воды на сегодня.',
        confirmReset: 'Сбросить отметки текущей тренировки?',
        confirmWater: 'Сбросить количество воды за сегодня?',
        confirmClear: 'Удалить весь сохранённый прогресс и настройки? Это действие нельзя отменить.',
        dataCleared: 'Локальные данные удалены',
        of: 'из',
        exercises: 'упражнений',
        waterMl: 'мл',
        streakDays: 'дн.',
        confirmTitle: 'Подтверждение',
        confirmOk: 'Подтвердить',
        confirmCancel: 'Отмена',
        catalogError: 'Не удалось загрузить упражнения. Проверьте файл exercise-bank.js и обновите страницу.',
        ok: 'Окей'
    },
    en: {
        brandTagline: 'Workouts · water · progress',
        glassCaption: 'Your glass',
        hintButton: 'How to',
        frameOne: 'Start position',
        frameTwo: 'Movement',
        hintLabel: 'How to do it',
        online: 'Ready to use',
        offline: 'Offline mode',
        language: 'Language',
        dailyTitle: 'YOUR PLAN FOR TODAY',
        welcome: 'Small steps are still progress.',
        welcomeCopy: 'Choose a program, check off exercises, and track water. Your data stays on this device.',
        statWorkouts: 'Workouts completed this month',
        statWater: 'Water logged today',
        statProgress: 'Completed in selected program',
        statStreak: 'Consecutive days with a workout',
        chooseEyebrow: 'PROGRAM',
        chooseTitle: 'What is your goal?',
        goalBack: 'Back & desk break',
        goalBackDesc: 'Gentle movement after studying',
        goalCardio: 'Cardio & energy',
        goalCardioDesc: 'Move at a comfortable pace',
        goalStrength: 'Strength basics',
        goalStrengthDesc: 'Simple strength exercises',
        todayWorkout: 'TODAY',
        dailySelectionNote: 'Four exercises are selected from the catalog each day. The set updates tomorrow.',
        checkHint: 'Check an exercise when you finish. Your progress saves automatically.',
        resetWorkout: 'Reset checkmarks',
        waterEyebrow: 'A HEALTHY HABIT',
        waterTitle: 'Water today',
        waterNote: 'The 2-liter target is only a general guide. Needs vary with activity, weather, and health.',
        undoWater: 'Undo last glass',
        resetWater: 'Reset',
        tipEyebrow: 'A SMALL TIP',
        disclaimer: 'Tips are general information and do not replace professional advice.',
        privacyTitle: 'Your data belongs to you',
        privacyCopy: 'Everything is stored locally in this browser. No account is needed. Clearing browser data may erase your progress.',
        footerText: 'A simple fitness helper for student life',
        clearData: 'Delete all my data',
        waterButton: '+ 250 ml',
        waterDone: 'Goal reached ✓',
        waterUndo: 'Last glass removed',
        waterReset: 'Water counter reset',
        workoutReset: 'Workout checkmarks reset',
        allDoneTitle: 'Workout complete!',
        allDoneText: 'All exercises are checked. Nice work!',
        waterGoalTitle: 'Well done!',
        waterGoalText: 'You reached today’s general water target.',
        confirmReset: 'Reset checkmarks for this workout?',
        confirmWater: 'Reset today’s water amount?',
        confirmClear: 'Delete all saved progress and settings? This cannot be undone.',
        dataCleared: 'Local data deleted',
        of: 'of',
        exercises: 'exercises',
        waterMl: 'ml',
        streakDays: 'days',
        confirmTitle: 'Confirm',
        confirmOk: 'Confirm',
        confirmCancel: 'Cancel',
        catalogError: 'Could not load exercises. Check exercise-bank.js and reload the page.',
        ok: 'Okay'
    }
};

function localDateKey(date = new Date()) {
    return `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')}`;
}

function previousDateKey(dateKey) {
    const d = new Date(dateKey + 'T00:00:00');
    d.setDate(d.getDate() - 1);
    return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
}

function exercisePool(goal) {
    const base = window.FIT_BASE_EXERCISES?.[goal] || [];
    const extra = window.FIT_EXTRA_EXERCISES?.[goal] || [];
    return [...base, ...extra];
}

function stableHash(value) {
    let hash = 2166136261;
    for (let i = 0; i < value.length; i++) {
        hash ^= value.charCodeAt(i);
        hash = Math.imul(hash, 16777619);
    }
    return hash >>> 0;
}

function pickDailyExercises(pool, dateKey, goal, count = 4, excludeIds = []) {
    if (!pool.length) return [];
    const excludeSet = new Set(excludeIds);
    const filtered = pool.filter(ex => !excludeSet.has(ex.id));
    const source = filtered.length >= count ? filtered : pool;
    return [...source]
        .sort((a, b) => stableHash(`${dateKey}|${goal}|${a.id}`) - stableHash(`${dateKey}|${goal}|${b.id}`))
        .slice(0, Math.min(count, source.length));
}

function refreshDailyExercises(dateKey = localDateKey()) {
    let anyEmpty = false;
    const yesterday = previousDateKey(dateKey);
    const yesterdayRecord = state?.history?.[yesterday];

    for (const goal of Object.keys(programs)) {
        const pool = exercisePool(goal);
        if (!pool.length) anyEmpty = true;

        const excludeIds = yesterdayRecord?.exercises?.[goal] || [];
        programs[goal].exercises = pickDailyExercises(pool, dateKey, goal, 4, excludeIds);
    }
    if (anyEmpty) console.warn('[FITСтудент] Каталог упражнений пуст или не загрузился.');
}

function monthPrefix(date = new Date()) {
    return `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,'0')}`;
}

function freshState() {
    return {
        language: 'ru',
        selectedGoal: 'back',
        daily: {
            date: localDateKey(),
            water: 0,
            checks: {
                back: [],
                cardio: [],
                strength: []
            },
            completedPrograms: [],
            celebrated: {
                water: false,
                workouts: {
                    back: false,
                    cardio: false,
                    strength: false
                }
            }
        },
        history: {}
    };
}

function loadState() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (!raw) return freshState();
        const saved = JSON.parse(raw);
        const base = freshState();
        const state = {
            ...base,
            ...saved,
            daily: {
                ...base.daily,
                ...(saved.daily || {})
            },
            history: saved.history || {}
        };
        if (!translations[state.language]) state.language = 'ru';
        if (!programs[state.selectedGoal]) state.selectedGoal = 'back';
        for (const key of Object.keys(programs)) {
            if (!Array.isArray(state.daily.checks[key])) state.daily.checks[key] = [];
        }
        state.daily.water = Math.max(0, Math.min(WATER_GOAL, Number(state.daily.water) || 0));
        if (!Array.isArray(state.daily.completedPrograms)) state.daily.completedPrograms = [];
        if (!state.daily.celebrated || typeof state.daily.celebrated !== 'object') {
            state.daily.celebrated = {
                water: false,
                workouts: {
                    back: false,
                    cardio: false,
                    strength: false
                }
            };
        }
        if (!state.daily.celebrated.workouts) {
            state.daily.celebrated.workouts = {
                back: false,
                cardio: false,
                strength: false
            };
        }
        return state;
    } catch (error) {
        console.warn('Could not load saved FITStudent data:', error);
        return freshState();
    }
}

let state = loadState();
let waterCelebrated = state.daily.celebrated?.water ?? (state.daily.water >= WATER_GOAL);
let workoutCelebrated = state.daily.celebrated?.workouts?.[state.selectedGoal] ?? false;
let renderToken = 0;
let previousValues = {
    'stat-workouts': null,
    'stat-water': null,
    'stat-progress': null,
    'stat-streak': null
};
let previousWaterPercent = 0;

rolloverDay();
refreshDailyExercises(state.daily.date);

for (const key of Object.keys(programs)) {
    state.daily.checks[key] = state.daily.checks[key]
        .filter(id => programs[key].exercises.some(ex => ex.id === id));
}

const $ = id => document.getElementById(id);
const lang = () => state.language;
const t = key => translations[lang()][key] || key;
const formatNumber = n => new Intl.NumberFormat(lang() === 'ru' ? 'ru-RU' : 'en-US').format(n);

function applyBrand() {
    if (!BRAND || !Object.keys(BRAND).length) return;
    if (BRAND.themeColor) {
        let meta = document.querySelector('meta[name="theme-color"]');
        if (!meta) {
            meta = document.createElement('meta');
            meta.name = 'theme-color';
            document.head.appendChild(meta);
        }
        meta.content = BRAND.themeColor;
        document.documentElement.style.setProperty('--blue', BRAND.themeColor);
    }
    if (BRAND.bgColor) document.documentElement.style.setProperty('--bg', BRAND.bgColor);
    const logoWrap = $('brand-logo');
    const logoImg = $('brand-logo-img');
    const fallback = $('brand-logo-fallback');
    if (fallback && BRAND.logoFallback) fallback.textContent = BRAND.logoFallback;
    if (logoWrap && BRAND.logoSize) {
        logoWrap.style.width = BRAND.logoSize + 'px';
        logoWrap.style.height = BRAND.logoSize + 'px';
    }
    if (logoImg && BRAND.logoUrl) {
        logoImg.src = BRAND.logoUrl;
        logoImg.addEventListener('error', () => logoWrap?.classList.add('logo-failed'), {
            once: true
        });
        logoImg.addEventListener('load', () => logoWrap?.classList.remove('logo-failed'), {
            once: true
        });
    } else {
        logoWrap?.classList.add('logo-failed');
    }
    const nameEl = $('brand-name-text');
    const accentEl = $('brand-name-accent');
    if (nameEl && BRAND.brandName) nameEl.firstChild.textContent = BRAND.brandName;
    if (accentEl && BRAND.brandNameAccent) accentEl.textContent = BRAND.brandNameAccent;
}

function ensureBackdrop(id, className = '') {
    let backdrop = document.getElementById(id);
    if (backdrop) return backdrop;
    backdrop = document.createElement('div');
    backdrop.id = id;
    backdrop.className = 'modal-backdrop ' + className;
    backdrop.setAttribute('role', 'dialog');
    backdrop.setAttribute('aria-modal', 'true');
    document.body.appendChild(backdrop);
    return backdrop;
}

let modalResolver = null;

function ensureConfirmModal() {
    const backdrop = ensureBackdrop('confirm-modal');
    if (backdrop.dataset.ready) return backdrop;
    backdrop.innerHTML = `
    <div class="modal-card" role="document">
      <h3 id="confirm-title"></h3>
      <p id="confirm-message"></p>
      <div class="modal-actions">
        <button type="button" data-action="cancel" id="confirm-cancel"></button>
        <button type="button" data-action="ok" id="confirm-ok" class="danger"></button>
      </div>
    </div>`;
    backdrop.dataset.ready = '1';
    backdrop.addEventListener('click', (e) => {
        const action = e.target.dataset?.action;
        if (action === 'ok') closeConfirm(true);
        else if (action === 'cancel' || e.target === backdrop) closeConfirm(false);
    });
    document.addEventListener('keydown', (e) => {
        if (!backdrop.classList.contains('show')) return;
        if (e.key === 'Escape') closeConfirm(false);
        if (e.key === 'Enter') closeConfirm(true);
    });
    return backdrop;
}

function showConfirm(message, onConfirm, opts = {}) {
    const backdrop = ensureConfirmModal();
    backdrop.querySelector('#confirm-title').textContent = opts.title || t('confirmTitle');
    backdrop.querySelector('#confirm-message').textContent = message;
    backdrop.querySelector('#confirm-ok').textContent = opts.okText || t('confirmOk');
    backdrop.querySelector('#confirm-cancel').textContent = opts.cancelText || t('confirmCancel');
    backdrop.querySelector('#confirm-ok').className = opts.danger === false ? 'primary' : 'danger';
    modalResolver = (result) => {
        if (result) onConfirm();
    };
    backdrop.classList.add('show');
    setTimeout(() => backdrop.querySelector('#confirm-ok').focus(), 80);
}

function closeConfirm(result) {
    const backdrop = document.getElementById('confirm-modal');
    if (!backdrop) return;
    backdrop.classList.remove('show');
    const resolver = modalResolver;
    modalResolver = null;
    if (resolver) resolver(result);
}

function ensureHintModal() {
    const backdrop = ensureBackdrop('hint-modal', 'exercise-modal');
    if (backdrop.dataset.ready) return backdrop;
    backdrop.innerHTML = `
    <div class="modal-card" role="document">
      <div class="exercise-modal-head">
        <div class="exercise-modal-icon" id="hint-modal-icon"></div>
        <div>
          <h3 class="exercise-modal-title" id="hint-modal-title"></h3>
          <p class="exercise-modal-dose" id="hint-modal-dose"></p>
        </div>
      </div>
      <div class="exercise-modal-body" id="hint-modal-body"></div>
      <div class="modal-actions">
        <button type="button" class="primary" data-action="ok" id="hint-modal-ok"></button>
      </div>
    </div>`;
    backdrop.dataset.ready = '1';
    backdrop.addEventListener('click', (e) => {
        if (e.target.dataset?.action === 'ok' || e.target === backdrop) closeHintModal();
    });
    document.addEventListener('keydown', (e) => {
        if (!backdrop.classList.contains('show')) return;
        if (e.key === 'Escape' || e.key === 'Enter') closeHintModal();
    });
    return backdrop;
}

function openHintModal(ex) {
    const backdrop = ensureHintModal();
    backdrop.querySelector('#hint-modal-icon').textContent = ex.icon || '🧘';
    backdrop.querySelector('#hint-modal-title').textContent = ex.name[lang()];
    backdrop.querySelector('#hint-modal-dose').textContent = ex.dose[lang()];
    const body = backdrop.querySelector('#hint-modal-body');
    body.innerHTML = `
    <div class="two-frame-animation">
      <div class="pose-frame"><span class="frame-number">1</span>${exerciseFrame(ex.frameId || ex.id, false)}<span class="frame-label">${t('frameOne')}</span></div>
      <span class="frame-arrow" aria-hidden="true">→</span>
      <div class="pose-frame"><span class="frame-number">2</span>${exerciseFrame(ex.frameId || ex.id, true)}<span class="frame-label">${t('frameTwo')}</span></div>
    </div>
    <p class="hint-instruction">${ex.description[lang()]}</p>
    <p class="hint-safety">⚠ ${ex.safety[lang()]}</p>`;
    backdrop.querySelector('#hint-modal-ok').textContent = t('ok');
    backdrop.classList.add('show');
    setTimeout(() => backdrop.querySelector('#hint-modal-ok').focus(), 90);
}

function closeHintModal() {
    const backdrop = document.getElementById('hint-modal');
    if (!backdrop) return;
    backdrop.classList.remove('show');
}

function saveState() {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (error) {
        showToast('⚠️', lang() === 'ru' ? 'Не удалось сохранить' : 'Could not save', lang() === 'ru' ? 'Проверь свободное место и настройки браузера.' : 'Check browser storage settings and available space.');
    }
}

function applyTranslations() {
    document.documentElement.lang = lang();
    document.title = lang() === 'ru' ? 'FITСтудент — твой фитнес-помощник' : 'FITStudent — your fitness helper';
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (key === 'brandTagline' && BRAND.brandTagline?.[lang()]) {
            el.textContent = BRAND.brandTagline[lang()];
            return;
        }
        if (translations[lang()][key]) el.textContent = translations[lang()][key];
    });
    $('language-select').value = lang();
    $('today-date').textContent = new Intl.DateTimeFormat(lang() === 'ru' ? 'ru-RU' : 'en-US', {
        weekday: 'short',
        day: 'numeric',
        month: 'long'
    }).format(new Date());
    document.querySelectorAll('.goal-card').forEach(btn => {
        const active = btn.dataset.goal === state.selectedGoal;
        btn.classList.toggle('active', active);
        btn.setAttribute('aria-pressed', String(active));
    });
    renderWorkout();
    updateWaterUI(true);
    updateStats(true);
    updateConnectionStatus();
}

function selectGoal(goal) {
    if (!programs[goal] || goal === state.selectedGoal) return;
    state.selectedGoal = goal;
    saveState();
    workoutCelebrated = state.daily.celebrated?.workouts?.[goal] ?? false;
    document.querySelectorAll('.goal-card').forEach(btn => {
        const active = btn.dataset.goal === goal;
        btn.classList.toggle('active', active);
        btn.setAttribute('aria-pressed', String(active));
    });

    const list = $('workout-list');
    list.classList.add('is-switching');
    setTimeout(() => {
        renderWorkout();
        requestAnimationFrame(() => list.classList.remove('is-switching'));
    }, 220);
}

function exerciseFrame(id, second = false) {
    if (window.FIT_ILLUSTRATIONS?.render) {
        return window.FIT_ILLUSTRATIONS.render(id, second);
    }
    return '<div class="pose-missing">?</div>';
}

function renderWorkout() {
    const token = ++renderToken;
    const program = programs[state.selectedGoal];
    const list = $('workout-list');
    $('workout-title').textContent = program.title[lang()];
    list.innerHTML = '';

    if (!program.exercises.length) {
        const li = document.createElement('li');
        li.className = 'empty-state';
        li.textContent = t('catalogError');
        list.append(li);
        $('exercises-count').textContent = `0 ${t('exercises')}`;
        updateWorkoutProgress();
        updateStats();
        updateTip();
        return;
    }

    program.exercises.forEach((ex, index) => {
        const done = state.daily.checks[state.selectedGoal].includes(ex.id);
        const li = document.createElement('li');
        li.className = `workout-item${done ? ' done' : ''}`;
        li.dataset.exId = ex.id;
        li.style.setProperty('--item-delay', `${index * 60}ms`);

        const number = document.createElement('span');
        number.className = 'exercise-number';
        number.textContent = ex.icon;

        const main = document.createElement('div');
        main.className = 'exercise-main';

        const titleRow = document.createElement('div');
        titleRow.className = 'exercise-title-row';

        const name = document.createElement('span');
        name.className = 'exercise-name';
        name.textContent = ex.name[lang()];

        const hintButton = document.createElement('button');
        hintButton.type = 'button';
        hintButton.className = 'hint-toggle';
        hintButton.textContent = `ⓘ ${t('hintButton')}`;
        hintButton.addEventListener('click', () => openHintModal(ex));

        const dose = document.createElement('span');
        dose.className = 'exercise-detail';
        dose.textContent = ex.dose[lang()];

        titleRow.append(name, hintButton);
        main.append(titleRow, dose);

        const check = document.createElement('button');
        check.type = 'button';
        check.className = `check-button${done ? ' checked' : ''}`;
        check.setAttribute('aria-label', `${done ? '✓ ' : ''}${ex.name[lang()]}`);
        check.setAttribute('aria-pressed', String(done));
        check.textContent = done ? '✓' : '';
        check.addEventListener('click', () => toggleExercise(ex.id));

        li.append(number, main, check);
        list.append(li);
    });

    if (token !== renderToken) return;
    $('exercises-count').textContent = `${program.exercises.length} ${t('exercises')}`;
    updateWorkoutProgress();
    updateStats();
    updateTip();
}

function toggleExercise(id) {
    const key = state.selectedGoal,
        checks = state.daily.checks[key];
    const wasComplete = checks.length === programs[key].exercises.length;

    const wasChecked = checks.includes(id);
    state.daily.checks[key] = wasChecked ? checks.filter(x => x !== id) : [...checks, id];

    const complete = state.daily.checks[key].length === programs[key].exercises.length;
    if (complete && !state.daily.completedPrograms.includes(key)) state.daily.completedPrograms.push(key);
    if (!complete) state.daily.completedPrograms = state.daily.completedPrograms.filter(x => x !== key);

    saveState();

    const li = document.querySelector(`.workout-item[data-ex-id="${id}"]`);
    if (li) {
        const nowChecked = !wasChecked;
        li.classList.toggle('done', nowChecked);
        const btn = li.querySelector('.check-button');
        if (btn) {
            btn.classList.toggle('checked', nowChecked);
            btn.setAttribute('aria-pressed', String(nowChecked));
            btn.textContent = nowChecked ? '✓' : '';
        }
    }

    updateWorkoutProgress();
    updateStats();

    if (complete && !wasComplete && !state.daily.celebrated.workouts[key]) {
        state.daily.celebrated.workouts[key] = true;
        workoutCelebrated = true;
        saveState();
        showToast('🎉', t('allDoneTitle'), t('allDoneText'));
    }
    if (!complete) workoutCelebrated = false;
}

function updateWorkoutProgress() {
    const total = programs[state.selectedGoal].exercises.length;
    const done = state.daily.checks[state.selectedGoal].length;
    $('completed-count').textContent = `${done} ${t('of')} ${total}`;
    $('workout-progress').style.width = `${total ? done/total*100 : 0}%`;
    $('workout-progress').parentElement.setAttribute('aria-valuenow', String(done));
}

function updateTip() {
    const tip = programs[state.selectedGoal].tip[lang()];
    $('tip-title').textContent = tip.title;
    $('tip-text').textContent = tip.text;
}

function spawnBubbles() {
    const group = document.getElementById('water-bubbles');
    if (!group) return;
    group.innerHTML = '';
    const fill = document.getElementById('water-glass-fill');
    const height = parseFloat(fill?.getAttribute('height') || '0');
    if (height < 12) return;
    const topY = 153 - height;
    for (let i = 0; i < 6; i++) {
        const cx = 55 + Math.random() * 70;
        const cy = topY + 12 + Math.random() * Math.max(4, height - 16);
        const r = 1.2 + Math.random() * 1.6;
        const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle.setAttribute('cx', cx.toFixed(1));
        circle.setAttribute('cy', cy.toFixed(1));
        circle.setAttribute('r', r.toFixed(1));
        circle.setAttribute('fill', '#eaf7ff');
        circle.setAttribute('opacity', '0');
        circle.style.animationDelay = (i * 0.35).toFixed(2) + 's';
        group.appendChild(circle);
    }
}

function drinkWater() {
    if (state.daily.water >= WATER_GOAL) return;
    const before = state.daily.water;
    state.daily.water = Math.min(WATER_GOAL, state.daily.water + WATER_STEP);

    const btn = $('btn-water');
    btn.classList.remove('ripple');
    void btn.offsetWidth;
    btn.classList.add('ripple');
    setTimeout(() => btn.classList.remove('ripple'), 720);

    saveState();
    updateWaterUI();
    updateStats();
    if (state.daily.water >= WATER_GOAL && before < WATER_GOAL && !state.daily.celebrated.water) {
        state.daily.celebrated.water = true;
        waterCelebrated = true;
        saveState();
        const widget = document.querySelector('.water-widget');
        widget?.classList.add('celebrate');
        setTimeout(() => widget?.classList.remove('celebrate'), 1200);
        showToast('💧', t('waterGoalTitle'), t('waterGoalText'));
    }
}

function undoWater() {
    if (state.daily.water === 0) return;
    state.daily.water = Math.max(0, state.daily.water - WATER_STEP);
    waterCelebrated = false;
    state.daily.celebrated.water = false;
    saveState();
    updateWaterUI();
    updateStats();
    showToast('↩️', t('waterUndo'), '');
}

function resetWater() {
    showConfirm(t('confirmWater'), () => {
        state.daily.water = 0;
        waterCelebrated = false;
        if (state.daily.celebrated) state.daily.celebrated.water = false;
        saveState();
        updateWaterUI();
        updateStats();
        showToast('💧', t('waterReset'), '');
    }, {
        danger: false,
        okText: t('resetWater')
    });
}

function updateWaterUI(silent = false) {
    const amount = state.daily.water;
    const percent = Math.round(amount / WATER_GOAL * 100);
    $('water-text').textContent = `${formatNumber(amount)} / ${formatNumber(WATER_GOAL)} ${t('waterMl')}`;

    const percentEl = $('water-percent');
    percentEl.textContent = `${percent}%`;
    if (!silent && percent !== previousWaterPercent) {
        percentEl.classList.remove('bump');
        void percentEl.offsetWidth;
        percentEl.classList.add('bump');
        setTimeout(() => percentEl.classList.remove('bump'), 500);
    }
    previousWaterPercent = percent;

    $('water-fill').style.width = `${percent}%`;

    const glassFill = $('water-glass-fill');
    const waveGroup = $('water-wave-group');
    if (glassFill) {
        const height = 116 * percent / 100;
        glassFill.setAttribute('y', String(153 - height));
        glassFill.setAttribute('height', String(height));
        if (waveGroup) {
            waveGroup.setAttribute('transform', `translate(0 ${(153 - height).toFixed(2)})`);
            const wave = waveGroup.querySelector('.water-wave');
            if (wave) wave.setAttribute('transform', 'translate(48 0)');
        }
        if (!silent) {
            spawnBubbles();
            setTimeout(spawnBubbles, 400);
        }
    }

    $('water-progress').setAttribute('aria-valuenow', String(amount));
    $('btn-water').textContent = amount >= WATER_GOAL ? t('waterDone') : t('waterButton');
    $('btn-water').disabled = amount >= WATER_GOAL;
    $('undo-water').disabled = amount === 0;
}

function bumpIfChanged(id, newValue) {
    const el = $(id);
    if (!el) return;
    const oldValue = previousValues[id];
    el.textContent = newValue;
    if (oldValue !== null && oldValue !== newValue) {
        el.classList.remove('bump');
        void el.offsetWidth;
        el.classList.add('bump');
        setTimeout(() => el.classList.remove('bump'), 500);
        const card = el.closest('.stat-card');
        if (card) {
            card.classList.remove('pulse');
            void card.offsetWidth;
            card.classList.add('pulse');
            setTimeout(() => card.classList.remove('pulse'), 600);
        }
    }
    previousValues[id] = newValue;
}

function updateStats(silent = false) {
    const month = monthPrefix();
    let completedThisMonth = 0;
    Object.entries(state.history).forEach(([date, record]) => {
        if (date.startsWith(month)) completedThisMonth += (record.completedPrograms || []).length;
    });
    if (state.daily.date.startsWith(month)) completedThisMonth += state.daily.completedPrograms.length;

    const total = programs[state.selectedGoal].exercises.length;
    const done = state.daily.checks[state.selectedGoal].length;
    const progressText = total ? `${Math.round(done/total*100)}%` : '0%';
    const workoutsText = formatNumber(completedThisMonth);
    const waterText = `${formatNumber(state.daily.water)} ${t('waterMl')}`;
    const streakText = `${formatNumber(calculateStreak())} ${t('streakDays')}`;

    if (silent) {
        $('stat-workouts').textContent = workoutsText;
        $('stat-water').textContent = waterText;
        $('stat-progress').textContent = progressText;
        $('stat-streak').textContent = streakText;
        previousValues['stat-workouts'] = workoutsText;
        previousValues['stat-water'] = waterText;
        previousValues['stat-progress'] = progressText;
        previousValues['stat-streak'] = streakText;
        return;
    }

    bumpIfChanged('stat-workouts', workoutsText);
    bumpIfChanged('stat-water', waterText);
    bumpIfChanged('stat-progress', progressText);
    bumpIfChanged('stat-streak', streakText);
}

function calculateStreak() {
    const completedDates = new Set(Object.entries(state.history).filter(([, r]) => (r.completedPrograms || []).length > 0).map(([date]) => date));
    if (state.daily.completedPrograms.length > 0) completedDates.add(state.daily.date);
    let d = new Date();
    let key = localDateKey(d);
    if (!completedDates.has(key)) {
        d.setDate(d.getDate() - 1);
        key = localDateKey(d);
        if (!completedDates.has(key)) return 0;
    }
    let streak = 0;
    while (completedDates.has(key)) {
        streak++;
        d.setDate(d.getDate() - 1);
        key = localDateKey(d);
    }
    return streak;
}

function rolloverDay() {
    const today = localDateKey();
    if (state.daily.date === today) return;

    const previous = state.daily;
    const previousExercises = {};
    for (const goal of Object.keys(programs)) {
        previousExercises[goal] = programs[goal].exercises.map(e => e.id);
    }

    state.history[previous.date] = {
        water: previous.water,
        completedPrograms: [...previous.completedPrograms],
        exercises: previousExercises
    };

    state.daily = {
        date: today,
        water: 0,
        checks: {
            back: [],
            cardio: [],
            strength: []
        },
        completedPrograms: [],
        celebrated: {
            water: false,
            workouts: {
                back: false,
                cardio: false,
                strength: false
            }
        }
    };

    refreshDailyExercises(today);

    waterCelebrated = false;
    workoutCelebrated = false;
    previousWaterPercent = 0;
    saveState();
}

function resetWorkout() {
    showConfirm(t('confirmReset'), () => {
        state.daily.checks[state.selectedGoal] = [];
        state.daily.completedPrograms = state.daily.completedPrograms.filter(x => x !== state.selectedGoal);
        if (state.daily.celebrated?.workouts) state.daily.celebrated.workouts[state.selectedGoal] = false;
        workoutCelebrated = false;
        saveState();
        renderWorkout();
        showToast('↻', t('workoutReset'), '');
    });
}

function clearAllData() {
    showConfirm(t('confirmClear'), () => {
        const language = state.language;
        state = freshState();
        state.language = language;
        waterCelebrated = false;
        workoutCelebrated = false;
        previousWaterPercent = 0;
        previousValues = {
            'stat-workouts': null,
            'stat-water': null,
            'stat-progress': null,
            'stat-streak': null
        };
        saveState();
        applyTranslations();
        showToast('✓', t('dataCleared'), '');
    }, {
        title: t('clearData')
    });
}

function showToast(icon, title, message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    const emoji = document.createElement('span');
    emoji.className = 'toast-icon';
    emoji.textContent = icon;
    const content = document.createElement('div');
    const heading = document.createElement('strong');
    heading.textContent = title;
    content.append(heading);
    if (message) {
        const p = document.createElement('p');
        p.textContent = message;
        content.append(p);
    }
    toast.append(emoji, content);
    $('toast-container').append(toast);
    requestAnimationFrame(() => toast.classList.add('show'));
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 320);
    }, 4000);
}

function updateConnectionStatus() {
    const online = navigator.onLine;
    const el = $('connection-status');
    el.classList.toggle('offline', !online);
    el.lastElementChild.textContent = online ? t('online') : t('offline');
}

$('language-select').addEventListener('change', e => {
    state.language = e.target.value === 'en' ? 'en' : 'ru';
    saveState();
    applyTranslations();
});
document.querySelectorAll('.goal-card').forEach(btn => btn.addEventListener('click', () => selectGoal(btn.dataset.goal)));
$('btn-water').addEventListener('click', drinkWater);
$('undo-water').addEventListener('click', undoWater);
$('reset-water').addEventListener('click', resetWater);
$('reset-workout').addEventListener('click', resetWorkout);
$('clear-data').addEventListener('click', clearAllData);
window.addEventListener('online', updateConnectionStatus);
window.addEventListener('offline', updateConnectionStatus);

function checkDayRollover() {
    if (state.daily.date !== localDateKey()) {
        rolloverDay();
        applyTranslations();
        showToast('🌅', lang() === 'ru' ? 'Новый день' : 'New day',
            lang() === 'ru' ? 'Отметки обновлены. Удачной тренировки!' : 'Checkmarks refreshed. Have a good workout!');
    }
}
window.addEventListener('focus', checkDayRollover);
document.addEventListener('visibilitychange', () => {
    if (!document.hidden) checkDayRollover();
});
setInterval(checkDayRollover, 60 * 1000);

(function init() {
    applyBrand();
    $('year').textContent = new Date().getFullYear();
    applyTranslations();
})();

if ('serviceWorker' in navigator && location.protocol !== 'file:') {
    window.addEventListener('load', () => navigator.serviceWorker.register('./sw.js').catch(err => console.warn('Offline cache registration failed:', err)));
}