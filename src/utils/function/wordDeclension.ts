export function wordDeclension(num: number, form_for_1: string, form_for_2: string, form_for_5: string) {
    let newNum = Math.abs(num) % 100; // берем число по модулю и сбрасываем сотни (делим на 100, а остаток присваиваем переменной $num)
    let num_x = newNum % 10; // сбрасываем десятки и записываем в новую переменную
    if (newNum > 10 && newNum < 20) // если число принадлежит отрезку [11;19]
        return form_for_5;
    if (num_x > 1 && num_x < 5) // иначе если число оканчивается на 2,3,4
        return form_for_2;
    if (num_x === 1) // иначе если оканчивается на 1
        return form_for_1;
    return form_for_5;
}