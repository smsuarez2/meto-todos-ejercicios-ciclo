'use strict';

// ordenamiento burbuja
let nums = [3, 6, 1, ];
let aux;
for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
       if (nums[j] > nums[i]) {
         aux = nums[i];
         nums[i] = nums[j];
         nums[j] = aux;
       }
    
    
    }
   


































    

}
alert ('Wait...'+ nums);   