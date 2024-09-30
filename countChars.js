function count(string) {
    let count = {};
    string.split('').map((s) => {
       count[s] ? count[s]++ : count[s] = 1;
    });
    return count;
  }