'use strict';

// Каталог упражнений FITСтудент: 45 упражнений (по 15 в каждой программе), у каждого — анимация (svg + gif).
// work.unit   — 'reps' (повторения) или 'sec' (секунды: работа или удержание)
// work.side   — true, если количество указано на каждую сторону / ногу
// work.hold   — удержание в секундах на каждое повторение (только для unit: 'reps')
// hard: true — «Сложное»: в подсказке есть кнопка «Пропустить» (упражнение засчитывается)
// work.levels — [подходы, повторы или секунды] для beginner / intermediate / advanced
window.FIT_EXERCISES = {
  "back": [
    {
      "id": "chin-tuck",
      "icon": "🧘",
      "focus": {
        "key": "neck",
        "ru": "Шея и осанка",
        "en": "Neck & posture"
      },
      "name": {
        "ru": "Втягивание подбородка у стены",
        "en": "Wall chin tucks"
      },
      "work": {
        "unit": "reps",
        "side": false,
        "hold": 3,
        "levels": {
          "beginner": [
            1,
            6
          ],
          "intermediate": [
            2,
            8
          ],
          "advanced": [
            3,
            10
          ]
        }
      },
      "description": {
        "ru": "Встань спиной к стене. Мягко отведи голову назад, как будто делаешь «двойной подбородок», задержись на 3 секунды и вернись.",
        "en": "Stand with your back to a wall. Gently draw your head straight back, as if making a double chin, hold for 3 seconds and release."
      },
      "safety": {
        "ru": "Взгляд прямо, голову не запрокидывай. Усилие лёгкое, без боли.",
        "en": "Keep your gaze level and do not tilt your head back. Light effort, no pain."
      },
      "gif": "gifs/chin-tuck.gif",
      "svg": "svg/chin-tuck.svg"
    },
    {
      "id": "seated-forward-fold",
      "icon": "🪑",
      "focus": {
        "key": "lower-back",
        "ru": "Поясница",
        "en": "Lower back"
      },
      "name": {
        "ru": "Наклон сидя вперёд",
        "en": "Seated forward fold"
      },
      "work": {
        "unit": "sec",
        "side": false,
        "hold": 0,
        "levels": {
          "beginner": [
            3,
            10
          ],
          "intermediate": [
            4,
            12
          ],
          "advanced": [
            5,
            15
          ]
        }
      },
      "description": {
        "ru": "Сядь на край стула, стопы на полу. На выдохе плавно наклонись вперёд, опусти руки к голеням и расслабь шею.",
        "en": "Sit on the edge of a chair with your feet flat. Exhale and fold slowly forward, let your hands slide toward your shins and relax your neck."
      },
      "safety": {
        "ru": "Не тянись рывками. Если больно в пояснице — наклон делай меньше.",
        "en": "No bouncing. If your lower back hurts, fold less deeply."
      },
      "gif": "gifs/seated-forward-fold.gif",
      "svg": "svg/seated-forward-fold.svg"
    },
    {
      "id": "childs-pose",
      "icon": "🧎",
      "focus": {
        "key": "spine",
        "ru": "Позвоночник",
        "en": "Spine"
      },
      "name": {
        "ru": "Поза ребёнка",
        "en": "Child's pose"
      },
      "work": {
        "unit": "sec",
        "side": false,
        "hold": 0,
        "levels": {
          "beginner": [
            2,
            20
          ],
          "intermediate": [
            3,
            25
          ],
          "advanced": [
            4,
            30
          ]
        }
      },
      "description": {
        "ru": "Встань на колени, сядь тазом на пятки и вытяни руки вперёд по полу. Опусти грудь к бёдрам и дыши в спину.",
        "en": "Kneel, sit your hips back toward your heels and slide your arms forward on the floor. Lower your chest toward your thighs and breathe into your back."
      },
      "safety": {
        "ru": "При боли в коленях подложи под них свёрнутое полотенце.",
        "en": "If your knees hurt, place a folded towel under them."
      },
      "gif": "gifs/childs-pose.gif",
      "svg": "svg/childs-pose.svg"
    },
    {
      "id": "sphinx-pose",
      "icon": "🦁",
      "focus": {
        "key": "spine",
        "ru": "Позвоночник",
        "en": "Spine"
      },
      "name": {
        "ru": "Сфинкс",
        "en": "Sphinx pose"
      },
      "work": {
        "unit": "sec",
        "side": false,
        "hold": 0,
        "levels": {
          "beginner": [
            2,
            15
          ],
          "intermediate": [
            3,
            15
          ],
          "advanced": [
            3,
            20
          ]
        }
      },
      "description": {
        "ru": "Лёжа на животе, обопрись на предплечья (локти под плечами). Мягко приподними грудь, смотри вперёд, плечи опусти от ушей.",
        "en": "Lie on your stomach and prop yourself on your forearms (elbows under shoulders). Lift your chest gently, look ahead and keep shoulders away from your ears."
      },
      "safety": {
        "ru": "Не вдавливай поясницу: прогиб должен быть мягким и безболезненным.",
        "en": "Do not crunch your lower back; keep the arch mild and pain-free."
      },
      "gif": "gifs/sphinx-pose.gif",
      "svg": "svg/sphinx-pose.svg"
    },
    {
      "id": "quad-stretch",
      "icon": "🦩",
      "focus": {
        "key": "legs",
        "ru": "Ноги",
        "en": "Legs"
      },
      "name": {
        "ru": "Растяжка квадрицепса стоя",
        "en": "Standing quad stretch"
      },
      "work": {
        "unit": "sec",
        "side": true,
        "hold": 0,
        "levels": {
          "beginner": [
            2,
            15
          ],
          "intermediate": [
            3,
            20
          ],
          "advanced": [
            3,
            30
          ]
        }
      },
      "description": {
        "ru": "Стоя прямо, согни ногу и возьмись рукой за стопу. Мягко подтяни пятку к ягодице, колени держи рядом. Смени ногу.",
        "en": "Stand tall, bend one leg and hold the foot with your hand. Gently draw the heel toward your glute, keeping knees together. Switch legs."
      },
      "safety": {
        "ru": "Не прогибай поясницу; при потере равновесия держись за опору.",
        "en": "Do not arch your lower back; hold a support if you lose balance."
      },
      "gif": "gifs/quad-stretch.gif",
      "svg": "svg/quad-stretch.svg"
    },
    {
      "id": "overhead-reach",
      "icon": "🙆",
      "focus": {
        "key": "full-body",
        "ru": "Всё тело",
        "en": "Full body"
      },
      "name": {
        "ru": "Потягивание вверх на носках",
        "en": "Overhead reach on tiptoes"
      },
      "work": {
        "unit": "reps",
        "side": false,
        "hold": 0,
        "levels": {
          "beginner": [
            1,
            6
          ],
          "intermediate": [
            2,
            8
          ],
          "advanced": [
            3,
            10
          ]
        }
      },
      "description": {
        "ru": "Встань прямо, на вдохе поднимись на носки и вытяни руки вверх, как будто тянешься к потолку. На выдохе опустись.",
        "en": "Stand tall. Inhale, rise onto your toes and reach your arms up toward the ceiling. Exhale and lower back down."
      },
      "safety": {
        "ru": "При головокружении держись свободной рукой за опору.",
        "en": "If you feel dizzy, hold on to a support."
      },
      "gif": "gifs/overhead-reach.gif",
      "svg": "svg/overhead-reach.svg"
    },
    {
      "id": "seated-knee-extension",
      "icon": "💺",
      "focus": {
        "key": "legs",
        "ru": "Ноги",
        "en": "Legs"
      },
      "name": {
        "ru": "Разгибание колена сидя",
        "en": "Seated knee extension"
      },
      "work": {
        "unit": "reps",
        "side": true,
        "hold": 0,
        "levels": {
          "beginner": [
            1,
            8
          ],
          "intermediate": [
            2,
            10
          ],
          "advanced": [
            3,
            12
          ]
        }
      },
      "description": {
        "ru": "Сядь прямо на стул. Медленно выпрями одну ногу до горизонтали, на секунду напряги бедро и опусти. Повтори другой ногой.",
        "en": "Sit tall on a chair. Slowly straighten one leg until it is level, squeeze the thigh for a second and lower it. Repeat with the other leg."
      },
      "safety": {
        "ru": "Колено полностью не «запирай», спину держи прямой.",
        "en": "Do not snap the knee into lockout; keep your back straight."
      },
      "gif": "gifs/seated-knee-extension.gif",
      "svg": "svg/seated-knee-extension.svg"
    },
    {
      "id": "hamstring-stretch",
      "icon": "🦵",
      "focus": {
        "key": "hamstrings",
        "ru": "Задняя поверхность бедра",
        "en": "Hamstrings"
      },
      "name": {
        "ru": "Растяжка бедра: нога на ступеньке",
        "en": "Hamstring stretch with foot on a step"
      },
      "work": {
        "unit": "sec",
        "side": true,
        "hold": 0,
        "levels": {
          "beginner": [
            2,
            15
          ],
          "intermediate": [
            3,
            20
          ],
          "advanced": [
            3,
            30
          ]
        }
      },
      "description": {
        "ru": "Поставь пятку на невысокую ступеньку, носок на себя. Со спиной прямой наклонись вперёд до лёгкого натяжения сзади бедра.",
        "en": "Rest your heel on a low step with toes pulled back. Keep your back straight and lean forward until you feel a light stretch behind the thigh."
      },
      "safety": {
        "ru": "Не округляй спину и не тянись до боли.",
        "en": "Do not round your back and never stretch into pain."
      },
      "gif": "gifs/hamstring-stretch.gif",
      "svg": "svg/hamstring-stretch.svg"
    },
    {
      "id": "side-bend",
      "icon": "↔️",
      "focus": {
        "key": "spine",
        "ru": "Позвоночник",
        "en": "Spine"
      },
      "name": {
        "ru": "Боковые наклоны с руками вверх",
        "en": "Standing side bend"
      },
      "work": {
        "unit": "reps",
        "side": true,
        "hold": 0,
        "levels": {
          "beginner": [
            1,
            6
          ],
          "intermediate": [
            2,
            8
          ],
          "advanced": [
            3,
            10
          ]
        }
      },
      "description": {
        "ru": "Встань ровно, ноги на ширине таза, руки сомкни над головой. Плавно наклонись в сторону, вернись в центр и повтори в другую сторону.",
        "en": "Stand with feet hip-width apart and hands joined overhead. Bend smoothly to one side, return to centre and repeat on the other side."
      },
      "safety": {
        "ru": "Не заваливайся вперёд или назад: наклон строго в сторону.",
        "en": "Do not lean forward or back; bend purely sideways."
      },
      "gif": "gifs/side-bend.gif",
      "svg": "svg/side-bend.svg"
    },
    {
      "id": "hip-flexor-stretch",
      "icon": "🏃",
      "focus": {
        "key": "hips",
        "ru": "Таз и бёдра",
        "en": "Hips"
      },
      "name": {
        "ru": "Растяжка сгибателей бедра",
        "en": "Half-kneeling hip flexor stretch"
      },
      "work": {
        "unit": "sec",
        "side": true,
        "hold": 0,
        "levels": {
          "beginner": [
            2,
            20
          ],
          "intermediate": [
            3,
            25
          ],
          "advanced": [
            3,
            30
          ]
        }
      },
      "description": {
        "ru": "Встань в выпад на одно колено. Подай таз слегка вперёд, подними руки вверх и почувствуй растяжение спереди бедра задней ноги.",
        "en": "Get into a half-kneeling lunge. Shift your pelvis slightly forward, raise your arms and feel the stretch at the front of the rear thigh."
      },
      "safety": {
        "ru": "Не прогибай поясницу; колено подложи на коврик.",
        "en": "Do not overarch your lower back; kneel on a mat."
      },
      "gif": "gifs/hip-flexor-stretch.gif",
      "svg": "svg/hip-flexor-stretch.svg"
    },
    {
      "id": "neck-tilt",
      "focus": {
        "key": "neck",
        "ru": "Шея и осанка",
        "en": "Neck & posture"
      },
      "icon": "🙆",
      "name": {
        "ru": "Наклоны головы в сторону",
        "en": "Side neck tilts"
      },
      "description": {
        "ru": "Сядь или встань прямо, плечи расслаблены. Медленно наклони голову к плечу до лёгкого растяжения сбоку шеи, задержись на пару секунд и вернись. Повтори в другую сторону.",
        "en": "Sit or stand tall with relaxed shoulders. Slowly tilt your head toward one shoulder until you feel a light stretch along the side of your neck, hold for a couple of seconds and return. Repeat to the other side."
      },
      "safety": {
        "ru": "Плечо не поднимай к уху, голову руками не тяни, без рывков.",
        "en": "Keep your shoulder away from your ear, do not pull your head with your hand, no jerking."
      },
      "gif": "gifs/neck-tilt.gif",
      "svg": "svg/neck-tilt.svg",
      "work": {
        "unit": "reps",
        "side": true,
        "hold": 0,
        "levels": {
          "beginner": [
            1,
            5
          ],
          "intermediate": [
            2,
            6
          ],
          "advanced": [
            2,
            8
          ]
        }
      }
    },
    {
      "id": "glute-bridge",
      "focus": {
        "key": "glutes",
        "ru": "Ягодицы",
        "en": "Glutes"
      },
      "icon": "🌉",
      "name": {
        "ru": "Ягодичный мост",
        "en": "Glute bridge"
      },
      "description": {
        "ru": "Ляг на спину, колени согнуты, стопы на полу. На выдохе напряги ягодицы и подними таз до прямой линии от плеч до колен, на секунду задержись и плавно опустись.",
        "en": "Lie on your back with knees bent and feet flat. Exhale, squeeze your glutes and lift your hips until shoulders, hips and knees form a line. Hold for a second and lower slowly."
      },
      "safety": {
        "ru": "Не прогибай поясницу в верхней точке — работай ягодицами. При боли уменьши высоту подъёма.",
        "en": "Do not over-arch your lower back at the top — lift with your glutes. If it hurts, lift less."
      },
      "gif": "gifs/glute-bridge.gif",
      "svg": "svg/glute-bridge.svg",
      "work": {
        "unit": "reps",
        "side": false,
        "hold": 2,
        "levels": {
          "beginner": [
            1,
            8
          ],
          "intermediate": [
            2,
            10
          ],
          "advanced": [
            3,
            12
          ]
        }
      }
    },
    {
      "id": "bird-dog",
      "focus": {
        "key": "lower-back",
        "ru": "Поясница",
        "en": "Lower back"
      },
      "icon": "🐕",
      "name": {
        "ru": "Птица-собака",
        "en": "Bird dog"
      },
      "description": {
        "ru": "Встань на четвереньки: кисти под плечами, колени под тазом. Одновременно вытяни вперёд одну руку и назад противоположную ногу, спина ровная. Вернись и смени сторону.",
        "en": "Start on hands and knees, wrists under shoulders, knees under hips. Reach one arm forward and the opposite leg back at the same time, keeping your back flat. Return and switch sides."
      },
      "safety": {
        "ru": "Не заваливай таз в сторону и не прогибай поясницу. Двигайся медленно.",
        "en": "Do not let your hips tilt sideways or your lower back sag. Move slowly."
      },
      "gif": "gifs/bird-dog.gif",
      "svg": "svg/bird-dog.svg",
      "work": {
        "unit": "reps",
        "side": true,
        "hold": 0,
        "levels": {
          "beginner": [
            1,
            5
          ],
          "intermediate": [
            2,
            6
          ],
          "advanced": [
            3,
            8
          ]
        }
      }
    },
    {
      "id": "superman",
      "focus": {
        "key": "lower-back",
        "ru": "Поясница",
        "en": "Lower back"
      },
      "icon": "🦸",
      "name": {
        "ru": "Супермен",
        "en": "Superman"
      },
      "description": {
        "ru": "Лёжа на животе, вытяни руки вперёд. На выдохе мягко приподними руки, грудь и ноги на пару сантиметров, задержись на 2–3 секунды и плавно опустись.",
        "en": "Lie face down with your arms stretched forward. Exhale and gently lift arms, chest and legs a few centimeters, hold for 2–3 seconds and lower slowly."
      },
      "safety": {
        "ru": "Смотри в пол, шею не запрокидывай. Поднимайся невысоко и без боли в пояснице.",
        "en": "Keep your gaze on the floor and do not tilt your neck back. Lift only slightly and without lower-back pain."
      },
      "gif": "gifs/superman.gif",
      "svg": "svg/superman.svg",
      "work": {
        "unit": "reps",
        "side": false,
        "hold": 3,
        "levels": {
          "beginner": [
            1,
            6
          ],
          "intermediate": [
            2,
            8
          ],
          "advanced": [
            3,
            10
          ]
        }
      }
    },
    {
      "id": "wall-angels",
      "focus": {
        "key": "shoulders",
        "ru": "Плечи",
        "en": "Shoulders"
      },
      "icon": "👼",
      "name": {
        "ru": "Ангелы у стены",
        "en": "Wall angels"
      },
      "description": {
        "ru": "Встань спиной к стене: затылок, лопатки и таз касаются её. Согни руки буквой «W» и скользи ими вверх по стене до «Y», затем вернись.",
        "en": "Stand with your back against a wall: head, shoulder blades and hips touching it. Bend your arms into a \"W\" and slide them up the wall into a \"Y\", then return."
      },
      "safety": {
        "ru": "Не прогибай поясницу и не отрывай руки от стены. Работай в амплитуде без боли.",
        "en": "Do not arch your lower back or lift your arms off the wall. Stay within a pain-free range."
      },
      "gif": "gifs/wall-angels.gif",
      "svg": "svg/wall-angels.svg",
      "work": {
        "unit": "reps",
        "side": false,
        "hold": 0,
        "levels": {
          "beginner": [
            1,
            6
          ],
          "intermediate": [
            2,
            8
          ],
          "advanced": [
            3,
            10
          ]
        }
      }
    }
  ],
  "cardio": [
    {
      "id": "jumping-jacks",
      "icon": "⭐",
      "focus": {
        "key": "full-body",
        "ru": "Всё тело",
        "en": "Full body"
      },
      "name": {
        "ru": "Прыжки «звёздочка»",
        "en": "Jumping jacks"
      },
      "work": {
        "unit": "sec",
        "side": false,
        "hold": 0,
        "levels": {
          "beginner": [
            2,
            20
          ],
          "intermediate": [
            3,
            30
          ],
          "advanced": [
            4,
            40
          ]
        }
      },
      "description": {
        "ru": "Из положения «ноги вместе, руки вдоль тела» прыжком разведи ноги и подними руки вверх, следующим прыжком вернись назад.",
        "en": "From feet together and arms down, jump your feet apart while raising arms overhead, then jump back to the start."
      },
      "safety": {
        "ru": "Приземляйся мягко на носки. При проблемах с коленями делай шаги вместо прыжков.",
        "en": "Land softly on the balls of your feet. With knee issues, step instead of jumping."
      },
      "gif": "gifs/jumping-jacks.gif",
      "svg": "svg/jumping-jacks.svg"
    },
    {
      "id": "burpee",
      "icon": "🔥",
      "focus": {
        "key": "full-body",
        "ru": "Всё тело",
        "en": "Full body"
      },
      "name": {
        "ru": "Берпи",
        "en": "Burpees"
      },
      "work": {
        "unit": "reps",
        "side": false,
        "hold": 0,
        "levels": {
          "beginner": [
            2,
            5
          ],
          "intermediate": [
            3,
            7
          ],
          "advanced": [
            4,
            10
          ]
        }
      },
      "description": {
        "ru": "Из стойки присядь, поставь руки на пол и запрыгни/отшагни в упор лёжа. Вернись в присед и выпрыгни вверх с поднятыми руками.",
        "en": "From standing, squat, put your hands on the floor and jump or step back to a plank. Return to the squat and jump up with arms overhead."
      },
      "safety": {
        "ru": "Держи корпус прямым в упоре. Новичкам — без прыжка и без отжимания.",
        "en": "Keep your body straight in the plank. Beginners: skip the jump and push-up."
      },
      "gif": "gifs/burpee.gif",
      "svg": "svg/burpee.svg",
      "hard": true
    },
    {
      "id": "tuck-jumps",
      "icon": "🚀",
      "focus": {
        "key": "legs",
        "ru": "Ноги",
        "en": "Legs"
      },
      "name": {
        "ru": "Прыжки с подтягиванием коленей",
        "en": "Tuck jumps"
      },
      "work": {
        "unit": "reps",
        "side": false,
        "hold": 0,
        "levels": {
          "beginner": [
            2,
            6
          ],
          "intermediate": [
            3,
            9
          ],
          "advanced": [
            4,
            12
          ]
        }
      },
      "description": {
        "ru": "Слегка присядь, затем выпрыгни вверх и в воздухе подтяни колени к груди. Приземлись мягко на полусогнутые ноги.",
        "en": "Dip into a small squat, jump up and pull your knees toward your chest in the air. Land softly on bent legs."
      },
      "safety": {
        "ru": "Приземляйся мягко на носки; при проблемах с коленями выбери другое упражнение.",
        "en": "Land softly on the balls of your feet; choose another exercise with knee problems."
      },
      "gif": "gifs/tuck-jumps.gif",
      "svg": "svg/tuck-jumps.svg",
      "hard": true
    },
    {
      "id": "ski-hops",
      "icon": "⛷️",
      "focus": {
        "key": "legs",
        "ru": "Ноги",
        "en": "Legs"
      },
      "name": {
        "ru": "Прыжки лыжника",
        "en": "Ski hops"
      },
      "work": {
        "unit": "sec",
        "side": false,
        "hold": 0,
        "levels": {
          "beginner": [
            2,
            20
          ],
          "intermediate": [
            3,
            30
          ],
          "advanced": [
            4,
            40
          ]
        }
      },
      "description": {
        "ru": "Ноги вместе, колени слегка согнуты. Прыгай боком из стороны в сторону, как лыжник на склоне, руки машут в противоположную сторону.",
        "en": "Keep feet together with slightly bent knees. Hop side to side like a skier, swinging your arms the opposite way."
      },
      "safety": {
        "ru": "Прыгай невысоко, приземляйся на мягкие ноги.",
        "en": "Keep hops low and land on soft knees."
      },
      "gif": "gifs/ski-hops.gif",
      "svg": "svg/ski-hops.svg"
    },
    {
      "id": "butt-kicks",
      "icon": "🏃‍♂️",
      "focus": {
        "key": "legs",
        "ru": "Ноги",
        "en": "Legs"
      },
      "name": {
        "ru": "Бег с захлёстом голени",
        "en": "Butt kicks"
      },
      "work": {
        "unit": "sec",
        "side": false,
        "hold": 0,
        "levels": {
          "beginner": [
            2,
            20
          ],
          "intermediate": [
            3,
            30
          ],
          "advanced": [
            4,
            40
          ]
        }
      },
      "description": {
        "ru": "Бегай на месте, поочерёдно доставая пятками до ягодиц. Корпус слегка наклонён вперёд, руки двигаются как при беге.",
        "en": "Jog in place, flicking your heels toward your glutes on each step. Lean slightly forward and swing your arms as in running."
      },
      "safety": {
        "ru": "Колени направлены вниз, не заваливай корпус.",
        "en": "Keep the knees pointing down and do not collapse your torso."
      },
      "gif": "gifs/butt-kicks.gif",
      "svg": "svg/butt-kicks.svg"
    },
    {
      "id": "shadow-boxing",
      "icon": "🥊",
      "focus": {
        "key": "full-body",
        "ru": "Всё тело",
        "en": "Full body"
      },
      "name": {
        "ru": "Бой с тенью",
        "en": "Shadow boxing"
      },
      "work": {
        "unit": "sec",
        "side": false,
        "hold": 0,
        "levels": {
          "beginner": [
            2,
            45
          ],
          "intermediate": [
            3,
            60
          ],
          "advanced": [
            4,
            60
          ]
        }
      },
      "description": {
        "ru": "Встань в боксёрскую стойку. Чередуй прямые удары: передней рукой (джеб) и задней (кросс) с лёгким поворотом корпуса.",
        "en": "Take a boxing stance and alternate straight punches: lead hand (jab) and rear hand (cross) with a slight hip rotation."
      },
      "safety": {
        "ru": "Не выпрямляй локоть до щелчка; возвращай руки к лицу.",
        "en": "Do not snap the elbow into lockout; return hands to your face."
      },
      "gif": "gifs/shadow-boxing.gif",
      "svg": "svg/shadow-boxing.svg"
    },
    {
      "id": "jump-rope",
      "icon": "🪢",
      "focus": {
        "key": "full-body",
        "ru": "Всё тело",
        "en": "Full body"
      },
      "name": {
        "ru": "Прыжки со скакалкой",
        "en": "Jump rope"
      },
      "work": {
        "unit": "sec",
        "side": false,
        "hold": 0,
        "levels": {
          "beginner": [
            2,
            30
          ],
          "intermediate": [
            3,
            45
          ],
          "advanced": [
            4,
            60
          ]
        }
      },
      "description": {
        "ru": "Вращай скакалку кистями, а не всей рукой. Прыгай невысоко на носках, перепрыгивая скакалку на каждый оборот.",
        "en": "Turn the rope from your wrists, not your whole arms. Hop low on the balls of your feet, clearing the rope on each turn."
      },
      "safety": {
        "ru": "Прыгай на ровной поверхности, локти прижаты к корпусу.",
        "en": "Use an even surface and keep elbows close to your sides."
      },
      "gif": "gifs/jump-rope.gif",
      "svg": "svg/jump-rope.svg"
    },
    {
      "id": "squat-jump",
      "icon": "🦘",
      "focus": {
        "key": "legs",
        "ru": "Ноги",
        "en": "Legs"
      },
      "name": {
        "ru": "Приседания с выпрыгиванием",
        "en": "Squat jumps"
      },
      "work": {
        "unit": "reps",
        "side": false,
        "hold": 0,
        "levels": {
          "beginner": [
            2,
            6
          ],
          "intermediate": [
            3,
            10
          ],
          "advanced": [
            4,
            12
          ]
        }
      },
      "description": {
        "ru": "Присядь, отведя таз назад и руки вперёд, затем взрывным движением выпрыгни вверх. Приземлись мягко сразу в следующий присед.",
        "en": "Squat with hips back and arms forward, then explode upward into a jump. Land softly straight into the next squat."
      },
      "safety": {
        "ru": "Колени смотрят в стороны носков, приземление мягкое.",
        "en": "Knees track over toes; land softly."
      },
      "gif": "gifs/squat-jump.gif",
      "svg": "svg/squat-jump.svg",
      "hard": true
    },
    {
      "id": "high-knees",
      "icon": "🏃",
      "focus": {
        "key": "legs",
        "ru": "Ноги",
        "en": "Legs"
      },
      "name": {
        "ru": "Бег с высоким подъёмом колен",
        "en": "High knees"
      },
      "work": {
        "unit": "sec",
        "side": false,
        "hold": 0,
        "levels": {
          "beginner": [
            2,
            20
          ],
          "intermediate": [
            3,
            30
          ],
          "advanced": [
            4,
            40
          ]
        }
      },
      "description": {
        "ru": "Бегай на месте, поднимая колени до уровня таза. Корпус прямой, руки согнуты и работают в противофазе с ногами.",
        "en": "Run in place, lifting your knees to hip height. Keep your torso tall and swing bent arms opposite to the legs."
      },
      "safety": {
        "ru": "Приземляйся на переднюю часть стопы. Темп наращивай постепенно.",
        "en": "Land on the balls of your feet and build up the pace gradually."
      },
      "gif": "gifs/high-knees.gif",
      "svg": "svg/high-knees.svg"
    },
    {
      "id": "frog-jumps",
      "icon": "🐸",
      "focus": {
        "key": "legs",
        "ru": "Ноги",
        "en": "Legs"
      },
      "name": {
        "ru": "Прыжки лягушкой",
        "en": "Frog jumps"
      },
      "work": {
        "unit": "reps",
        "side": false,
        "hold": 0,
        "levels": {
          "beginner": [
            2,
            6
          ],
          "intermediate": [
            3,
            9
          ],
          "advanced": [
            4,
            12
          ]
        }
      },
      "description": {
        "ru": "Присядь глубоко, коснись пола руками, затем выпрыгни вверх-вперёд, вытянув руки. Мягко приземлись обратно в присед.",
        "en": "Drop into a deep squat and touch the floor, then jump up and forward with your arms extended. Land softly back in the squat."
      },
      "safety": {
        "ru": "Не делай глубокий присед при боли в коленях — лучше обычные прыжки.",
        "en": "With knee pain, use regular jumps instead of a deep squat."
      },
      "gif": "gifs/frog-jumps.gif",
      "svg": "svg/frog-jumps.svg",
      "hard": true
    },
    {
      "id": "march",
      "focus": {
        "key": "full-body",
        "ru": "Всё тело",
        "en": "Full body"
      },
      "icon": "🚶",
      "name": {
        "ru": "Марш на месте",
        "en": "March in place"
      },
      "description": {
        "ru": "Шагай на месте, поднимая колени примерно до уровня таза и активно работая руками. Дыши ровно.",
        "en": "March in place, lifting your knees to about hip height and swinging your arms. Breathe steadily."
      },
      "safety": {
        "ru": "Спину держи прямо, при необходимости держись за опору. Темп комфортный.",
        "en": "Keep your back straight and hold a support if needed. Use a comfortable pace."
      },
      "gif": "gifs/march.gif",
      "svg": "svg/march.svg",
      "work": {
        "unit": "sec",
        "side": false,
        "hold": 0,
        "levels": {
          "beginner": [
            2,
            30
          ],
          "intermediate": [
            3,
            45
          ],
          "advanced": [
            3,
            60
          ]
        }
      }
    },
    {
      "id": "step-touch",
      "focus": {
        "key": "full-body",
        "ru": "Всё тело",
        "en": "Full body"
      },
      "icon": "💃",
      "name": {
        "ru": "Приставной шаг",
        "en": "Step-touch"
      },
      "description": {
        "ru": "Шагни вправо, приставь левую ногу, шагни влево и приставь правую. Работай руками в такт, колени слегка мягкие.",
        "en": "Step right, bring your left foot in, step left and bring your right foot in. Swing your arms in rhythm with soft knees."
      },
      "safety": {
        "ru": "Шаги мягкие, без прыжков — подходит, когда нужно заниматься тихо.",
        "en": "Keep steps soft and jump-free — a quiet option for shared housing."
      },
      "gif": "gifs/step-touch.gif",
      "svg": "svg/step-touch.svg",
      "work": {
        "unit": "sec",
        "side": false,
        "hold": 0,
        "levels": {
          "beginner": [
            2,
            30
          ],
          "intermediate": [
            3,
            45
          ],
          "advanced": [
            4,
            60
          ]
        }
      }
    },
    {
      "id": "mountain-climbers",
      "focus": {
        "key": "full-body",
        "ru": "Всё тело",
        "en": "Full body"
      },
      "icon": "🧗",
      "name": {
        "ru": "Скалолаз",
        "en": "Mountain climbers"
      },
      "description": {
        "ru": "Прими упор лёжа на прямых руках. Поочерёдно подтягивай колени к груди, не поднимая таз. Темп — как в беге.",
        "en": "Start in a high plank. Drive your knees toward your chest one at a time without lifting your hips. Keep a running rhythm."
      },
      "safety": {
        "ru": "Плечи над кистями, таз не задирай. Замедли темп, если спина провисает.",
        "en": "Keep shoulders over wrists and hips low. Slow down if your back sags."
      },
      "gif": "gifs/mountain-climbers.gif",
      "svg": "svg/mountain-climbers.svg",
      "work": {
        "unit": "sec",
        "side": false,
        "hold": 0,
        "levels": {
          "beginner": [
            2,
            15
          ],
          "intermediate": [
            3,
            25
          ],
          "advanced": [
            4,
            35
          ]
        }
      },
      "hard": true
    },
    {
      "id": "calf-raise",
      "focus": {
        "key": "legs",
        "ru": "Ноги",
        "en": "Legs"
      },
      "icon": "🦶",
      "name": {
        "ru": "Подъёмы на носки",
        "en": "Calf raises"
      },
      "description": {
        "ru": "Встань прямо, при необходимости держись за опору. Медленно поднимись на носки, задержись на секунду и плавно опустись.",
        "en": "Stand tall, holding a support if needed. Slowly rise onto your toes, hold for a second and lower with control."
      },
      "safety": {
        "ru": "Не заваливайся вперёд, колени не сгибай. При проблемах с равновесием держись за стену.",
        "en": "Do not lean forward or bend your knees. Hold a wall if your balance is shaky."
      },
      "gif": "gifs/calf-raise.gif",
      "svg": "svg/calf-raise.svg",
      "work": {
        "unit": "reps",
        "side": false,
        "hold": 0,
        "levels": {
          "beginner": [
            2,
            10
          ],
          "intermediate": [
            3,
            15
          ],
          "advanced": [
            4,
            20
          ]
        }
      }
    },
    {
      "id": "pogo-hops",
      "focus": {
        "key": "legs",
        "ru": "Ноги",
        "en": "Legs"
      },
      "icon": "🦘",
      "name": {
        "ru": "Прыжки на месте",
        "en": "Hops in place"
      },
      "description": {
        "ru": "Небольшие упругие прыжки на носках, колени слегка согнуты. Приземляйся мягко, руки помогают держать ритм.",
        "en": "Small springy hops on the balls of your feet with slightly bent knees. Land softly and let your arms keep the rhythm."
      },
      "safety": {
        "ru": "Приземляйся на носки и мягкие колени. При боли в коленях или стопах замени шагом на месте.",
        "en": "Land on the balls of your feet with soft knees. If knees or feet hurt, switch to marching."
      },
      "gif": "gifs/pogo-hops.gif",
      "svg": "svg/pogo-hops.svg",
      "work": {
        "unit": "sec",
        "side": false,
        "hold": 0,
        "levels": {
          "beginner": [
            2,
            20
          ],
          "intermediate": [
            3,
            30
          ],
          "advanced": [
            4,
            40
          ]
        }
      }
    }
  ],
  "strength": [
    {
      "id": "push-up",
      "icon": "💪",
      "focus": {
        "key": "chest",
        "ru": "Грудь",
        "en": "Chest"
      },
      "name": {
        "ru": "Отжимания от пола",
        "en": "Push-ups"
      },
      "work": {
        "unit": "reps",
        "side": false,
        "hold": 0,
        "levels": {
          "beginner": [
            2,
            6
          ],
          "intermediate": [
            3,
            10
          ],
          "advanced": [
            4,
            15
          ]
        }
      },
      "description": {
        "ru": "Упор лёжа, ладони под плечами, тело — прямая линия. Согни локти, опустив грудь к полу, и вытолкни себя вверх.",
        "en": "In a high plank with hands under shoulders and body in a straight line, bend your elbows to lower your chest, then press back up."
      },
      "safety": {
        "ru": "Не прогибай поясницу. Новичкам — отжимания с колен.",
        "en": "Do not sag at the hips. Beginners: push-ups from the knees."
      },
      "gif": "gifs/push-up.gif",
      "svg": "svg/push-up.svg",
      "hard": true
    },
    {
      "id": "plank-up-down",
      "icon": "🧱",
      "focus": {
        "key": "core",
        "ru": "Пресс и кор",
        "en": "Core"
      },
      "name": {
        "ru": "Планка: с локтей на ладони",
        "en": "Plank up-downs"
      },
      "work": {
        "unit": "reps",
        "side": false,
        "hold": 0,
        "levels": {
          "beginner": [
            2,
            6
          ],
          "intermediate": [
            3,
            9
          ],
          "advanced": [
            4,
            12
          ]
        }
      },
      "description": {
        "ru": "Из планки на предплечьях по очереди поставь на пол ладони и выпрями руки, затем так же опустись обратно на локти.",
        "en": "From a forearm plank, place one hand then the other on the floor to push into a high plank, then lower back down to the forearms."
      },
      "safety": {
        "ru": "Живот напряжён, таз не раскачивай; меняй ведущую руку.",
        "en": "Brace your abs and keep hips steady; alternate the leading arm."
      },
      "gif": "gifs/plank-up-down.gif",
      "svg": "svg/plank-up-down.svg",
      "hard": true
    },
    {
      "id": "sumo-squat",
      "icon": "🏋️",
      "focus": {
        "key": "glutes",
        "ru": "Ягодицы",
        "en": "Glutes"
      },
      "name": {
        "ru": "Сумо-присед",
        "en": "Sumo squat"
      },
      "work": {
        "unit": "reps",
        "side": false,
        "hold": 0,
        "levels": {
          "beginner": [
            2,
            10
          ],
          "intermediate": [
            3,
            13
          ],
          "advanced": [
            4,
            18
          ]
        }
      },
      "description": {
        "ru": "Ноги шире плеч, носки наружу, в руках гантель или бутылка у груди. Присядь, разводя колени в стороны, и встань, сжимая ягодицы.",
        "en": "Stand wider than shoulders with toes out, holding a dumbbell or bottle at your chest. Squat with knees out, then stand and squeeze your glutes."
      },
      "safety": {
        "ru": "Колени следуют за носками, спина прямая.",
        "en": "Knees follow the toes; keep your back straight."
      },
      "gif": "gifs/sumo-squat.gif",
      "svg": "svg/sumo-squat.svg"
    },
    {
      "id": "bulgarian-split-squat",
      "icon": "🦵",
      "focus": {
        "key": "legs",
        "ru": "Ноги",
        "en": "Legs"
      },
      "name": {
        "ru": "Болгарский сплит-присед",
        "en": "Bulgarian split squat"
      },
      "work": {
        "unit": "reps",
        "side": true,
        "hold": 0,
        "levels": {
          "beginner": [
            2,
            6
          ],
          "intermediate": [
            3,
            9
          ],
          "advanced": [
            4,
            12
          ]
        }
      },
      "description": {
        "ru": "Положи заднюю ногу носком на скамью или стул. Опускайся, сгибая переднюю ногу, пока бедро не станет почти параллельно полу.",
        "en": "Rest the rear foot on a bench or chair. Lower by bending the front leg until the thigh is almost parallel to the floor."
      },
      "safety": {
        "ru": "Колено передней ноги не заваливай внутрь; используй устойчивую опору.",
        "en": "Do not let the front knee cave in; use a stable support."
      },
      "gif": "gifs/bulgarian-split-squat.gif",
      "svg": "svg/bulgarian-split-squat.svg",
      "hard": true
    },
    {
      "id": "shoulder-press",
      "icon": "🙌",
      "focus": {
        "key": "shoulders",
        "ru": "Плечи",
        "en": "Shoulders"
      },
      "name": {
        "ru": "Жим гантелей стоя",
        "en": "Dumbbell shoulder press"
      },
      "work": {
        "unit": "reps",
        "side": false,
        "hold": 0,
        "levels": {
          "beginner": [
            2,
            8
          ],
          "intermediate": [
            3,
            11
          ],
          "advanced": [
            4,
            12
          ]
        }
      },
      "description": {
        "ru": "Гантели на уровне плеч, ладони вперёд. Выжми их вверх до выпрямления рук, затем плавно опусти к плечам.",
        "en": "Hold dumbbells at shoulder height. Press them overhead until your arms are straight, then lower under control."
      },
      "safety": {
        "ru": "Не прогибай поясницу, пресс напряжён. Подойдут бутылки с водой.",
        "en": "Do not arch your back; brace your abs. Water bottles work too."
      },
      "gif": "gifs/shoulder-press.gif",
      "svg": "svg/shoulder-press.svg"
    },
    {
      "id": "bicep-curl",
      "icon": "💪",
      "focus": {
        "key": "arms",
        "ru": "Руки",
        "en": "Arms"
      },
      "name": {
        "ru": "Сгибание рук с гантелями",
        "en": "Biceps curl"
      },
      "work": {
        "unit": "reps",
        "side": false,
        "hold": 0,
        "levels": {
          "beginner": [
            2,
            8
          ],
          "intermediate": [
            3,
            11
          ],
          "advanced": [
            4,
            12
          ]
        }
      },
      "description": {
        "ru": "Стоя, руки с гантелями опущены вдоль тела. Сгибай локти, поднимая гантели к плечам, и медленно опускай.",
        "en": "Stand with dumbbells at your sides. Bend your elbows to curl the weights toward your shoulders and lower slowly."
      },
      "safety": {
        "ru": "Локти прижаты к корпусу, без раскачивания.",
        "en": "Keep elbows close to your sides; do not swing."
      },
      "gif": "gifs/bicep-curl.gif",
      "svg": "svg/bicep-curl.svg"
    },
    {
      "id": "triceps-extension",
      "icon": "🦾",
      "focus": {
        "key": "arms",
        "ru": "Руки",
        "en": "Arms"
      },
      "name": {
        "ru": "Разгибание рук из-за головы",
        "en": "Overhead triceps extension"
      },
      "work": {
        "unit": "reps",
        "side": false,
        "hold": 0,
        "levels": {
          "beginner": [
            2,
            8
          ],
          "intermediate": [
            3,
            11
          ],
          "advanced": [
            4,
            12
          ]
        }
      },
      "description": {
        "ru": "Подними гантель над головой и опусти её за голову, сгибая локти. Выпрями руки вверх, не разводя локти.",
        "en": "Raise a dumbbell overhead and lower it behind your head by bending your elbows. Extend your arms back up, keeping elbows narrow."
      },
      "safety": {
        "ru": "Бери лёгкий вес, не прогибай поясницу.",
        "en": "Use a light weight and do not arch your lower back."
      },
      "gif": "gifs/triceps-extension.gif",
      "svg": "svg/triceps-extension.svg"
    },
    {
      "id": "lateral-raise",
      "icon": "🕊️",
      "focus": {
        "key": "shoulders",
        "ru": "Плечи",
        "en": "Shoulders"
      },
      "name": {
        "ru": "Разведение рук с гантелями в стороны",
        "en": "Lateral raises"
      },
      "work": {
        "unit": "reps",
        "side": false,
        "hold": 0,
        "levels": {
          "beginner": [
            2,
            10
          ],
          "intermediate": [
            3,
            13
          ],
          "advanced": [
            4,
            15
          ]
        }
      },
      "description": {
        "ru": "Стоя, с гантелями по бокам. Подними слегка согнутые руки в стороны до уровня плеч и медленно опусти.",
        "en": "Stand with dumbbells at your sides. Raise slightly bent arms out to shoulder height and lower slowly."
      },
      "safety": {
        "ru": "Не поднимай выше плеч, не раскачивайся корпусом.",
        "en": "Do not lift above shoulder height or swing your torso."
      },
      "gif": "gifs/lateral-raise.gif",
      "svg": "svg/lateral-raise.svg"
    },
    {
      "id": "romanian-deadlift",
      "icon": "🏗️",
      "focus": {
        "key": "hamstrings",
        "ru": "Задняя поверхность бедра",
        "en": "Hamstrings"
      },
      "name": {
        "ru": "Румынская тяга с гантелями",
        "en": "Romanian deadlift"
      },
      "work": {
        "unit": "reps",
        "side": false,
        "hold": 0,
        "levels": {
          "beginner": [
            2,
            8
          ],
          "intermediate": [
            3,
            11
          ],
          "advanced": [
            4,
            12
          ]
        }
      },
      "description": {
        "ru": "Ноги чуть согнуты. Отводя таз назад, наклоняй корпус вперёд с прямой спиной, гантели скользят вдоль ног. Вернись, сжимая ягодицы.",
        "en": "Soften your knees. Push your hips back and hinge forward with a flat back, sliding dumbbells along your legs. Return by squeezing your glutes."
      },
      "safety": {
        "ru": "Спину не округляй; опускайся только до растяжения сзади бедра.",
        "en": "Keep your back flat; go down only until you feel a hamstring stretch."
      },
      "gif": "gifs/romanian-deadlift.gif",
      "svg": "svg/romanian-deadlift.svg"
    },
    {
      "id": "bent-over-row",
      "icon": "🚣",
      "focus": {
        "key": "back",
        "ru": "Мышцы спины",
        "en": "Back muscles"
      },
      "name": {
        "ru": "Тяга гантелей в наклоне",
        "en": "Bent-over row"
      },
      "work": {
        "unit": "reps",
        "side": false,
        "hold": 0,
        "levels": {
          "beginner": [
            2,
            8
          ],
          "intermediate": [
            3,
            11
          ],
          "advanced": [
            4,
            12
          ]
        }
      },
      "description": {
        "ru": "Наклони корпус вперёд с прямой спиной, руки с гантелями опущены. Подтяни локти назад к рёбрам, сведи лопатки и опусти.",
        "en": "Hinge forward with a flat back and dumbbells hanging. Pull your elbows back toward your ribs, squeeze your shoulder blades and lower."
      },
      "safety": {
        "ru": "Не округляй спину; шею держи в одной линии с позвоночником.",
        "en": "Do not round your back; keep your neck in line with your spine."
      },
      "gif": "gifs/bent-over-row.gif",
      "svg": "svg/bent-over-row.svg"
    },
    {
      "id": "bodyweight-squat",
      "focus": {
        "key": "legs",
        "ru": "Ноги",
        "en": "Legs"
      },
      "icon": "🦵",
      "name": {
        "ru": "Приседания",
        "en": "Bodyweight squats"
      },
      "description": {
        "ru": "Стопы на ширине плеч, руки вперёд. Отведи таз назад и вниз, как будто садишься на стул, колени идут по линии носков. Встань, отталкиваясь от пола.",
        "en": "Stand with feet shoulder-width apart, arms forward. Send your hips back and down as if sitting on a chair, with knees tracking over your toes. Push through the floor to stand."
      },
      "safety": {
        "ru": "Пятки не отрывай, спину держи ровной, колени не заваливай внутрь.",
        "en": "Keep your heels down, your back flat and your knees from caving in."
      },
      "gif": "gifs/bodyweight-squat.gif",
      "svg": "svg/bodyweight-squat.svg",
      "work": {
        "unit": "reps",
        "side": false,
        "hold": 0,
        "levels": {
          "beginner": [
            2,
            8
          ],
          "intermediate": [
            3,
            12
          ],
          "advanced": [
            4,
            18
          ]
        }
      }
    },
    {
      "id": "reverse-lunge",
      "focus": {
        "key": "legs",
        "ru": "Ноги",
        "en": "Legs"
      },
      "icon": "🚶",
      "name": {
        "ru": "Выпады назад",
        "en": "Reverse lunges"
      },
      "description": {
        "ru": "Из стойки шагни одной ногой назад и опустись так, чтобы переднее бедро стало почти параллельно полу. Оттолкнись передней ногой, вернись и смени ногу.",
        "en": "From standing, step one foot back and lower until your front thigh is almost parallel to the floor. Push off the front foot to return, then switch legs."
      },
      "safety": {
        "ru": "Переднее колено не выходит далеко за носок. Если сложно держать равновесие — держись за опору.",
        "en": "Keep your front knee from travelling far past your toes. Hold a support if balance is difficult."
      },
      "gif": "gifs/reverse-lunge.gif",
      "svg": "svg/reverse-lunge.svg",
      "work": {
        "unit": "reps",
        "side": true,
        "hold": 0,
        "levels": {
          "beginner": [
            2,
            5
          ],
          "intermediate": [
            3,
            8
          ],
          "advanced": [
            3,
            12
          ]
        }
      }
    },
    {
      "id": "crunch",
      "focus": {
        "key": "core",
        "ru": "Пресс и кор",
        "en": "Core"
      },
      "icon": "🙆",
      "name": {
        "ru": "Скручивания",
        "en": "Crunches"
      },
      "description": {
        "ru": "Лёжа на спине, колени согнуты, руки у висков. На выдохе оторви лопатки от пола, подтягивая рёбра к тазу, и плавно опустись.",
        "en": "Lie on your back with knees bent and hands by your temples. Exhale, lift your shoulder blades off the floor drawing ribs toward hips, and lower slowly."
      },
      "safety": {
        "ru": "Шею руками не тяни, поясницу от пола не отрывай. Работай без рывков.",
        "en": "Do not pull on your neck and keep your lower back on the floor. No jerking."
      },
      "gif": "gifs/crunch.gif",
      "svg": "svg/crunch.svg",
      "work": {
        "unit": "reps",
        "side": false,
        "hold": 0,
        "levels": {
          "beginner": [
            2,
            8
          ],
          "intermediate": [
            3,
            12
          ],
          "advanced": [
            4,
            18
          ]
        }
      }
    },
    {
      "id": "leg-raise",
      "focus": {
        "key": "core",
        "ru": "Пресс и кор",
        "en": "Core"
      },
      "icon": "🦿",
      "name": {
        "ru": "Подъём прямых ног лёжа",
        "en": "Lying leg raises"
      },
      "description": {
        "ru": "Лёжа на спине, руки вдоль тела (можно подложить под таз). Поднимай прямые ноги до вертикали и медленно опускай, не касаясь пола.",
        "en": "Lie on your back with arms along your body (or under your hips). Raise straight legs to vertical and lower slowly without touching the floor."
      },
      "safety": {
        "ru": "Поясница прижата к полу. Если она отрывается — согни колени или опускай ноги не так низко.",
        "en": "Keep your lower back pressed down. If it lifts, bend your knees or do not lower your legs as far."
      },
      "gif": "gifs/leg-raise.gif",
      "svg": "svg/leg-raise.svg",
      "work": {
        "unit": "reps",
        "side": false,
        "hold": 0,
        "levels": {
          "beginner": [
            2,
            6
          ],
          "intermediate": [
            3,
            10
          ],
          "advanced": [
            3,
            14
          ]
        }
      }
    },
    {
      "id": "knee-push-up",
      "focus": {
        "key": "chest",
        "ru": "Грудь",
        "en": "Chest"
      },
      "icon": "💪",
      "name": {
        "ru": "Отжимания с колен",
        "en": "Knee push-ups"
      },
      "description": {
        "ru": "Упор лёжа с опорой на колени: тело — прямая линия от колен до головы. Согни локти, опустив грудь к полу, и вытолкни себя вверх.",
        "en": "Plank on your knees so your body forms a line from knees to head. Bend your elbows to lower your chest toward the floor and press back up."
      },
      "safety": {
        "ru": "Локти под углом около 45° к корпусу, таз не провисает. Облегчённый вариант отжиманий.",
        "en": "Keep elbows at about 45° to your body and do not let your hips sag. An easier push-up variation."
      },
      "gif": "gifs/knee-push-up.gif",
      "svg": "svg/knee-push-up.svg",
      "work": {
        "unit": "reps",
        "side": false,
        "hold": 0,
        "levels": {
          "beginner": [
            2,
            6
          ],
          "intermediate": [
            3,
            10
          ],
          "advanced": [
            4,
            14
          ]
        }
      }
    }
  ]
};
