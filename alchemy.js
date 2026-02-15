
// ==========================================
// DATA: INGREDIENTS & TYPES
// ==========================================

const TYPES = {
    CATALYST: { id: 'catalyst', label: 'КАТАЛИЗАТОР', color: '#ff4444' },    // Красный
    ACTIVATOR: { id: 'activator', label: 'АКТИВАТОР', color: '#ffdd00' },   // Желтый
    COAGULANT: { id: 'coagulant', label: 'КОАГУЛЯНТ', color: '#44ffff' },   // Голубчик
    STABILIZER: { id: 'stabilizer', label: 'СТАБИЛИЗАТОР', color: '#44ff44' }, // Зеленый
    SOLVENT: { id: 'solvent', label: 'РАСТВОРИТЕЛЬ', color: '#aa44ff' },    // Фиол
    BUFFER: { id: 'buffer', label: 'БУФЕР', color: '#ff9900' },             // Оранж
    MODIFIER: { id: 'modifier', label: 'МОДИФИКАТОР', color: '#ff66aa' },   // Розовый
    INHIBITOR: { id: 'inhibitor', label: 'ИНГИБИТОР', color: '#4444ff' }    // Синий
};

const ICONS = {
    flame: '<path d="M12 23c4.97 0 9-4.03 9-9 0-4.97-9-13-9-13S3 9.03 3 14c0 4.97 4.03 9 9 9z"/>',
    root: '<path d="M17 19h-2v-3c0-2-1.5-2-3-2s-3 3-3 8H7c0-6 4-6 4-6s2 1 2 3v3h4v-3z"/>',
    orb: '<circle cx="12" cy="12" r="10" />',
    seed: '<path d="M17.81 14.7l-4.75-4.75c1.47-2.73 1.05-6.17-1.28-8.5-2.03-2.03-5.2-2.36-7.53-.98 1.05 1.05 1.62 2.65.98 4.28 1.63-.64 3.23-.07 4.28.98 2.33 2.33 2.66 5.5.98 7.53l4.75 4.75c.39.39 1.02.39 1.41 0l1.17-1.17c.39-.39.39-1.03-.01-1.14z"/>',
    skull: '<path d="M12 2C7 2 3 6 3 11c0 2.5 1.1 4.5 3 6v3h12v-3c1.9-1.5 3-3.5 3-6 0-5-9-11-12-11zm0 2c3.9 0 7.2 2.5 8.7 6H3.3C4.8 6.5 8.1 4 12 4zm0 16c-1.1 0-2-.9-2-2h4c0 1.1-.9 2-2 2z"/>',
    flower: '<path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z"/>',
    leaf: '<path d="M17 8C8 10 5.9 16.17 3.82 21.34 9.17 22 14.17 21 17 8zm-8.5 7.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5.67 1.5-1.5 1.5.67 1.5-1.5 1.5z"/>',
    dna: '<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14h-2v-2h2v2zm0-4h-2V7h2v5z"/>',
    flask: '<path d="M6 22h12a2 2 0 0 0 2-2V8l-6-6H6v20z"/>',
    clover: '<path d="M12 7c-2.76 0-5 2.24-5 5S9.24 17 12 17s5-2.24 5-5-2.24-5-5-5zm0-5C9.24 2 7 4.24 7 7s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm-5 5c0 2.76-2.24 5-5 5s5 2.24 5 5 2.24 5 5 5 2.24-5 5-5-2.24-5-5-5z"/>',
    sprout: '<path d="M11 20H9v-9c0-2-1.5-2-3-2s-3 3-3 8h2c0-8 4-8 4-8s2 1 2 4v7zm4 0h-2v-6c0-4-3-4-3-4s4-2 4 5v5z"/>',
    moss: '<path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2z"/>'
};

const INGREDIENTS = [
    { id: 'sramocvet', name: 'Срамоцвет', type: TYPES.ACTIVATOR, secondary: 'Импульсный', desc: 'Запускает реакцию резко и нестабильно.', icon: ICONS.flame },
    { id: 'pontoroz', name: 'Понтороз', type: TYPES.SOLVENT, secondary: 'Очищающий', desc: 'Снимает поверхностную пену.', icon: ICONS.flask },
    { id: 'sranoklever', name: 'Сраноклевер', type: TYPES.INHIBITOR, secondary: 'Глушащий', desc: 'Гасит реакцию при несоответствии фазы.', icon: ICONS.clover },
    { id: 'blyadokust', name: 'Блядокуст', type: TYPES.CATALYST, secondary: 'Агрессивный', desc: 'Даёт мощный всплеск, но перегревает смесь.', icon: ICONS.seed },
    { id: 'titkotrava', name: 'Титькотрава', type: TYPES.ACTIVATOR, secondary: 'Накопительный', desc: 'Эффект усиливается на следующем шаге.', icon: ICONS.moss },
    { id: 'chepushnik', name: 'Чепушник', type: TYPES.COAGULANT, secondary: 'Хрупкий', desc: 'Даёт нестабильный осадок.', icon: ICONS.skull },
    { id: 'kozlodyrnik', name: 'Козлодырник', type: TYPES.MODIFIER, secondary: 'Вялый', desc: 'Ослабляет текущую активность.', icon: ICONS.flask },
    { id: 'hrenodendron', name: 'Хренодендрон', type: TYPES.STABILIZER, secondary: 'Скользящий', desc: 'Фиксирует только рыхлые формы.', icon: ICONS.dna },
    { id: 'sranomoh', name: 'Сраномох', type: TYPES.SOLVENT, secondary: 'Размывающий', desc: 'Разрушает структуру осадка.', icon: ICONS.clover },
    { id: 'shizocvet', name: 'Шизоцвет', type: TYPES.BUFFER, secondary: 'Холодный', desc: 'Замедляет активную фазу.', icon: ICONS.sprout },
    { id: 'zhguchelist', name: 'Жгучелист', type: TYPES.STABILIZER, secondary: 'Закрепляющий', desc: 'Хорошо фиксирует плотные структуры.', icon: ICONS.leaf },
    { id: 'egerlist', name: 'Егерлист', type: TYPES.BUFFER, secondary: 'Тяжёлый', desc: 'Утяжеляет смесь без смены фазы.', icon: ICONS.leaf },
    { id: 'glukomor', name: 'Глюкомор', type: TYPES.CATALYST, secondary: 'Резонансный', desc: 'Усиливает предыдущий реагент.', icon: ICONS.orb },
    { id: 'erstnik', name: 'Ёрстник', type: TYPES.COAGULANT, secondary: 'Глубинный', desc: 'Формирует плотную структуру.', icon: ICONS.root },
    { id: 'durnoplyush', name: 'Дурноплющ', type: TYPES.MODIFIER, secondary: 'Пористый', desc: 'Делает структуру рыхлой.', icon: ICONS.skull },
    { id: 'pohernik', name: 'Похерник', type: TYPES.INHIBITOR, secondary: 'Инверсный', desc: 'Переворачивает направление текущего эффекта.', icon: ICONS.orb }
];

const PHASES = {
    CLEAR: { id: 'CLEAR', label: 'ЧИСТЫЙ РАСТВОР' },
    ACTIVE: { id: 'ACTIVE', label: 'АКТИВНАЯ СМЕСЬ' },
    FOAM: { id: 'FOAM', label: 'ПЕНА' },
    SEDIMENT: { id: 'SEDIMENT', label: 'ОСАДОК' },
    MURKY: { id: 'MURKY', label: 'МУТЬ (ПРОВАЛ)' }
};

const PROTOCOL = {
    title: 'ПРОТОКОЛ #03: СТАБИЛЬНЫЙ ЭКСТРАКТ',
    requirements: [
        'Инициация: превратить Чистый раствор в Активную смесь.',
        'Реакция: довести до Пены, затем скоагулировать в Осадок.',
        'Финализация: на 5-м шаге строго Стабилизатор.',
        'Запрет: избегать Мути (не смывать Осадок, не перегревать Пену).'
    ],
    targetStep4: PHASES.SEDIMENT.id,
    requiredTypeStep5: TYPES.STABILIZER.id
};

// ==========================================
// STATE
// ==========================================

let sequence = [null, null, null, null, null];
let isRunning = false;
let currentPhase = PHASES.CLEAR;

// ==========================================
// DOM ELEMENTS
// ==========================================

const gridEl = document.getElementById('ingredients-grid');
const stripEl = document.getElementById('sequence-strip');
const btnRun = document.getElementById('btn-run');
const btnClear = document.getElementById('btn-clear');
const cauldronVisual = document.getElementById('cauldron-visual');
const phaseLabel = document.getElementById('phase-label');
const logContent = document.getElementById('log-content');
const successOverlay = document.getElementById('success-overlay');

// ==========================================
// INIT
// ==========================================

function init() {
    renderIngredientGrid();
    renderSequenceStrip();
    renderProtocol();
    resetCauldron();

    btnRun.onclick = startReaction;
    btnClear.onclick = clearAll;

    updateControls();
}

// ==========================================
// RENDERERS
// ==========================================

function renderIngredientGrid() {
    gridEl.innerHTML = '';
    INGREDIENTS.forEach(ing => {
        const card = document.createElement('div');
        // Use alchemy-card to isolate styles
        card.className = 'alchemy-card';
        // Add --type-color variable for CSS to use
        card.style = `--type-color: ${ing.type.color}`;

        // Icon: NO inline fill. Let CSS handle it.
        card.innerHTML = `
            <div class="card-icon-wrapper">
                <svg viewBox="0 0 24 24" class="card-icon">${ing.icon}</svg>
            </div>
            <div class="card-header">
                <span class="card-name">${ing.name}</span>
            </div>
            <div class="card-body">
                <span class="card-type-label" style="color:${ing.type.color}">${ing.type.label}</span>
                <div class="card-secondary-row">
                    <span class="card-secondary">${ing.secondary}</span>
                    <div class="tooltip-trigger">?
                        <div class="tooltip-popup">${ing.desc}</div>
                    </div>
                </div>
            </div>
        `;

        card.onclick = () => addToSequence(ing);
        gridEl.appendChild(card);
    });
}

function renderSequenceStrip() {
    stripEl.innerHTML = '';
    sequence.forEach((item, index) => {
        const slot = document.createElement('div');
        slot.className = 'slot ' + (item ? 'filled' : '');
        slot.id = `slot-${index}`;

        if (item) {
            slot.innerHTML = `
                <svg viewBox="0 0 24 24" style="fill:${item.type.color}">${item.icon}</svg>
                <span>${item.name}</span>
            `;
            slot.onclick = () => removeFromSequence(index);
        } else {
            slot.innerHTML = `<span>${index + 1}</span>`;
        }

        stripEl.appendChild(slot);
    });
}

function renderProtocol() {
    document.getElementById('protocol-title').innerText = PROTOCOL.title;

    const body = document.getElementById('protocol-body');
    body.innerHTML = `<ul class="protocol-list">
        ${PROTOCOL.requirements.map(req => `<li>${req}</li>`).join('')}
    </ul>`;

    // Removed hints rendering
}

// ==========================================
// INTERACTION
// ==========================================

function addToSequence(ing) {
    if (isRunning) return;

    const emptyIndex = sequence.indexOf(null);
    if (emptyIndex !== -1) {
        sequence[emptyIndex] = ing;
        renderSequenceStrip();
        updateControls();
    }
}

function removeFromSequence(index) {
    if (isRunning) return;
    sequence[index] = null;
    renderSequenceStrip();
    updateControls();
}

function clearAll() {
    if (isRunning) return;
    sequence = [null, null, null, null, null];
    renderSequenceStrip();
    updateControls();
    resetCauldron();
    logContent.innerHTML = '';
}

function updateControls() {
    const isFull = sequence.every(s => s !== null);
    btnRun.disabled = !isFull || isRunning;
    btnClear.disabled = isRunning;
}

// ==========================================
// REACTION LOGIC
// ==========================================

function resetCauldron() {
    currentPhase = PHASES.CLEAR;
    updateCauldronVisual(PHASES.CLEAR);
}

function updateCauldronVisual(phase) {
    cauldronVisual.className = 'cauldron-visual';
    cauldronVisual.classList.add(`phase-${phase.id}`);
    phaseLabel.innerText = phase.label;
}

function log(text, type = 'step') {
    const entry = document.createElement('div');
    entry.className = `log-entry ${type}`;
    entry.innerText = text;
    logContent.prepend(entry);
}

async function startReaction() {
    if (isRunning) return;
    isRunning = true;
    updateControls();

    resetCauldron();
    logContent.innerHTML = '';
    log("=== ЗАПУСК РЕАКЦИИ ===", "step");

    for (let i = 0; i < 5; i++) {
        const slotEl = document.getElementById(`slot-${i}`);
        slotEl.classList.add('active-process');

        const ing = sequence[i];

        await new Promise(r => setTimeout(r, 600));

        log(`Шаг ${i + 1}: Добавлен ${ing.name} (${ing.type.label})`, "step");

        // Use safe defaults if type not found in logic
        const nextPhase = calculateTransition(currentPhase, ing.type);

        if (nextPhase === PHASES.MURKY) {
            log(`СБОЙ: ${getFailReason(currentPhase, ing.type)}`, "error");
            updateCauldronVisual(PHASES.MURKY);
            currentPhase = PHASES.MURKY;
            failReaction(slotEl);
            return;
        } else {
            if (nextPhase !== currentPhase) {
                log(`>> Реакция: Смесь перешла в фазу ${nextPhase.label}`, "process");
            } else {
                log(`>> Нет эффекта: Фаза осталась ${currentPhase.label}`, "process");
            }
            currentPhase = nextPhase;
            updateCauldronVisual(currentPhase);
        }

        slotEl.classList.remove('active-process');
    }

    if (currentPhase === PHASES.SEDIMENT && sequence[4].type.id === TYPES.STABILIZER.id) {
        success();
    } else {
        let reason = "Не удалось стабилизировать эликсир.";
        if (currentPhase !== PHASES.SEDIMENT) reason = "В финале не получен Осадок.";
        else if (sequence[4].type.id !== TYPES.STABILIZER.id) reason = "Последний компонент не является Стабилизатором.";

        log(`ПРОВАЛ: ${reason}`, "error");
        failReaction();
    }
}

function calculateTransition(phase, type) {
    // Handling new types gracefully
    if (!type) return PHASES.MURKY;

    // 1. CLEAR
    if (phase === PHASES.CLEAR) {
        if (type.id === TYPES.ACTIVATOR.id) return PHASES.ACTIVE;
        if (type.id === TYPES.BUFFER.id) return PHASES.CLEAR; // Buffers keep clear?
        return PHASES.CLEAR; // Default stay clear for most? Or murky?
    }

    // 2. ACTIVE
    if (phase === PHASES.ACTIVE) {
        if (type.id === TYPES.CATALYST.id) return PHASES.FOAM;
        if (type.id === TYPES.SOLVENT.id) return PHASES.CLEAR;
        if (type.id === TYPES.ACTIVATOR.id) return PHASES.ACTIVE;
        if (type.id === TYPES.BUFFER.id) return PHASES.ACTIVE; // Buffers maintain active?
        if (type.id === TYPES.MODIFIER.id) return PHASES.ACTIVE;
        return PHASES.MURKY;
    }

    // 3. FOAM
    if (phase === PHASES.FOAM) {
        if (type.id === TYPES.COAGULANT.id) return PHASES.SEDIMENT;
        if (type.id === TYPES.SOLVENT.id) return PHASES.ACTIVE;
        if (type.id === TYPES.CATALYST.id) return PHASES.FOAM;
        return PHASES.MURKY;
    }

    // 4. SEDIMENT
    if (phase === PHASES.SEDIMENT) {
        if (type.id === TYPES.STABILIZER.id) return PHASES.SEDIMENT;
        if (type.id === TYPES.SOLVENT.id) return PHASES.MURKY;
        return PHASES.MURKY;
    }

    return PHASES.MURKY;
}

function getFailReason(phase, type) {
    if (phase === PHASES.CLEAR && type.id !== TYPES.ACTIVATOR.id) return "Чистый раствор требует Активатора.";
    return "Несовместимая реакция.";
}

function failReaction(activeSlot) {
    isRunning = false;
    updateControls();
    if (activeSlot) activeSlot.classList.remove('active-process');
}

function success() {
    isRunning = false;
    log("СИНТЕЗ УСПЕШЕН! ПРОТОКОЛ ВЫПОЛНЕН.", "success");
    successOverlay.classList.remove('hidden');
}

// Run
init();
