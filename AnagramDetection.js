var isAnagram = function(test, original) {
    let t = test.toLowerCase().split('').sort().join('');
    let o = original.toLowerCase().split('').sort().join('');
    
    console.log(t); 
    console.log(o); 
    
    return t.localeCompare(o) === 0;
};

console.log(isAnagram("Buckethead", "DeathCubeK"));  // true