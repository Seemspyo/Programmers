function solution(N) {
    const primes = Array(N), sqrt = Math.sqrt(N);
    primes.fill(true, 1);

    for (let n = 2; n <= sqrt; n++) {
        for (let m = 2, c = n * m; c <= N; c = n * ++m) {
            const index = c - 1;

            if (primes[index]) primes[index] = false;
        }
    }

    return primes.filter(isPrime => isPrime).length;
}