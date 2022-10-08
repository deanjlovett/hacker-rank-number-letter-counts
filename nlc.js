const { parseCommandLineArgs } = require('./util');

let __ = require('./util');

'use strict';

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
    let isHundred = false;
    if( trnc(num/100) ){
        ret += digits[trnc(num/100)]+' Hundred ';
        isHundred = true;
    }
    if( (num%100) < 20 && (num%100) > 0 ){
        if( isHundred ){
            ret += 'and '
        }
        ret += digits[(num%100)] + ' ';
    }
    else if( (num/10) % 10 ){
        if( isHundred ){
            ret += 'and '
        }
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

function processNumAsStr(snum){
    let ret='';
    // for ease of enter data with spaces 
    // example: 123 456 789, is easier to read & check than 123456789
    snum = snum.replace(/\s+/g, '');
    let num = parseInt(snum,10);
    return processNum(num);
}

function processNum(num){
    let ret = '';
    if( num === 0 ){
        return 'Zero';
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
    return ret;
}

__.parseCommandLineArgs('nlc')

let strArr = __.getStringsFromCommandLine();
while(strArr.length>0){
    let e = strArr.shift();
    let fc = e.charAt(0)
    if( !'rRsS'.includes( fc )){
        continue;
    }
    e = e.slice(1);
    if('sS'.includes(fc)){
        let input = parseInt(e);
        let output = processNum(input);
        __.clog()
        __.clog(`  in: ${input}  output: ${output}`)
        __.clog()
        let ccount = output.replace(/\s+/g, '').length
        __.clog(`  character count: ${ccount}`)
        __.clog()

        if(__.getIsSilent()){
            console.log(ccount)
        }

    }
    else if('rR'.includes(fc)){
        let twin = e.split('-')
        let start = parseInt(twin[0]);
        let end   = parseInt(twin[1]);
        __.clog()
        let sum = 0;
        for(let i=start;i<=end;++i){
            let input = i;
            let output = processNum(input);
            let ccount = output.replace(/\s+/g, '').length
            sum += ccount;
            __.clog(`  in: ${input}  output: ${output}`)
        }
        __.clog()
        __.clog(`  total character count: ${sum}`)
        __.clog()


        if(__.getIsSilent()){
            console.log(sum)
        }

    }
}
