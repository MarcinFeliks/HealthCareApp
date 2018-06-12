function init() {
alert('Befor You start using my application enter settings')		
	$time = document.getElementById('time');
	update();

}
//funkcja zapisująca podstawowe ustawienia
function changeSettings(){
	var obj = document.getElementById("weight").value;
	var obj2 = document.getElementById("growth").value;
	var obj3 = document.getElementById("age").value;
	
	
    document.getElementById("savedWeight").value = 
    obj;
    document.getElementById("savedGrowth").value = 
    obj2;	
    document.getElementById("savedAge").value = 
    obj3;	
	
	
	alert('Twoja zapisana waga: ' + obj + '\nTwój zapisany wzrost: ' + obj2  + '\nTwój zapisany wiek: ' + obj3 )
}
//funkcja przeliczająca spalanie kalori/minute
function insRow(id) {
    var x = document.getElementById(id).insertRow(0);
    var exercise = x.insertCell(0);
	var time = x.insertCell(1);
    var kal = x.insertCell(2);
	var obj = document.getElementById("mySelect");
	var weight = document.getElementById("savedWeight");
	var t;
	var k;
	var w;
	// Get the value of the input field with id="numb"
		t = document.getElementById("numb").value;
		k = document.getElementById("mySelect").value;	
		w = document.getElementById("savedWeight").value;
		
    exercise.innerHTML =obj.options[obj.selectedIndex].text;
	time.innerHTML = "czas:" + t +" min";
	kal.innerHTML = "spalone kalorie: " + ((k * w) * t) + " kcal";
	
}