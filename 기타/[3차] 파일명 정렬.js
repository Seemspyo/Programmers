function solution(files) {
    const digit = /[0-9]/;

    return files.map((file, index) => {
        const first = digit.exec(file).index;
        let last = first + 1;
        
        while (file[last] && digit.test(file[last])) last++;
        
        return {
            head: file.slice(0, first).toLowerCase(),
            num: file.slice(first, last),
            index,
            value: file
        }
    })
    .sort((a, b) => a.head.localeCompare(b.head) || Number.parseInt(a.num) - Number.parseInt(b.num) || a.index - b.index)
    .map(data => data.value);
}