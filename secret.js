document.addEventListener('DOMContentLoaded', () => {
    const deltaTrigger = document.getElementById('delta-trigger');
    const vigenereContainer = document.getElementById('vigenere-container');
    const secretInput = document.getElementById('secret-input');
    const confirmBtn = document.getElementById('secret-confirm-btn');

    // Toggle Visibility
    deltaTrigger.addEventListener('click', () => {
        vigenereContainer.classList.toggle('hidden');
        // Optional: Scroll to it if needed, or just focus
        if (!vigenereContainer.classList.contains('hidden')) {
            setTimeout(() => secretInput.focus(), 100);
        }
    });

    // Input Validation (Latin only)
    secretInput.addEventListener('input', (e) => {
        let val = e.target.value;
        // Keep only Latin letters
        val = val.replace(/[^A-Za-z]/g, '');
        e.target.value = val;
    });

    // Confirm Button Logic with Error Animation
    confirmBtn.addEventListener('click', () => {
        const val = secretInput.value.toUpperCase();

        if (val !== 'STRADANIE') {
            // 1. Change color to Red
            secretInput.style.borderColor = 'var(--neon-red)';
            secretInput.style.color = 'var(--neon-red)';

            // 2. Shake Animation
            secretInput.animate([
                { transform: 'translateX(0)' },
                { transform: 'translateX(-5px)' },
                { transform: 'translateX(5px)' },
                { transform: 'translateX(0)' }
            ], {
                duration: 300,
                iterations: 1
            });

            // 3. Revert after 1 second
            setTimeout(() => {
                secretInput.style.borderColor = '';
                secretInput.style.color = '';
            }, 1000);
        } else {
            // Success Logic - Replace input block with success message
            const inputBlock = document.querySelector('.input-block-secret');
            inputBlock.innerHTML = `
                <div style="text-align: center; color: var(--neon-green); animation: fadeIn 0.5s;">
                    <h3 style="margin: 0 0 0.5rem 0; letter-spacing: 0.1em; font-family: var(--font-head);">АВТОРИЗАЦИЯ УСПЕШНА</h3>
                    <p style="margin: 0 0 1.5rem 0; font-size: 0.9rem; color: #fff;">Δ-СЛОЙ АКТИВИРОВАН</p>
                    
                    <p style="color: var(--text-main); font-family: var(--font-body); font-size: 1rem; margin-bottom: 0.5rem; letter-spacing: 0.05em;">Для доступа к секретному архиву используйте пароль:</p>
                    <div style="font-family: var(--font-mono); font-size: 1.5rem; color: #fff; background: rgba(0, 255, 157, 0.1); padding: 0.5rem 1rem; border: 1px solid var(--neon-green); display: inline-block; border-radius: 4px; box-shadow: 0 0 15px rgba(0, 255, 157, 0.2);">DELTA42</div>
                </div>
            `;
        }
    });
});
