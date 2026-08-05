function retornarElemento<T>(array: T[], x: number) {
    let i = 0;
    while(i < x) {
        i++;
    }

    return array[i];
}

console.log(retornarElemento([10, 20, 30], 1));
console.log(retornarElemento(["a", "b", "c"], 0));