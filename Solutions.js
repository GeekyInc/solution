function f1(str1, str2){
var i=0;
var l=str1.length;
	while(i<l){
		if(str1.indexOf(str2.charAt(0))>=0){
			str1=str1.replace(str2.charAt(0),"");
			str2=str2.replace(str2.charAt(0),"");
		}else if(str2.indexOf(str1.charAt(0))>=0){
			str1=str1.replace(str1.charAt(0),"");
			str2=str2.replace(str1.charAt(0),"");
		}
		i++;		
    }
	if(str1.length==0 && str2.length==0){
		return 0;
	}else {
		return (str1.length + str2.length);
	}
}
function f2(a, b){
var c=[];
	for(var i=0; i<b.length; i++){
		var occ=0;
		for(var j=0; j<a.length; j++){
			if(b[i] == a[j]){
			  occ++;
			}
		}
		c[i]=occ;
	}
	return c;
}
function checkForSpecialChar(str){
var specialChars = "<>@!#$%^&*()+[]{}?:;|'\"\\,/~`=";
 for(i = 0; i < specialChars.length;i++){
   if(str.indexOf(specialChars[i]) != -1){
       return true
    }
 }
 return false;
}
function f3(str){
	if(str.length==0 || checkForSpecialChar(str)){
		return 0;
	}else if(!checkForSpecialChar(str)){
		var res=str.split(".");
		return res.length;
	}
}
function f4(){    
    alert('Hello'); 
}
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
//Test1  
var str1="bacdc";
var str2="dcbad";
//document.writeln(f1(str1,str2));
//Test 2
var tab1=["aba", "baba", "aba", "xzxb"];
var tab2=["aba", "xzxb", "ab"];
var tab3=f2(tab1,tab2);
for(var i=0;i<tab3.length;i++){
	//document.writeln(tab3[i]);
}
//Test 3
ch="xtech.guru";
//document.writeln(f3(ch));
var friends = ["Mike", "Stacy", "Andy", "Rick"];

friends.forEach(function (eachName, index){
document.writeln(index + 1 + ". " + eachName); // 1. Mike, 2. Stacy, 3. Andy, 4. Rick
});
//Test 4
setTimeout(f4, 3000);
sleep(5000).then(() => {
    setTimeout(f4, 300);
});
setTimeout(f4, 3000);