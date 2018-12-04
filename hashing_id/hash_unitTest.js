/*

        @Author : Tejas07PSK (Palash Sarkar),
        @CreatedON : 03 Dec, 2018, 2:56 PM,
        @File-Name : hash_unitTest.js

 */

const bigInt =  require("big-integer");
const hash = require("./sha-1");

// modify this test array, for any custom test-cases.
const test_case1 = [

    "", "abc", "abcd",
    "the quick brown fox jumps over the lazy dog", "the quick brown fox jumps over the lazy cog",
    null, undefined

];

/* --------------------------_______OPTIONS_______----------------------------
 *  Case - 1 : Test 'strToByteArray' function of 'sha-1.js' for a string_variable.
 *  Case - 2 : Test 'padding' function of 'sha-1.js' for a string_variable.
 *  Case - 3 : Test 'wordArr' function of 'sha-1.js' for a string_variable.
 *  Case - 4 : Test 'sha1' function of 'sha-1.js' for a str_variable.
 *  Case - 5 : Test 'binary64Converter' function of 'sha-1.js' for a number_variable.
 *  Case - 6 : Test 'hexOrBase64Converter' function of 'sha-1.js' for a number_variable.
 */

const test = function() {

    if ((arguments.length < 2) || (arguments.length > 2)) { console.log("Error!! Insufficient/Unnecessary arguments, for test function!!"); return; }
    if ((arguments[0] === undefined) || (arguments[0] === null)) { console.log("Error!! Incompatible \'test-variable\' type, it can either be an \'integer\' or a \'string\'."); return; }
    if ((arguments[1] === undefined) || (arguments[1] === null)) { console.log("Error!! Incompatible \'case-variable\' type, it can only be an \'integer\'."); return; }
    switch (arguments[1]) {

        case 1 : console.log("TESTING -> \'strToByteArray\' function of \'sha-1.js\' .......");
                 console.log("Input - " + arguments[0]);
                 console.log("Results - ");
                 (hash.strToByteArray(arguments[0])).forEach(function(val, index){ console.log("index : " + index + " ---- " + "value : " + val); });
                 console.log("Passed ..... OK!");
                 console.log("---------------------________________---------------------");
                 break;
        case 2 : console.log("TESTING -> \'padding\' function of \'sha-1.js\' .......");
                 console.log("Input - " + arguments[0]);
                 console.log("Results - ");
                 (hash.padding(arguments[0])).forEach(function(val, index){ console.log("index : " + index + " ---- " + "value : " + val); });
                 console.log("Passed ..... OK!");
                 console.log("---------------------________________---------------------");
                 break;
        case 3 : console.log("TESTING -> \'wordArr\' function of \'sha-1.js\' .......");
                 console.log("Input - " + arguments[0]);
                 console.log("Results - ");
                 (hash.wordArr(arguments[0])).forEach(function(val, index){ console.log("index : " + index + " ---- " + "value : " + val); });
                 console.log("Passed ..... OK!");
                 console.log("---------------------________________---------------------");
                 break;
        case 4 : console.log("TESTING -> \'sha1\' function of \'sha-1.js\' .......");
                 console.log("Input - " + arguments[0]);
                 console.log("Results - ");
                 console.log(hash.sha1(arguments[0]));
                 console.log("Passed ..... OK!");
                 console.log("---------------------________________---------------------");
                 break;
        case 5 : console.log("TESTING -> \'binary64Converter\' function of 'sha-1.js' .......");
                 console.log("Input - " + arguments[0]);
                 console.log("Results - ");
                 (hash.binary64Converter(arguments[0])).forEach(function(val, index){ console.log("index : " + index + " ---- " + "value : " + val); });
                 console.log("Passed ..... OK!");
                 console.log("---------------------________________---------------------");
                 break;
        case 6 : console.log("TESTING -> \'hexOrBase64Converter\' function of 'sha-1.js' .......");
                 console.log("Input - " + arguments[0]);
                 console.log("Results - ");
                 console.log(hash.hexOrBase64Converter(arguments[0], 16));
                 console.log(hash.hexOrBase64Converter(arguments[0], 64));
                 console.log("Passed ..... OK!");
                 console.log("---------------------________________---------------------");
                 break;

    }

};

for (let i = 0; i < test_case1.length; i += 1)
{

    test(test_case1[i], 1);
    test(test_case1[i], 2);
    test(test_case1[i], 3);
    test(test_case1[i], 4);
    test(test_case1[i], 5);

}