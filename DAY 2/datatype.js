
//! Datatypes
//* string, numbers, boolean, arrays, objects, undefined

//? String      :- anything inside '' or ""
//: eg          :- let name = '';

//? Number      :- numbers or decimals or negative values
//: eg          :- let age = 25.4;

//? Boolean     :- true or false
//: eg          :- let isUserActive = true;

//? Array       :- collection of different datatypes which is represented inside []
//: eg          :- let data = ['rajesh','23','true'];

    //| Push       :- add only one values at the end of the array
    //^ eg         :- data.push(python full stack')

    //| Pop        :- removes only one values at the end of the array
    //^ eg         :- data.pop()

    //| Splice     :- To removes the desired one from the array based on index numbers
    //; Syntax     :- array.splice(index,deleteCount)
    //^ eg         :- data.splice(1,1)

    //|               To removes the desired one from the array based on index numbers
    //; Syntax     :- array.splice(index,deleteCount,'value1','value2') --> here we are setting deleCount it
    //;                                                                     will add value to desired position
    //;                                                                     without removing the old value and 
    //;                                                                     we can set values of deleteCount 
    //;                                                                     therefore it will remove the value
    //;                                                                     and add the new value
    //^ eg         :- data.splice(1,1,'ece','palakkad')

//? Undefined   :- nothing had defined so far
//: eg          :- let data = ['rajesh','23','true'];
//: eg          :- console.log (data[3]);                               --> here it doesn't have value for index
//:                                                                         number 3 so it returns undefined
