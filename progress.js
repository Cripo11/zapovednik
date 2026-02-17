const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzkbzZMR3xH8OCszeof84QAkmEvlODhjYJh5-9spVcTn0gbZyy3BN_X2fGFlLk466l5/exec";
const SECRET = "d7Kq_91XvPzL_4RtY8mN";
const QUEUE_KEY = "zapovednik_progress_queue";

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

    addToQueue(payload);

    await flushQueue();
}


function addToQueue(payload) {
    let queue = getQueue();
    const isDuplicate = queue.some(item =>
        item.nickname === payload.nickname &&
        item.level === payload.level
    );

    if (!isDuplicate) {
        queue.push(payload);
        saveQueue(queue);
    }
}


let isSending = false;

async function flushQueue() {
    if (isSending) return;
    isSending = true;

    let queue = getQueue();
    if (queue.length === 0) {
        isSending = false;
        return;
    }

    console.log(`Flushing progress queue (${queue.length} items)...`);

    saveQueue([]);

    const failedItems = [];

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
                failedItems.push(item);
            }
        } catch (err) {
            console.error(`Progress sent for ${item.level}: Network Error`, err);
            failedItems.push(item);
        }
    }

    if (failedItems.length > 0) {
        const currentQueue = getQueue();
        saveQueue([...failedItems, ...currentQueue]);
    }

    isSending = false;
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

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(flushQueue, 2000);
});
