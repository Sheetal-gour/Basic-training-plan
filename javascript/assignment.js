// Problem 1: Complete the secondLargest function which takes in an array of numbers in input and return the second biggest number in the array. (without using sort)?
function secondLargest(array) {
    // Write your code here
    
    var m1 = 0;
    for(let i=1;i<array.length;i++)
      {
        if(array[i] >= array[m1]) {
          m1 = i;
        }
      }
    
    array[m1] = -9999999;
    
    m1 = 0;
    for(let i=1;i<array.length;i++)
      {
        if(array[i] >= array[m1]) {
          m1 = i;
        }
      }
    
    return array[m1];
  }
  
  // Problem 2: Complete the calculateFrequency function that takes lowercase string as input and returns frequency of all english alphabet. (using only array, no in-built function)
  function calculateFrequency(string) {
    // Write your code here
     var freq = {};
      for (var i=0; i<string.length;i++) 
      {
          var letter = string[i];
          if (letter.charCodeAt()>=97 && letter.charCodeAt() <= 122)
          {
              if (freq[letter]) 
              {
                 freq[letter]++;
              } 
              else 
              {
                 freq[letter] = 1;
              }
          }
      }
     return freq;
  }
  
  // Problem 3: Complete the flatten function that takes a JS Object, returns a JS Object in flatten format (compressed)
  function flatten(unflatObject) {
    // Write your code here
    
    var result = {};
    for (var i in unflatObject) 
    {
          if (!unflatObject.hasOwnProperty(i)) continue;
  
          if ((typeof unflatObject[i]) == 'object' && unflatObject[i] !== null) 
          {
              var flatObject = flatten(unflatObject[i]);
              for (var x in flatObject) 
              {
                  if (!flatObject.hasOwnProperty(x)) continue;
                  result[i + '.' + x] = flatObject[x];
              }
  
          } 
          else 
          {
            result[i] = unflatObject[i];
          }
    }
      return result;
  }
  
  // Problem 4: Complete the unflatten function that takes a JS Object, returns a JS Object in unflatten format
  function unflatten(flatObject) {
    // Write your code here
    
    var result = {}, temp, substrings, property, i;
    for (property in flatObject) 
    {
      substrings = property.split('.');
    
            if (substrings.length >1)
            {
                str =[];
                for(j in substrings)
                {
                      if (substrings[j]!="")
                      {
                        str.push(substrings[j]);
                      }
                }
              substrings = str;
            }
  
          temp = result;
          for (i = 0; i < substrings.length - 1; i++) 
          {
                if (!(substrings[i] in temp)) 
                {
                      if (isFinite(substrings[i + 1])) 
                      {                               
                          temp[substrings[i]] = [];  
                      }
                  
                      else 
                      {
                          temp[substrings[i]] = {};      
                      }
                }
                temp = temp[substrings[i]];
          }
          temp[substrings[substrings.length - 1]] = flatObject[property];
     }
  
  return result;
  }
  