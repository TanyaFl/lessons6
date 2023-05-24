let arr=[];
for (let i = 10; i <= 20; i++) arr.push(i);
document.write(arr.join(',') + '<br/>')

arr=[];
for (let i = 10; i <= 20; i++) arr.push(i * i);
document.write(arr.join(',') +'<br/>')

arr = [];
for (let i = 1; i <= 9; i++) arr.push(7 * i);
document.write(arr.join(',') +'<br/>')

let sum = 0;
for (let i = 1; i <= 15; i++) sum += i;
document.write(sum +'<br/>')

let m = 15;
for (let i = 16; i <= 35; i++) m *= i;
document.write(m +'<br/>');

sum = 0;
for (let i = 1; i <= 500; i++) sum += i/ 500
document.write(sum +'<br/>')

sum = 0;
for (let i = 30; i <= 80; i++) {
 if (i % 2 === 0 )
 sum += i
} 
document.write(sum +'<br/>')

arr = [];
for (let i = 100; i <= 200; i++) {
	if (i % 3 === 0) {
		arr.push(i);
	}
}
document.write(arr.join(','))


