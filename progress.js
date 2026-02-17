const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyWCdXytKmW4an2vCn44aepASdjn2XbIO17mJIXUx4e5mgrmQdz-zNmHhRmYHVj_l3A/exec";
const SECRET = "d7Kq_91XvPzL_4RtY8mN";
const QUEUE_KEY = "zapovednik_progress_queue";

/**
 * Sends progress to the server. If offline or failed, queues it for later.
 * @param {string} level - Level identifier (e.g., '1_Selection')
 */
async function sendProgress(level) {
    const nickname = localStorage.getItem("userNickname");
    if (!nickname) {
        console.warn("Progress tracking skipped: No nickname found.");
        return;
    }

    const payload = {
        secret: SECRET,
        nickname: nickname,
        level: String(level)
    };

    // Add to queue immediately to ensure persistence
    addToQueue(payload);

    // Try to flush queue
    await flushQueue();
}

/**
 * Adds an item to the local storage queue.
 */
function addToQueue(payload) {
    let queue = getQueue();
    // Avoid duplicates if possible (simple check)
    const isDuplicate = queue.some(item =>
        item.nickname === payload.nickname &&
        item.level === payload.level
    );

    if (!isDuplicate) {
        queue.push(payload);
        saveQueue(queue);
    }
}

/**
 * Tries to send all queued items.
 */
async function flushQueue() {
    let queue = getQueue();
    if (queue.length === 0) return;

    console.log(`Flushing progress queue (${queue.length} items)...`);

    const remainingQueue = [];

    for (const item of queue) {
        try {
            const body = new URLSearchParams(item);
            const res = await fetch(SCRIPT_URL, {
                method: "POST",
                body: body
            });

            if (res.ok) {
                console.log(`Progress sent for ${item.level}: Success`);
            } else {
                console.error(`Progress sent for ${item.level}: Failed with status ${res.status}`);
                remainingQueue.push(item); // Keep in queue
            }
        } catch (err) {
            console.error(`Progress sent for ${item.level}: Network Error`, err);
            remainingQueue.push(item); // Keep in queue
        }
    }

    saveQueue(remainingQueue);
}

function getQueue() {
    try {
        const q = localStorage.getItem(QUEUE_KEY);
        return q ? JSON.parse(q) : [];
    } catch (e) {
        console.error("Error parsing progress queue:", e);
        return [];
    }
}

function saveQueue(queue) {
    localStorage.setItem(QUEUE_KEY, JSON.stringify(queue));
}

// Try to flush queue on load (in case previous attempt failed)
document.addEventListener('DOMContentLoaded', () => {
    // Small delay to ensure network is ready
    setTimeout(flushQueue, 2000);
});
