type Func = (num: number) => number;

function make(arr: number[], func: Func): number[] {
	return arr.map(function(elem: number) {
		return func(elem);
	});
}

let res: number[] = make([1, 2, 3], function(num: number): number {
	return num ** 2;
});

console.log(res);