// Source:  https://www.hackerrank.com/challenges/counting-valleys/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup

    // U = 1 step UP        D = 1 step DOWN
    // a MOUNTAIN is defined as starting at sea level and stepping U (up) and ending with a step D (down) to sea level.  so sealevel = 0, mountain = [U, U, D, U, D, D].  Basically a series of steps DOWN toward sea level, starting with UP from sea level.
    // a VALLEY would be defined as the opposite.  From sea level, a series of steps beginning DOWNward; followed by a series of steps UP toward sea level.

    /* still a valley?
        \            ____
         \          /
          \        /
           \______/
    */

// Complete the countingValleys function below.
function countingValleys(n, s) {
    // n = steps
    // s = string of steps.  i.e. DDUUDUDDUU
    // prev_num used to determine if upon reaching sea level (elevation = 0), was I on a hill or a valley.
    // elevation used to track current position
    let i = 0;
    let prev_elevation;
    let elevation = 0; // sea level
    let valley = 0
    while(i<n){

        if(s.charAt(i) === "D"){
            prev_elevation = elevation
            elevation -= 1
            i++
            console.log("ELEVATION from D: ", elevation)
        }
        if(s.charAt(i) === "U"){
            prev_elevation = elevation
            elevation += 1
            i++
            console.log("ELEVATION from U: ", elevation)
            if(elevation == 0 && prev_elevation < 0){
                valley += 1
            }
        }
    }
    console.log(`VALLEYS: ${valley}`)
    return valley
}


// COMPLETED, PASSES!
// Test
countingValleys(8,"DDUUDDUUDD")