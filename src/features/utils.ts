export const checkDuble = (arr: any[]) => {
    let map: any = {};
    let arr2: any[] = [];

    arr.forEach((el) => {
        if (!map[el.latitude]) {
            map[el.latitude] = el;
            arr2.push(map[el.latitude]);
        }
    });
    return arr2;
};