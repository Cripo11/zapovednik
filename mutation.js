// Icons (Reusing/extending for 12 plants)
const ICONS = {
    clover: '<path d="M12 7c-2.76 0-5 2.24-5 5S9.24 17 12 17s5-2.24 5-5-2.24-5-5-5zm0-5C9.24 2 7 4.24 7 7s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm-5 5c0 2.76-2.24 5-5 5s5 2.24 5 5 2.24 5 5 5 2.24-5 5-5-2.24-5-5-5z"/>',
    tree: '<path d="M10 21h4v-3h-4v3zm2-19C7.5 2 4 5.5 4 10c0 2.5 1.5 4.5 3.5 5.5V17h9v-1.5c2-1 3.5-3 3.5-5.5 0-4.5-3.5-8-8-8z"/>',
    grass: '<path d="M5 21h2v-8c0-2-1-3-2-3s-2 1-2 3v8zm7 0h2v-12c0-2-1-3-2-3s-2 1-2 3v12zm7 0h2v-10c0-2-1-3-2-3s-2 1-2 3v10z"/>',
    vine: '<path d="M5 3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-4l-2 2v2H5V5h2l-2-2H5zm10 2c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-4 4c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm4 4c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2z"/>',
    leaf: '<path d="M17 8C8 10 5.9 16.17 3.82 21.34 9.17 22 14.17 21 17 8zm-8.5 7.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>',
    moss: '<path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2z"/>',
    flower: '<path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z"/>',
    mushroom: '<path d="M12 2C6.48 2 2 6.48 2 12c0 2.97 1.34 5.63 3.46 7.42.04.64.04 1.29-.07 1.94-.14.85.52 1.64 1.38 1.64h10.46c.86 0 1.52-.79 1.38-1.64-.11-.65-.11-1.3-.07-1.94C20.66 17.63 22 14.97 22 12c0-5.52-4.48-10-10-10zm0 2c4.41 0 8 3.59 8 8 0 1.27-.3 2.47-.84 3.54-.78-1.07-2.02-1.78-3.41-1.84-1.39-.06-2.65.6-3.75 1.7-1.1-1.1-2.36-1.76-3.75-1.7-1.39.06-2.63.77-3.41 1.84C4.3 14.47 4 13.27 4 12c0-4.41 3.59-8 8-8z"/>',
    sprout: '<path d="M11 20H9v-9c0-2-1.5-2-3-2s-3 3-3 8h2c0-8 4-8 4-8s2 1 2 4v7zm4 0h-2v-6c0-4-3-4-3-4s4-2 4 5v5z"/>',
    dna: '<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14h-2v-2h2v2zm0-4h-2V7h2v5z"/>', // Simplified
    seed: '<path d="M17.81 14.7l-4.75-4.75c1.47-2.73 1.05-6.17-1.28-8.5-2.03-2.03-5.2-2.36-7.53-.98 1.05 1.05 1.62 2.65.98 4.28 1.63-.64 3.23-.07 4.28.98 2.33 2.33 2.66 5.5.98 7.53l4.75 4.75c.39.39 1.02.39 1.41 0l1.17-1.17c.39-.39.39-1.03-.01-1.14z"/>',
    root: '<path d="M17 19h-2v-3c0-2-1.5-2-3-2s-3 3-3 8H7c0-6 4-6 4-6s2 1 2 3v3h4v-3z"/>'
};

// Names
const NAMES = [
    'Сраноклевер', 'Хренодендрон', 'Ёпрстник', 'Похерник',
    'Чепушник', 'Дурноплющ', 'Егерьлист', 'Сраномох',
    'Глюкомор', 'Блядокуст', 'Срамоцвет', 'Понтороз'
];

let INGREDIENTS = [];
let selectedIngs = [];

// DOM
const grid = document.getElementById('plant-grid');
const slotsContainer = document.getElementById('slots-container');
const checkBtn = document.getElementById('check-btn');
const messageArea = document.getElementById('message-area');
const statusText = document.getElementById('status-text');
const indicatorsContainer = document.getElementById('gene-indicators');

// Init
function init() {
    generateIngredients();
    renderGrid();
    renderSlots();
    updateUI();
}

function generateIngredients() {
    const keys = Object.keys(ICONS);

    // We need 12 items.
    // Assign random logic:
    // Some are A-heavy, some B-light, etc.
    // Properties: Genes [A, B, C]

    INGREDIENTS = NAMES.map((name, i) => {
        const iconKey = keys[i % keys.length];

        // Random genes between 2 and 3 total
        const count = Math.random() > 0.5 ? 2 : 3;
        const genes = [];
        const types = ['A', 'B', 'C'];

        for (let k = 0; k < count; k++) {
            genes.push(types[Math.floor(Math.random() * types.length)]);
        }

        return {
            id: `m${i}`,
            name: name,
            icon: ICONS[iconKey],
            genes: genes.sort(),
            desc: genes.join('') // for display or logic
        };
    });

    // Ensure at least one solution Exists? 
    // Or just randomness? User said "random properties placeholder". 
    // A pure random might be unsolvable for a Strict Target.
    // Let's make a loose Target.
    // Target: A >= 5, B >= 4, C <= 3 (example)
}

function renderGrid() {
    grid.innerHTML = '';
    INGREDIENTS.forEach(ing => {
        const isSelected = selectedIngs.some(i => i.id === ing.id);
        const card = document.createElement('div');
        card.className = `plant-card ${isSelected ? 'selected' : ''}`;

        // Genes Visuals
        const genesHtml = `
            <div class="genes-display">
                ${ing.genes.map(g => `<div class="gene-dot ${g}">${g}</div>`).join('')}
            </div>
        `;

        card.innerHTML = `
            <svg viewBox="0 0 24 24" class="card-icon">${ing.icon}</svg>
            <span>${ing.name}</span>
            <div class="stats">${genesHtml}</div>
        `;

        card.onclick = () => {
            if (!isSelected && selectedIngs.length < 4) {
                selectIng(ing);
            }
        };
        grid.appendChild(card);
    });
}

function renderSlots() {
    slotsContainer.innerHTML = '';

    // Validation Counters
    let counts = { A: 0, B: 0, C: 0 };

    for (let i = 0; i < 4; i++) {
        const slot = document.createElement('div');
        const ing = selectedIngs[i];
        if (ing) {
            slot.className = 'slot filled';
            slot.innerHTML = `<svg viewBox="0 0 24 24">${ing.icon}</svg><span>${ing.name}</span>`;
            slot.onclick = () => deselectIng(i);

            // Add to counts
            ing.genes.forEach(g => counts[g] = (counts[g] || 0) + 1);

        } else {
            slot.className = 'slot';
        }
        slotsContainer.appendChild(slot);
    }
    document.querySelector('.workbench .section-title').innerText = `КАМЕРА СИНТЕЗА (${selectedIngs.length}/4)`;

    checkBtn.disabled = selectedIngs.length !== 4;

    renderIndicators(counts);
}

function renderIndicators(counts) {
    // Show current totals vs Target?
    // Target: A: Max, B: Bal, C: Min
    // Let's say: A > 4, B = 3-4, C < 3

    indicatorsContainer.innerHTML = '';

    ['A', 'B', 'C'].forEach(type => {
        const badge = document.createElement('div');
        badge.className = `indicator-badge indicator-${type}`;
        badge.innerText = `${type}:${counts[type] || 0}`;
        indicatorsContainer.appendChild(badge);
    });
}

function selectIng(ing) {
    selectedIngs.push(ing);
    renderGrid();
    renderSlots();
    clearMessage();
    statusText.innerText = "АНАЛИЗ...";
    statusText.style.color = "#ffff00";
}

function deselectIng(idx) {
    selectedIngs.splice(idx, 1);
    renderGrid();
    renderSlots();
    clearMessage();
    statusText.innerText = "ОЖИДАНИЕ";
    statusText.style.color = "var(--accent-cyan)";
}

function updateUI() {
    //
}

checkBtn.onclick = () => {
    checkMutation();
};

function checkMutation() {
    checkBtn.disabled = true;

    let counts = { A: 0, B: 0, C: 0 };
    selectedIngs.forEach(ing => {
        ing.genes.forEach(g => counts[g] = (counts[g] || 0) + 1);
    });

    // Logic: A > B > C?
    // Let's simplify.
    // Target Logic:
    // A >= 5
    // B >= 3
    // C <= 2

    if (counts.A < 5) return fail(`СБОЙ: МАЛО ГЕНА A (${counts.A}). НУЖНО min 5.`);
    if (counts.B < 2) return fail(`СБОЙ: МАЛО ГЕНА B (${counts.B}). НУЖНО min 2.`);
    if (counts.C > 3) return fail(`СБОЙ: МНОГО ГЕНА C (${counts.C}). НУЖНО max 3.`);

    success();
}

function fail(msg) {
    showMessage(msg, 'error');
    checkBtn.disabled = false;

    const slots = document.querySelectorAll('.slot');
    slots.forEach(s => {
        s.classList.remove('error');
        void s.offsetWidth;
        s.classList.add('error');
    });
    statusText.innerText = "ОШИБКА";
    statusText.style.color = "var(--accent-red)";
}

function success() {
    document.body.style.transition = 'background 1s';
    document.body.style.background = '#002200';

    const overlay = document.getElementById('success-overlay');
    overlay.classList.remove('hidden');

    localStorage.setItem('zapovednik_stage2_done', 'true');
    localStorage.setItem('zapovednik_stage2_key', 'ROOT-03-BETA');
}

function showMessage(text, type) {
    messageArea.innerText = text;
    messageArea.className = `message-area visible ${type}`;
}

function clearMessage() {
    messageArea.className = 'message-area';
}

init();
