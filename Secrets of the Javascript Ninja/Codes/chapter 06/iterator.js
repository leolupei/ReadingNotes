function* WeaponGenerator() {
    yield 'Katana';
    yield 'Wakizashi';
    yield* NameGenerator();
}

function* NameGenerator() {
    yield 'Leo Pink';
    yield 'steve vai';
}

// - iterator 访问/
function iteratorFunc() {
    const weaponsIterator = WeaponGenerator();
    let r;
    while (r = weaponsIterator.next(), !r.done) {
        console.log(r.value);
    }
}

// - for
function forFunc() {
    for (let i of WeaponGenerator()) {
        console.log(i);
    }
}

forFunc();