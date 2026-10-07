const workoutData = {
    back: {
        title: "Спина / Офис",
        exercises: [
            { name: "Наклоны головы", reps: "10 раз в каждую сторону", sets: "1×10" },
            { name: "Разведение рук с резинкой", reps: "3 подхода по 15 раз", sets: "3×15" },
            { name: "Кошка-корова", reps: "10 медленных циклов", sets: "1×10" },
            { name: "Подъем ног лежа", reps: "12 раз, 3 подхода", sets: "3×12" }
        ]
    },
    lose: {
        title: "Похудеть",
        exercises: [
            { name: "Бёрпи", reps: "4 подхода по 10 раз", sets: "4×10" },
            { name: "Прыжки на скакалке", reps: "3 минуты без остановки", sets: "1×3м" },
            { name: "Высокие колени", reps: "3 подхода по 30 секунд", sets: "3×30с" },
            { name: "Планка", reps: "3 подхода по 45 секунд", sets: "3×45с" }
        ]
    },
    gain: {
        title: "Набрать массу",
        exercises: [
            { name: "Отжимания от пола", reps: "4 подхода до отказа", sets: "4×max" },
            { name: "Приседания с весом", reps: "4 подхода по 12 раз", sets: "4×12" },
            { name: "Подтягивания", reps: "3 подхода по 8 раз", sets: "3×8" },
            { name: "Жим гантелей лежа", reps: "4 подхода по 10 раз", sets: "4×10" }
        ]
    }
};

let waterCelebrated = false;
let workoutCelebrated = false;

function selectGoal(element) {
    if (element.classList.contains('active')) return;

    document.querySelectorAll('.goal-card').forEach(card => {
        card.classList.remove('active');
    });
    element.classList.add('active');

    const goalType = element.getAttribute('data-goal');
    renderWorkout(goalType);
}

function renderWorkout(goalType) {
    const workoutList = document.getElementById('workout-list');
    const data = workoutData[goalType];

    workoutList.classList.remove('fade-in');
    workoutList.classList.add('fade-out');

    setTimeout(() => {
        workoutList.innerHTML = '';

        data.exercises.forEach((exercise, index) => {
            const li = document.createElement('li');
            li.className = 'workout-item';
            li.innerHTML = `
                <span class="item-num">${index + 1}.</span>
                <span class="item-name">${exercise.name}</span>
                <span class="item-reps">${exercise.reps}</span>
                <span class="item-sets">${exercise.sets}</span>
                <div class="checkbox" onclick="toggleCheck(this)"></div>
            `;
            workoutList.appendChild(li);
        });

        document.getElementById('exercises-count').textContent = `${data.exercises.length} упражнения`;
        workoutCelebrated = false;
        updateCompletedCount();

        workoutList.classList.remove('fade-out');
        workoutList.classList.add('fade-in');
    }, 250);
}

function toggleCheck(element) {
    element.classList.toggle('checked');
    updateCompletedCount();
}

function updateCompletedCount() {
    const totalCheckboxes = document.querySelectorAll('.checkbox').length;
    const checkedCheckboxes = document.querySelectorAll('.checkbox.checked').length;
    
    document.getElementById('completed-count').textContent = `${checkedCheckboxes} выполнено`;

    if (totalCheckboxes > 0 && checkedCheckboxes === totalCheckboxes && !workoutCelebrated) {
        workoutCelebrated = true;
        showToast(
            '🎉',
            'Тренировка завершена!',
            'Ты выполнил все упражнения. Отличная работа, так держать!'
        );
    }
}

let currentWater = 0;
const maxWater = 2000;
const step = 250;

function drinkWater() {
    if (currentWater >= maxWater) return;

    currentWater += step;
    if (currentWater > maxWater) currentWater = maxWater;
    updateWaterUI();

    if (currentWater >= maxWater && !waterCelebrated) {
        waterCelebrated = true;
        showToast(
            '💧',
            'Норма воды выполнена!',
            'Ты выпил 2 литра за сегодня. Это отличный результат для продуктивного дня!'
        );
    }
}

function updateWaterUI() {
    document.getElementById('water-text').textContent = `${currentWater} / ${maxWater} мл`;
    const percentage = (currentWater / maxWater) * 100;
    
    const waterFill = document.getElementById('water-fill');
    waterFill.style.height = `${percentage}%`;

    const btn = document.getElementById('btn-water');
    if (currentWater >= maxWater) {
        waterFill.classList.add('full');
        btn.disabled = true;
        btn.textContent = 'Цель достигнута ✓';
    } else {
        waterFill.classList.remove('full');
        btn.disabled = false;
        btn.textContent = 'Выпить стакан (250 мл)';
    }
}

function showToast(icon, title, message) {
    const container = document.getElementById('toast-container');
    
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
        <div class="toast-icon">${icon}</div>
        <div class="toast-content">
            <h4>${title}</h4>
            <p>${message}</p>
        </div>
    `;
    
    container.appendChild(toast);

    requestAnimationFrame(() => {
        setTimeout(() => toast.classList.add('show'), 50);
    });

    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 400);
    }, 5000);
}

document.addEventListener('DOMContentLoaded', () => {
    const workoutList = document.getElementById('workout-list');
    workoutList.classList.add('fade-in');
    
    renderWorkout('back');
    updateWaterUI();
});
