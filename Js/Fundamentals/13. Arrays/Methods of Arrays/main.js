const friends = ["Micheal", "Steven", "Peter"];
const newLength = friends.push("Jay");
console.log(friends);
console.log(newLength);

// Add elements to front
friends.unshift("John");
console.log(friends);

// Remove elements
const popped = friends.pop();
console.log(popped);
console.log(friends);

// Remove front elements
friends.shift();
console.log(friends);

// Return index of Steven
console.log(friends.indexOf("Steven"));

// Since no Sakar in array, it'll return -1
console.log(friends.indexOf("Sakar"));

// Return true
console.log(friends.includes('Steven'));
console.log(friends.includes('Peter'));

// Return false
console.log(friends.includes('Sakar'));




