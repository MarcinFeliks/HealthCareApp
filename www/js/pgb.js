function init() {
alert('Befor You start using my application enter settings')		
	$time = document.getElementById('time');
	update();

}
/*funkcja zapisująca podstawowe ustawienia
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
}*/



//funkcja przeliczająca spalanie kalori/minute
function insRow(id) {
    var x = document.getElementById(id).insertRow(0);
    var exercise = x.insertCell(0);
	var time = x.insertCell(1);
    var kal = x.insertCell(2);
	var obj = document.getElementById("mySelect");
	var weight = document.getElementById("weight");
	var t;
	var k;
	var w;

	

	// Get the value of the input field with id="numb"
		t = document.getElementById("numb").value;
		k = document.getElementById("mySelect").value;	
		w = document.getElementById("weight").value;
		
    exercise.innerHTML =obj.options[obj.selectedIndex].text;
	time.innerHTML = "czas:" + t +" min";
	kal.innerHTML = "spalone kalorie: " + ((k * w) * t) + " kcal";
	
}
//funkcja obliczająca BMI itp.
function calculate(){
var obj = document.getElementById("myCalculators");
var obj2 = document.getElementById("współczynnik");
var ageValue = document.getElementById("age").value;
var weightValue = document.getElementById("weight").value;
var growthValue = document.getElementById("growth").value;
var sexValue = document.getElementById("yourSex").value;
var selectActivity = document.getElementById("physActivity");
var fromCmOnM;
var b;
var c;

fromCmOnM = growthValue/100;
b = fromCmOnM*fromCmOnM;
c = selectActivity.options[selectActivity.selectedIndex].value;
	
obj2.innerHTML = obj.selectedIndex;
	if(obj.selectedIndex == 0){
	obj2.innerHTML = "Twoje BMI wynosi: " + Math.round((weightValue/b));
	}
	if(obj.selectedIndex == 1){
		if(sexValue==1){
			obj2.innerHTML = "Twoje podstawowe zapotrzebowanie kaloryczne wynosi: " + Math.round(((9.99*weightValue)+(6.25*growthValue)-(4.92*ageValue)+5)) + " kcal";
		}
		if(sexValue==2){
			obj2.innerHTML = "Twoje podstawowe zapotrzebowanie kaloryczne wynosi: " + Math.round(((9.99*weightValue)+(6.25*growthValue)-(4.92*ageValue)+-161))+ " kcal";
		}
	}
	if(obj.selectedIndex == 2){
		if(sexValue==1){
			obj2.innerHTML = "Twoje dobowe zapotrzebowanie kaloryczne wynosi: " + Math.round((((9.99*weightValue)+(6.25*growthValue)-(4.92*ageValue)+5)*c))+ " kcal";
			
		}
		if(sexValue==2){
			obj2.innerHTML = "Twoje dobowe zapotrzebowanie kaloryczne wynosi: " + Math.round((((9.99*weightValue)+(6.25*growthValue)-(4.92*ageValue)+-161)*c))+ " kcal";
			
		}
	}
	
}