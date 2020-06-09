// Given a binary tree t, determine whether it is symmetric around its center, i.e.each side mirrors the other.

// build a binary tree.
function Tree(x) {
    this.value;
    this.left = null;
    this.right = null;
}

// recursive check symmetry helper function
const checksymm = (left, right) => {
    if(left === null && right === null) {
        return true;
    }

    if(left === null || right === null || left.value !== right.value) {
        return false;
    }

    return checksymm(left.left, right.right) && checksymm(right.right, left.left)
}

// base(non recursive) function for checking symmetry
function is_tree_symmetric(t) {
    console.log(checksymm(t, t))
    return checksymm(t, t)
}

// COMPLETED, PASSES!
// TESTS
// 'false' symm binary tree
t={
    "value": 1,
    "left" : {
        "value": 2,
        "left" : null,
        "right": {
            "value": 3,
            "left" : null, 
            "right": null,
        }
    },
    "right" : {
        "value": 2,
        "left" : null,
        "right": {
            "value": 3,
            "left" : null, 
            "right": null,
        }
    }
}
// 'true' symm binary tree
// t={
//     "value": 1,
//     "left" : {
//         "value": 2,
//         "left" : {
//             "value": 3,
//             "left" : null, 
//             "right": null,          
//         },
//         "right": {
//             "value": 4,
//             "left" : null, 
//             "right": null,
//         }
//     },
//     "right" : {
//         "value": 2,
//         "left" : {
//             "value": 4,
//             "left" : null, 
//             "right": null,          
//         },
//         "right": {
//             "value": 3,
//             "left" : null, 
//             "right": null,
//         }
//     }
// }
is_tree_symmetric(t)
