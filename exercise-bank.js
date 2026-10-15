'use strict';

window.FIT_BASE_EXERCISES = {
    back: [{
            id: 'neck',
            frameId: 'neck',
            icon: '🧘',
            name: {
                ru: 'Мягкие повороты головы',
                en: 'Gentle neck turns'
            },
            dose: {
                ru: '5–8 раз в каждую сторону · 1 подход',
                en: '5–8 each side · 1 set'
            },
            description: {
                ru: 'Сядь или встань прямо. Медленно поверни голову вправо и влево в комфортной амплитуде.',
                en: 'Sit or stand tall. Slowly turn your head left and right within a comfortable range.'
            },
            safety: {
                ru: 'Не запрокидывай голову и не делай круговых вращений.',
                en: 'Do not tilt your head far back or make full neck circles.'
            }
        },
        {
            id: 'shoulders',
            frameId: 'shoulders',
            icon: '🙆',
            name: {
                ru: 'Круги плечами',
                en: 'Shoulder rolls'
            },
            dose: {
                ru: '10 кругов назад и вперёд',
                en: '10 circles forward and backward'
            },
            description: {
                ru: 'Подними плечи к ушам, мягко отведи назад и опусти. Затем повтори в обратном направлении.',
                en: 'Lift shoulders toward ears, roll them back and down, then reverse direction.'
            },
            safety: {
                ru: 'Двигайся медленно, без боли.',
                en: 'Move slowly and stay pain-free.'
            }
        },
        {
            id: 'cat-cow',
            frameId: 'cat-cow',
            icon: '🐈',
            name: {
                ru: 'Кошка-корова',
                en: 'Cat-cow stretch'
            },
            dose: {
                ru: '8–10 медленных циклов',
                en: '8–10 slow cycles'
            },
            description: {
                ru: 'На четвереньках поочерёдно мягко округляй и выпрямляй спину, двигаясь вместе с дыханием.',
                en: 'On hands and knees, gently round and extend your back while breathing steadily.'
            },
            safety: {
                ru: 'Не переразгибай поясницу.',
                en: 'Avoid forcing your lower back into an extreme arch.'
            }
        },
        {
            id: 'standing-hinge',
            frameId: 'standing-hinge',
            icon: '🧍',
            name: {
                ru: 'Наклон таза назад',
                en: 'Hip hinge'
            },
            dose: {
                ru: '8–10 повторений',
                en: '8–10 reps'
            },
            description: {
                ru: 'Слегка согни колени и отведи таз назад, сохраняя спину в комфортном нейтральном положении, затем выпрямись.',
                en: 'Bend your knees slightly, send your hips back while keeping your back neutral, then stand tall.'
            },
            safety: {
                ru: 'Двигайся медленно; не округляй спину специально.',
                en: 'Move slowly and avoid deliberately rounding your back.'
            }
        }
    ],
    cardio: [{
            id: 'march',
            frameId: 'march',
            icon: '🚶',
            name: {
                ru: 'Марш на месте',
                en: 'March in place'
            },
            dose: {
                ru: '60 секунд · 2 подхода',
                en: '60 seconds · 2 sets'
            },
            description: {
                ru: 'Поочерёдно поднимай колени и двигай руками в комфортном темпе.',
                en: 'Lift knees alternately and swing your arms at a comfortable pace.'
            },
            safety: {
                ru: 'Можно держаться за устойчивую опору.',
                en: 'Hold a stable support if helpful.'
            }
        },
        {
            id: 'knee-lifts',
            frameId: 'knee-lifts',
            icon: '🦵',
            name: {
                ru: 'Подъём коленей поочерёдно',
                en: 'Alternating knee lifts'
            },
            dose: {
                ru: '30–60 секунд',
                en: '30–60 seconds'
            },
            description: {
                ru: 'Поднимай колени по очереди на удобную высоту, сохраняя ровный корпус.',
                en: 'Lift your knees one at a time to a comfortable height while keeping your torso upright.'
            },
            safety: {
                ru: 'При необходимости держись за устойчивую опору.',
                en: 'Hold a stable support if needed.'
            }
        },
        {
            id: 'body-leg-lifts',
            frameId: 'body-leg-lifts',
            icon: '🦿',
            name: {
                ru: 'Махи ногой стоя',
                en: 'Standing leg swings'
            },
            dose: {
                ru: '8–10 раз на ногу',
                en: '8–10 per leg'
            },
            description: {
                ru: 'Держась за опору, поочерёдно отводи ногу назад и возвращай в исходное.',
                en: 'Hold a support and swing each leg back alternately, returning to start.'
            },
            safety: {
                ru: 'Двигайся плавно, без рывков.',
                en: 'Move smoothly, without jerking.'
            }
        }
    ],
    strength: [{
            id: 'wall-push',
            frameId: 'wall-push',
            icon: '🧱',
            name: {
                ru: 'Отжимания от стены',
                en: 'Wall push-ups'
            },
            dose: {
                ru: '8–12 повторений · 2 подхода',
                en: '8–12 reps · 2 sets'
            },
            description: {
                ru: 'Упрись ладонями в стену на уровне груди, сгибай и выпрямляй руки, сохраняя корпус прямым.',
                en: 'Place palms on a wall at chest height, bend and straighten arms while keeping your body aligned.'
            },
            safety: {
                ru: 'Чем дальше стопы от стены, тем сложнее упражнение.',
                en: 'Moving feet farther from the wall makes it harder.'
            }
        },
        {
            id: 'glute-bridge',
            frameId: 'glute-bridge',
            icon: '🌉',
            name: {
                ru: 'Ягодичный мост',
                en: 'Glute bridge'
            },
            dose: {
                ru: '8–12 повторений · 1–2 подхода',
                en: '8–12 reps · 1–2 sets'
            },
            description: {
                ru: 'Ляг на спину, согни колени и поставь стопы на пол. Подними таз до комфортной линии корпуса и плавно опусти.',
                en: 'Lie on your back with knees bent and feet on the floor. Lift your hips to a comfortable body line, then lower slowly.'
            },
            safety: {
                ru: 'Не переразгибай поясницу; при дискомфорте прекрати упражнение.',
                en: 'Do not overarch your lower back; stop if uncomfortable.'
            }
        },
        {
            id: 'dead-bug',
            frameId: 'dead-bug',
            icon: '🐞',
            name: {
                ru: 'Жук лёжа',
                en: 'Dead bug'
            },
            dose: {
                ru: '5–8 повторений на сторону',
                en: '5–8 reps per side'
            },
            description: {
                ru: 'Ляг на спину, подними согнутые ноги и поочерёдно опускай противоположные руку и ногу на комфортную амплитуду.',
                en: 'Lie on your back with knees lifted and bent, then slowly lower the opposite arm and leg within a comfortable range.'
            },
            safety: {
                ru: 'Не допускай болезненного напряжения поясницы; сократи амплитуду при необходимости.',
                en: 'Avoid painful lower-back strain and reduce the range if needed.'
            }
        }
    ]
};

window.FIT_EXTRA_EXERCISES = {
    back: [{
            id: 'supermans',
            frameId: 'bird-dog',
            icon: '🦸',
            name: {
                ru: 'Супермен',
                en: 'Supermans'
            },
            dose: {
                ru: '2–3 удержания по 5 секунд',
                en: '2–3 holds for 5 seconds'
            },
            description: {
                ru: 'Ляг на живот, вытяни руки вперёд. Подними руки и ноги от пола, задержись и плавно вернись.',
                en: 'Lie on your stomach with arms extended. Lift arms and legs off the floor, hold, then lower.'
            },
            safety: {
                ru: 'Не поднимай голову слишком высоко; смотри в пол.',
                en: 'Do not lift your head too high; keep your gaze down.'
            }
        },
        {
            id: 'hyperextensions',
            frameId: 'hyperextensions',
            icon: '🧎',
            name: {
                ru: 'Гиперэкстензия на скамье',
                en: 'Hyperextensions'
            },
            dose: {
                ru: '8–12 повторений',
                en: '8–12 reps'
            },
            description: {
                ru: 'На скамье для гиперэкстензии, руки на груди, плавно опусти корпус вниз и поднимись обратно.',
                en: 'On a hyperextension bench with arms crossed on your chest, slowly lower your torso and lift it back up.'
            },
            safety: {
                ru: 'Не поднимайся выше линии ног.',
                en: 'Do not rise above the line of your legs.'
            }
        },
        {
            id: 'back-extension-ball',
            frameId: 'back-extension-ball',
            icon: '⚽',
            name: {
                ru: 'Разгибание спины на мяче',
                en: 'Back extension on stability ball'
            },
            dose: {
                ru: '8–10 повторений',
                en: '8–10 reps'
            },
            description: {
                ru: 'Ляг животом на фитбол, стопы упираются в пол. Плавно подними грудь и вернись.',
                en: 'Lie with your stomach on a stability ball, feet planted. Gently lift your chest and return.'
            },
            safety: {
                ru: 'Держи движение плавным, не переразгибайся.',
                en: 'Keep the movement smooth and avoid overextending.'
            }
        },
        {
            id: 'good-mornings-smith',
            frameId: 'good-mornings-smith',
            icon: '🏋️',
            name: {
                ru: 'Наклоны со штангой в Смите',
                en: 'Smith machine good mornings'
            },
            dose: {
                ru: '8–10 повторений',
                en: '8–10 reps'
            },
            description: {
                ru: 'Штанга на плечах, ноги на ширине плеч. Наклоняйся вперёд с прямой спиной и возвращайся.',
                en: 'Barbell on your shoulders, feet shoulder-width. Hinge forward with a neutral back and return.'
            },
            safety: {
                ru: 'Начни с пустого грифа.',
                en: 'Start with an empty bar.'
            }
        },
        {
            id: 'dead-lift-smith',
            frameId: 'dead-lift-smith',
            icon: '🏋️‍♂️',
            name: {
                ru: 'Становая тяга в Смите',
                en: 'Smith machine deadlifts'
            },
            dose: {
                ru: '6–10 повторений',
                en: '6–10 reps'
            },
            description: {
                ru: 'Встань под гриф, наклонись с прямой спиной и подними штангу до полного выпрямления.',
                en: 'Stand under the bar, hinge with a neutral back, and lift the bar to full extension.'
            },
            safety: {
                ru: 'Начни с лёгкого веса; не округляй спину.',
                en: 'Start light; keep your back neutral.'
            }
        },
        {
            id: 'side-plank',
            frameId: 'side-plank',
            icon: '📐',
            name: {
                ru: 'Боковая планка',
                en: 'Side plank'
            },
            dose: {
                ru: '10–20 секунд на сторону',
                en: '10–20 seconds per side'
            },
            description: {
                ru: 'Ляг на бок, обопрись на предплечье и подними таз, удерживая тело прямым.',
                en: 'Lie on your side, rest on your forearm, and lift your hips, keeping your body straight.'
            },
            safety: {
                ru: 'Не проваливай таз; при необходимости держи колени согнутыми.',
                en: 'Do not drop your hips; keep knees bent if needed.'
            }
        },
        {
            id: 'ab-rollout',
            frameId: 'ab-rollout',
            icon: '🎯',
            name: {
                ru: 'Прокат с грифом',
                en: 'Ab rollout with barbell'
            },
            dose: {
                ru: '5–8 повторений',
                en: '5–8 reps'
            },
            description: {
                ru: 'Стоя на коленях, гриф на полу. Медленно выкати его вперёд и верни обратно.',
                en: 'Kneeling with the bar on the floor, slowly roll it forward and back.'
            },
            safety: {
                ru: 'Не прогибай поясницу; сократи амплитуду при необходимости.',
                en: 'Do not arch your lower back; reduce the range if needed.'
            }
        },
        {
            id: 'crunches',
            frameId: 'crunches',
            icon: '🤸',
            name: {
                ru: 'Скручивания',
                en: 'Crunches'
            },
            dose: {
                ru: '10–15 повторений',
                en: '10–15 reps'
            },
            description: {
                ru: 'Ляг на спину, согни колени. Плавно подними плечи и лопатки и вернись.',
                en: 'Lie on your back with knees bent. Slowly lift your shoulders and shoulder blades, then lower.'
            },
            safety: {
                ru: 'Не тяни себя за шею.',
                en: 'Do not pull on your neck.'
            }
        },
        {
            id: 'cross-body-crunch',
            frameId: 'cross-body-crunch',
            icon: '🔄',
            name: {
                ru: 'Диагональные скручивания',
                en: 'Cross body crunch'
            },
            dose: {
                ru: '8–10 на сторону',
                en: '8–10 per side'
            },
            description: {
                ru: 'Ляг на спину, колени согнуты. Тянись правым локтем к левому колену и наоборот.',
                en: 'Lie on your back with knees bent. Reach your right elbow to your left knee and alternate.'
            },
            safety: {
                ru: 'Двигайся медленно; не тяни голову руками.',
                en: 'Move slowly; do not pull your head with your hands.'
            }
        }
    ],
    cardio: [{
            id: 'ankle-circles',
            frameId: 'ankle-circles',
            icon: '🦶',
            name: {
                ru: 'Круги стопами',
                en: 'Ankle circles'
            },
            dose: {
                ru: '10 кругов в каждую сторону на ногу',
                en: '10 circles each way per foot'
            },
            description: {
                ru: 'Стоя на одной ноге (с опорой), подними вторую и нарисуй стопой круги.',
                en: 'Standing on one leg (with support), lift the other and draw circles with your foot.'
            },
            safety: {
                ru: 'Держись за опору для равновесия.',
                en: 'Hold a support for balance.'
            }
        },
        {
            id: 'knee-circles',
            frameId: 'knee-circles',
            icon: '🦵',
            name: {
                ru: 'Круги коленями',
                en: 'Knee circles'
            },
            dose: {
                ru: '8–10 кругов в каждую сторону',
                en: '8–10 circles each way'
            },
            description: {
                ru: 'Стопы вместе, колени слегка согнуты. Медленно описывай коленями круги.',
                en: 'Feet together, knees slightly bent. Slowly draw circles with your knees.'
            },
            safety: {
                ru: 'Не отрывай стопы от пола.',
                en: 'Keep your feet on the floor.'
            }
        },
        {
            id: 'rocking-calf-raise',
            frameId: 'rocking-calf-raise',
            icon: '🪑',
            name: {
                ru: 'Качающиеся подъёмы на носки',
                en: 'Rocking calf raises'
            },
            dose: {
                ru: '10–12 повторений',
                en: '10–12 reps'
            },
            description: {
                ru: 'Переноси вес с пяток на носки и обратно, удерживая равновесие.',
                en: 'Shift your weight from heels to toes and back, keeping balance.'
            },
            safety: {
                ru: 'Держись за опору при необходимости.',
                en: 'Hold a support if needed.'
            }
        },
        {
            id: 'walking-lunges',
            frameId: 'walking-lunges',
            icon: '🚶‍♂️',
            name: {
                ru: 'Ходячие выпады',
                en: 'Walking lunges'
            },
            dose: {
                ru: '6–8 шагов на ногу',
                en: '6–8 steps per leg'
            },
            description: {
                ru: 'Делай шаг вперёд и опускайся в выпад, затем поднимайся и шагай другой ногой.',
                en: 'Step forward into a lunge, rise, and step with the other leg.'
            },
            safety: {
                ru: 'Держи колено над стопой, не заводи за носок.',
                en: 'Keep your knee over your foot, not past the toes.'
            }
        },
        {
            id: 'step-ups-barbell',
            frameId: 'step-ups-barbell',
            icon: '🪜',
            name: {
                ru: 'Зашагивания со штангой',
                en: 'Barbell step ups'
            },
            dose: {
                ru: '8–10 на ногу',
                en: '8–10 per leg'
            },
            description: {
                ru: 'Штанга на плечах. Поочерёдно зашагивай на устойчивую платформу и спускайся.',
                en: 'Barbell on shoulders. Alternate stepping up onto a sturdy platform and down.'
            },
            safety: {
                ru: 'Начни с пустого грифа или без веса.',
                en: 'Start with an empty bar or no weight.'
            }
        },
        {
            id: 'step-ups-dumbbell',
            frameId: 'step-ups-dumbbell',
            icon: '🪜',
            name: {
                ru: 'Зашагивания с гантелями',
                en: 'Dumbbell step ups'
            },
            dose: {
                ru: '8–10 на ногу',
                en: '8–10 per leg'
            },
            description: {
                ru: 'С гантелями в руках поочерёдно зашагивай на платформу и спускайся.',
                en: 'With dumbbells in hands, alternate stepping onto a platform and down.'
            },
            safety: {
                ru: 'Платформа должна быть устойчивой.',
                en: 'The platform must be stable.'
            }
        },
        {
            id: 'leg-extensions',
            frameId: 'leg-extensions',
            icon: '🦵',
            name: {
                ru: 'Разгибания ног в тренажёре',
                en: 'Leg extensions'
            },
            dose: {
                ru: '10–12 повторений',
                en: '10–12 reps'
            },
            description: {
                ru: 'Сядь в тренажёр, выпрями ноги до полного разгибания и плавно верни.',
                en: 'Sit in the machine, extend your legs fully, then slowly return.'
            },
            safety: {
                ru: 'Не блокируй колени в верхней точке.',
                en: 'Do not lock your knees at the top.'
            }
        },
        {
            id: 'seated-ab-crunch',
            frameId: 'seated-ab-crunch',
            icon: '🧎',
            name: {
                ru: 'Скручивания на блоке сидя',
                en: 'Seated cable crunch'
            },
            dose: {
                ru: '10–12 повторений',
                en: '10–12 reps'
            },
            description: {
                ru: 'Сядь спиной к блоку, канат за головой. Сгибайся в поясе, приближая локти к коленям.',
                en: 'Sit facing away from the stack, rope behind your head. Bend at the waist, bringing elbows toward knees.'
            },
            safety: {
                ru: 'Не тяни шею руками.',
                en: 'Do not pull your neck with your hands.'
            }
        },
        {
            id: 'air-bike',
            frameId: 'air-bike',
            icon: '🚴',
            name: {
                ru: 'Велосипед',
                en: 'Air bike'
            },
            dose: {
                ru: '20–30 секунд',
                en: '20–30 seconds'
            },
            description: {
                ru: 'Ляг на спину, руки за головой. Поочерёдно тянись локтем к противоположному колену.',
                en: 'Lie on your back, hands behind your head. Alternate elbow to opposite knee.'
            },
            safety: {
                ru: 'Поясница прижата к полу.',
                en: 'Keep your lower back pressed to the floor.'
            }
        },
        {
            id: 'bent-knee-hip-raise',
            frameId: 'bent-knee-hip-raise',
            icon: '🔄',
            name: {
                ru: 'Подъём таза с согнутыми коленями',
                en: 'Bent knee hip raise'
            },
            dose: {
                ru: '10–12 повторений',
                en: '10–12 reps'
            },
            description: {
                ru: 'Ляг на спину, ноги согнуты. Подними таз и колени к груди, затем вернись.',
                en: 'Lie on your back with knees bent. Lift your hips and knees toward your chest, then lower.'
            },
            safety: {
                ru: 'Не отрывай голову и плечи от пола.',
                en: 'Keep your head and shoulders on the floor.'
            }
        },
        {
            id: 'flutter-kicks',
            frameId: 'flutter-kicks',
            icon: '🏊',
            name: {
                ru: 'Попеременные махи ногами',
                en: 'Flutter kicks'
            },
            dose: {
                ru: '20–30 секунд',
                en: '20–30 seconds'
            },
            description: {
                ru: 'Лёжа на спине, руки вдоль тела. Поочерёдно поднимай прямые ноги на небольшую высоту.',
                en: 'Lie on your back, arms at your sides. Alternate lifting straight legs slightly.'
            },
            safety: {
                ru: 'Поясница прижата к полу; сократи амплитуду при необходимости.',
                en: 'Keep lower back pressed down; reduce range if needed.'
            }
        }
    ],
    strength: [{
            id: 'incline-push',
            frameId: 'incline-push',
            icon: '🧱',
            name: {
                ru: 'Отжимания от устойчивого стола',
                en: 'Incline push-ups'
            },
            dose: {
                ru: '6–10 повторений · 1–2 подхода',
                en: '6–10 reps · 1–2 sets'
            },
            description: {
                ru: 'Поставь ладони на устойчивую высокую опору, сохраняя корпус прямым, согни руки и оттолкнись обратно.',
                en: 'Place your hands on a sturdy elevated surface, keep your body aligned, bend your arms, and push back.'
            },
            safety: {
                ru: 'Убедись, что опора не скользит и не опрокинется.',
                en: 'Make sure the support is stable and will not slide or tip.'
            }
        },
        {
            id: 'water-bottle-row',
            frameId: 'water-bottle-row',
            icon: '🧴',
            name: {
                ru: 'Тяга лёгкой бутылки к корпусу',
                en: 'Light bottle row'
            },
            dose: {
                ru: '8–12 повторений на руку',
                en: '8–12 reps per arm'
            },
            description: {
                ru: 'Возьми небольшую бутылку с водой, слегка наклони корпус с ровной спиной и подтяни локоть к боку.',
                en: 'Hold a small water bottle, hinge forward with a neutral back, and draw your elbow toward your side.'
            },
            safety: {
                ru: 'Начни с лёгкой бутылки и устойчивого положения; не делай рывков.',
                en: 'Start with a light bottle and a stable stance; avoid jerking.'
            }
        },
        {
            id: 'reverse-lunge-supported',
            frameId: 'reverse-lunge-supported',
            icon: '🦵',
            name: {
                ru: 'Шаг назад с опорой',
                en: 'Supported reverse step'
            },
            dose: {
                ru: '5–8 повторений на сторону',
                en: '5–8 reps per side'
            },
            description: {
                ru: 'Держась за устойчивую опору, сделай небольшой шаг назад и вернись в исходное положение, чередуя ноги.',
                en: 'Hold a stable support, take a small step backward, return to start, and alternate legs.'
            },
            safety: {
                ru: 'Делай короткий шаг и не опускайся глубоко; при дискомфорте замени упражнение.',
                en: 'Use a short step and shallow range; switch exercises if uncomfortable.'
            }
        },
        {
            id: 'squats-dumbbells',
            frameId: 'squats-dumbbells',
            icon: '🏋️',
            name: {
                ru: 'Приседания с гантелями',
                en: 'Dumbbell squats'
            },
            dose: {
                ru: '8–12 повторений',
                en: '8–12 reps'
            },
            description: {
                ru: 'С гантелями в руках приседай до параллели бёдер с полом и возвращайся в стойку.',
                en: 'With dumbbells in hand, squat until your thighs are parallel to the floor and stand back up.'
            },
            safety: {
                ru: 'Колени направлены туда же, куда носки.',
                en: 'Keep your knees tracking over your toes.'
            }
        },
        {
            id: 'squats-to-bench',
            frameId: 'squats-to-bench',
            icon: '🪑',
            name: {
                ru: 'Приседания до скамьи',
                en: 'Squats to bench'
            },
            dose: {
                ru: '8–12 повторений',
                en: '8–12 reps'
            },
            description: {
                ru: 'С гантелями или без приседай до касания скамьи и вставай.',
                en: 'With or without dumbbells, squat until you lightly touch the bench, then stand.'
            },
            safety: {
                ru: 'Не садись на скамью полностью.',
                en: 'Do not sit fully on the bench.'
            }
        },
        {
            id: 'front-squat-barbell',
            frameId: 'front-squat-barbell',
            icon: '🏋️',
            name: {
                ru: 'Фронтальный присед со штангой',
                en: 'Front squat'
            },
            dose: {
                ru: '6–10 повторений',
                en: '6–10 reps'
            },
            description: {
                ru: 'Штанга на передних дельтах, руки скрещены. Приседай до параллели и возвращайся.',
                en: 'Barbell on front delts, arms crossed. Squat to parallel and stand back up.'
            },
            safety: {
                ru: 'Начни с лёгкого веса; держи спину ровной.',
                en: 'Start light; keep your back straight.'
            }
        },
        {
            id: 'thigh-abductor',
            frameId: 'thigh-abductor',
            icon: '↔️',
            name: {
                ru: 'Разведение ног в тренажёре',
                en: 'Thigh abductor'
            },
            dose: {
                ru: '10–15 повторений',
                en: '10–15 reps'
            },
            description: {
                ru: 'Сядь в тренажёр, разведи бёдра в стороны и плавно верни.',
                en: 'Sit in the machine, push your thighs outward, and slowly return.'
            },
            safety: {
                ru: 'Двигайся без рывков.',
                en: 'Move without jerking.'
            }
        },
        {
            id: 'thigh-adductor',
            frameId: 'thigh-adductor',
            icon: '↔️',
            name: {
                ru: 'Сведение ног в тренажёре',
                en: 'Thigh adductor'
            },
            dose: {
                ru: '10–15 повторений',
                en: '10–15 reps'
            },
            description: {
                ru: 'Сядь в тренажёр, сведи бёдра вместе и плавно верни.',
                en: 'Sit in the machine, bring your thighs together, and slowly return.'
            },
            safety: {
                ru: 'Двигайся без рывков.',
                en: 'Move without jerking.'
            }
        },
        {
            id: 'bench-dips',
            frameId: 'bench-dips',
            icon: '💪',
            name: {
                ru: 'Обратные отжимания от скамьи',
                en: 'Bench dips'
            },
            dose: {
                ru: '6–10 повторений',
                en: '6–10 reps'
            },
            description: {
                ru: 'Сядь на скамью, ладони рядом с бёдрами. Опусти корпус, сгибая локти, и поднимись.',
                en: 'Sit on a bench with palms next to your hips. Lower your body by bending your elbows, then push up.'
            },
            safety: {
                ru: 'Не опускайся ниже 90° в локтях.',
                en: 'Do not go below 90° at the elbows.'
            }
        },
        {
            id: 'lunges-dumbbell',
            frameId: 'lunges-dumbbell',
            icon: '🦵',
            name: {
                ru: 'Выпады с гантелями',
                en: 'Dumbbell lunges'
            },
            dose: {
                ru: '6–8 на ногу',
                en: '6–8 per leg'
            },
            description: {
                ru: 'С гантелями в руках делай шаг вперёд и опускайся в выпад, затем возвращайся.',
                en: 'With dumbbells in hand, step forward into a lunge and return.'
            },
            safety: {
                ru: 'Колено не выходит за носок.',
                en: 'Keep your knee behind your toes.'
            }
        }
    ]
};