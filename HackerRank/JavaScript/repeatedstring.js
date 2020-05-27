// SOURCE: https://www.hackerrank.com/challenges/repeated-string/problem?h_l=interview&playlist_slugs%5B%5D%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D%5B%5D=warmup&isFullScreen=true

function repeatedString(s, n) {
    let a_s = 0;
    let count = 0;
    let remainder_of_n = n%s.length;
    // console.log("remainder: ", modified_n)
    if(n > 0 && s.length){
        for(let i=0; i<s.length; i++) {
            if(s[i] === 'a') {
                a_s += 1;
            }   
        }
    }
    if(n>s.length) {
        // console.log("??", a_in_s)
        // console.log("result", (n - modified_n) / s.length)
        a_s *= ((n - remainder_of_n) / s.length )
        // console.log("multiplied", a_s)
    }
    if(remainder_of_n>0 || n<s.length) {
        for(let j=0; count<remainder_of_n; j++){
            if(s[j] === 'a') {
                a_s += 1;
            }
            count++
            if(j>=s.length-1){
                j=-1
            }
        }
    }
    console.log(a_s)
    console.log(typeof(a_s))
    return a_s
}

repeatedString('', 10)