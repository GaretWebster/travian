document.getElementById("test").addEventListener('click', () => {
    console.log("Popup DOM fully loaded and parsed");

    function modifyDOM() {
        //You can play with your DOM here or check URL against your regex
		console.log(document.URL);
		if(document.URL.includes('berichte')){
			console.log('URL is a report!');		
		}
		else{
			alert('Page is not a report!');
		}
        //console.log(document.body);
        //return document.body.innerHTML;
		//return document.getElementsById('time')
    }

    //We have permission to access the activeTab, so we can call chrome.tabs.executeScript:
    chrome.tabs.executeScript({
        code: '(' + modifyDOM + ')();' //argument here is a string but function.toString() returns function's code
    }, (results) => {
        //Here we have just the innerHTML and not DOM structure
        console.log('Popup script:')
        console.log(results[0]);
    });
});