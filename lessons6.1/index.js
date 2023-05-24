const arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

let min = arr[0], minNo = 0;
let max = arr[0], maxNo = 0;
let negativesCount = 0;
let positivesProduct = 0;

for (let i = 1; i < arr.length; i++) {
	const current = arr[i];
	if (current < min) {
		min = current;
		minNo = i;
	} else if (current > max) {
		max = current;
		maxNo = i;
	}
	
	if (current < 0) {
		negativesCount++;
	} else {
		if (positivesProduct == 0) {
			positivesProduct = current;
		} else {
			positivesProduct *= current;
		}
	}
}

console.log(`Minimum is ${min} and its order number ${minNo + 1}`);
console.log(`Maximum is ${max} and its order number ${maxNo + 1}`);
console.log(`Amount of negative elements is ${negativesCount}`);
console.log(`Product of positive elements is ${positivesProduct}`);