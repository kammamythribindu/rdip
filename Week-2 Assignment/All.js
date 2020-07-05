function add(){
	var n1= parseInt(document.querySelector("#input1").value);
	var n2= parseInt(document.querySelector("#input2").value);
	var res=n1+n2;
	document.querySelector("#result").innerHTML=res;
	console.log(res);
	return res;
}
function sub(){
	var n1= parseInt(document.querySelector("#input1").value);
	var n2= parseInt(document.querySelector("#input2").value);
	var res=n1-n2;
	document.querySelector("#result").innerHTML=res;
	console.log(res);
	return res;

	
}
function mul(){
	var n1= parseInt(document.querySelector("#input1").value);
	var n2= parseInt(document.querySelector("#input2").value);
	var res=n1*n2;
	document.querySelector("#result").innerHTML=res;
	console.log(res);
	return res;

	
}
function div(){
	var n1= parseInt(document.querySelector("#input1").value);
	var n2= parseInt(document.querySelector("#input2").value);
	var res=n1/n2;
	document.querySelector("#result").innerHTML=res;
	console.log(res);
	return res;
}
function per(){
	var n1= parseInt(document.querySelector("#input1").value);
	var n2= parseInt(document.querySelector("#input2").value);
	var res=(n1/100)*n2;
	document.querySelector("#result").innerHTML=res;
	console.log(res);
	return res;

}
function abs(){
	var n1= parseInt(document.querySelector("#input1").value);
	var res=Math.abs(n1);
	document.querySelector("#result").innerHTML=res;
	console.log(res);
	return res;

}
function sqr(){
	var n1= parseInt(document.querySelector("#input1").value);
	var res=Math.sqrt(n1);
	if(Number.isInteger(res)==true){
    document.querySelector("#result").innerHTML=res;
	console.log(res);
	return res;
    }
   else{
	document.querySelector("#result").innerHTML=res.toFixed(3);
	console.log(res.toFixed(3));
	return res.toFixed(3);
   }

}
function pal()
{
	var n= document.querySelector("#inputPal").value;
    var z=function(n)
    {
	n=n.replace(/\W/g,'');
	n=n.toLowerCase();
	for(var i=0;i<n.length;i=i+1){
		if(n[i]!==n[n.length-1-i]){
			return false;
		}
	}
    return true;
    }
    document.querySelector("#Final").innerHTML=z(n);
    console.log(z(n));
    return z;
}
function anag()
{ 
	var S1= document.querySelector("#inputS1").value;
	var S2= document.querySelector("#inputS2").value;
	var y=function(S1,S2){
	var sorted1=S1.replace(/[^a-z0-9]/gi,'').split('').sort().join('').toLowerCase();
	var sorted2=S2.split('').sort().join('').toLowerCase();
	return(sorted1===sorted2);

	}
	console.log(y(S1,S2));
	document.querySelector("#Final2").innerHTML=y(S1,S2);
	return y;

}
function validate()
{
	var name=document.getElementById("#name").value;
	var phno=document.getElementById("#PhoneNumber").value;
	var email=document.getElementById("#Email").value;
	
	var a=function checkname(name){
		var regNamex=/^[A-Za-z][A-Za-z0-9]+$/;
	if(name.value.trim()!="" && name.value.match(regNamex))
	{
		alert("valid name");
		return true;
	}
	else
	{
		alert("invalid name");
		document.getElementById("#userN").style.visibility="visible";
		return false;
	}
    document.write(checkname(name));

	}
	var b=function checknum(phno){
		var regPhnx=/^\d{10}$/;
	if(phno.value.trim()!="" && phno.value.match(regPhnx))
	{
		alert("valid PhoneNumber");
		return true;
	}
	else
	{
		alert("invalid PhoneNumber");
		document.getElementById("#PhoneN").style.visibility="visible";
		return false;
	}


	}
	document.write(checknum(phno));
	var c=function checkemail(email){
			var regEmx=/^([a-z0-9\.-]+)@([a-z0-9-]+).([a-z]{2,5})(.[a-z]{2,5})?$/;
	if(email.value.trim()!="" && email.value.match(regEmx))
	{
		alert("valid email");
		return true;
	}
	else
	{
		alert("invalid email");
		document.getElementById("#emailA").style.visibility="visible";
		return false;
	}


	}
   
	document.write(checkemail(email));
	return [a,b,c];
}


function game(){
	var N1= parseInt(document.querySelector("#inputN1").value);
	var N2= parseInt(document.querySelector("#inputN2").value);
	var num1=Math.floor((Math.random() * 100) + 1);
	var num2=Math.floor((Math.random() * 100) + 1);
	document.writeln(num1);
	document.writeln(num2);
	var rem;
	var rem2;
	while(num1>=0)
	{
       rem=num1%10;
       while(rem>0)
       {
       if(rem===0||rem==1||rem==2)
       {
       	num1=rem;
       	break;
       }
      
       	rem=10%rem;
       
       }
       break;
       
	}
	while(num2>=0)
	{
       rem2=num2%10;
       while(rem2>0)
       {
       if(rem2===0||rem2==1||rem2==2)
       {
       	num2=rem2;
       	break;
       }
      
       	rem2=10%rem2;
       }
       
       break;
   }
   	if(num1==num2)
	{
      console.log("TIE");
      document.writeln("<h2>TIE</h2>");
      return "TIE";
	}
	else if(num1===0 && num2==1)
	{
		console.log("Human Wins");
		document.writeln("<h2>Human Wins</h2>");
      return "Human Wins";
	}
	else if(num1==1 && num2===0){
		console.log("Human Wins");
		document.writeln("<h2>Human Wins</h2>");
      return "Human Wins";

	}
	else if(num1==1 && num2==2)
	{
		console.log("Cockroach Wins");
		document.writeln("<h2>Cockroach Wins</h2>");
      return "Cockroach Wins";
	}
	else if(num1==2 && num2==1)
	{
		console.log("Cockroach Wins");
		document.writeln("<h2>Cockroach Wins</h2>");
      return "Cockroach Wins";
	}
	else if(num1===0 && num2==2)
	{
		console.log("Nuclear Bomb Wins");
		document.write("<h2>Nuclear Bomb Wins</h2>");
      return "Nuclear Bomb Wins";
	}
	else if(num1==2 && num2===0)
	{
		console.log("Nuclear Bomb Wins");
		document.write("<h2>Nuclear Bomb Wins</h2>");
      return "Nuclear Bomb Wins";
	}
	else{
		console.log("Invalid");
		document.write("<h2>Invalid</h2>");
      return "Invalid";
	}    
	

}



















































































































































