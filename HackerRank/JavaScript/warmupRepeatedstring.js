function repeatedString(s, n) {
    let count = 0
    for(i=0; i < i.length; i++){
        char = new_str[i]
        if(char === 'a'){
            count ++
        }
    // console.log(count)
    }
    // console.log(count * (n/s.length))
    // console.log("modulus", s[n % s.length])
    // console.log("COUNT", count)
    console.log(count *(n % s.length))
    console.log(count *((n / s.length) + (n % s.length)))
    // return count *= (n/s.length)       
}

repeatedString('aba', 10)