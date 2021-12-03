// let arr = [15, 86, 3, 25, 36, 7, 9, 111, 59, 45];
// arr.splice(3, 0, 43);
// console.log(arr);

// let newArr = arr.filter(item => item > 30);
// console.log(newArr);

// console.log(arr);
// let newArr = arr.map(item => {
//     if (item > 30) {
//         item++;
//     }
//     return item;
// });
// console.log(newArr);
// let text = "Lorem ipsum";
// let newArr = text.split(" ");
// let newText = newArr.join(" ")

// arr.sort((a, b) => b - a);
// arr.reverse();
// console.log(newArr);
// console.log(newText);

// let result = arr.reduce((sum, item) => {
//     console.log(sum);
//     if (item % 2 == 0) {
//         sum += item;
//         console.log(item);
//     }
//     return sum;
// }, 0);
// console.log(result);

// let text = "       Lorem     ipsum      ";

// for (let i = 0; i < text.length; i++) {
//     console.log(text[i]);
// }
// console.log(text.indexOf("m", 6));
// console.log(text.includes("ip"));
// console.log(text.startsWith("Lor"));
// console.log(text.endsWith("sum"));
// console.log(text.slice(2, -5));
// console.log(text.substring(2, -5));
// console.log(text.substr(2, 5));
// console.log(text.trimLeft());


// DOM
// let section = document.getElementById("banner");
// let item = document.getElementsByClassName("item");
// let h2 = document.getElementsByTagName("h2");
let h22 = document.querySelector("#banner .item .content h2");
// let h23 = document.querySelectorAll("#banner .item .content h2");
let input = document.getElementsByName("Email")[0];
// console.log(section);
// console.log(item);
// console.log(h2);
// console.log(h22);
// console.log(h23);

// h22.innerHTML = "New <span>5</span> content";
// h22.textContent = "New <span>5</span> content";

// console.log(h22.innerHTML);
// console.log(h22.textContent);
// h22.id = "title";
// console.log(h22.id);

// h22.setAttribute("style", "color:red;")

// console.log(h22.getAttribute("id"));
// console.log(h22.hasAttribute("id"));
// console.log(input);
// input.value = "qasim@gmail.com";
// console.log(input.value);
// h22.style.color = "red";
// h22.style.fontSize = "40px";
// h22.style.backgroundColor = "green";
// h22.style.display = "none";

// let content = document.getElementsByClassName("content")[0];

// let ul = document.createElement("ul");

// let li1 = document.createElement("li");
// let a1 = document.createElement("a");
// a1.textContent = "1";
// a1.setAttribute("href", "#");

// let li2 = document.createElement("li");
// let a2 = document.createElement("a");
// a2.textContent = "2";
// a2.setAttribute("href", "#");

// let li3 = document.createElement("li");
// let a3 = document.createElement("a");
// a3.textContent = "3";
// a3.setAttribute("href", "#");


// li1.appendChild(a1);
// li2.appendChild(a2);
// li3.appendChild(a3);

// ul.appendChild(li1);
// ul.appendChild(li2);
// ul.appendChild(li3);

// content.appendChild(ul);


// let content2 = document.getElementsByClassName("content")[1];
// let p2 = document.querySelectorAll(".content p")[1];
// content2.removeChild(p2);


let firstContent = document.getElementById("firstContent");
// firstContent.className = "test";
// console.log(firstContent.className)
firstContent.classList.add("newClass");
firstContent.classList.remove("text");

console.log(firstContent.classList);
console.log(firstContent.classList.contains("newClass"));