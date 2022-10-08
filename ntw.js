
let ones={
//   '0':'',    '00':'',

    '1':'One',    '01':'One',
    '2':'Two',    '02':'Two',
    '3':'Three',    '03':'Three',
    '4':'Four',    '04':'Four',
    '5':'Five',    '05':'Five',
    '6':'Six',    '06':'Six',
    '7':'Seven',    '07':'Seven',
    '8':'Eight',    '08':'Eight',
    '9':'Nine',    '09':'Nine',

    '10':'Ten',
    '11':'Eleven',
    '12':'Twelve',
    '13':'Thirteen',
    '14':'Fourteen',
    '15':'Fifteen',
    '16':'Sixteen',
    '17':'Seventeen',
    '18':'Eighteen',
    '19':'Nineteen',
};
let tens={
//    '0':'',
//    '1':'',
    '2':'Twenty',
    '3':'Thirty',
    '4':'Forty',
    '5':'Fifty',
    '6':'Sixty',
    '7':'Seventy',
    '8':'Eighty',
    '9':'Ninety',
};
let millsd={
    // '0':'',
    // '1':'',
    '2':'Thousand',
    '3':'Million',
    '4':'Billion',
    '5':'Trillion',
    '6':'Quadrillion',
}

function processData(input) {
    let ia = input.split('\n');
    let count = parseInt(ia.shift(),10);

    for(let i=0;i<count;++i){
        processNum(ia[i]);
    }
} 

function processNum(snum){
    let ret='';

    snum = snum.replace(/\s+/g, '');
    if( parseInt(snum,10)===0){
        console.log('Zero');
        return;
    }
    let mills= snum.length===1?1:Math.ceil((snum.length)/3);
    let subm=(snum.length-1)%3 + 1;
    let cur;

    for( let i=mills;i>0;--i){
        cur  = snum.substring(0,subm);
        snum = snum.substring(subm);
        let  n = parseInt(cur,10);
        let dn = n%100;
        let pre = '';
        cur = '' + n;
        if( cur.length === 3 ){
            let h=cur.substring(0,1);
            cur = cur.substring(1,3);
            pre = ones[h]+' Hundred';
        }
        if(dn>0){
            if(dn<20){ 
                pre += cur=='0' ? '' : ((pre.length>0?' ':'') + ones[cur]);
            }else{
                let t = cur.substring(0,1);
                let s = cur.substring(1,2);
                pre += (pre.length>0?' ':'') + tens[t] + (s=='0' ? '' : (' '+ ones[s]));
            }
        }
        if( pre.length>0 && i>=2) pre += ' '+ millsd[i];

        if( ret.length>0)
            ret += ' ' + pre;
        else
            ret = pre;
            
        --mills;
        subm=3;
    }

    console.log(ret);
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
   processData(_input);
});
