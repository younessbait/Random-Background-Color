setInterval(()=>{
    let num_letter = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
let color_num_letter = [];
for (let i = 0; i < 6; i++) {
  color_num_letter.push(
    num_letter[Math.trunc(Math.random() * num_letter.length)]
  );
}
let final_color = `#${color_num_letter.join("")}`;
document.body.style.backgroundColor = final_color;

},1000)