document.getElementById("setLocalStorage").addEventListener("click", setLocalStorage); 
document.getElementById("showLocalStorage").addEventListener("click", showLocalStorage); 
document.getElementById("removeProjectFromLocalStorage").addEventListener 
   ("click", removeProjectFromLocalStorage); 
document.getElementById("getLocalStorageByKey").addEventListener 
   ("click", getLocalStorageByKey);  
var obj = document.getElementById("weight").value;   
   
   
var localStorage = window.localStorage; 	

function setLocalStorage() { 
var obj = document.getElementById("weight").value; 
var obj2 = document.getElementById("growth").value;
var obj3 = document.getElementById("age").value;  
    document.getElementById("weight").value = 
    obj;
    document.getElementById("growth").value = 
    obj2;	
    document.getElementById("age").value = 
    obj3;	
   localStorage.setItem("weightSaved", obj); 
   localStorage.setItem("growthSaved", obj2); 
   localStorage.setItem("ageSaved", obj3); 
   vibration();
} 

function showLocalStorage() { 
var obj = document.getElementById("weight").value; 
var obj2 = document.getElementById("growth").value;
var obj3 = document.getElementById("age").value;  


   alert('Twoja zapisana waga: ' + (localStorage.getItem("weightSaved")) + '\nTwój zapisany wzrost: ' + (localStorage.getItem("growthSaved"))  + '\nTwój zapisany wiek: ' + (localStorage.getItem("ageSaved")))

} 

function removeProjectFromLocalStorage() {
	localStorage.removeItem("weightSaved");
	localStorage.removeItem("growthSaved");
	localStorage.removeItem("ageSaved");
	vibration();
}

function vibration() {
   var time = 2000;
   navigator.vibrate(time);
}