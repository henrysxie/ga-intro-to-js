function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}


/*
The greatest common divisor (gcd) of two positive integers is the largest integer that divides evenly into both of them.

For example, the greatest common divisor of 102 and 68 is 34 since both 102 and 68 are multiples of 34,
but no integer larger than 34 divides evenly into 102 and 68.

We can efficiently compute the gcd using the following property, which holds for positive integers p and q:
If p > q, the gcd of p and q is the same as the gcd of q and p % q.
*/


function gcd(p, q) {

    if (q === 0) {
        return p;
    }
    return gcd(q, p % q);

}