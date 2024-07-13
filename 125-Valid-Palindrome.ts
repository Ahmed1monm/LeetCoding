function isAlphanumeric(char) {
    return (char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z') || (char >= '0' && char <= '9')
}

function isPalindrome(s) {
    // TODO: remove any spaces and special characters and numbers
    s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
    console.log(s)
    let start = 0;
    let end = s.length;

    if (s.length === 1 || s === '') return true;
    if (s.length === 1) return true;
    if (s.length === 2 && s[0] !== s[1]) return false;

    while (start < end) {
        if (!isAlphanumeric(s[start])) {start ++; continue;}
        if (!isAlphanumeric(s[end])) {end --; continue;}

        if (s[start] !== s[end]) {
            console.log(`start [${s[start]}] end [${s[end]}]`)
            return false
        }
        start ++
        end --
    }
    return true
}