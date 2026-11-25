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
        hardBadge: 'Сложное',
        hardHint: 'Сложное упражнение — его можно пропустить, оно всё равно засчитается',
        hardNote: 'Сложное упражнение. Если сейчас не получается или болит — его можно пропустить, оно всё равно засчитается.',
        skipButton: 'Пропустить (засчитается)',
        skippedTitle: 'Упражнение засчитано',
        skippedText: 'Пропущено — отмечено как выполненное.',
        skippedTag: 'пропущено',
        reminderEyebrow: 'ПЕРЕРЫВ',
        reminderTitle: 'Напоминание о разминке',
        reminderText: 'Раз в выбранное время напомню встать, размяться и выпить воды. Работает для любой программы и выключено по умолчанию.',
        reminderEvery: 'Напоминать каждые',
        minutesShort: 'мин',
        reminderTest: 'Показать пример',
        reminderOff: 'Выключено.',
        reminderNext: 'Следующее напоминание около',
        reminderNote: 'Работает, пока сайт открыт (даже в фоновой вкладке). С 22:00 до 08:00 не беспокоит.',
        reminderDenied: 'Уведомления браузера запрещены — напоминания будут появляться на странице.',
        reminderUnsupported: 'Браузер не поддерживает уведомления — напоминания будут появляться на странице.',
        reminderOnTitle: 'Напоминания включены',
        reminderOnText: 'Напомню о перерыве, пока сайт открыт.',
        reminderBreakTitle: 'Пора размяться!',
        reminderToday: 'Сегодня в плане:',
        reminderMsgs: [
            'Встань, потянись и пройдись минуту — спина скажет спасибо.',
            'Оторви взгляд от экрана на 20 секунд и сделай пару наклонов головы.',
            'Перерыв: расправь плечи, глубоко вдохни и выпей воды.',
            'Две минуты движения — и голова снова свежая.'
        ],
        themeDark: 'Тёмная тема',
        levelLabel: 'Уровень',
        levelBeginner: 'Начинающий',
        levelIntermediate: 'Средний',
        levelAdvanced: 'Продвинутый',
        levelDescBeginner: 'Только начинаю или давно не занимался(лась): меньше подходов и повторов',
        levelDescIntermediate: 'Занимаюсь время от времени: стандартная нагрузка',
        levelDescAdvanced: 'Тренируюсь регулярно: больше подходов и повторов',
        levelModalTitle: 'Какой у тебя уровень подготовки?',
        levelModalText: 'От него зависит число подходов и повторов. Уровень можно сменить в любой момент в шапке сайта.',
        levelChangedTitle: 'Уровень обновлён',
        levelChangedText: 'Подходы и повторы пересчитаны.',
        restBetween: 'отдых между подходами указан у каждого упражнения',
        restShort: 'отдых',
        secShort: 'с',
        setLabel: 'Подход',
        startTimer: 'Запустить таймер',
        timerWork: 'Подход',
        timerRest: 'Отдых',
        timerSkip: 'Пропустить',
        timerFinish: 'Готово',
        restOver: 'Отдых закончился — следующий подход!',
        glassCaption: 'Твой стакан',
        hintButton: 'Подсказка',
        frameOne: 'Исходное положение',
        frameTwo: 'Движение',
        hintLabel: 'Как выполнять',
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
        dailySelectionNote: 'Каждый день выбираются 4 упражнения из этой программы (всего их по 15 в каждой). Завтра набор обновится; уровень меняет подходы и повторы.',
        checkHint: 'Отмечай подходы по ходу тренировки: после каждого запускается отдых. Прогресс сохраняется автоматически.',
        resetWorkout: 'Сбросить отметки',
        waterEyebrow: 'ПОЛЕЗНАЯ ПРИВЫЧКА',
        waterTitle: 'Вода сегодня',
        waterNote: 'Условная цель — 2 литра. Потребность зависит от активности, погоды и состояния здоровья.',
        undoWater: 'Отменить последний стакан',
        resetWater: 'Сбросить',
        tipEyebrow: 'НЕБОЛЬШОЙ СОВЕТ',
        disclaimer: 'Подсказки носят общий информационный характер и не заменяют рекомендации специалиста.',
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
        hardBadge: 'Hard',
        hardHint: 'A hard exercise — you can skip it and it still counts',
        hardNote: 'This one is hard. If it does not work for you today or it hurts, you can skip it and it still counts.',
        skipButton: 'Skip (still counts)',
        skippedTitle: 'Exercise counted',
        skippedText: 'Skipped — marked as done.',
        skippedTag: 'skipped',
        reminderEyebrow: 'BREAK',
        reminderTitle: 'Stretch reminder',
        reminderText: 'At the interval you choose I will remind you to stand up, move and drink water. Works for every program and is off by default.',
        reminderEvery: 'Remind me every',
        minutesShort: 'min',
        reminderTest: 'Show example',
        reminderOff: 'Off.',
        reminderNext: 'Next reminder around',
        reminderNote: 'Works while the site is open (even in a background tab). Quiet from 22:00 to 08:00.',
        reminderDenied: 'Browser notifications are blocked — reminders will appear on the page.',
        reminderUnsupported: 'This browser has no notifications — reminders will appear on the page.',
        reminderOnTitle: 'Reminders on',
        reminderOnText: 'I will remind you to take a break while the site is open.',
        reminderBreakTitle: 'Time to move!',
        reminderToday: 'On today\'s plan:',
        reminderMsgs: [
            'Stand up, stretch and walk around for a minute — your back will thank you.',
            'Look away from the screen for 20 seconds and do a few neck tilts.',
            'Break time: roll your shoulders back, breathe deeply and drink some water.',
            'Two minutes of movement and your head feels fresh again.'
        ],
        themeDark: 'Dark theme',
        levelLabel: 'Level',
        levelBeginner: 'Beginner',
        levelIntermediate: 'Intermediate',
        levelAdvanced: 'Advanced',
        levelDescBeginner: 'Just starting or back after a long break: fewer sets and reps',
        levelDescIntermediate: 'Active from time to time: standard workload',
        levelDescAdvanced: 'Train regularly: more sets and reps',
        levelModalTitle: 'What is your fitness level?',
        levelModalText: 'It sets the number of sets and reps. You can change it any time in the header.',
        levelChangedTitle: 'Level updated',
        levelChangedText: 'Sets and reps were recalculated.',
        restBetween: 'rest between sets is shown for each exercise',
        restShort: 'rest',
        secShort: 's',
        setLabel: 'Set',
        startTimer: 'Start timer',
        timerWork: 'Set',
        timerRest: 'Rest',
        timerSkip: 'Skip',
        timerFinish: 'Done',
        restOver: 'Rest is over — next set!',
        glassCaption: 'Your glass',
        hintButton: 'How to',
        frameOne: 'Start position',
        frameTwo: 'Movement',
        hintLabel: 'How to do it',
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
        dailySelectionNote: 'Four exercises are picked from this program each day. The set updates tomorrow; your level adjusts sets and reps.',
        checkHint: 'Tick sets as you go — a rest timer starts after each one. Progress saves automatically.',
        resetWorkout: 'Reset checkmarks',
        waterEyebrow: 'A HEALTHY HABIT',
        waterTitle: 'Water today',
        waterNote: 'The 2-liter target is only a general guide. Needs vary with activity, weather, and health.',
        undoWater: 'Undo last glass',
        resetWater: 'Reset',
        tipEyebrow: 'A SMALL TIP',
        disclaimer: 'Tips are general information and do not replace professional advice.',
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

const LEVELS = ['beginner', 'intermediate', 'advanced'];
const DAILY_COUNT = 4;
// Отдых между подходами (сек): [начинающий, средний, продвинутый]
const REST_SECONDS = {
    back: [20, 15, 10],
    cardio: [45, 30, 20],
    strength: [75, 60, 45]
};

function exercisePool(goal) {
    return window.FIT_EXERCISES?.[goal] || [];
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

// Последняя запись истории строго до указанной даты (вчера или последний день, когда заходили в приложение)
function lastHistoryRecord(dateKey) {
    const dates = Object.keys(state?.history || {}).filter(d => d < dateKey).sort();
    return dates.length ? state.history[dates[dates.length - 1]] : null;
}

function refreshDailyExercises(dateKey = localDateKey()) {
    let anyEmpty = false;
    const previousRecord = lastHistoryRecord(dateKey);
    if (!state.daily.picked || typeof state.daily.picked !== 'object') state.daily.picked = {};

    for (const goal of Object.keys(programs)) {
        const pool = exercisePool(goal);
        if (!pool.length) anyEmpty = true;

        // набор дня фиксируется: перезагрузка страницы его не меняет
        const saved = (state.daily.picked[goal] || []).map(id => pool.find(ex => ex.id === id)).filter(Boolean);
        if (saved.length === Math.min(DAILY_COUNT, pool.length)) {
            programs[goal].exercises = saved;
            continue;
        }
        const excludeIds = previousRecord?.exercises?.[goal] || [];
        programs[goal].exercises = pickDailyExercises(pool, dateKey, goal, DAILY_COUNT, excludeIds);
        state.daily.picked[goal] = programs[goal].exercises.map(ex => ex.id);
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
        level: null,
        theme: null,
        reminder: { enabled: false, minutes: 45, next: 0, count: 0 },
        daily: {
            date: localDateKey(),
            water: 0,
            picked: {},
            skipped: { back: [], cardio: [], strength: [] },
            sets: {
                back: {},
                cardio: {},
                strength: {}
            },
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
        if (!LEVELS.includes(state.level)) state.level = null;
        if (state.theme !== 'light' && state.theme !== 'dark') state.theme = null;
        if (!state.daily.picked || typeof state.daily.picked !== 'object') state.daily.picked = {};
        if (!state.daily.sets || typeof state.daily.sets !== 'object') state.daily.sets = {};
        if (!state.daily.skipped || typeof state.daily.skipped !== 'object') state.daily.skipped = {};
        const rem = state.reminder && typeof state.reminder === 'object' ? state.reminder : {};
        state.reminder = {
            enabled: rem.enabled === true,
            minutes: [30, 45, 60, 90].includes(rem.minutes) ? rem.minutes : 45,
            next: Number(rem.next) || 0,
            count: Number(rem.count) || 0
        };
        for (const key of Object.keys(programs)) {
            if (!Array.isArray(state.daily.checks[key])) state.daily.checks[key] = [];
            if (!state.daily.sets[key] || typeof state.daily.sets[key] !== 'object') state.daily.sets[key] = {};
            if (!Array.isArray(state.daily.skipped[key])) state.daily.skipped[key] = [];
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


const $ = id => document.getElementById(id);
const lang = () => state.language;
const t = key => translations[lang()][key] || key;
const formatNumber = n => new Intl.NumberFormat(lang() === 'ru' ? 'ru-RU' : 'en-US').format(n);

// ---------- Напоминание о перерыве ----------
const QUIET_FROM = 22, QUIET_TO = 8;

function isQuietHour(date = new Date()) {
    const h = date.getHours();
    return h >= QUIET_FROM || h < QUIET_TO;
}

function reminderBody() {
    const msgs = t('reminderMsgs');
    let text = msgs[state.reminder.count % msgs.length];
    const goal = state.selectedGoal;
    const next = programs[goal].exercises.find(ex => setsDone(goal, ex) < totalSets(ex));
    if (next) text += ` ${t('reminderToday')} ${next.name[lang()]}.`;
    return text;
}

async function sendBreakNotification() {
    const title = t('reminderBreakTitle');
    const body = reminderBody();
    state.reminder.count += 1;
    saveState();
    let shown = false;
    if ('Notification' in window && Notification.permission === 'granted') {
        const options = { body, icon: 'icons/icon.svg', tag: 'fitstudent-break', renotify: true };
        try {
            const reg = await navigator.serviceWorker?.getRegistration();
            if (reg) {
                await reg.showNotification(title, options);
                shown = true;
            } else {
                new Notification(title, options);
                shown = true;
            }
        } catch (e) {
            try {
                new Notification(title, options);
                shown = true;
            } catch (e2) { /* покажем на странице */ }
        }
    }
    if (!shown || document.visibilityState === 'visible') showToast('🧘', title, body);
}

function scheduleNextReminder(from = Date.now()) {
    state.reminder.next = from + state.reminder.minutes * 60000;
    saveState();
    updateReminderUI();
}

function checkReminder() {
    const r = state.reminder;
    if (!r.enabled) return;
    const now = Date.now();
    if (now < r.next) return;
    // долгая пауза (закрытая крышка, сон) — не засыпаем напоминаниями, просто переносим
    const stale = now - r.next > 2 * 60000;
    const quiet = isQuietHour();
    scheduleNextReminder(now);
    if (!stale && !quiet) sendBreakNotification();
}

function updateReminderUI() {
    const r = state.reminder;
    const toggle = $('reminder-toggle');
    if (!toggle) return;
    toggle.setAttribute('aria-checked', String(r.enabled));
    toggle.setAttribute('aria-label', t('reminderTitle'));
    $('reminder-interval').value = String(r.minutes);
    $('reminder-controls').classList.toggle('disabled', !r.enabled);
    $('reminder-interval').disabled = !r.enabled;
    const status = $('reminder-status');
    if (!r.enabled) {
        status.textContent = t('reminderOff');
        return;
    }
    const time = new Date(r.next).toLocaleTimeString(lang() === 'ru' ? 'ru-RU' : 'en-GB', { hour: '2-digit', minute: '2-digit' });
    let text = `${t('reminderNext')} ${time}. ${t('reminderNote')}`;
    if (!('Notification' in window)) text += ` ${t('reminderUnsupported')}`;
    else if (Notification.permission === 'denied') text += ` ${t('reminderDenied')}`;
    status.textContent = text;
}

async function setReminderEnabled(on) {
    if (on && 'Notification' in window && Notification.permission === 'default') {
        try { await Notification.requestPermission(); } catch (e) { /* старые браузеры */ }
    }
    state.reminder.enabled = on;
    if (on) {
        scheduleNextReminder();
        showToast('⏰', t('reminderOnTitle'), t('reminderOnText'));
    } else {
        saveState();
        updateReminderUI();
    }
}

const isDark = () => state.theme
    ? state.theme === 'dark'
    : window.matchMedia?.('(prefers-color-scheme: dark)').matches;

function applyTheme() {
    const dark = isDark();
    document.documentElement.toggleAttribute('data-theme', false);
    if (dark) document.documentElement.setAttribute('data-theme', 'dark');
    document.documentElement.style.colorScheme = dark ? 'dark' : 'light';
    let meta = document.querySelector('meta[name="theme-color"]');
    if (!meta) {
        meta = document.createElement('meta');
        meta.name = 'theme-color';
        document.head.appendChild(meta);
    }
    meta.content = dark ? '#0f1524' : (BRAND.themeColor || '#326af5');
    const toggle = $('theme-toggle');
    if (toggle) {
        toggle.setAttribute('aria-checked', String(dark));
        toggle.setAttribute('aria-label', t('themeDark'));
        toggle.title = t('themeDark');
    }
}

function applyBrand() {
    if (!BRAND || !Object.keys(BRAND).length) return;
    if (BRAND.themeColor) {
        let meta = document.querySelector('meta[name="theme-color"]');
        if (!meta) {
            meta = document.createElement('meta');
            meta.name = 'theme-color';
            document.head.appendChild(meta);
        }
        document.documentElement.style.setProperty('--blue', BRAND.themeColor);
    }
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
        if (e.key === 'Escape' || (e.key === 'Enter' && document.activeElement?.id !== 'hint-modal-skip')) closeHintModal();
    });
    return backdrop;
}

function openHintModal(ex) {
    const backdrop = ensureHintModal();
    backdrop.querySelector('#hint-modal-icon').textContent = ex.icon || '🧘';
    backdrop.querySelector('#hint-modal-title').textContent = ex.name[lang()];
    backdrop.querySelector('#hint-modal-dose').textContent = `${formatDose(ex)} · ${ex.focus[lang()]}`;
    const body = backdrop.querySelector('#hint-modal-body');
    body.innerHTML = '';
    const media = document.createElement('div');
    media.className = 'hint-media';
    const img = exerciseThumb(ex, 'hint-gif');
    img.alt = ex.name[lang()];
    img.loading = 'eager';
    media.append(img);
    const instruction = document.createElement('p');
    instruction.className = 'hint-instruction';
    instruction.textContent = ex.description[lang()];
    const safety = document.createElement('p');
    safety.className = 'hint-safety';
    safety.textContent = `⚠ ${ex.safety[lang()]}`;
    body.append(media, instruction, safety);
    backdrop.querySelector('#hint-modal-ok').textContent = t('ok');
    const goal = state.selectedGoal;
    const actions = backdrop.querySelector('.modal-actions');
    actions.querySelector('#hint-modal-skip')?.remove();
    if (ex.hard) {
        const hardNote = document.createElement('p');
        hardNote.className = 'hint-hard';
        hardNote.textContent = `🔥 ${t('hardNote')}`;
        body.append(hardNote);
        if (setsDone(goal, ex) < totalSets(ex)) {
            const skip = document.createElement('button');
            skip.type = 'button';
            skip.id = 'hint-modal-skip';
            skip.className = 'skip-button';
            skip.textContent = t('skipButton');
            skip.addEventListener('click', () => {
                closeHintModal();
                skipExercise(goal, ex);
            });
            actions.prepend(skip);
        }
    }
    backdrop.classList.add('show');
    setTimeout(() => backdrop.querySelector('#hint-modal-ok').focus(), 90);
}

function closeHintModal() {
    const backdrop = document.getElementById('hint-modal');
    if (!backdrop) return;
    backdrop.classList.remove('show');
}

function ensureLevelModal() {
    const backdrop = ensureBackdrop('level-modal', 'level-modal');
    if (backdrop.dataset.ready) return backdrop;
    backdrop.dataset.ready = '1';
    backdrop.addEventListener('click', e => {
        const btn = e.target.closest('[data-level]');
        if (btn) {
            setLevel(btn.dataset.level);
            backdrop.classList.remove('show');
        } else if (e.target === backdrop && state.level) {
            backdrop.classList.remove('show');
        }
    });
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape' && backdrop.classList.contains('show') && state.level) backdrop.classList.remove('show');
    });
    return backdrop;
}

function openLevelModal() {
    const backdrop = ensureLevelModal();
    const cards = LEVELS.map(lv => {
        const key = lv[0].toUpperCase() + lv.slice(1);
        const active = state.level === lv ? ' active' : '';
        return `<button type="button" class="level-card${active}" data-level="${lv}">
            <span class="level-emoji" aria-hidden="true">${{ beginner: '🌱', intermediate: '🔥', advanced: '🚀' }[lv]}</span>
            <span><strong>${t('level' + key)}</strong><small>${t('levelDesc' + key)}</small></span></button>`;
    }).join('');
    backdrop.innerHTML = `<div class="modal-card level-card-wrap" role="document">
        <h3>${t('levelModalTitle')}</h3>
        <p>${t('levelModalText')}</p>
        <div class="level-options">${cards}</div></div>`;
    backdrop.classList.add('show');
    setTimeout(() => backdrop.querySelector('.level-card')?.focus(), 90);
}

function setLevel(newLevel, { silent = false } = {}) {
    if (!LEVELS.includes(newLevel)) return;
    const changed = state.level !== null && state.level !== newLevel;
    state.level = newLevel;
    if (timer) stopTimer();
    for (const goal of Object.keys(programs)) recalcProgram(goal);
    saveState();
    applyTranslations();
    if (changed && !silent) showToast('🎯', t('levelChangedTitle'), t('levelChangedText'));
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
    applyTheme();
    updateReminderUI();
    const levelSelect = $('level-select');
    if (levelSelect) {
        levelSelect.value = level();
        levelSelect.querySelectorAll('option').forEach(o => o.textContent = t('level' + o.value[0].toUpperCase() + o.value.slice(1)));
    }
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
}

function selectGoal(goal) {
    if (!programs[goal] || goal === state.selectedGoal) return;
    if (timer && timer.kind === 'work') stopTimer();
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

// ---------- Уровень, подходы, дозировка ----------
const level = () => state.level || 'intermediate';
const levelIndex = () => LEVELS.indexOf(level());
const totalSets = ex => ex.work.levels[level()][0];
const setAmount = ex => ex.work.levels[level()][1];
// Отдых подбирается под упражнение: после короткого подхода «на время» он тоже короткий
// (начинающий — 1:1 к работе, средний — 1:1,5, продвинутый — 1:2), но не больше базового отдыха программы.
function restSeconds(goal, ex) {
    const base = REST_SECONDS[goal][levelIndex()];
    if (ex.work.unit !== 'sec') return base;
    const ratio = [1, 1.5, 2][levelIndex()];
    const scaled = Math.round(setAmount(ex) / ratio / 5) * 5;
    return Math.min(base, Math.max(10, scaled));
}
const setsDone = (goal, ex) => Math.min(state.daily.sets[goal][ex.id] || 0, totalSets(ex));

function recalcProgram(goal) {
    const exercises = programs[goal].exercises;
    state.daily.checks[goal] = exercises.filter(ex => (state.daily.sets[goal][ex.id] || 0) >= totalSets(ex)).map(ex => ex.id);
    const complete = exercises.length > 0 && state.daily.checks[goal].length === exercises.length;
    state.daily.completedPrograms = state.daily.completedPrograms.filter(x => x !== goal);
    if (complete) state.daily.completedPrograms.push(goal);
    return complete;
}

function programProgress(goal) {
    const exercises = programs[goal].exercises;
    let done = 0, total = 0;
    exercises.forEach(ex => {
        done += setsDone(goal, ex);
        total += totalSets(ex);
    });
    return { done, total, exDone: state.daily.checks[goal].length, exTotal: exercises.length };
}

function plural(n, forms) {
    // forms: [один, два-четыре, много] — для русского; для английского [one, many]
    if (lang() === 'en') return n === 1 ? forms[0] : forms[forms.length - 1];
    const m10 = n % 10, m100 = n % 100;
    if (m10 === 1 && m100 !== 11) return forms[0];
    if (m10 >= 2 && m10 <= 4 && (m100 < 10 || m100 >= 20)) return forms[1];
    return forms[2];
}

function formatDose(ex) {
    const [sets, amount] = ex.work.levels[level()];
    const setsWord = lang() === 'ru' ? plural(sets, ['подход', 'подхода', 'подходов']) : plural(sets, ['set', 'sets']);
    let text;
    if (ex.work.unit === 'sec') {
        text = `${sets} ${setsWord} × ${amount} ${lang() === 'ru' ? 'с' : 's'}`;
    } else {
        text = `${sets} ${setsWord} × ${amount} ${lang() === 'ru' ? 'раз' : 'reps'}`;
    }
    if (ex.work.side) text += lang() === 'ru' ? ' на каждую сторону' : ' per side';
    if (ex.work.hold) text += lang() === 'ru' ? ` · удержание ${ex.work.hold} с` : ` · ${ex.work.hold} s hold`;
    if (sets > 1) text += ` · ${t('restShort')} ${restSeconds(state.selectedGoal, ex)} ${t('secShort')}`;
    return text;
}

function formatClock(sec) {
    const s = Math.max(0, Math.ceil(sec));
    return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;
}

// ---------- Таймер (работа / отдых) ----------
let timer = null;

function ensureTimerBar() {
    let bar = document.getElementById('timer-bar');
    if (bar) return bar;
    bar = document.createElement('div');
    bar.id = 'timer-bar';
    bar.className = 'timer-bar';
    bar.setAttribute('role', 'timer');
    bar.innerHTML = `
      <div class="timer-info"><span class="timer-kind" id="timer-kind"></span><span class="timer-name" id="timer-name"></span></div>
      <div class="timer-clock" id="timer-clock">0:00</div>
      <button type="button" class="timer-skip" id="timer-skip"></button>
      <div class="timer-track"><div class="timer-fill" id="timer-fill"></div></div>`;
    document.body.appendChild(bar);
    bar.querySelector('#timer-skip').addEventListener('click', () => stopTimer(true));
    return bar;
}

function stopTimer(skipped = false) {
    if (!timer) return;
    const t0 = timer;
    timer = null;
    clearInterval(t0.interval);
    document.getElementById('timer-bar')?.classList.remove('show');
    if (t0.kind === 'work') {
        // «Пропустить» на рабочем таймере = подход выполнен досрочно; «Стоп» тоже считаем выполненным
        if (skipped && t0.onSkip) t0.onSkip();
    }
    renderTimerButtons();
}

function startTimer(kind, seconds, name, goal, exId, onDone) {
    if (timer) {
        clearInterval(timer.interval);
        timer = null;
    }
    const bar = ensureTimerBar();
    bar.dataset.kind = kind;
    bar.querySelector('#timer-kind').textContent = kind === 'work' ? t('timerWork') : t('timerRest');
    bar.querySelector('#timer-name').textContent = name;
    bar.querySelector('#timer-skip').textContent = kind === 'work' ? t('timerFinish') : t('timerSkip');
    timer = { kind, total: seconds, end: Date.now() + seconds * 1000, goal, exId, onDone, onSkip: onDone };
    const tick = () => {
        if (!timer) return;
        const left = (timer.end - Date.now()) / 1000;
        bar.querySelector('#timer-clock').textContent = formatClock(left);
        bar.querySelector('#timer-fill').style.width = `${Math.min(100, Math.max(0, (1 - left / timer.total) * 100))}%`;
        if (left <= 0) {
            const done = timer.onDone;
            const finishedKind = timer.kind;
            clearInterval(timer.interval);
            timer = null;
            bar.classList.remove('show');
            try { navigator.vibrate?.(finishedKind === 'work' ? [120, 80, 120] : 200); } catch (e) {}
            if (finishedKind === 'rest') showToast('⏱️', t('restOver'), '');
            if (done) done();
            renderTimerButtons();
        }
    };
    timer.interval = setInterval(tick, 250);
    tick();
    bar.classList.add('show');
    renderTimerButtons();
}

function renderTimerButtons() {
    document.querySelectorAll('.timer-start').forEach(btn => {
        const active = timer && timer.kind === 'work' && timer.exId === btn.dataset.exId;
        btn.classList.toggle('running', !!active);
        btn.disabled = !!(timer && timer.kind === 'work' && !active);
    });
}

// ---------- Подходы ----------
function afterProgressChange(goal, wasComplete) {
    const complete = recalcProgram(goal);
    saveState();
    if (complete && !wasComplete && !state.daily.celebrated.workouts[goal]) {
        state.daily.celebrated.workouts[goal] = true;
        if (goal === state.selectedGoal) workoutCelebrated = true;
        saveState();
        showToast('🎉', t('allDoneTitle'), t('allDoneText'));
    }
    if (!complete && goal === state.selectedGoal) workoutCelebrated = false;
}

function setSetsDone(goal, ex, count, { rest = false, skipped = false } = {}) {
    const wasComplete = state.daily.completedPrograms.includes(goal);
    const before = setsDone(goal, ex);
    state.daily.sets[goal][ex.id] = Math.max(0, Math.min(totalSets(ex), count));
    const list = state.daily.skipped[goal];
    const at = list.indexOf(ex.id);
    if (skipped && at === -1) list.push(ex.id);
    if (!skipped && at !== -1) list.splice(at, 1);
    afterProgressChange(goal, wasComplete);
    refreshItem(goal, ex);
    updateWorkoutProgress();
    updateStats();

    const after = setsDone(goal, ex);
    const exerciseDone = after >= totalSets(ex);
    if (rest && after > before && !exerciseDone) {
        startTimer('rest', restSeconds(goal, ex), ex.name[lang()], goal, ex.id, null);
    } else if (exerciseDone && timer && timer.kind === 'rest') {
        stopTimer();
    }
}

function tapSet(goal, ex, index) {
    const done = setsDone(goal, ex);
    if (timer && timer.kind === 'work') stopTimer();
    setSetsDone(goal, ex, done > index ? index : index + 1, { rest: done <= index });
}

function toggleExercise(ex) {
    const goal = state.selectedGoal;
    const complete = setsDone(goal, ex) >= totalSets(ex);
    if (timer && timer.exId === ex.id) stopTimer();
    setSetsDone(goal, ex, complete ? 0 : totalSets(ex));
}

const isSkipped = (goal, ex) => state.daily.skipped[goal].includes(ex.id) && setsDone(goal, ex) >= totalSets(ex);

function skipExercise(goal, ex) {
    if (timer && timer.exId === ex.id) stopTimer();
    else if (timer && timer.kind === 'rest') stopTimer();
    setSetsDone(goal, ex, totalSets(ex), { skipped: true });
    showToast('⏭️', t('skippedTitle'), t('skippedText'));
}

function startWorkTimer(goal, ex) {
    if (timer && timer.kind === 'work' && timer.exId === ex.id) {
        stopTimer(false);
        return;
    }
    const next = setsDone(goal, ex);
    if (next >= totalSets(ex)) return;
    const finish = () => setSetsDone(goal, ex, setsDone(goal, ex) + 1, { rest: true });
    startTimer('work', setAmount(ex), `${ex.name[lang()]} · ${next + 1}/${totalSets(ex)}`, goal, ex.id, finish);
}

function exerciseThumb(ex, cls = 'exercise-thumb') {
    const img = document.createElement('img');
    img.className = cls;
    img.alt = '';
    img.loading = 'lazy';
    img.decoding = 'async';
    img.src = ex.svg;
    img.addEventListener('error', () => {
        if (!img.dataset.fallback && ex.gif) {
            img.dataset.fallback = '1';
            img.src = ex.gif;
        }
    });
    return img;
}

function buildItem(goal, ex, index, animate) {
    const total = totalSets(ex);
    const done = setsDone(goal, ex);
    const isDone = done >= total;
    const li = document.createElement('li');
    li.className = `workout-item${isDone ? ' done' : ''}${animate ? '' : ' no-anim'}`;
    li.dataset.exId = ex.id;
    li.style.setProperty('--item-delay', `${index * 60}ms`);

    const number = document.createElement('span');
    number.className = 'exercise-number';
    number.append(exerciseThumb(ex));

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

    const focus = document.createElement('span');
    focus.className = 'exercise-focus';
    focus.textContent = ex.focus[lang()];
    if (isSkipped(goal, ex)) focus.textContent = `${ex.focus[lang()]} · ${t('skippedTag')}`;

    const dose = document.createElement('span');
    dose.className = 'exercise-detail';
    dose.textContent = formatDose(ex);

    const setsRow = document.createElement('div');
    setsRow.className = 'sets-row';
    for (let i = 0; i < total; i++) {
        const chip = document.createElement('button');
        chip.type = 'button';
        chip.className = `set-chip${i < done ? ' done' : ''}`;
        chip.textContent = String(i + 1);
        chip.setAttribute('aria-pressed', String(i < done));
        chip.setAttribute('aria-label', `${t('setLabel')} ${i + 1} ${t('of')} ${total}: ${ex.name[lang()]}`);
        chip.addEventListener('click', () => tapSet(goal, ex, i));
        setsRow.append(chip);
    }
    if (ex.work.unit === 'sec') {
        const start = document.createElement('button');
        start.type = 'button';
        start.className = 'timer-start';
        start.dataset.exId = ex.id;
        start.textContent = `▶ ${setAmount(ex)} ${t('secShort')}`;
        start.disabled = isDone;
        start.setAttribute('aria-label', `${t('startTimer')}: ${ex.name[lang()]}`);
        start.addEventListener('click', () => startWorkTimer(goal, ex));
        setsRow.append(start);
    }

    if (ex.hard) {
        const badge = document.createElement('span');
        badge.className = 'hard-badge';
        badge.textContent = t('hardBadge');
        badge.title = t('hardHint');
        const nameWrap = document.createElement('span');
        nameWrap.className = 'exercise-name-wrap';
        nameWrap.append(name, badge);
        titleRow.append(nameWrap, hintButton);
    } else {
        titleRow.append(name, hintButton);
    }
    main.append(titleRow, dose, focus, setsRow);

    const check = document.createElement('button');
    check.type = 'button';
    check.className = `check-button${isDone ? ' checked' : ''}`;
    check.setAttribute('aria-label', `${isDone ? '✓ ' : ''}${ex.name[lang()]}`);
    check.setAttribute('aria-pressed', String(isDone));
    check.textContent = isDone ? '✓' : '';
    check.addEventListener('click', () => toggleExercise(ex));

    li.append(number, main, check);
    return li;
}

function refreshItem(goal, ex) {
    if (goal !== state.selectedGoal) return;
    const old = document.querySelector(`.workout-item[data-ex-id="${ex.id}"]`);
    if (!old) return;
    const index = programs[goal].exercises.indexOf(ex);
    old.replaceWith(buildItem(goal, ex, index, false));
    renderTimerButtons();
}

function renderWorkout() {
    const token = ++renderToken;
    const goal = state.selectedGoal;
    const program = programs[goal];
    const list = $('workout-list');
    $('workout-title').textContent = program.title[lang()];
    list.innerHTML = '';
    updateLevelNote();

    if (!program.exercises.length) {
        const li = document.createElement('li');
        li.className = 'empty-state';
        li.textContent = t('catalogError');
        list.append(li);
        $('exercises-count').textContent = exercisesCountText(0);
        updateWorkoutProgress();
        updateStats();
        updateTip();
        return;
    }

    recalcProgram(goal);
    program.exercises.forEach((ex, index) => list.append(buildItem(goal, ex, index, true)));

    if (token !== renderToken) return;
    $('exercises-count').textContent = exercisesCountText(program.exercises.length);
    updateWorkoutProgress();
    updateStats();
    updateTip();
    renderTimerButtons();
}

function exercisesCountText(n) {
    const word = lang() === 'ru' ? plural(n, ['упражнение', 'упражнения', 'упражнений']) : plural(n, ['exercise', 'exercises']);
    return `${n} ${word}`;
}

function updateLevelNote() {
    const el = $('level-note');
    if (!el) return;
    const goal = state.selectedGoal;
    el.textContent = `${t('level' + level()[0].toUpperCase() + level().slice(1))} · ${t('restBetween')}`;
}

function updateWorkoutProgress() {
    const p = programProgress(state.selectedGoal);
    $('completed-count').textContent = `${p.exDone} ${t('of')} ${p.exTotal}`;
    $('workout-progress').style.width = `${p.total ? p.done / p.total * 100 : 0}%`;
    $('workout-progress').parentElement.setAttribute('aria-valuenow', String(p.done));
}

// первичная синхронизация отметок и подходов (после объявления всех хелперов выше)
for (const key of Object.keys(programs)) {
    // старые отметки без подходов (до появления уровней) считаются полностью выполненными
    for (const id of state.daily.checks[key]) {
        if (state.daily.sets[key][id] === undefined) state.daily.sets[key][id] = 99;
    }
    recalcProgram(key);
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

    const progress = programProgress(state.selectedGoal);
    const progressText = progress.total ? `${Math.round(progress.done / progress.total * 100)}%` : '0%';
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
    const previousExercises = previous.picked || {};

    state.history[previous.date] = {
        water: previous.water,
        completedPrograms: [...previous.completedPrograms],
        exercises: previousExercises
    };

    state.daily = {
        date: today,
        water: 0,
        picked: {},
        skipped: { back: [], cardio: [], strength: [] },
        sets: {
            back: {},
            cardio: {},
            strength: {}
        },
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
        if (timer) stopTimer();
        state.daily.sets[state.selectedGoal] = {};
        recalcProgram(state.selectedGoal);
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
        if (timer) stopTimer();
        refreshDailyExercises(state.daily.date);
        saveState();
        applyTranslations();
        showToast('✓', t('dataCleared'), '');
        openLevelModal();
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

$('theme-toggle').addEventListener('click', () => {
    state.theme = isDark() ? 'light' : 'dark';
    saveState();
    applyTheme();
});
window.matchMedia?.('(prefers-color-scheme: dark)').addEventListener?.('change', () => {
    if (!state.theme) applyTheme();
});
$('level-select').addEventListener('change', e => setLevel(e.target.value));
$('reminder-toggle').addEventListener('click', () => setReminderEnabled(!state.reminder.enabled));
$('reminder-interval').addEventListener('change', e => {
    state.reminder.minutes = Number(e.target.value);
    if (state.reminder.enabled) scheduleNextReminder();
    else saveState();
});
$('reminder-test').addEventListener('click', async () => {
    if ('Notification' in window && Notification.permission === 'default') {
        try { await Notification.requestPermission(); } catch (e) { /* ignore */ }
        updateReminderUI();
    }
    sendBreakNotification();
});
setInterval(checkReminder, 15000);
document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') checkReminder();
});
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
    if (!state.level) openLevelModal();
})();

if ('serviceWorker' in navigator && location.protocol !== 'file:') {
    window.addEventListener('load', () => navigator.serviceWorker.register('./sw.js').catch(err => console.warn('Offline cache registration failed:', err)));
}