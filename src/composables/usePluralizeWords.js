export function usePluralize(number, forms) {
    const n = Math.abs(number) % 100
    const lastDigit = n % 10

    if (n > 10 && n < 20) return forms[2]
    if (lastDigit === 1) return forms[0]
    if (lastDigit >= 2 && lastDigit <= 4) return forms[1]

    return forms[2]
}