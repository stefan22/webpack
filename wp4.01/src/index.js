console.log('..from index66116.');

const operation = (op, x,y) => {
 const checkIsNum = (x,y) => {
  if (typeof x == 'string' && typeof y == 'string') {
    return x,y;
  }
 };

 switch (typeof op == 'string') {
  case 'sum':
   checkIsNum(x,y);
   op = x + y;
   console.log(op);
   break;
  case 'subs':
   checkIsNum(x,y);
   op = x - y;
   console.log(op);
   break;
  case 'mult':
   checkIsNum(x,y);
   op = x * y;
   console.log(op);
   break;
  default:
    return 'you must enter one of these: "sum", "subs" or "mult" ';
 };

};


operation('sum', 6,5);
operation('mult',5,4);
operation('subs',9,8);