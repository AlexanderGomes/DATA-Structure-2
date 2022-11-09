// this is the only function you need to study union find

var countComponents = function (n, edges) {
  const parent = Array.from({ length: n }, (_, i) => i);
  const rank = Array.from({ length: n }, () => 0);
  let output = n;

  
  // find w/ path compression
  // find parent of x
  const find = (x) => {
    while (x != parent[x]) {
      //path compression
      parent[x] = parent[parent[x]];

      x = parent[x];
    }

    return x;
  };

  // union by rank
  const union = (x, y) => {
    const X = find(x); // root x
    const Y = find(y); // root y

    if (X === Y) return; // if same parent, stop

    // union by rank
    if (rank[Y] > rank[X]) parent[X] = Y;
    else if (rank[X] > rank[Y]) parent[Y] = X;
    else {
      parent[Y] = X;
      rank[X]++;
    }

    output--; // after merging, decrement count. We know that we have 1 less component since we just merged one.
  };

  for (const [u, v] of edges) {
    union(u, v);
  }

  return output;
};



// length // value
const arr = Array.from({length: n}, (_, i) => i)
const rank = Array.from({length: n}, () => 0)