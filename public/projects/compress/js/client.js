//BigNumber.DP = 1e+6;
//BigNumber.RM = 1;
BigNumber.config({ DECIMAL_PLACES: 10000, ROUNDING_MODE: 4 })




function factorialize(num) {
  var cnt = 1;
  for (var i = 1; i <= num; i++) {
    cnt *= i;
  }
  return cnt;
}

function factorialize2(num) {
  var cnt = new BigNumber(1);
  for (var i = 1; i <= num; i++) {
    cnt = cnt.times(i);
  }
  return cnt.toFixed();
}

function factorialize3(num) {
  var cnt = new BigNumber(1);
  for (var i = 1; i <= num; i++) {
    cnt = cnt.times(i);
  }
  return cnt;
}

function isEliminated(num, elimList) {
  var isElim = false;
  for (var i = 0; i < elimList.length; i++) {
    if (num == elimList[i]) {
      isElim = true;
      //break;
    }
  }
  return isElim;
}

function reverse(string) {
    return string.split('').reverse().join('');
}




/*function bin2dec(n) {
  var num = new BigNumber(n);
  var num2 = parseInt(num.toFixed(200), 2);
  return num2;
}*/

function bin2dec(n) {
  var power = 0;
  //var num = new BigNumber(2);
  //console.log(n.length);
  
  var n2 = reverse(n);
  
  var finalNum = new BigNumber(0);
  for(var i = 0; i < n2.length; i++) {
    var val = n2[i];
    //console.log(val);
    
    if(val == 1) {
      var num = new BigNumber(2);
      num = num.pow(power);
      finalNum = finalNum.add(num);
    }
    power += 1;
  }
  return finalNum.toFixed();
}




function dec2bin(n) {
  var bin = "";
  var num = new BigNumber(n);
  while(num > 0) {
    var rem = num.mod(2);
    bin = bin + rem;
    
    num = num.div(2);
    if(rem == 1) {
      num = num.minus(0.5);
    }
  }
  return reverse(bin);
}

var ascii2bin = (function() {
  var pad = '00000000';

  return function(str) {
    return str.replace(/./g, function(c) {
      var bin = c.charCodeAt(0).toString(2);
      return pad.substring(bin.length) + bin;
    });
  };
}());

function bin2ascii(bin) {
  return bin.replace(/[01]{8}/g, function(v) {
    return String.fromCharCode(parseInt(v, 2));
  });
}



function findRank(tempPos, tempDigits) {
  var rank = 0;
  var tempElims = [];
  for (var i = 0; i < tempPos; i++) {
    tempElims.push(tempDigits[i]);
  }

  for (var i = 0; i < tempDigits.length; i++) {

    var eliminated = isEliminated(tempDigits[i], tempElims);
    if (!eliminated && (tempDigits[i] !== tempDigits[tempPos]) && (tempDigits[i] < tempDigits[tempPos])) {
      rank += 1;
    }
  }
  return rank;
}


/*function decompress(tempDigits) {
  var finalNumber = new BigNumber(0);
  //var numbersToAdd = [];
  var len = tempDigits.length;
  for (var i = 0; i < tempDigits.length; i++) {
    var rnk = findRank(i, tempDigits);
    var num = rnk * (factorialize(len - i - 1));
    var num2 = new BigNumber(num);
    //finalNumber += num;
    console.log(num2.toFixed());
    finalNumber = finalNumber.add(num2);
    //numbersToAdd.push(num);
  }
  return finalNumber.toFixed();
}*/


/*function compress(num) {
  var tempMinLength = findMinimumNeededLengthWithMethod(num);
  //console.log(tempMinLength);

  var tempFinalList = [];
  var tempOriginalList = [];
  for (var i = 0; i < tempMinLength; i++) {
    tempOriginalList[i] = i + 1;
  }
  
  var tnum1 = new BigNumber(num);
  var tnum2 = new BigNumber(num);
  var k = 0;

  while (tempOriginalList.length > 0) {
    //console.log(tempOriginalList.length);

    k += 1;

    //console.log(tnum);
    
    //factorialize2 breaks it
    
    //var t = tnum1.div(factorialize3(tempMinLength - k));
    var t1 = factorialize3(tempMinLength - k);
    //t1 = t1.floor();
    
    var t2 = tnum1.div(t1);
    t2 = t2.floor();
    var t3 = parseInt(t2.toFixed());
    tempFinalList.push(tempOriginalList[t3]);
    tempOriginalList.splice(t3, 1);
    
    
    
    var t4 = factorialize3(tempMinLength - k);
    tnum1 = tnum2.mod(t4);
    
    //var t2 = tnum1.div(factorialize3(tempMinLength - k)).floor();
    //console.log(t.toFixed());
    //console.log(t2.toFixed());
    
    
    
    
    //var rem = Math.floor(tnum / (factorialize2(tempMinLength - k)));
    //tempFinalList.push(tempOriginalList[rem]);
    //tempOriginalList.splice(rem, 1);
    //console.log(tempFinalList);

    //tnum = num % factorialize2(tempMinLength - k);
    //console.log(rem);
  }
  //tempFinalList.push(tempOriginalList[0]);

  //console.log(tempFinalList);
  return tempFinalList;
}*/





function dec2comp(n) {
  var num = new BigNumber(n);
  var tempMinLength = findMinimumNeededLengthWithMethod(parseInt(num.toFixed()));

  var tempFinalList = [];
  var tempOriginalList = [];
  for (var i = 0; i < tempMinLength; i++) {
    tempOriginalList[i] = i + 1;
  }
  
  var tnum1 = new BigNumber(num);
  var originalNumber = new BigNumber(num);
  var k = 0;

  while (tempOriginalList.length > 0) {
    //console.log(tempOriginalList.length);

    k += 1;
    
    var t1 = factorialize3(tempMinLength - k);
    var t2 = tnum1.div(t1).floor();
    var t3 = parseInt(t2.toFixed());
    tempFinalList.push(tempOriginalList[t3]);
    tempOriginalList.splice(t3, 1);
    
    
    //var t4 = factorialize3(tempMinLength - k);
    //tnum1 = originalNumber.mod(t4);
    tnum1 = originalNumber.mod(t1);
  }
  //tempFinalList.push(tempOriginalList[0]);

  //console.log(tempFinalList);
  return tempFinalList;
}














/*
function compress(num) {
  var tempMinLength = findMinimumNeededLengthWithMethod(num);
  //console.log(tempMinLength);

  var tempFinalList = [];
  var tempOriginalList = [];
  for (var i = 0; i < tempMinLength; i++) {
    tempOriginalList[i] = i + 1;
  }

  var tnum = num;
  var k = 0;

  while (tempOriginalList.length > 0) {
    //console.log(tempOriginalList.length);

    k += 1;

    //console.log(tnum);a
    
    //factorialize2 breaks it
    
    
    var rem = Math.floor(tnum / (factorialize2(tempMinLength - k)));
    tempFinalList.push(tempOriginalList[rem]);
    tempOriginalList.splice(rem, 1);
    //console.log(tempFinalList);

    tnum = num % factorialize2(tempMinLength - k);
    //console.log(rem);
  }
  //tempFinalList.push(tempOriginalList[0]);

  //console.log(tempFinalList);
  return tempFinalList;
}
*/


function decompress(tempDigits) {
  var finalNumber = new BigNumber(0);
  //var numbersToAdd = [];
  var len = tempDigits.length;
  for (var i = 0; i < tempDigits.length; i++) {
    var rnk = findRank(i, tempDigits);
    var rnk2 = new BigNumber(rnk);
    
    
    
    var num = new BigNumber(factorialize2(len - i - 1));
    
    var num2 = rnk2.times(num);
    //finalNumber += num;
    //console.log(num2.toFixed());
    finalNumber = finalNumber.add(num2);
    //numbersToAdd.push(num);
  }
  return finalNumber.toFixed();
}






function findMinimumNeededLengthWithMethod(num) {
  var len = 1;
  while (factorialize2(len) <= num) {
    len += 1;
  }
  return len;
}


function findMinimumNeededLengthWithoutMethod(num) {
  var len = 1;
  while (Math.pow(2, len) < num) {
    len += 1;
  }
  return len;
}

function minLength(num) {
  console.log("with compress: " + findMinimumNeededLengthWithMethod(num));
  console.log("without compress: " + findMinimumNeededLengthWithoutMethod(num));
}

function efficiency(num) {
  console.log("number of bits with compression: " + findMinimumNeededLengthWithMethod(num));
  console.log("number of bits without compression: " + Math.ceil(Math.log2(num)));
}







/*function findFullNumber(list) {
  var num = 0;
  for(var i = 0; i < list.length; i++) {
    console.log(num);
    num += list[i]*Math.pow(10, i);
  }
  console.log(num);
  return num;
}*/










function bin2comp(n) {
  //var num = new BigNumber(n);
  n = "1" + n;
  var num = bin2dec(n);
  var compressed = dec2comp(num);
  return compressed;
}

function comp2bin(n) {
  var num = decompress(n);
  num = dec2bin(num);
  num = num.substring(1);
  return num;
}







$(function() {


  $("#dec2binButton").on("click", function(event) {
    event.preventDefault();

    $("#dec2binOutput").val('');
    var input = $("#dec2binInput").val();
    var output = dec2bin(input);
    $("#dec2binOutput").val(output);
  });





  $("#bin2decButton").on("click", function(event) {
    event.preventDefault();
    $("#bin2decOutput").val('');
    var input = $("#bin2decInput").val();
    //input = "1" + input;
    var output = bin2dec(input);
    $("#bin2decOutput").val(output);
  });


  $("#dec2compButton").on("click", function(event) {
    event.preventDefault();
    $("#dec2compOutput").val('');
    var input = $("#dec2compInput").val();
    var output = "[" + dec2comp(input) + "]";
    $("#dec2compOutput").val(output);
  });


  $("#comp2decButton").on("click", function(event) {
    event.preventDefault();
    $("#comp2decOutput").val('');
    var input = $("#comp2decInput").val();
    var output = decompress(eval(input));
    $("#comp2decOutput").val(output);
  });
  
  
  
  
  $("#ascii2binButton").on("click", function(event) {
    event.preventDefault();
    $("#ascii2binOutput").val('');
    var input = $("#ascii2binInput").val();
    var output = ascii2bin(input);
    $("#ascii2binOutput").val(output);
  });
  
  
  $("#bin2asciiButton").on("click", function(event) {
    event.preventDefault();
    $("#bin2asciiOutput").val('');
    var input = $("#bin2asciiInput").val();
    var output = bin2ascii(input);
    $("#bin2asciiOutput").val(output);
  });
  
  $("#bin2compButton").on("click", function(event) {
    event.preventDefault();
    $("#bin2compOutput").val('');
    var input = $("#bin2compInput").val();
    var output = "[" + bin2comp(input) + "]";
    $("#bin2compOutput").val(output);
  });
  
  $("#comp2binButton").on("click", function(event) {
    event.preventDefault();
    $("#comp2binOutput").val('');
    var input = $("#comp2binInput").val();
    var output = comp2bin(eval(input));
    $("#comp2binOutput").val(output);
  });


});