
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

// ==========================================
// PROTOCOL DEFINITION (STRICT)
// ==========================================

const PROTOCOL = {
    id: "protocol03",
    title: 'ПРОТОКОЛ #03: СТАБИЛЬНЫЙ ЭКСТРАКТ',
    requirements: [
        'Инициация: превратить Чистый раствор в Активную смесь.',
        'Реакция: довести до Пены, затем скоагулировать в Осадок.',
        'Финализация: на 5-м шаге строго Стабилизатор.',
        'Запрет: избегать Мути (не смывать Осадок, не перегревать Пену).'
    ],
    // Precise steps for the ONLY valid solution
    steps: [
        {
            step: 1,
            expectPrimary: TYPES.ACTIVATOR.id,
            expectSecondary: "Накопительный",
            phaseAfter: PHASES.ACTIVE,
            setFlags: { activated: true },
            successLogs: [
                "Раствор принял реагент. Идёт накопление потенциала…",
                "Статус: АКТИВНАЯ СМЕСЬ (латентная)."
            ]
        },
        {
            step: 2,
            expectPrimary: TYPES.CATALYST.id,
            expectSecondary: "Резонансный",
            phaseAfter: PHASES.FOAM,
            setFlags: { resonated: true },
            requiresFlags: ["activated"],
            successLogs: [
                "Резонанс пойман. Пена поднимается ровно.",
                "Статус: ПЕНА (неочищенная)."
            ]
        },
        {
            step: 3,
            expectPrimary: TYPES.SOLVENT.id,
            expectSecondary: "Очищающий",
            phaseAfter: PHASES.FOAM,
            setFlags: { purified: true },
            requiresFlags: ["resonated"],
            successLogs: [
                "Сброс поверхностной грязи. Пена стала “чистой”.",
                "Статус: ПЕНА (очищенная)."
            ]
        },
        {
            step: 4,
            expectPrimary: TYPES.COAGULANT.id,
            expectSecondary: "Глубинный",
            phaseAfter: PHASES.SEDIMENT,
            setFlags: { sedimented: true },
            requiresFlags: ["purified"],
            successLogs: [
                "Коагуляция прошла ровно. Осадок плотный.",
                "Статус: ОСАДОК (плотный)."
            ]
        },
        {
            step: 5,
            expectPrimary: TYPES.STABILIZER.id,
            expectSecondary: "Закрепляющий",
            phaseAfter: PHASES.SEDIMENT,
            setFlags: { sealed: true },
            requiresFlags: ["sedimented"],
            successLogs: [
                "Фиксация прошла. Осадок “запечатан”."
            ]
        }
    ]
};

// ==========================================
// STATE
// ==========================================

let sequence = [null, null, null, null, null];

let reaction = {
    isRunning: false,
    stepIndex: 0,
    phase: PHASES.CLEAR,
    flags: {
        activated: false,
        resonated: false,
        purified: false,
        sedimented: false,
        sealed: false
    }
};

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
    resetReactionState();

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
}

// ==========================================
// INTERACTION
// ==========================================

function addToSequence(ing) {
    if (reaction.isRunning) return;

    const emptyIndex = sequence.indexOf(null);
    if (emptyIndex !== -1) {
        sequence[emptyIndex] = ing;
        renderSequenceStrip();
        updateControls();
    }
}

function removeFromSequence(index) {
    if (reaction.isRunning) return;
    sequence[index] = null;
    renderSequenceStrip();
    updateControls();
}

function clearAll() {
    if (reaction.isRunning) return;
    sequence = [null, null, null, null, null];
    renderSequenceStrip();
    updateControls();
    resetReactionState();
    logContent.innerHTML = '';
}

function updateControls() {
    const isFull = sequence.every(s => s !== null);
    btnRun.disabled = !isFull || reaction.isRunning;
    btnClear.disabled = reaction.isRunning;
}

// ==========================================
// REACTION LOGIC (STRICT)
// ==========================================

function resetReactionState() {
    reaction.isRunning = false;
    reaction.stepIndex = 0;
    reaction.phase = PHASES.CLEAR;
    reaction.flags = {
        activated: false,
        resonated: false,
        purified: false,
        sedimented: false,
        sealed: false
    };
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
    if (reaction.isRunning) return;

    // B) Preparation
    reaction.isRunning = true;
    updateControls();
    resetReactionState();
    reaction.isRunning = true; // Ensure running after reset

    logContent.innerHTML = '';
    log("▶ Инициализация реактора… Статус: ЧИСТЫЙ РАСТВОР.", "step");
    log("▶ Протокол #03 загружен. Режим: СТАБИЛЬНЫЙ ЭКСТРАКТ.", "step");

    // C) Simulation
    for (let i = 0; i < 5; i++) {
        reaction.stepIndex = i + 1; // 1-based logic
        const slotEl = document.getElementById(`slot-${i}`);
        slotEl.classList.add('active-process');

        const ing = sequence[i];
        const rule = PROTOCOL.steps[i];

        await new Promise(r => setTimeout(r, 600));

        // Validate
        const success = validateAndApplyStep(reaction.stepIndex, ing, rule);

        slotEl.classList.remove('active-process');

        // Check fail
        if (!success || reaction.phase === PHASES.MURKY) {
            break; // Stop loop
        }
    }

    // D) Finalization
    if (reaction.flags.sealed === true && reaction.phase !== PHASES.MURKY) {
        log("✔ УСПЕХ: получен СТАБИЛЬНЫЙ ЭКСТРАКТ.", "success");
        successOverlay.classList.remove('hidden');
    } else {
        // Wait a moment so user sees the failure result
        await new Promise(r => setTimeout(r, 1000));

        // Clear ingredients from the strip
        sequence = [null, null, null, null, null];
        renderSequenceStrip();
    }

    reaction.isRunning = false;
    updateControls();
}

/**
 * Validates a single step against the strict protocol rule.
 * Returns true if success, false if failure (MURKY).
 */
function validateAndApplyStep(stepIndex, ing, rule) {
    // 1) Log header
    log(`Шаг ${stepIndex}: ${ing.name.toUpperCase()} — ${ing.type.label} / ${ing.secondary.toUpperCase()}`, "step");

    // 2) Check Primary Type
    if (ing.type.id !== rule.expectPrimary) {
        failStep();
        log("• Реагент внесён не по фазе.", "error");
        log("✖ ПРОВАЛ: протокол нарушен. Статус: МУТЬ.", "error");
        return false;
    }

    // 3) Check Failure Flags (if prerequisites missing)
    if (rule.requiresFlags) {
        for (let flag of rule.requiresFlags) {
            if (!reaction.flags[flag]) {
                failStep();
                log("• Реакция не готова к этому этапу.", "error");
                log("✖ ПРОВАЛ: нарушена подготовка. Статус: МУТЬ.", "error");
                return false;
            }
        }
    }

    // 4) Check Secondary Trait (Strict)
    if (ing.secondary !== rule.expectSecondary) {
        failStep();
        log("• Профиль реагента несовместим с протоколом.", "error");
        log("✖ ПРОВАЛ: структура сорвана. Статус: МУТЬ.", "error");
        return false;
    }

    // 5) Success Application
    reaction.phase = rule.phaseAfter;
    if (rule.setFlags) {
        Object.assign(reaction.flags, rule.setFlags);
    }
    updateCauldronVisual(reaction.phase);

    // Logs
    rule.successLogs.forEach(msg => log(`• ${msg}`, "process"));

    return true;
}

function failStep() {
    reaction.phase = PHASES.MURKY;
    updateCauldronVisual(PHASES.MURKY);
}

// Run
init();
