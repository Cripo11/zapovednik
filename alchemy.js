// Icons
const ICONS = {
    // Reusing paths + new ones
    fire: '<path d="M12 23c4.97 0 9-4.03 9-9 0-4.97-9-13-9-13S3 9.03 3 14c0 4.97 4.03 9 9 9z M12 5c0 0 6 6.05 6 10.5 0 3.59-2.91 6.5-6.5 6.5S5 19.09 5 15.5C5 11.05 11 5 12 5z"/>', // Catalyst
    lightning: '<path d="M7 2v11h3v9l7-12h-4l4-8z"/>', // Energy
    clover: '<path d="M12 7c-2.76 0-5 2.24-5 5S9.24 17 12 17s5-2.24 5-5-2.24-5-5-5zm0-5C9.24 2 7 4.24 7 7s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm-5 5c0 2.76-2.24 5-5 5s5 2.24 5 5 2.24 5 5 5 2.24-5 5-5-2.24-5-5-5z"/>',
    arrowUp: '<path d="M7 14l5-5 5 5z"/><path d="M0 0h24v24H0z" fill="none"/>', // Amplifier (Custom)
    skull: '<path d="M12 2C7 2 3 6 3 11c0 2.5 1.1 4.5 3 6v3h12v-3c1.9-1.5 3-3.5 3-6 0-5-9-11-12-11zm0 2c3.9 0 7.2 2.5 8.7 6H3.3C4.8 6.5 8.1 4 12 4zm0 16c-1.1 0-2-.9-2-2h4c0 1.1-.9 2-2 2z"/>',
    shield: '<path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>', // Stabilizer
    snowflake: '<path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/>', // Cooling (using cloud/snow metaphor)
    balance: '<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15v-4H8l4-4 4 4h-3v4h-2z"/>', // Balance
    flower: '<path d="M12 2c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 14c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 12c0-2.76 2.24-5 5-5s5 2.24 5 5-2.24 5-5 5-5-2.24-5-5zm14 0c0-2.76 2.24-5 5-5s5 2.24 5 5-2.24 5-5 5-5-2.24-5-5z"/>',
    mushroom: '<path d="M12 2c-3.31 0-6 2.69-6 6v2c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V8c0-3.31-2.69-6-6-6zm-4 12c-1.1 0-2 .9-2 2v4h12v-4c0-1.1-.9-2-2-2H8z"/>',
    vine: '<path d="M12 2c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 14c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 12c0-2.76 2.24-5 5-5s5 2.24 5 5-2.24 5-5 5-5-2.24-5-5zm14 0c0-2.76 2.24-5 5-5s5 2.24 5 5-2.24 5-5 5-5-2.24-5-5z"/>'
};

// Data (16 Ingredients)
const INGREDIENTS = [
    // 1. Valid Sequence Components
    { id: 'i1', name: 'Похерник', type: 'catalyst', val: 15, icon: ICONS.fire, desc: 'Катализатор' },
    { id: 'i2', name: 'Ёпрстник', type: 'energy', val: 22, icon: ICONS.lightning, desc: 'Энергия' },
    { id: 'i3', name: 'Жгучелист', type: 'energy', val: 18, icon: ICONS.lightning, desc: 'Энергия' },
    { id: 'i4', name: 'Титькотрава', type: 'energy', val: 6, icon: ICONS.lightning, desc: 'Энергия' },
    { id: 'i5', name: 'Сраномох', type: 'stabilizer', val: -30, icon: ICONS.shield, desc: 'Стабилизатор' },

    // 2. Distractions (11)
    { id: 'i6', name: 'Сраноклевер', type: 'energy_weak', val: 12, icon: ICONS.clover, desc: 'Энергия' },
    { id: 'i7', name: 'Хренодендрон', type: 'inert', val: 0, icon: ICONS.balance, desc: 'Стабилизатор' },
    { id: 'i8', name: 'Чепушник', type: 'amp', val: 25, icon: ICONS.arrowUp, desc: 'Энергия' },
    { id: 'i9', name: 'Дурноплющ', type: 'toxin', val: 35, icon: ICONS.skull, desc: 'Энергия' },
    { id: 'i10', name: 'Егерьлист', type: 'cool', val: -10, icon: ICONS.snowflake, desc: 'Стабилизатор' },
    { id: 'i11', name: 'Козлодырник', type: 'chaos', val: 50, icon: ICONS.skull, desc: 'Энергия' },
    { id: 'i12', name: 'Понтороз', type: 'catalyst', val: 15, icon: ICONS.fire, desc: 'Катализатор' },
    { id: 'i13', name: 'Шизоцвет', type: 'energy', val: 8, icon: ICONS.flower, desc: 'Энергия' },
    { id: 'i14', name: 'Глюкомор', type: 'hallucinogen', val: 5, icon: ICONS.mushroom, desc: 'Энергия' },
    { id: 'i15', name: 'Блядокуст', type: 'weed', val: 2, icon: ICONS.vine, desc: 'Энергия' },
    { id: 'i16', name: 'Срамоцвет', type: 'absorbent', val: -5, icon: ICONS.flower, desc: 'Стабилизатор' }
];

let selectedIngs = [];
let currentTemp = 20;

// DOM
const grid = document.getElementById('ingredients-grid');
const slotsContainer = document.getElementById('slots-container');
const brewBtn = document.getElementById('brew-btn');
const tempVal = document.getElementById('temp-val');
const tempBar = document.getElementById('temp-bar');
const messageArea = document.getElementById('message-area');

// Init
function init() {
    shuffle(INGREDIENTS);
    renderGrid();
    renderSlots();
    recalcTemp();
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function renderGrid() {
    grid.innerHTML = '';
    INGREDIENTS.forEach(ing => {
        const isSelected = selectedIngs.some(i => i.id === ing.id);
        const card = document.createElement('div');
        card.className = `plant-card ${isSelected ? 'selected' : ''}`;

        const sign = ing.val > 0 ? '+' : '';
        const valStr = ing.val !== 0 ? `${sign}${ing.val}°` : '0°';

        card.innerHTML = `
            <svg viewBox="0 0 24 24" class="card-icon">${ing.icon}</svg>
            <span>${ing.name}</span>
            <div class="stats">${ing.desc}<br>${valStr}</div>
        `;

        card.onclick = () => {
            if (!isSelected && selectedIngs.length < 5) {
                selectIng(ing);
            }
        };
        grid.appendChild(card);
    });
}

function renderSlots() {
    slotsContainer.innerHTML = '';
    for (let i = 0; i < 5; i++) {
        const slot = document.createElement('div');
        const ing = selectedIngs[i];
        if (ing) {
            slot.className = 'slot filled';
            slot.innerHTML = `<svg viewBox="0 0 24 24">${ing.icon}</svg><span>${ing.name}</span>`;
            slot.onclick = () => deselectIng(i);
        } else {
            slot.className = 'slot';
        }
        slotsContainer.appendChild(slot);
    }
    document.querySelector('.workbench .section-title').innerText = `ПОСЛЕДОВАТЕЛЬНОСТЬ ВАРКИ (${selectedIngs.length}/5)`;
    brewBtn.disabled = selectedIngs.length !== 5;
    renderIndicators();
}

function renderIndicators() {
    const container = document.getElementById('sequence-indicators');
    container.innerHTML = '';

    // Collect all badges first
    let badges = selectedIngs.map(ing => {
        let letter = '';
        let typeClass = '';
        let sortOrder = 0;

        if (ing.desc.includes('Катализатор')) {
            letter = 'К';
            typeClass = 'indicator-K';
            sortOrder = 1;
        } else if (ing.desc.includes('Энергия') || ing.desc.includes('Усилитель') || ing.desc.includes('Токсин') || ing.desc.includes('Хаос') || ing.desc.includes('Сорняк') || ing.desc.includes('Психоактив')) {
            letter = 'Э';
            typeClass = 'indicator-E';
            sortOrder = 2;
        } else if (ing.desc.includes('Стабилизатор') || ing.desc.includes('Наполнитель') || ing.desc.includes('Охлаждение') || ing.desc.includes('Абсорбент')) {
            letter = 'С';
            typeClass = 'indicator-S';
            sortOrder = 3;
        } else {
            letter = '?';
            sortOrder = 4;
        }
        return { letter, typeClass, sortOrder };
    });

    // Sort: K -> E -> S
    badges.sort((a, b) => a.sortOrder - b.sortOrder);

    // Render
    badges.forEach(b => {
        const badge = document.createElement('div');
        badge.className = `indicator-badge ${b.typeClass}`;
        badge.innerText = b.letter;
        container.appendChild(badge);
    });
}

function selectIng(ing) {
    selectedIngs.push(ing);
    renderGrid();
    renderSlots();
    recalcTemp();
    clearMessage();
}

function deselectIng(idx) {
    selectedIngs.splice(idx, 1);
    renderGrid();
    renderSlots();
    recalcTemp();
    clearMessage();
}

function recalcTemp() {
    let simTemp = 20;
    selectedIngs.forEach(ing => {
        simTemp += ing.val;
    });
    updateTemp(simTemp);
}

function updateTemp(val) {
    currentTemp = val;
    tempVal.innerText = Math.round(val);

    // 0-100% (Scale: 0 to 100 for bar visualisation)
    const pct = Math.min(Math.max(val, 0), 100);
    tempBar.style.height = `${pct}%`;

    // Colors & Logic (Target 48-52)
    let color = '#ffffff';
    let glow = '0 0 10px rgba(255,255,255,0.8)';
    let glowOpacity = 0;

    if (val > 90) { // Critical > 90
        color = '#ff3333';
        glow = '0 0 15px #ff3333, 0 0 30px #ff0000';
        glowOpacity = 1;
        document.getElementById('cauldron-glow').style.background = 'radial-gradient(circle, rgba(255, 51, 51, 0.4) 0%, transparent 70%)';
    } else if (val >= 48 && val <= 52) { // Target Zone
        color = '#33ff33';
        glow = '0 0 15px #33ff33, 0 0 25px #00ff00';
        glowOpacity = 0.6;
        document.getElementById('cauldron-glow').style.background = 'radial-gradient(circle, rgba(51, 255, 51, 0.3) 0%, transparent 70%)';
    } else if (val > 65) { // Hot but safe
        color = '#ffff33';
        glow = '0 0 10px #ffff33, 0 0 20px #aaaa00';
        glowOpacity = 0.4;
        document.getElementById('cauldron-glow').style.background = 'radial-gradient(circle, rgba(255, 255, 51, 0.2) 0%, transparent 70%)';
    } else {
        // Cold/Warm
        color = '#ffffff';
        glow = '0 0 5px #ffffff';
        glowOpacity = 0.2;
        document.getElementById('cauldron-glow').style.background = 'radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%)';
    }

    tempBar.style.background = color;
    tempBar.style.boxShadow = glow;
    document.getElementById('cauldron-glow').style.opacity = glowOpacity;
}

// Logic Rules
function checkRecipe() {
    brewBtn.disabled = true;

    let simTemp = 20;
    let energySources = 0;
    let catalystCount = 0;
    let maxReached = 0;

    // 1. Validate Ingredients List First
    selectedIngs.forEach(ing => {
        if (ing.type === 'catalyst') catalystCount++;
        if (ing.type === 'energy') energySources++;
    });

    if (catalystCount !== 1) return fail(`ОШИБКА: НУЖЕН РОВНО 1 КАТАЛИЗАТОР (ВЫБРАНО: ${catalystCount}).`);
    if (energySources < 3) return fail(`ОШИБКА: МИНИМУМ 3 ИСТОЧНИКА ЭНЕРГИИ (ВЫБРАНО: ${energySources}).`);

    // 2. Simulate Sequence
    for (let i = 0; i < selectedIngs.length; i++) {
        const ing = selectedIngs[i];

        simTemp += ing.val;
        if (simTemp > maxReached) maxReached = simTemp;

        // Critical Temp Check Immediate
        if (simTemp > 90) return fail(`КРИТИЧЕСКИЙ СБОЙ: ${simTemp}° (ПРЕДЕЛ 90°).`);

        // Stabilizer must be LAST (index 4)
        if (ing.type === 'stabilizer' && i !== 4) {
            return fail("ОШИБКА: СТАБИЛИЗАТОР ДОЛЖЕН БЫТЬ ПОСЛЕДНИМ.");
        }
    }

    // 3. Peak & Final Temp Checks
    if (maxReached < 65) return fail(`НЕДОСТАТОЧНЫЙ НАГРЕВ: МАКС ${maxReached}° (ТРЕБУЕТСЯ ≥ 65°).`);

    if (simTemp < 48 || simTemp > 52) {
        return fail(`НЕСТАБИЛЬНЫЙ ИТОГ: ${simTemp}° (ЦЕЛЬ 48–52°).`);
    }

    success();
}

function fail(msg) {
    showMessage(msg, 'error');
    brewBtn.disabled = false;

    // Shake animation
    const slots = document.querySelectorAll('.slot');
    slots.forEach(s => {
        s.classList.remove('error');
        void s.offsetWidth; // Trigger reflow
        s.classList.add('error');
    });
    // Reset temp after delay?
    setTimeout(() => updateTemp(20), 2000);
}

function success() {
    document.body.style.transition = 'background 1s';
    document.body.style.background = '#002222';

    const overlay = document.getElementById('success-overlay');
    overlay.classList.remove('hidden');

    // Update text
    overlay.querySelector('.key-display').innerHTML = 'КЛЮЧ: <span class="key-code">ROOT-04-GAMMA</span>';

    localStorage.setItem('zapovednik_stage3_done', 'true');
    localStorage.setItem('zapovednik_stage3_key', 'ROOT-04-GAMMA');
}

function showMessage(text, type) {
    messageArea.innerText = text;
    messageArea.className = `message-area visible ${type}`;
}

function clearMessage() {
    messageArea.className = 'message-area';
}

brewBtn.onclick = checkRecipe;

init();
