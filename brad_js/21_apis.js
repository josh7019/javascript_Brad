// let id3 = "11,22,33,44,55"
// let patt2=/[0-9]{1,}/g
// let result=id3.match(patt2);
//     for(let i of result){
//         document.write(i+"<br>");
//     }

function creatAnswer(n){
    let answer="";
    let rand;
    let isrepeat;
    for(let i=0;i<n;i++){
        do{
            isrepeat=false;
            rand=parseInt(Math.random()*9+1);
            for(let j=0;j<i;j++){
                if(rand==answer.substring(j,j+1)){
                    isrepeat=true;
                }
            }
        }while(isrepeat);
        answer+=rand;
    }

    return answer;

}

function checkAB(ans,guess){
    let a=0,b=0;
    for(let i=0;i<ans.length;i++){
        if(guess.substring(i,i+1)==ans.substring(i,i+1)){
            a++;
        }else if(ans.indexOf(guess.substring(i,i+1))>=0){
            b++;
        }
        
    }
    return a+"a"+b+"b";
}


//檢查身分證
function checkTWId(id){
    
    let patt=/^[A-Z][12]\d{8}$/g;
    let isright=patt.test(id);
    let result=id.match(patt);
    // for(let i of result){
    //     document.write(i);
    // }
    if(result!=null){
        let letters='ABCDEFGHJKLMNPQRSTUVXYWZIO';
        let head=id.substring(0,1);
        let n12=letters.indexOf(head)+10;
        let n1=parseInt(n12/10);
        let n2=n12%10;
        let n3=parseInt(id.substring(1,2));
        let n4=parseInt(id.substring(2,3));
        let n5=parseInt(id.substring(3,4));
        let n6=parseInt(id.substring(4,5));
        let n7=parseInt(id.substring(5,6));
        let n8=parseInt(id.substring(6,7));
        let n9=parseInt(id.substring(7,8));
        let n10=parseInt(id.substring(8,9));
        let n11=parseInt(id.substring(9,10));

        let sum=n1*1+n2*9+n3*8+n4*7+n5*6+n6*5+n7*4+n8*3+n9*2+n10*1+n11*1;
        document.write(sum);
        if(sum%10==0){
            return false;
        }
    }
    
    function clone(target){
        if(typeof(target)!="object") return null;
        
        let newobj=new Object();
        for(let attr in target){
            //if(target.hasOwnProperty(attr))
            newobj[attr]=target[attr];
        }
        return newobj;
    }


    // let ret=false;
    // alert(head);
    // if(id.length==10){
    //     let head=id.substring(0,1);
    //     let head2=id.substring(1,2);
    //     let letters="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    //     if(letters.indexOf(head)>=0){
    //         if(head2==1||head2==2){

    //         }
    //     }
    // }



    return true;
}

