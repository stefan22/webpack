console.log('..from index');
console.clear();

const operation = (op, x,y) => {
 const checkIsValid = (op,x,y) => {
  let isOpValid = (typeof op !== 'string') ? 'not valid' : op;
  if (typeof x == 'number' && typeof y == 'number') {
    if(isOpValid !== 'not valid') {
     return x,y;
    } else {
      console.log('this op is not valid, please enter a valid op');
      return true;
    }
  } else {
    console.log('for an operation to be performed, pass numbers only.');
    return true;
  }
 };

 (() => {
   switch (op) {
     case 'sum':
       checkIsValid(op, x, y);
       op = x + y;
       console.log(op);
       break;
     case 'subs':
       checkIsValid(op, x, y);
       op = x - y;
       console.log(op);
       break;
     case 'mult':
       checkIsValid(op, x, y);
       op = x * y;
       console.log(op);
       break;
     default:
       console.log('at the moment we only do sum, subs, and mult. Try again');
       break;
   }
   return true;
})();

};




operation('sum', 6,5);
operation('mult',5,4);
operation('subs',9,8);
operation('calc',3,4);