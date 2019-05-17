/*
We are given 3 strings: str1, str2, and str3. Str3 is said to be a shuffle of str1 and str2 if it can be formed by interleaving the characters of str1 and str2 in a way that maintains the left to right ordering of the characters from each string. For example, given str1=”abc” and str2=”def”, str3=”dabecf” is a valid shuffle since it preserves the character ordering of the two strings. So, given these 3 strings write a function that detects whether str3 is a valid shuffle of str1 and str2.
*/


function detectValidShuffle(s1,s2,s3){
	let i1 = 0, i2 = 0;
	let valid = true;
	for(let i = 0; i < s3.length; i++){
		if(!(s3[i] === s1[i1] || s3[i] === s2[i2])){
			valid = false;
			break;
		} else {
			if(s3[i] === s1[i1]){
				i1++;
			} 
			if(s3[i] === s2[i2]){
				i2++;
			}
		}
	}

	return valid;
}
