var link = document.URL
console.log('Report Link = ' + link);

var time = document.getElementById("time").getElementsByClassName("header text")[0].innerHTML;
console.log('Report Time = ' + time);

var type = findType(document.getElementById("subject").innerHTML)
console.log('Report Type = ' + type);

unit_race_map = { "Clubswinger": "Teutons", "Legionnaire": "Romans", "Phalanx": "Gauls" };
attacker_race = unit_race_map[$("#message").find("#attacker").find("img.unit").first().attr("alt")];
deffender_race = unit_race_map[$("#message").find("table:not(#attacker)").find("img.unit").first().attr("alt")];

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
