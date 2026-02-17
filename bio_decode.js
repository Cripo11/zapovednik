document.addEventListener('DOMContentLoaded', () => {
    const plantGrid = document.querySelector('.plant-grid');
    const inputField = document.querySelector('input[type="text"]');
    const checkButton = document.querySelector('.btn-check');

    // Plant Data
    const plants = [
        { type: 'toxicity', name: 'КОПРОГРИБ', label: 'ТОКСИЧНОСТЬ', segments: 4, iconPath: 'M17,8C8,10,5.9,16.17,3.82,21.34L5.71,22l1-2.3A4.49,4.49,0,0,0,8,20C19,20,22,3,22,3,21,5,14,5.25,9,6.25S2,11.5,2,13.5a6.22,6.22,0,0,0,1.75,3.75C7,8,17,8,17,8Z' },
        { type: 'activity', name: 'ФХУГЖГРЛВ', label: 'АКТИВНОСТЬ', segments: 3, iconPath: 'M12,3L1,9L12,15L21,10.09V17H23V9M5,13.18V17.18L12,21L19,17.18V13.18L12,17L5,13.18Z' },
        { type: 'mutation', name: 'ГТЁН', label: 'ИНДЕКС МУТАЦИИ', segments: 1, iconPath: 'M7,2V4H8V18A4,4 0 0,0 12,22A4,4 0 0,0 16,18V4H17V2H7M11,16C10.4,16 10,15.6 10,15C10,14.4 10.4,14 11,14C11.6,14 12,14.4 12,15C12,15.6 11.6,16 11,16M13,12C12.4,12 12,11.6 12,11C12,10.4 12.4,10 13,10C13.6,10 14,10.4 14,11C14,11.6 13.6,12 13,12M14,7H10V4H14V7Z', encrypted: true },
        { type: 'concentration', name: 'ФХНТУЦНЧ', label: 'КОНЦЕНТРАЦИЯ', segments: 5, iconPath: 'M12,3A9,9 0 0,0 3,12A9,9 0 0,0 12,21A9,9 0 0,0 21,12A9,9 0 0,0 12,3M12,19A7,7 0 0,1 5,12A7,7 0 0,1 12,5A7,7 0 0,1 19,12A7,7 0 0,1 12,19M11,7H13V9H11V7M11,11H13V17H11V11Z', encrypted: true },
        { type: 'activity', name: 'ДРИЩЕПЛЮЙ', label: 'АКТИВНОСТЬ', segments: 2, iconPath: 'M12,17L7,12V2H17V12L12,17M8.5,12.1L12,15.6L15.5,12.1V7H17V4H7V7H8.5V12.1Z' },
        { type: 'toxicity', name: 'В', label: 'ТОКСИЧНОСТЬ', segments: 3, iconPath: 'M2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2A10,10 0 0,0 2,12M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4Z' },
        { type: 'concentration', name: 'СРАМОЦВЕТ', label: 'КОНЦЕНТРАЦИЯ', segments: 3, iconPath: 'M12,2L16,8L22,8L18,13L20,19L12,15L4,19L6,13L2,8L8,8L12,2Z', encrypted: true },
        { type: 'activity', name: 'ПЕРДОТРАВА', label: 'АКТИВНОСТЬ', segments: 1, iconPath: 'M21,16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V7.5C3,7.12 3.21,6.79 3.53,6.62L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.79,6.79 21,7.12 21,7.5V16.5Z', noise: true },
        { type: 'mutation', name: 'БЛЯДОКУСТ', label: 'ИНДЕКС МУТАЦИИ', segments: 4, iconPath: 'M10,21V18H3L8,13H5L10,8H7L12,3L17,8H14L19,13H16L21,18H14V21H10Z', encrypted: true },
        { type: 'toxicity', name: 'УЕБЛИСТ', label: 'ТОКСИЧНОСТЬ', segments: 1, iconPath: 'M12,2A7,7 0 0,1 19,9C19,11.38 17.81,13.47 16,14.74V17A1,1 0 0,1 15,18H9A1,1 0 0,1 8,17V14.74C6.19,13.47 5,11.38 5,9A7,7 0 0,1 12,2M9,21V20H15V21A1,1 0 0,1 14,22H10A1,1 0 0,1 9,21M12,4A5,5 0 0,0 7,9C7,11.05 8.23,12.81 10,13.58V16H14V13.58C15.77,12.81 17,11.05 17,9A5,5 0 0,0 12,4Z' },
        { type: 'concentration', name: 'ЦТЦ', label: 'КОНЦЕНТРАЦИЯ', segments: 4, iconPath: 'M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,7V17M7,12H17', encrypted: true },
        { type: 'mutation', name: 'СРАНОМОХ', label: 'ИНДЕКС МУТАЦИИ', segments: 3, iconPath: 'M12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22Z', encrypted: true },
        { type: 'toxicity', name: '-', label: 'ТОКСИЧНОСТЬ', segments: 0, iconPath: 'M2.06,10L12,12.94L21.94,10L19,2.06L12,5L5,2.06L2.06,10M12,15C10.74,15 9.77,15.63 9,16.4V19C9,20.1 9.9,21 11,21H13C14.1,21 15,20.1 15,19V16.4C14.23,15.63 13.26,15 12,15Z', noise: true },
        { type: 'concentration', name: 'ЖКЧРФУКЭУБК', label: 'КОНЦЕНТРАЦИЯ', segments: 6, iconPath: 'M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20M12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22M11,10H13V12H11V10M11,14H13V16H11V14Z', encrypted: true },
        { type: 'activity', name: 'ЧЕПУШНИК', label: 'АКТИВНОСТЬ', segments: 2, iconPath: 'M13,2V11H22V13H13V22H11V13H2V11H11V2H13Z' },
        { type: 'mutation', name: 'МФР', label: 'ИНДЕКС МУТАЦИИ', segments: 2, iconPath: 'M4.93,4.93C3.12,6.74 2,9.24 2,12C2,14.76 3.12,17.26 4.93,19.07L6.34,17.66C4.89,16.22 4,14.22 4,12C4,9.79 4.89,7.78 6.34,6.34L4.93,4.93M19.07,4.93L17.66,6.34C19.11,7.78 20,9.79 20,12C20,14.22 19.11,16.22 17.66,17.66L19.07,19.07C20.88,17.26 22,14.76 22,12C22,9.24 20.88,6.74 19.07,4.93M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6M12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16Z', encrypted: true }
    ];

    // Generate Cards
    function renderCards() {
        plantGrid.innerHTML = '';
        plants.forEach(plant => {
            const card = document.createElement('div');
            card.className = `plant-card type-${plant.type}`;

            let nameClass = 'plant-name';
            if (plant.encrypted) nameClass += ' encrypted';
            if (plant.noise) nameClass += ' noise-name';

            // Generate segments HTML
            let segmentsHTML = '';
            for (let i = 0; i < 6; i++) {
                segmentsHTML += `<div class="segment ${i < plant.segments ? 'active' : ''}"></div>`;
            }

            card.innerHTML = `
                <div class="plant-icon">
                    <svg viewBox="0 0 24 24">
                        <path d="${plant.iconPath}" />
                    </svg>
                </div>
                <div class="${nameClass}">${plant.name}</div>
                <div class="toxicity-meter">
                    <div class="meter-label">${plant.label}</div>
                    <div class="meter-bar">
                        ${segmentsHTML}
                    </div>
                </div>
            `;
            plantGrid.appendChild(card);
        });
    }

    renderCards();

    // Input Logic
    inputField.addEventListener('input', (e) => {
        let val = e.target.value;

        // Remove non-latin characters and special symbols
        val = val.replace(/[^A-Za-z]/g, '');

        // Uppercase
        val = val.toUpperCase();

        // Max 7 chars (handled by validation above implicitly + maxlength attr, but enforcement here is good)
        if (val.length > 7) val = val.slice(0, 7);

        e.target.value = val;
    });

    checkButton.addEventListener('click', () => {
        const answer = inputField.value;
        if (answer === 'MRRICCO') {
            document.getElementById('success-overlay').classList.remove('hidden');
            sendProgress('4_BioDecode');
            inputField.style.borderColor = 'var(--neon-acid)';
            inputField.style.color = 'var(--neon-acid)';
        } else {
            // Error handling - no alert, just visual feedback
            const originalBorderColor = inputField.style.borderColor;
            const originalColor = inputField.style.color;

            inputField.style.borderColor = 'var(--neon-red)';
            inputField.style.color = 'var(--neon-red)';

            // Revert after 2 seconds
            setTimeout(() => {
                inputField.style.borderColor = '';
                inputField.style.color = '';
            }, 2000);

            // Animation for error
            inputField.animate([
                { transform: 'translateX(0)' },
                { transform: 'translateX(-5px)' },
                { transform: 'translateX(5px)' },
                { transform: 'translateX(0)' }
            ], {
                duration: 300,
                iterations: 1
            });
        }
    });
});
