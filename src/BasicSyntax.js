function fn(a) {
    if (a == 'M') {
        return 1000;
    }
    if (a == 'D') {
        return 500;
    }
    if (a == 'C') {
        return 100;
    }
    if (a == 'L') {
        return 50;
    }
    if (a == 'X') {
        return 10;
    }
    if (a == 'V') {
        return 5;
    }
    if (a == 'I') {
        return 1;
    }
    return 0;
}
export function romanToInteger(str) {
    let result = 0;
    let i = 0,
        left,
        right;
    /*
    Напишите код, преобразующий число из римской записи в арабскую.
    На вход вы получите строку, ответом должно быть число.
     */
    while (i + 1 <= str.length) {
        left = fn(str[i]);
        right = fn(str[i + 1]);
        if (left >= right) {
            result += left;
        } else {
            result += right - left;
            i++;
        }
        i++;
        left = right;
    }
    return result;
}
