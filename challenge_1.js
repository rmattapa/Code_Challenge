/*Create a function that takes an array of numbers and returns an array of only the odd numbers. 
The function must not use looping or libraries that use looping.*/

var input = [1,2,3,4,5,6,7,8,9,10];

//Recursive function to check each element if it is odd untill the whole array iterates.

function returnOddArray(input){
	function pushToOddArray(input,idx,output){
		if(input[idx]%2 !== 0){
			output.push(input[idx]);
		}

		idx++;

		if(idx >= input.length){
			return;
		}

		pushToOddArray(input,idx,output);
	}
	var output = [];
	pushToOddArray(input,0,output);
	return output;
}


//console.log(returnOddArray(input)); ---> returns [1,3,5,7,9]