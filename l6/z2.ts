function fibRec(n: number): number {
    if (n <= 1) return n;
    return fibRec(n - 1) + fibRec(n - 2);
}

function memofib(n: number): number {
    const cache: number[] = [0, 1];
    for (let i = 2; i <= n; i++) {
        cache[i] = cache[i - 1] + cache[i - 2];
    }
    return cache[n];
}
