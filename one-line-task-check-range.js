// my initial solution, which did not pass the tests -> it has length of 49
checkRange=(a,x,y)=>a.filter(n=>n>=x&n<=y).length

// actual solution i found on stackoverflow
// https://stackoverflow.com/questions/52729636/one-line-task-check-range-codewars-using-javascripts-methods
checkRange=(a,x,y)=>a.map(v=>i+=x>v==v>y,i=0)|i
