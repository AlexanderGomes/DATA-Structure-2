var countComponents = function (n, edges) {
  let arr = [];

  for (let i = 0; i < n; i++) {
    arr[i] = i;
  }

 // setting the second element to be equal it's root
 // [0, 0],[0], [3], [3] example: 1 becomes 0, 2 becomes 1 and then 1 becomes 0, 4 becomes 3, so wwe have two groups 0's and 3, that's how many connections we have
  const union = (i, j) => {
    let a = find(i);
    let b = find(j);

    if (a !== b) {
      arr[b] = a;
    }
  };

  const find = (val) => {
    while (val !== arr[val]) {
      val = arr[val];
    }
    return val;
  };

  for (let [a, b] of edges) {
    union(a, b);
  }

  console.log(arr);
  //getting the length of different groups
  return arr.filter((val, i) => val === i).length;
};

countComponents(5, [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
]);


// the variation using a count or so called rank, so you don't have totally unbalenced tree's
// the rank is used to measuer the size of each tree, if yp is bigger than xp then you want to set the root node of xp to be equal yp (root node of yp)
// this is called path compression
class UF {
  constructor(N) {
    this.parent = new Array.from({ length: N }, (_, i) => i);
    this.count = new Array(N).fill(1);
  }

  find(x) {
    if (this.parent[x] != x) this.parent[x] = this.find(this.parent[x]);
    return this.parent[x];
  }

  union(x, y) {
    const xp = this.find(x), yp = this.find(y);
    if (xp == yp) return;

    if (this.count[xp] < this.count[yp]) {
      this.parent[xp] = yp;
      this.count[yp] += this.count[xp];
    } else {
      this.parent[yp] = xp;
      this.count[xp] += this.count[yp];
    }
  }
}