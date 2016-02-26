/*
Create a hash table data structure
*/

// hashing function
var getIndexBelowMaxForKey = function(key, storageLimit){
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash<<5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

var hashTable = function(){
  // code here
};