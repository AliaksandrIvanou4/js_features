find same elements in 2 arrays	

//function sameAllElementsArray(arr1, arr2)
{
    var arr = [], sameElements = [];

    for (var i = 0; i < arr1.length; i++) 
    {
        arr[arr1[i]] = true;
    }

	for (var i = 0; i < arr2.length; i++) 
	{
        if (arr[arr2[i]]) 
        {
        	arr[arr2[i]] = true;
           
        } else 
        {
             delete arr[arr2[i]];
        }
    }
    
    for (var k in arr) 
    {
        sameElements.push(k);
    } 

    if (sameElements.length>0)
    {
    	return true
	} else 
	{
    	return false;
    }
}

//compare 2 arrays and return diff
function diffArray(arr1, arr2){

    var arr = [], diff = [];

    for (var i = 0; i < arr1.length; i++) {
        arr[arr1[i]] = true;
    }

    for (var i = 0; i < arr2.length; i++) {
        if (arr[arr2[i]]) {
            delete arr[arr2[i]];
        } else {
            arr[arr2[i]] = true;
        }
    }

    for (var k in arr) {
        diff.push(k);
    }

    return diff;
}
