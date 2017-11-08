function* IDgenerator() {
    let id = 0;
    while (true) {
        yield ++id;
    }
}

const idIterator = IDgenerator();

console.log(id1 = idIterator.next().value);
console.log(id2 = idIterator.next().value);
console.log(id3 = idIterator.next().value);