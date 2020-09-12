function getHistory(){
    return document.getElementById("history-value").innerText;
}

function printHistory(num){
    document.getElementById("history-value").innerText=num;
}

function getOutput(){
    return document.getElementById("output-value").innerText;
}

function printOutput(num){
    if(num==""){
        document.getElementById("output-value").innerText=num;
    }
    else{
        document.getElementById("output-value").innerText=getFormattedNumber(num);
    }
}

function getFormattedNumber(num){
    if(num=="-"){
    	return "";
	}
    var n=Number(num);
    var value=n.toLocaleString("en");
    return value;
}

function reverseNumberFormat(num){
    return Number(num.replace(/,/g,''));
}

var operator =document.getElementsByClassName("operator");
for(var i=0;i<operator.length;i++){
    operator[i].addEventListener('click',function(){
        if(this.id=="clear"){
            printHistory("");
            printOutput("");
        }

        if(this.id=="backspace"){
            var output=reverseNumberFormat(getOutput()).toString();
            if(output){
				output= output.substr(0,output.length-1);
				printOutput(output);
			}
        }
        else{
            let result;
            var output2=getOutput();
            var history2=getHistory();
            if(output2==""&&history2!=""){
				if(isNaN(history2[history2.length-1])){
					history2= history2.substr(0,history2.length-1);
                }
                }
			}
            if(output2!=""|| history2!=""){
                output2= output2==""?output2:reverseNumberFormat(output2);
                history2=history2+output2;
                console.log(history2);
                if(this.id=="="){
                    var history=history2.split('+').join(' + ').split('-').join(' - ').split('*').join(' * ').split('^1/2').join(' sqrt ').split('(').join(' log ').split('^2').join(' square ').split('/').join(' / ');
                    var historyseparate=history.split(' ')
                    var position1=parseFloat(historyseparate[0]);
                    var position2=historyseparate[1];
                    var position3=parseFloat(historyseparate[2]);
                    console.log(historyseparate);
                    if(position2=='+'){
                        result=position1+position3;
                        printOutput(result);
                        printHistory("");
                        }
                    if(position2=='-'){
                        result=position1-position3;
                        printOutput(result);
                        printHistory("");
                    }
                    if(position2=='*'){
                        result=position1*position3;
                        printOutput(result);
                        printHistory("");
                    }
                    if(position2=='/'){
                        result=parseFloat(position1/position3);
                        printOutput(result);
                        printHistory("");
                    }
                    if(position2=='log'){
                        result=Math.log(position1);
                        printOutput(result);
                        printHistory("");
                    }
                    if(position2=='square'){
                        result=position1*position1;
                        printOutput(result);
                        printHistory("");
                    }
                    if(position2=='sqrt'){
                        result=Math.sqrt(position1);
                        printOutput(result);
                        printHistory("");
                    }    
                }
                else if(this.id=="+/-"){
                    var history=history2.split(' ');
                    var position=history[0];
                    result=-(position);
                    printOutput(result);
                    printHistory("");
                }
                else if(this.id=='per'){
                    var history=history2.split('per');
                    var position=history[0];
                    result=(position)/100;
                    printOutput(result);
                    printHistory("");    
                }
                else{
                    history2=history2+this.id;
                    printHistory(history2);
                    printOutput("");
                }
            }  
        }
    )
}

var number =document.getElementsByClassName("number");
for(var i=0;i<number.length;i++){
    number[i].addEventListener('click',function(){
        var output=reverseNumberFormat(getOutput());
        if(output!=NaN){
            output=output+this.id;
            printOutput(output);
        }
    })
}

