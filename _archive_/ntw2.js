let digits =[
    '','One','Two','Three','Four','Five','Six','Seven','Eight','Nine',
    'Ten','Eleven','Twelve','Thirteen','Fourteen','Fifteen','Sixteen','Seventeen','Eighteen','Nineteen'
];

let tens = ['','','Twenty','Thirty','Forty','Fifty','Sixty','Seventy','Eighty','Ninety'];

function trnc(n){
    return Math.trunc(n);
}

function by3seg( num ){
    let ret ='';
    if( trnc(num/100) ){
        ret += digits[trnc(num/100)]+' Hundred ';        
    }
    if( (num%100) < 20 && (num%100) > 0 ){
        ret += digits[(num%100)] + ' ';
    }
    else if( (num/10) % 10 ){
        ret += tens[trnc(num/10)%10] + ' ';
        if(num%10)
            ret += digits[(num%10)]+' ';
    }
    return ret;
}

let sby3s = [
    { div:            1,  modit:  true, moniker:          ''},
    { div:         1000,  modit:  true, moniker: 'Thousand '},
    { div:      1000000,  modit:  true, moniker:  'Million '},
    { div:   1000000000,  modit:  true, moniker:  'Billion '},
    { div:1000000000000,  modit: false, moniker: 'Trillion '},
];

function processNum(snum){
    let ret='';
    // for ease of enter data with spaces 
    // example: 123 456 789, is easier to read & check than 123456789
    snum = snum.replace(/\s+/g, '');
    num = parseInt(snum,10);
    if( num === 0 ){
        console.log('Zero');
        return;
    }
    for(let i=4;i>=0;--i){
        let nn = trnc(num / sby3s[i].div);
        if( sby3s[i].modit ){
            nn %= 1000;            
        }
        if( nn !== 0 ){
            ret += by3seg(nn) + sby3s[i].moniker;
        }
    }
    console.log(ret);
}


function processData(input) {
    //Enter your code here
    let ia = input.split('\n');
    let count = parseInt(ia.shift(),10);

    for(let i=0;i<count;++i){
        processNum(ia[i]);
    }
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
