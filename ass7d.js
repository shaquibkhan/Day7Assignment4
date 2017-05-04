//outerFunction() declared.....& innerFunction passed to it as a parameter f1....
function outerFunction(f1)
{
	//inner function invoked
	f1();
}
//Declaration of innerFunction() which display some string value.....
function innerFunction()
	{
		console.log('HELLO - WORLD!!!'); 
	}
	
//Calling  outerFunction() by passing innerFunction in its argument...	
outerFunction(innerFunction);
