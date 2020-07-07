const hobbies = ["walking", "swiming"];

for (const hobby of hobbies) {
    //very interesting why const????
    console.log(hobby);
}

console.log(hobbies.map((hobby) => hobby));

const hobbies2 = [...hobbies,"dancing"];


console.log(hobbies2);
console.log(hobbies)