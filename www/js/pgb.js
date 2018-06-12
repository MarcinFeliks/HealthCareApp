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
//funkcja do BMI itp.
function calculate(){
var obj = document.getElementById("myCalculators");
var obj2 = document.getElementById("współczynnik");
var obj6 = document.getElementById("age").value;
var obj3 = document.getElementById("weight").value;
var obj4 = document.getElementById("growth").value;
var obj5 = document.getElementById("yourSex").value;
var obj7 = document.getElementById("physActivity");
var a;
var b;
var c;

a = obj4/100;
b = a*a;
c = obj7.options[obj7.selectedIndex].value;
	
obj2.innerHTML = obj.selectedIndex;
	if(obj.selectedIndex == 0){
	obj2.innerHTML = "Twoje BMI wynosi: " + Math.round((obj3/b));
	}
	if(obj.selectedIndex == 1){
		if(obj5==1){
			obj2.innerHTML = "Twoje podstawowe zapotrzebowanie kaloryczne wynosi: " + Math.round(((9.99*obj3)+(6.25*obj4)-(4.92*obj6)+5)) + " kcal";
		}
		if(obj5==2){
			obj2.innerHTML = "Twoje podstawowe zapotrzebowanie kaloryczne wynosi: " + Math.round(((9.99*obj3)+(6.25*obj4)-(4.92*obj6)+-161))+ " kcal";
		}
	}
	if(obj.selectedIndex == 2){
		if(obj5==1){
			obj2.innerHTML = "Twoje dobowe zapotrzebowanie kaloryczne wynosi: " + Math.round((((9.99*obj3)+(6.25*obj4)-(4.92*obj6)+5)*c))+ " kcal";
		}
		if(obj5==2){
			obj2.innerHTML = "Twoje dobowe zapotrzebowanie kaloryczne wynosi: " + Math.round((((9.99*obj3)+(6.25*obj4)-(4.92*obj6)+-161)*c))+ " kcal";
		}
	}
	
}