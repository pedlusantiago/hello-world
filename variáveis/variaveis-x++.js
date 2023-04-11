let x = 10
// x = x + 1
// x += 1
//tbm serve pra x--

let y = ++x;
console.log("X: ", x);
console.log("Y: ", y);

y = x++
console.log("X: ", x);
console.log("Y: ",y);
//a ordem em que se coloca ++ (ou --) influencia na soma, pois é executado da
//esquerda para a direita: y = ++x (11 onde ++ soma +1). y = x++ (10 onde ++
//soma 1 após referenciar y como 10(x))