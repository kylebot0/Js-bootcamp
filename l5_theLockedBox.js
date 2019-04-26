const box = {
    locked: true,
    unlock() {
        this.locked = false;
    },
    lock() {
        this.locked = true;
    },
    _content: [],
    get content() {
        if (this.locked) throw new Error("Locked!");
        return this._content;
    }
};

function withBoxUnlocked(body) {
    let state = false;
    if (!box.locked) {
        box.unlock();
        state = true;
    } else {
        box.unlock();
    }
    try {
        return body();
    } finally {
        if (state) {
            console.log('The box was already unlocked');
        } else {
            box.lock();
        }
    }
}

withBoxUnlocked(function () {
    box.content.push("gold piece");
});

try {
    withBoxUnlocked(function () {
        throw new Error("Pirates on the horizon! Abort!");
    });
} catch (e) {
    console.log("Error raised:", e);
}
console.log(box.locked);