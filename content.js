var link = document.URL
console.log('Report Link = ' + link);

var time = document.getElementById("time").getElementsByClassName("header text")[0].innerHTML;
console.log('Report Time = ' + time);

var type = findType(document.getElementById("subject").innerHTML)
console.log('Report Type = ' + type);

var unit_race_map = { "Clubswinger": "Teutons", "Legionnaire": "Romans", "Phalanx": "Gauls" };

var attacker_race = unit_race_map[$("#message").find("#attacker").find("img.unit").first().attr("alt")];
console.log(attacker_race);

var defender_race = unit_race_map[$("#message").find("table:not(#attacker)").find("img.unit").first().attr("alt")];
console.log(defender_race);

/*
var attacker_village = ;
var attacker_player = ;
var attacker_alliance = ;
var defending_village = ;
var defending_player = ;
var defending_alliance = ;
var troops (not sure best way to store this)
*/			

function findType(type_div){
	//default case if no type is found
	var type = 'Unknown';
	
	if(type_div.includes('scouts')){
		type = 'Scout';
	}
	else if(type_div.includes('attacks')){
		type = 'Attack';
	}
	else if(type_div.includes('raids')){
		type = 'Raid';
	}
	else if(type_div.includes('reinforces')){
		type = 'Reinforce';
	}
	else if(type_div.includes('explores')){
		type = 'Explores';
	}
	else if(type_div.includes('supplies')){
		//do something to ignore this case, we don't want these reports
		type='Supply';
	}
	else if(type_div.includes('Animals caught')){
		//do something to ignore this case, we don't want these reports
		type='AnimalCapture';
	}
	//settle case
	//failed to settle case
	
	return type;
}
