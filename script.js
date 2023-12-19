// დავალება 1    დაწერეთ ფუნქცია რომელიც გამოიძახება ღილაკზე დაკლიკებისას,რომელიც შეუცვლის პარაგრაფს ფერს
// იმის მიხედვით,თუ რას შემოიყვანს მომხმარებელი
// const para = document.getElementById("text");
// function changeColor() {
//   const color = prompt("enter your color:");
//   para.style.color = color;
// }

// დავალება 2 მოთხოვეთ მომხმარებელს ტექსტი და შექმენით იმდენი span ტაგი P ში,რამდენიც მომხმა-
// რებელმა შემოიყვანა.span ში უნდა იყოს რიცხვები ჩაწერილი მიმდევრობით.(1 დან იუზერის რიცხვის
//     ჩათვლით)
// const number = parseInt(prompt("enter the number:"));
// if (typeof number === "number" && number >= 1) {
//   generateElements();
// } else {
//   alert("wrong input");
// }
// function generateElements() {
//   for (let i = 1; i <= number; i++) {
//     const span = document.createElement("span");
//     span.textContent = i;
//     document.body.append(span);
//     const para = document.createElement("p");
//     para.appendChild(span);
//     document.body.appendChild(para);
//   }
// }

// დავალება 3 მოცემული გვაქვს საიტების ობიექტების მასივი.თითოეულ მათგანს აქვს ფროფერთები,name და
// link.დაწერეთ ფუნქცია, რომელიც შექმნის ახალ ელემენტებს და მათზე დაკლიკებისას გადაამასიმართებს
// მომხმარებელს შესაბამის მისამართზე
// let webPages = [
//   { name: "bitcamp", link: "https://bitcamp.ge" },
//   { name: "linkedin", link: "https://linkedin.com/" },
//   { name: "stackOverflow", link: "https://stackoverflow.com/" },
// ];
// function generateLinks() {
//   for (let i = 0; i < webPages.length; i++) {
//     const anchor = document.createElement("a");
//     anchor.textContent = webPages[i].name;

//     anchor.href = webPages[i].link;
//     anchor.id = `link-${i + 1}`;
//     const para = document.createElement("p");
//     para.appendChild(anchor);
//     document.body.appendChild(para);
//   }
// }

// generateLinks();

// Exercise 4:
// Create an HTML page with a <button> element.Write a JavaScript function ,
// that, when the button is clicked, displays an alert with the message "Button clicked!".
// function alertt() {
//   alert("button is clicked");
// }

// Exercise 5: Form Validation
// Create an HTML page with a <form> element containing an input field and a submit button.
// Write a JavaScript function that, when the form is submitted,validates the input field.
// If the input is empty, display an error message next to the input field.  If the input
// is not empty, display an alert with the message "Form submitted!".

// let input = document.querySelector("input");
// let para = document.querySelector("p");
// function check() {
//   console.log(input.value);
//   event.preventDefault();
//   if (input.value === "") {
//     para.style.display = "block";
//   } else {
//     alert("form submitted");
//     para.style.display = "none";
//   }
// }
