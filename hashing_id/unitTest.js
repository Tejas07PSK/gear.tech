/*

        @Author : Tejas07PSK (Palash Sarkar),
        @CreatedON : 03 Dec, 2018, 2:56 PM,
        @File-Name : hash_unitTest.js

 */

"use strict";

const bigInt =  require("big-integer");
const hash = require("./sha-1");
const genId =  require("./generate-id");

// modify this test array, for any custom test-cases.

const test_case1 = [

    "", "abc", "abcd",
    "The quick brown fox jumps over the lazy dog", "The quick brown fox jumps over the lazy cog",
    "https://www.gog.com", null, undefined

];

const test_case2 = [ bigInt(0), bigInt(98876542), bigInt("766631112345567778655432"), null, undefined ];

/* --------------------------_______OPTIONS_______----------------------------
 *  Case - 1 : Test 'strToByteArray' function of 'sha-1.js' for a string_variable.
 *  Case - 2 : Test 'padding' function of 'sha-1.js' for a string_variable.
 *  Case - 3 : Test 'wordArr' function of 'sha-1.js' for a string_variable.
 *  Case - 4 : Test 'sha1' function of 'sha-1.js' for a str_variable.
 *  Case - 5 : Test 'binary64Converter' function of 'sha-1.js' for a number_variable.
 *  Case - 6 : Test 'hexOrBase64Converter' function of 'sha-1.js' for a big-integer object.
 */

const test = function() {

    function sub(value, name, c) {

        console.log("TESTING -> \'" + name + "\' function of \'sha-1.js\' .......");
        console.log("Input - " + value);
        console.log("Results - ");
        if (c === 1) {

            console.log("Elements of a uint8array [] __");
            (hash.strToByteArray(value)).forEach( function (val, index) { console.log("index : " + index + " ---- " + "value : " + val); } );

        }
        else if (c === 2) {

            console.log("Elements of a uint8array [] __");
            (hash.padding(value)).forEach( function (val, index) { console.log("index : " + index + " ---- " + "value : " + val); } );

        }
        else if (c === 3) {

            console.log("Elements of an array of uint32arrays [] __");
            (hash.wordArr(value)).forEach( function (val, index) {

                console.log("index : " + index + " ---- " + "value : ");
                console.log("Elements of a uint32array [] __");
                val.forEach( function (val, index) { console.log("\t \t index : " + index + " ---- " + "value : " + val); } );

            } );

        }
        else if (c === 4) { console.log(hash.sha1(value)); }
        else if (c === 5) {

            console.log("Elements of a uint8array [] __");
            (hash.binary64Converter(value)).forEach( function (val, index) { console.log("index : " + index + " ---- " + "value : " + val); } );

        }
        else if (c === 6) { console.log(hash.hexOrBase64Converter(arguments[0], 16)); console.log(hash.hexOrBase64Converter(arguments[0], 64)); }
        else { /* do nothing. */ }
        console.log("Passed ..... OK !!");
        console.log("---------------------________________---------------------");

    }
    if ((arguments.length < 2) || (arguments.length > 2)) { console.log("Error !! Insufficient/Unnecessary arguments, for test function !!"); return; }
    if ((arguments[0] === undefined) || (arguments[0] === null)) { console.log("Error !! Incompatible \'test-variable\' type, it can either be an \'number\' or a \'string\' or a \'big-integer object\' !!"); return; }
    if ((arguments[1] === undefined) || (arguments[1] === null)) { console.log("Error !! Incompatible \'case-variable\' type, it can only be an \'number\' !!"); return; }
    switch (arguments[1]) {

        case 1 : if ((typeof arguments[0]) === "string") { sub(arguments[0], 'strToByteArray', 1); }
                 else { console.log("Error !! Incompatible variable type !!"); return; }
                 break;
        case 2 : if ((typeof arguments[0]) === "string") { sub(arguments[0], 'padding', 2); }
                 else { console.log("Error !! Incompatible variable type !!"); return; }
                 break;
        case 3 : if ((typeof arguments[0]) === "string") { sub(arguments[0], 'wordArr', 3); }
                 else { console.log("Error !! Incompatible variable type !!"); return; }
                 break;
        case 4 : if ((typeof arguments[0]) === "string") { sub(arguments[0], 'sha1', 4); }
                 else { console.log("Error !! Incompatible variable type !!"); return; }
                 break;
        case 5 : if ((typeof arguments[0]) === "number") { sub(arguments[0], 'binary64Converter', 5); }
                 else { console.log("Error !! Incompatible variable type !!"); return; }
                 break;
        case 6 : if ((typeof arguments[0]) === "object") { sub(arguments[0], 'hexOrBase64Converter', 6); }
                 else { console.log("Error !! Incompatible variable type !!"); return; }
                 break;
        default : console.log("Error !! Irrelevant choice for function testing in \'sha-1.js\' !!");
                  break;

    }

};

for (let i = 0; i < test_case1.length; i += 1)
{

    test(test_case1[i], 1);
    test(test_case1[i], 2);
    test(test_case1[i], 3);
    test(test_case1[i], 4);
    try { test(test_case1[i].length, 5); } catch (e) { console.log(e); }

}

for (let i = 0; i < test_case2.length; i += 1)  { try { test(test_case2[i], 6); } catch (e) { console.log(e); } }

for (let i = 0; i < test_case1.length; i += 1) { console.log(genId.formId(test_case1[i])); }