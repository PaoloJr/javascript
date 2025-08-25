let a = 0;
let b = 1;
console.log(a);
console.log(b);

for (let i = 0; i < 10; i++) {
    let c = a + b;
    console.log(c);
    a = b;
    b = c;
}

// alternative using function
function fib(n) {
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }
    return fib(n - 1) + fib(n - 2);
}

console.log(fib(4));