function solution(list) {
    if (list.length > 1) {
        const min = { index: void 0, value: Infinity }

        for (let i = 0; i < list.length; i++)
            if (list[i] < min.value) {
                min.index = i;
                min.value = list[i]
            }
        
        list.splice(min.index, 1);
    } else list[0] = -1;
    
    return list;
}