function solution(s){
    let open = 0;
    
    for (const char of s) {
        switch (char) {
            case '(':
                open++;
                break;
            case ')':
                if (!open) return false;
                open--;
                break;
        }
    }
    
    return open ? false : true;
}