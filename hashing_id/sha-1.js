/*

        @Author : Tejas07PSK (Palash Sarkar),
        @CreatedON : 03 Dec, 2018, 2:00 PM,
        @File-Name : sha-1.js

 */

"use strict";

const bigInt = require("big-integer");
const  base64Map = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q',
                     'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
                     'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y',
                     'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '*' ];
const hexMap = [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f' ];

module.exports = {

    "hexOrBase64Converter" : function(n, b)
                             {

                                 if ((n === null) || (n === undefined)) { console.log("Error!! Incompatible variable type."); return (""); }
                                 let map = ((b === 64) ? base64Map : hexMap), str = "", temp = null;
                                 if (n.value === 0) { return ("" + map[0]); }
                                 while (n.gt(0))
                                 {

                                     temp = n.divmod(b);
                                     str = map[(temp.remainder)["value"]] + str;
                                     n = temp.quotient;

                                 }
                                 return (str);

                             },
    "binary64Converter" : function(n)
                          {

                              let bin = [], count = 0;
                              let uint8mlarr = new Uint8Array(8);
                              while (n > 0)
                              {

                                  bin.push(Math.floor(n % 2));
                                  count += 1;
                                  if (count === 64) { break; }
                                  n = Math.floor(n / 2);

                              }
                              let remaining = (64 - bin.length);
                              for (let i = 0; i < remaining; i += 1) { bin.push(0); }
                              bin.reverse();
                              for (let i = 0, j = 0, count = 8, sum = 0; i < 64; i += 1)
                              {

                                  count -= 1;
                                  sum += (Math.pow(2, count) * bin[i]);
                                  if (count === 0)
                                  {

                                      uint8mlarr[j++] = sum;
                                      count = 8;
                                      sum = 0;

                                  }

                              }
                              return (uint8mlarr);

                          },
    "strToByteArray" : function(str)
                       {

                           let len = str.length, arr = new Uint8Array (len);
                           for (let i = 0; i < len; i += 1) { arr[i] = ((arguments[0]).charCodeAt(i) & 255); }
                           return (arr);

                       },
    "padding" : function()
                {

                    let uint8arr = this.strToByteArray(arguments[0]), ml = uint8arr.length, ml64bit = this.binary64Converter((ml * 8)), block_size = 64, noofbits = 0;
                    while (((ml + noofbits) % block_size) !== 56) { noofbits += 1; }
                    let padded_array = new Uint8Array(ml + noofbits + 8);
                    for (let i = 0, j = 0; i < padded_array.length; i += 1)
                    {

                        if (i < ml) { padded_array[i] = uint8arr[i]; }
                        else if ((i >= ml) && (i < (ml + noofbits))) { padded_array[i] = ((i === ml) ? 128 : 0); }
                        else { padded_array[i] = ml64bit[j++]; }

                    }
                    return (padded_array);

                },
    "wordArr" : function()
                {

                    let uint8arr = this.padding(arguments[0]), uint32arr = new Uint32Array(80), temp = new Uint32Array(1);
                    let j = -1, i = 0, count = 0, block_list = [];
                    while (j < uint8arr.length)
                    {

                        switch (count)
                        {

                            case 4 : uint32arr[i++] = temp[0];
                                     count = 0;
                                     temp[0] = 0;
                                     if (i === 16)
                                     {

                                         block_list.push(uint32arr);
                                         i = 0;
                                         uint32arr = new Uint32Array(80);

                                     }
                                     if (j === (uint8arr.length - 1)) { j += 1; }
                                     break;
                            default : j += 1;
                                      count += 1;
                                      temp[0] |= uint8arr[j];
                                      if (count !== 4) { temp[0] <<= 8; }
                                      break;

                        }

                    }
                    return (block_list);

                },
    "sha1" : function(message)
             {

                function circularLeftShift (val_factor)
                {

                    val_factor[0] = ((val_factor[0] << val_factor[1]) | (val_factor[0] >>> (32 - val_factor[1])));
                    return (val_factor);

                }
                var mod = new Uint32Array(1), h = new Uint32Array(5), val_factor = new Uint32Array(2);
                var a = new Uint32Array(1), b = new Uint32Array(1), c = new Uint32Array(1), d = new Uint32Array(1), e = new Uint32Array(1), f = new Uint32Array(1), k = new Uint32Array(1), temp = new Uint32Array(1);
                var blocks = this.wordArr(message), noofblocks = blocks.length, holder = null, md = undefined, obj = null;
                mod[0] = 0xFFFFFFFF; h[0] = 0x67452301; h[1] = 0xEFCDAB89; h[2] = 0x98BADCFE; h[3] = 0x10325476; h[4] = 0xC3D2E1F0;
                for (let i = 0; i < noofblocks; i += 1)
                {

                    holder = blocks[i];
                    for (let j = 16; j <= 79; j += 1)
                    {

                        if (j < 32)
                        {

                            val_factor[0] = (holder[j - 3] ^ holder[j - 8] ^ holder[j - 14] ^ holder[j - 16]); val_factor[1] = 1;
                            holder[j] = (circularLeftShift(val_factor))[0];

                        }
                        else
                        {

                            val_factor[0] = (holder[j - 6] ^ holder[j - 16] ^ holder[j - 28] ^ holder[j - 32]); val_factor[1] = 2;
                            holder[j] = (circularLeftShift(val_factor))[0];

                        }

                    }
                    a[0] = h[0]; b[0] = h[1]; c[0] = h[2]; d[0] = h[3]; e[0] = h[4];
                    for (let j = 0; j <= 79; j += 1)
                    {

                        if ((j >= 0) && (j <= 19))
                        {

                            f[0] = ((b[0] & c[0]) | (~(b[0]) & d[0]));
                            k[0] = 0x5A827999;

                        }
                        else if ((j >= 20) && (j <= 39))
                        {

                            f[0] = (b[0] ^ c[0] ^ d[0]);
                            k[0] = 0x6ED9EBA1;

                        }
                        else if ((j >= 40) && (j <= 59))
                        {

                            f[0] = ((b[0] & c[0]) | (b[0] & d[0]) | (c[0] & d[0]));
                            k[0] = 0x8F1BBCDC;

                        }
                        else if ((j >= 60) && (j <= 79))
                        {

                            f[0] = (b[0] ^ c[0] ^ d[0]);
                            k[0] = 0xCA62C1D6;

                        }
                        val_factor[0] = a[0]; val_factor[1] = 5;
                        temp[0] = (((circularLeftShift(val_factor))[0] + f[0] + e[0] + k[0] + holder[j]) & mod);
                        e[0] = d[0]; d[0] = c[0]; val_factor[0] = b[0]; val_factor[1] = 30;
                        c[0] = (circularLeftShift(val_factor))[0]; b[0] = a[0]; a[0] = temp[0];

                    }
                    h[0] = ((h[0] + a[0]) & mod); h[1] = ((h[1] + b[0]) & mod); h[2] = ((h[2] + c[0]) & mod);
                    h[3] = ((h[3] + d[0]) & mod); h[4] = ((h[4] + e[0]) & mod);

                }
                md = (bigInt(h[0])).shiftLeft(128); md = md.or((bigInt(h[1])).shiftLeft(96));
                md = md.or((bigInt(h[2])).shiftLeft(64)); md = md.or((bigInt(h[3])).shiftLeft(32)); md = md.or(bigInt(h[4]));
                obj = {"message" : message, "md" : {"hex" : this.hexOrBase64Converter(md, 16), "base64" : this.hexOrBase64Converter(md, 64)}};
                return (obj);

             }

};