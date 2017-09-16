document.getElementById("test").addEventListener('click', () => {
    console.log("Popup DOM fully loaded and parsed");

	//wtf Garet, who names a function modifyDOM? Especially since extensions cannot modify the dom?
	//no one Blake, I copied this code from stack overflow cause I am a noob programmer and have not fixed all that shit
    function modifyDOM() {		
		var link = document.URL
		console.log('Report Link = ' + link);
		
		var time = document.getElementById("time").getElementsByClassName("header text")[0].innerHTML;
		console.log('Report Time = ' + time);
		
		var type = findType(document.getElementById("subject").innerHTML)
		console.log('Report Type = ' + type);
		/*
		var attackingVillage = ;
		var attackingPlayer = ;
		var attackingAlliance = ;
		var defendingVillage = ;
		var defendingPlayer = ;
		var defendingAlliance = ;
		var troops (not sure best way to store this)
		*/			
		
		function findType(typeDiv){
			//default case if no type is found
			var type = 'Unknown';
			
			if(typeDiv.includes('scouts')){
				type = 'Scout';
			}
			else if(typeDiv.includes('attacks')){
				type = 'Attack';
			}
			else if(typeDiv.includes('raids')){
				type = 'Raid';
			}
			else if(typeDiv.includes('reinforces')){
				type = 'Reinforce';
			}
			else if(typeDiv.includes('explores')){
				type = 'Explores';
			}
			else if(typeDiv.includes('supplies')){
				//do something to ignore this case, we don't want these reports
				type='Supply';
			}
			else if(typeDiv.includes('Animals caught')){
				//do something to ignore this case, we don't want these reports
				type='AnimalCapture';
			}
			//settle
			//failed to settle
			
			return type;
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