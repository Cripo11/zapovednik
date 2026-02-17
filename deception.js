document.addEventListener('DOMContentLoaded', () => {
    const plantGrid = document.querySelector('.plant-grid');
    const inputField = document.querySelector('input[type="text"]');
    const checkButton = document.querySelector('.btn-check');

    const plants = [
        {
            name: 'СРАМОЦВЕТ',
            type: 'concentration',
            className: 'АКТИВАТОР',
            observation: 'Реагирует на внешние раздражители краткими и длинными всплесками.<br>Импульсы фиксируются сериями с устойчивым ритмом.',
            pulse: '• - • - • • • •'
        },
        {
            name: 'ПОНТОРОЗ',
            type: 'activity',
            className: 'РАСТВОРИТЕЛЬ',
            observation: 'Структура образца разрушается ступенчато.<br>Сигнал искажается при прямом считывании.',
            pulse: '• - • • • - • -'
        },
        {
            name: 'СРАНОКЛЕВЕР',
            type: 'mutation',
            className: 'ИНГИБИТОР',
            observation: 'Подавляет соседние сигналы.<br>Импульс проявляется в виде серий коротких всплесков.',
            pulse: '• • • - • - • -'
        },
        {
            name: 'БЛЯДОКУСТ',
            type: 'concentration',
            className: 'КАТАЛИЗАТОР',
            observation: 'Усиливает колебания среды.<br>Фиксируется серия длинных импульсов.',
            pulse: '• - • • • - • •'
        },
        {
            name: 'ТИТЬКОТРАВА',
            type: 'activity',
            className: 'АКТИВАТОР',
            observation: 'Накапливает энергию и сбрасывает её волной.<br>Сигнал повторяется симметрично.',
            pulse: '• - • - - • - •'
        },
        {
            name: 'ЧЕПУШНИК',
            type: 'toxicity',
            className: 'КОАГУЛЯНТ',
            observation: 'Формирует плотные, но нестабильные структуры.<br>Импульс распадается при фиксации.',
            pulse: '• - • • - • - -'
        },
        {
            name: 'КОЗЛОДЫРНИК',
            type: 'concentration',
            className: 'МОДИФИКАТОР',
            observation: 'Искажает соседние образцы.<br>Последовательность нестабильна.',
            pulse: '• • • • • • • •'
        },
        {
            name: 'ХРЕНОДЕНДРОН',
            type: 'activity',
            className: 'СТАБИЛИЗАТОР',
            observation: 'Снижает амплитуду внешних колебаний.<br>Сигнал не повторяется.',
            pulse: '• - • • - - - -'
        },
        {
            name: 'СРАНОМОХ',
            type: 'mutation',
            className: 'РАСТВОРИТЕЛЬ',
            observation: 'Поверхность реагирует с задержкой.<br>Импульс считывается только после отражения.',
            pulse: '- - - - - • • •'
        },
        {
            name: 'ШИЗОЦВЕТ',
            type: 'toxicity',
            className: 'БУФЕР',
            observation: 'Пульсации повторяются циклически.<br>Система фиксирует двоичную структуру сигнала.',
            pulse: '• - • • • • • -'
        },
        {
            name: 'ЖГУЧЕЛИСТ',
            type: 'activity',
            className: 'СТАБИЛИЗАТОР',
            observation: 'Сохраняет форму сигнала.<br>Регистрируется последовательность длинных и коротких всплесков.',
            pulse: '• - • - • - - •'
        },
        {
            name: 'ЕГЕРЛИСТ',
            type: 'concentration',
            className: 'БУФЕР',
            observation: 'Удерживает импульс в пределах цикла.<br>Считывание даёт инвертированный результат.',
            pulse: '• - • • - • • -'
        },
        {
            name: 'ГЛЮКОМОР',
            type: 'mutation',
            className: 'КАТАЛИЗАТОР',
            observation: 'Вызывает резонансные всплески.<br>Фиксируется чередование длинных и коротких сигналов.',
            pulse: '- - • • - • - •'
        },
        {
            name: 'ЁПРСТНИК',
            type: 'toxicity',
            className: 'КОАГУЛЯНТ',
            observation: 'Структура фрагментирована.<br>Импульс хаотичен.',
            pulse: '• - • • - - - •'
        },
        {
            name: 'ДУРНОПЛЮЩ',
            type: 'activity',
            className: 'МОДИФИКАТОР',
            observation: 'Изменяет амплитуду соседних образцов.<br>Сигнатура нестабильна.',
            pulse: '- - - - - • • -'
        }
    ];

    // Icon Paths (Cycling through previous list for variety)
    const iconPaths = [
        'M17,8C8,10,5.9,16.17,3.82,21.34L5.71,22l1-2.3A4.49,4.49,0,0,0,8,20C19,20,22,3,22,3,21,5,14,5.25,9,6.25S2,11.5,2,13.5a6.22,6.22,0,0,0,1.75,3.75C7,8,17,8,17,8Z',
        'M12,3L1,9L12,15L21,10.09V17H23V9M5,13.18V17.18L12,21L19,17.18V13.18L12,17L5,13.18Z',
        'M7,2V4H8V18A4,4 0 0,0 12,22A4,4 0 0,0 16,18V4H17V2H7M11,16C10.4,16 10,15.6 10,15C10,14.4 10.4,14 11,14C11.6,14 12,14.4 12,15C12,15.6 11.6,16 11,16M13,12C12.4,12 12,11.6 12,11C12,10.4 12.4,10 13,10C13.6,10 14,10.4 14,11C14,11.6 13.6,12 13,12M14,7H10V4H14V7Z',
        'M12,3A9,9 0 0,0 3,12A9,9 0 0,0 12,21A9,9 0 0,0 21,12A9,9 0 0,0 12,3M12,19A7,7 0 0,1 5,12A7,7 0 0,1 12,5A7,7 0 0,1 19,12A7,7 0 0,1 12,19M11,7H13V9H11V7M11,11H13V17H11V11Z',
        'M12,17L7,12V2H17V12L12,17M8.5,12.1L12,15.6L15.5,12.1V7H17V4H7V7H8.5V12.1Z',
        'M2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2A10,10 0 0,0 2,12M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4Z',
        'M12,2L16,8L22,8L18,13L20,19L12,15L4,19L6,13L2,8L8,8L12,2Z',
        'M21,16.5C21,16.88 20.79,17.21 20.47,17.38L12.57,21.82C12.41,21.94 12.21,22 12,22C11.79,22 11.59,21.94 11.43,21.82L3.53,17.38C3.21,17.21 3,16.88 3,16.5V7.5C3,7.12 3.21,6.79 3.53,6.62L11.43,2.18C11.59,2.06 11.79,2 12,2C12.21,2 12.41,2.06 12.57,2.18L20.47,6.62C20.79,6.79 21,7.12 21,7.5V16.5Z',
        'M10,21V18H3L8,13H5L10,8H7L12,3L17,8H14L19,13H16L21,18H14V21H10Z',
        'M12,2A7,7 0 0,1 19,9C19,11.38 17.81,13.47 16,14.74V17A1,1 0 0,1 15,18H9A1,1 0 0,1 8,17V14.74C6.19,13.47 5,11.38 5,9A7,7 0 0,1 12,2M9,21V20H15V21A1,1 0 0,1 14,22H10A1,1 0 0,1 9,21M12,4A5,5 0 0,0 7,9C7,11.05 8.23,12.81 10,13.58V16H14V13.58C15.77,12.81 17,11.05 17,9A5,5 0 0,0 12,4Z'
    ];

    let currentFlipped = null;

    // Generate Cards
    function renderCards() {
        plantGrid.innerHTML = '';
        plants.forEach((plant, index) => {
            const cardContainer = document.createElement('div');
            cardContainer.className = 'card-container';

            // Assign a random icon from the list
            const iconPath = iconPaths[index % iconPaths.length];

            // Toggle Logic
            cardContainer.addEventListener('click', function () {
                // If clicking the same card that is already open -> Close it
                if (currentFlipped === this) {
                    this.classList.remove('flipped');
                    currentFlipped = null;
                    return;
                }

                // If another card is open, close it automatically
                if (currentFlipped) {
                    currentFlipped.classList.remove('flipped');
                }

                // Open this card
                this.classList.add('flipped');
                currentFlipped = this;
            });

            // Back Face Content (The Revealed "Info")
            const backContent = `
                <div class="card-info">
                    <div class="info-row">
                        <span class="info-label">КЛАСС:</span>
                        <span class="info-value">${plant.className}</span>
                    </div>
                    
                    <div class="info-block">
                        <div class="info-header">НАБЛЮДЕНИЕ:</div>
                        <div class="info-text">
                            ${plant.observation}
                        </div>
                    </div>

                    <div class="info-block">
                        <div class="info-header">ИМПУЛЬС:</div>
                        <div class="info-text pulse-text">${plant.pulse}</div>
                    </div>
                </div>
            `;

            cardContainer.innerHTML = `
                <div class="card-flipper">
                    <!-- Front Face (Visible Initially: Icon + Name) -->
                    <div class="card-face card-front type-${plant.type}">
                        <div class="plant-icon">
                            <svg viewBox="0 0 24 24">
                                <path d="${iconPath}" />
                            </svg>
                        </div>
                        <div class="plant-name">${plant.name}</div>
                    </div>

                    <!-- Back Face (Revealed: Text Info) -->
                    <div class="card-face card-back">
                        ${backContent}
                    </div>
                </div>
            `;
            plantGrid.appendChild(cardContainer);
        });
    }

    renderCards();

    // Input Logic (Same as before)
    inputField.addEventListener('input', (e) => {
        let val = e.target.value;
        val = val.replace(/[^A-Za-z]/g, '');
        val = val.toUpperCase();
        // Max 15 chars (handled by validation above implicitly + maxlength attr, but enforcement here is good)
        if (val.length > 15) val = val.slice(0, 15);
        e.target.value = val;
    });

    checkButton.addEventListener('click', () => {
        const answer = inputField.value;
        if (answer === 'ZAPOVEDNIK') {
            document.getElementById('success-overlay').classList.remove('hidden');
            sendProgress('4_Deception');
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
