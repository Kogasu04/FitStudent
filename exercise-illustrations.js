'use strict';

(function() {
    const BASE = 'illustrations/';
    const cache = new Map();
    const pending = new Map();

    const FRAMES = {
        neck: '0001',
        shoulders: '0005',
        'water-bottle-row': '0025',
        'cat-cow': '0027',
        'wall-push': '0073',
        'incline-push': '0075',
        'dead-lift-smith': '0100',
        'standing-hinge': '0101',
        'good-mornings-smith': '0102',
        hyperextensions: '0103',
        'back-extension-ball': '0104',
        'bird-dog': '0105',
        'glute-bridge': '0109',
        'heel-slide': '0109',
        march: '0111',
        'knee-lifts': '0111',
        'body-leg-lifts': '0111',
        'side-plank': '0113',
        'lunges-dumbbell': '0115',
        'flutter-kicks': '0116',
        'walking-lunges': '0121',
        'reverse-lunge-supported': '0129',
        'squats-dumbbells': '0130',
        'squat-chair': '0133',
        'step-ups-barbell': '0134',
        hip: '0136',
        'squats-to-bench': '0136',
        'step-ups-dumbbell': '0137',
        'front-squat-barbell': '0138',
        'leg-extensions': '0142',
        'thigh-abductor': '0156',
        'thigh-adductor': '0157',
        'bench-dips': '0162',
        'ankle-circles': '0270',
        'knee-circles': '0277',
        'rocking-calf-raise': '0278',
        calf: '0281',
        'air-bike': '0284',
        'ab-rollout': '0285',
        'dead-bug': '0287',
        'bent-knee-hip-raise': '0287',
        'seated-ab-crunch': '0288',
        'cross-body-crunch': '0289',
        crunches: '0291'
    };

    function preprocess(svgText) {
        let out = svgText;

        out = out.replace(/<\?xml[^>]*\?>/g, '');
        out = out.replace(/<!DOCTYPE[^>]*>/gi, '');
        out = out.replace(/<!--[\s\S]*?-->/g, '');

        out = out.replace(
            /\s(?:width|height)="[^"]*"/g,
            ''
        );

        if (!/preserveAspectRatio=/.test(out)) {
            out = out.replace(/<svg/, '<svg preserveAspectRatio="xMidYMid meet"');
        }

        out = out.replace(
            /<svg([^>]*)>/,
            (m, attrs) => `<svg${attrs} class="pose-svg-inline" aria-hidden="true" focusable="false">`
        );

        return out;
    }

    function render(frameId, second) {
        const code = FRAMES[frameId];
        if (!code) return '<div class="pose-missing">?</div>';

        const suffix = second ? 'tension' : 'relaxation';
        const url = `${BASE}${code}-${suffix}.svg`;
        const key = url;

        if (cache.has(key)) return cache.get(key);

        if (!pending.has(key)) {
            pending.set(
                key,
                fetch(url)
                .then(res => {
                    if (!res.ok) throw new Error('HTTP ' + res.status);
                    return res.text();
                })
                .then(text => {
                    const processed = preprocess(text);
                    cache.set(key, processed);
                    pending.delete(key);

                    document
                        .querySelectorAll(`[data-illu-key="${key}"]`)
                        .forEach(el => {
                            el.innerHTML = processed;
                        });

                    return processed;
                })
                .catch(err => {
                    console.warn('[FITСтудент] Не удалось загрузить', url, err.message);
                    const fallback = '<div class="pose-missing">?</div>';
                    cache.set(key, fallback);
                    pending.delete(key);
                    return fallback;
                })
            );
        }

        return `<div class="pose-loader" data-illu-key="${key}"></div>`;
    }

    window.FIT_ILLUSTRATIONS = {
        render,
        FRAMES
    };
})();