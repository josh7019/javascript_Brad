let var1;
let var2=123;
let $$$=100;
let $_$=123;
document.write($_$);
document.write(var1+"<br>");
var1=123;
document.write(typeof(var1)+"<br>");
var1=12.3;
document.write(typeof(var1)+"<br>");
var1=true;
document.write(typeof(var1)+"<br>");
var1="true";
document.write(typeof(var1)+"<br>");


const NAME="josh";   //常數慣例為全大寫  常數宣告時須給初始直 否則會出錯
    //NAME="JOSH2"     常數不可指派值  否則會出現asign錯誤

    document.write("my name is"+NAME+"<br>");
    document.write(`my name is ${NAME}<br>`);
    let a=10,b=20;
    document.write(`${a}+${b}=${a+b}`)