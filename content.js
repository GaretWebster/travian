var link = document.URL
console.log('Report Link = ' + link);

var time = document.getElementById("time").getElementsByClassName("header text")[0].innerHTML;
console.log('Report Time = ' + time);

var type = findType(document.getElementById("subject").innerHTML)
console.log('Report Type = ' + type);

var unit_race_map = { "Clubswinger": "Teutons", "Legionnaire": "Romans", "Phalanx": "Gauls" };

var attacker_race = unit_race_map[$('#message').find('#attacker').find('img.unit').first().attr('alt')];
console.log('Attacker Race = ' + attacker_race);

var defender_race = unit_race_map[$('#message').find('table:not(#attacker)').find('img.unit').first().attr('alt')];
console.log('Defender Race = ' + defender_race);

var attacker_headline = document.getElementsByClassName("troopHeadline")[0];

if(attacker_headline.getElementsByClassName("noAlliance").length > 0){
	var attacker_alliance;
	var attacker_alliance_link;
	var attacker_name = attacker_headline.getElementsByTagName("a")[0].innerHTML;
	var attacker_name_link = attacker_headline.getElementsByTagName("a")[0]
	var attacker_village = attacker_headline.getElementsByTagName("a")[1].innerHTML;
	var attacker_village_link = attacker_headline.getElementsByTagName("a")[1];
}
else {
	var attacker_alliance = attacker_headline.getElementsByTagName("a")[0].innerHTML;
	var attacker_alliance_link = attacker_headline.getElementsByTagName("a")[0];
	var attacker_name = attacker_headline.getElementsByTagName("a")[1].innerHTML;
	var attacker_name_link = attacker_headline.getElementsByTagName("a")[1];
	var attacker_village = attacker_headline.getElementsByTagName("a")[2].innerHTML;
	var attacker_village_link = attacker_headline.getElementsByTagName("a")[2];
}
console.log('Attacker Alliance = ' + attacker_alliance);
console.log('Attacker Alliance Link = ' + attacker_alliance_link);
console.log('Attacker Name = ' +  attacker_name);
console.log('Attacker Name Link = ' +  attacker_name_link);
console.log('Attacker Village = ' + attacker_village);
console.log('Attacker Village Link = ' + attacker_village_link);

//what if no defender headline
var defender_headline = document.getElementsByClassName("troopHeadline")[1];

if(defender_headline.getElementsByClassName("noAlliance").length > 0){
	var defender_alliance;
	var defender_alliance_link;
	var defender_name = defender_headline.getElementsByTagName("a")[0].innerHTML;
	var defender_name_link = defender_headline.getElementsByTagName("a")[0]
	var defender_village = defender_headline.getElementsByTagName("a")[1].innerHTML;
	var defender_village_link = defender_headline.getElementsByTagName("a")[1];
}
else {
	var defender_alliance = defender_headline.getElementsByTagName("a")[0].innerHTML;
	var defender_alliance_link = defender_headline.getElementsByTagName("a")[0];
	var defender_name = defender_headline.getElementsByTagName("a")[1].innerHTML;
	var defender_name_link = defender_headline.getElementsByTagName("a")[1];
	var defender_village = defender_headline.getElementsByTagName("a")[2].innerHTML;
	var defender_village_link = defender_headline.getElementsByTagName("a")[2];
}
console.log('Defender Alliance = ' + defender_alliance);
console.log('Defender Alliance Link = ' + defender_alliance_link);
console.log('Defender Name = ' +  defender_name);
console.log('Defender Name Link = ' +  defender_name_link);
console.log('Defender Village = ' + defender_village);
console.log('Defender Village Link = ' + defender_village_link);

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
