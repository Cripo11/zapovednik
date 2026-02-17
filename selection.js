// SVG Paths
const ICONS = {
    mushroom: '<path d="M12 2C6.48 2 2 6.48 2 12c0 2.97 1.34 5.63 3.46 7.42.04.64.04 1.29-.07 1.94-.14.85.52 1.64 1.38 1.64h10.46c.86 0 1.52-.79 1.38-1.64-.11-.65-.11-1.3-.07-1.94C20.66 17.63 22 14.97 22 12c0-5.52-4.48-10-10-10zm0 2c4.41 0 8 3.59 8 8 0 1.27-.3 2.47-.84 3.54-.78-1.07-2.02-1.78-3.41-1.84-1.39-.06-2.65.6-3.75 1.7-1.1-1.1-2.36-1.76-3.75-1.7-1.39.06-2.63.77-3.41 1.84C4.3 14.47 4 13.27 4 12c0-4.41 3.59-8 8-8z"/>',
    flower: '<path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z"/>', // Simplified star/flower
    clover: '<path d="M12 7c-2.76 0-5 2.24-5 5S9.24 17 12 17s5-2.24 5-5-2.24-5-5-5zm0-5C9.24 2 7 4.24 7 7s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm-5 5c0 2.76-2.24 5-5 5s5 2.24 5 5 2.24 5 5 5 2.24-5 5-5-2.24-5-5-5z"/>', // Rough clover shape approximation or circle-based
    tree: '<path d="M10 21h4v-3h-4v3zm2-19C7.5 2 4 5.5 4 10c0 2.5 1.5 4.5 3.5 5.5V17h9v-1.5c2-1 3.5-3 3.5-5.5 0-4.5-3.5-8-8-8z"/>',
    grass: '<path d="M5 21h2v-8c0-2-1-3-2-3s-2 1-2 3v8zm7 0h2v-12c0-2-1-3-2-3s-2 1-2 3v12zm7 0h2v-10c0-2-1-3-2-3s-2 1-2 3v10z"/>',
    vine: '<path d="M5 3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-4l-2 2v2H5V5h2l-2-2H5zm10 2c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-4 4c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm4 4c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2z"/>',
    leaf: '<path d="M17 8C8 10 5.9 16.17 3.82 21.34 9.17 22 14.17 21 17 8zm-8.5 7.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>',
    moss: '<path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2z"/>'
};

// Data
const PLANTS = [
    { id: 'p1', name: 'Жопогриб', icon: ICONS.mushroom },
    { id: 'p2', name: 'Сраноклевер', icon: ICONS.clover }, // C (Correct)
    { id: 'p3', name: 'Блядокуст', icon: ICONS.vine },
    { id: 'p4', name: 'Хренодендрон', icon: ICONS.tree }, // H (Correct)
    { id: 'p5', name: 'Сиськоцвет', icon: ICONS.flower },
    { id: 'p6', name: 'Ёпрстник', icon: ICONS.grass }, // E (Correct)
    { id: 'p7', name: 'Дурноплющ', icon: ICONS.vine },
    { id: 'p8', name: 'Сраномох', icon: ICONS.moss },
    { id: 'p9', name: 'Чепушник', icon: ICONS.grass },
    { id: 'p10', name: 'Козлодырник', icon: ICONS.grass },
    { id: 'p11', name: 'Егерьлист', icon: ICONS.leaf },
    { id: 'p12', name: 'Похерник', icon: ICONS.flower }, // P (Correct)
    { id: 'p13', name: 'Понтороз', icon: ICONS.flower },
    { id: 'p14', name: 'Титькотрава', icon: ICONS.grass },
    { id: 'p15', name: 'Срамоцвет', icon: ICONS.flower },
    { id: 'p16', name: 'Жопоцвет', icon: ICONS.flower }
];

const TARGET_IDS = new Set(['p2', 'p4', 'p6', 'p12']); // С, Х, Ё, П

// State
let selectedPlants = []; // Array of plant objects

// DOM Elements
const plantGrid = document.getElementById('plant-grid');
const slotsContainer = document.getElementById('slots-container');
const checkBtn = document.getElementById('check-btn');
const messageArea = document.getElementById('message-area');
const titleText = document.querySelector('.section-title'); // "СЛОТЫ СЕЛЕКЦИИ (0/5)"

// Init
function init() {
    renderGrid();
    renderSlots();
    updateUI();
}

// Render Grid
function renderGrid() {
    plantGrid.innerHTML = '';

    // Shuffle plants for display?
    // User didn't strictly ask, but standard quest behavior. 
    // Let's keep them fixed logic for now to ensure consistency with my ID map above, 
    // or just map by content. The IDs are safe.

    PLANTS.forEach(plant => {
        const isSelected = selectedPlants.some(p => p.id === plant.id);

        const card = document.createElement('div');
        card.className = `plant-card ${isSelected ? 'selected' : ''}`;

        const svg = `<svg viewBox="0 0 24 24" class="card-icon">${plant.icon}</svg>`;
        card.innerHTML = `${svg}<span>${plant.name}</span>`;

        card.onclick = () => {
            if (!isSelected && selectedPlants.length < 4) {
                selectPlant(plant);
            }
        };

        plantGrid.appendChild(card);
    });
}

// Render Slots
function renderSlots() {
    slotsContainer.innerHTML = '';

    // 4 Slots total
    for (let i = 0; i < 4; i++) {
        const slot = document.createElement('div');
        const plant = selectedPlants[i];

        if (plant) {
            slot.className = 'slot filled';
            const svg = `<svg viewBox="0 0 24 24">${plant.icon}</svg>`;
            slot.innerHTML = `${svg}<span>${plant.name}</span>`;
            slot.onclick = () => deselectPlant(i);
        } else {
            slot.className = 'slot';
        }

        slotsContainer.appendChild(slot);
    }

    // Update Title Counter
    document.querySelector('.workbench .section-title').innerText = `СЛОТЫ СЕЛЕКЦИИ (${selectedPlants.length}/4)`;
}

// Actions
function selectPlant(plant) {
    if (selectedPlants.length >= 4) return;

    selectedPlants.push(plant);
    renderGrid();
    renderSlots();
    updateUI();
    clearMessage();
}

function deselectPlant(index) {
    selectedPlants.splice(index, 1);
    renderGrid();
    renderSlots();
    updateUI();
    clearMessage();
}

function updateUI() {
    checkBtn.disabled = selectedPlants.length !== 4;
}

// Check Logic
checkBtn.onclick = () => {
    // Validate
    let correctCount = 0;
    selectedPlants.forEach(p => {
        if (TARGET_IDS.has(p.id)) correctCount++;
    });

    if (correctCount === 4) {
        handleSuccess();
    } else {
        handleError(correctCount);
    }
};

function handleError(count) {
    // Shake slots
    const slots = document.querySelectorAll('.slot');
    slots.forEach(s => {
        s.classList.remove('error');
        void s.offsetWidth; // trigger reflow
        s.classList.add('error');
    });

    showMessage(`СЕЛЕКЦИЯ ОТКЛОНЕНА. СОВПАДЕНИЙ: ${count} / 4`, 'error');
}

function handleSuccess() {
    // Visual Pulse
    document.body.style.transition = 'background 0.5s';
    document.body.style.background = '#0a1a0a';

    // Show Overlay
    const overlay = document.getElementById('success-overlay');
    overlay.classList.remove('hidden');

    // Update text
    overlay.querySelector('.key-display').innerHTML = 'КЛЮЧ: <span class="key-code">ROOT-02-ALPHA</span>';

    // Save state
    localStorage.setItem('zapovednik_stage1_done', 'true');
    localStorage.setItem('zapovednik_stage1_key', 'ROOT-02-ALPHA');
    sendProgress('1_Selection');

    // Confetti or sound? kept minimal.
}

function showMessage(text, type) {
    messageArea.innerText = text;
    messageArea.className = `message-area visible ${type}`;
}

function clearMessage() {
    messageArea.className = 'message-area';
}

// Start
init();
