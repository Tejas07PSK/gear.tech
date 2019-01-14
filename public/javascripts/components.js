/*

        @Author : Tejas07PSK (Palash Sarkar),
        @CreatedON : 12 Jan, 2019, 8:47 PM,
        @File-Name : components.js

 */

document.body.style.backgroundColor = "maroon"; // fix for dynamically generated html elements

// bootstrap row 1

var head_div = document.createElement("div");
head_div.className = "row";
console.log(head_div.style);
var head_span1 = document.createElement("span");
head_span1.className = "col-xs-6";
head_span1.id = "app-name";
head_span1.innerText = "Gear.tech";
var head_span2 = document.createElement("span");
head_span2.className = "col-xs-6";
head_div.appendChild(head_span1); head_div.appendChild(head_span2);
document.body.appendChild(head_div);

// bootstrap row 2

var descrp = document.createElement("div");
descrp.className = "row";
descrp.style.marginTop = "20px";
var descrp_span = document.createElement("span");
descrp_span.className = "col-xs-12";
descrp_span.id = "typo";
descrp.appendChild(descrp_span);
document.body.appendChild(descrp);

// bootstrap row 3

var comp = document.createElement("div");
comp.className = "row";
comp.style.marginTop = "90px";
var comp_span1 = document.createElement("span");
comp_span1.className = "col-xs-2";
var comp_span2 = document.createElement("span");
comp_span2.className = "col-xs-8";
var cpsp2_fmdiv = document.createElement("div");
cpsp2_fmdiv.className = "form-group";
var fmdiv_label = document.createElement("label");
fmdiv_label.innerText = "Enter URL : ";
fmdiv_label.style.fontSize = "25px";
fmdiv_label.style.color = "wheat";
var fmdiv_ipgdiv = document.createElement("div");
fmdiv_ipgdiv.className = "input-group";
fmdiv_ipgdiv.style.border = "4px ridge darkorange";
fmdiv_ipgdiv.style.borderRadius = "8px";
fmdiv_ipgdiv.style.boxShadow = "3px 2px 20px goldenrod";
var fmdiv_inp = document.createElement("input");
fmdiv_inp.type = "text";
fmdiv_inp.className = "form-control";
fmdiv_inp.id = "url_name";
fmdiv_inp.placeholder = "Text goes here ....";
fmdiv_inp.style.height = "55px";
fmdiv_inp.style.borderRight = "0 none transparent";
fmdiv_inp.style.fontSize = "18px";
fmdiv_inp.style.backgroundColor = "#eee";
var fmdiv_ipga = document.createElement("span");
fmdiv_ipga.className = "input-group-addon";
fmdiv_ipga.style.borderLeft = "0 none transparent";
var frm_btn = document.createElement("button");
frm_btn.setAttributeNode(document.createAttribute("data-toggle"));
frm_btn.setAttributeNode(document.createAttribute("data-placement"));
frm_btn.setAttribute("data-toggle", "tooltip");
frm_btn.setAttribute("data-placement", "top");
frm_btn.title = "Shorten";
frm_btn.id = "sub_comp";
frm_btn.className = "btn btn-warning";
frm_btn.type = "button";
frm_btn.style.border = "1px inset black";
frm_btn.onmouseover = function () { this.style.animation = "example 0.1s linear 0s infinite alternate"; this.style.webkitAnimation = "example 0.1s linear 0s infinite alternate"; };
frm_btn.onmouseout = function () { this.style.animation = "none"; this.style.webkitAnimation = "none"; };
var compbtn_img = document.createElement("img");
compbtn_img.src = "/images/compress.png";
compbtn_img.alt = "GO";
compbtn_img.height = "20";
compbtn_img.width = "20";
frm_btn.appendChild(compbtn_img);
fmdiv_ipga.appendChild(frm_btn);
fmdiv_ipgdiv.appendChild(fmdiv_inp);
fmdiv_ipgdiv.appendChild(fmdiv_ipga);
cpsp2_fmdiv.appendChild(fmdiv_label);
cpsp2_fmdiv.appendChild(fmdiv_ipgdiv);
comp_span2.appendChild(cpsp2_fmdiv);
var cpsp2_resdiv = document.createElement("div");
cpsp2_resdiv.className = "input-group";
cpsp2_resdiv.id = "res_cont";
cpsp2_resdiv.style.display = "none";
cpsp2_resdiv.style.marginTop = "80px";
var resdiv_spn1 = document.createElement("span");
resdiv_spn1.className = "form-control";
resdiv_spn1.style.borderTopLeftRadius = "50px";
resdiv_spn1.style.borderBottomLeftRadius = "50px";
resdiv_spn1.style.borderRight = "0 none transparent";
resdiv_spn1.style.height = "45px";
resdiv_spn1.style.background = "linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.5))";
var anch = document.createElement("a");
anch.id = "res";
anch.style.color = "orange";
anch.style.fontSize = "22px";
anch.style.fontFamily = "Courier New";
anch.style.marginLeft = "20px";
anch.style.cursor = "pointer";
anch.onmouseover = function () { this.style.fontStyle = "italic"; };
anch.onmouseout = function () { this.style.fontStyle = "normal"; };
anch.innerText = "https://gear-tech.herokuapp.com/33aerT";
resdiv_spn1.appendChild(anch);
var resdiv_spn2 = document.createElement("span");
resdiv_spn2.className = "input-group-addon btn btn-default";
resdiv_spn2.setAttributeNode(document.createAttribute("data-toggle"));
resdiv_spn2.setAttributeNode(document.createAttribute("data-placement"));
resdiv_spn2.setAttribute("data-toggle", "tooltip");
resdiv_spn2.setAttribute("data-placement", "bottom");
resdiv_spn2.title = "Copy To Clipboard";
resdiv_spn2.style.background = "url(/images/cpyclip.png)";
resdiv_spn2.style.backgroundColor = "white";
resdiv_spn2.style.backgroundRepeat = "no-repeat";
resdiv_spn2.style.backgroundSize = "42px";
resdiv_spn2.style.paddingRight = "35px";
resdiv_spn2.onmouseover = function () { this.style.backgroundColor = "#eee"; };
resdiv_spn2.onmouseout = function () { this.style.backgroundColor = "white"; };
resdiv_spn2.onclick = function () {

    var range = document.createRange();
    range.selectNode(document.getElementById("res"));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy")

};
var resdiv_spn3 = document.createElement("span");
resdiv_spn3.className = "input-group-addon btn btn-danger";
resdiv_spn3.innerText = "X";
resdiv_spn3.style.color = "yellow";
resdiv_spn3.style.fontWeight = "bolder";
resdiv_spn3.style.backgroundColor = "red";
resdiv_spn3.style.borderBottomRightRadius = "50px";
resdiv_spn3.style.borderTopRightRadius = "50px";
resdiv_spn3.id = "close_res_cont";
cpsp2_resdiv.appendChild(resdiv_spn1);
cpsp2_resdiv.appendChild(resdiv_spn2);
cpsp2_resdiv.appendChild(resdiv_spn3);
comp_span2.appendChild(cpsp2_resdiv);
var comp_span3 = document.createElement("span");
comp_span3.className = "col-xs-2";
comp.appendChild(comp_span1);
comp.appendChild(comp_span2);
comp.appendChild(comp_span3);
document.body.appendChild(comp);

// bootstrap row 4

var last = document.createElement("div");
last.className = "row";
last.style.marginTop = "80px";
var info = document.createElement("div");
info.className = "col-xs-12";
info.style.backgroundColor = "rgba(0,0,0,0.6)";
info.style.padding = "100px";
info.style.paddingTop = "40px";
info.style.paddingBottom = "60px";
var header = document.createElement("h1");
header.style.fontFamily = "Comic Sans MS";
header.style.fontWeight = "bold";
header.style.color = "darksalmon";
header.innerText = "About";
var para = document.createElement("p");
para.style.marginTop = "25px";
para.style.fontFamily = "Comic Sans MS";
para.style.fontSize = "25px";
para.style.fontWeight = "bold";
para.style.color = "Wheat";
para.style.textShadow = "1px 0 darkgrey, 0 1px darkgrey, 1px 0 darkgrey, 0 1px darkgrey";
para.innerText = "This is an open-source URL shortening web application, consisting of this website and a web-api." +
                 " The controlling server runs on the NodeJS run-time environment and was developed using the ExpressJS framework." +
                 " MongoDB has been used as the back-end database, which stores the URL name and hash-key pairs." +
                 " This application utilizes the SHA-1 algorithm for generating the hash-key of a valid URL." +
                 " As for this website, it was made using HTML5, CSS3, Bootstrap4, jQuery and javascript DOM." +
                 " For more information regarding the source-code and API guide, visit the link given below and go through the README file :";
var anch2 = document.createElement("a");
anch2.style.color = "orange";
anch2.style.fontSize = "28px";
anch2.style.fontWeight = "bold";
anch2.style.fontFamily = "Courier New";
anch2.style.cursor = "pointer";
anch2.onmouseover = function () { this.style.fontStyle = "italic"; };
anch2.onmouseout = function () { this.style.fontStyle = "normal"; };
anch2.innerText = "https://github.com/Tejas07PSK/gear.tech";
anch2.href = "https://github.com/Tejas07PSK/gear.tech";
info.appendChild(header);
info.appendChild(para);
info.appendChild(anch2);
var footer = document.createElement("div");
footer.className = "col-xs-12";
footer.style.marginBottom = "0px";
footer.style.padding = "20px";
footer.style.backgroundColor = "black";
var div1 = document.createElement("div");
div1.style.marginTop = "0.8%";
div1.className = "col-xs-12";
div1.style.color = "white";
div1.style.textAlign = "center";
div1.style.fontFamily = "Georgia";
div1.innerText = "©2018-2019, Gear.tech™ India, Palash Sarkar (Tejas07PSK)";
div1.style.fontSize = "18px";
var div2 = document.createElement("div");
div2.className = "col-xs-12";
div2.style.margin = "10px";
div2.style.padding = "2px";
var gitlink = document.createElement("a");
gitlink.href = "https://github.com/Tejas07PSK";
gitlink.style.paddingTop = "4px";
gitlink.style.paddingBottom = "4px";
gitlink.style.paddingLeft = "4px";
gitlink.style.paddingRight = "20px";
gitlink.style.marginLeft = "48%";
gitlink.style.background = "url(/images/gitmark.png)";
gitlink.style.backgroundRepeat = "no-repeat";
gitlink.style.backgroundSize = "contain";
gitlink.style.cursor = "pointer";
div2.appendChild(gitlink);
footer.appendChild(div1);
footer.appendChild(div2);
last.appendChild(info);
last.appendChild(footer);
document.body.appendChild(last);

var i = 0, txt = "A simple yet effective URL shortener :)";
function typeWriter() {

    if (i < txt.length) {

        document.getElementById("typo").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, 60);

    }

}
typeWriter();
