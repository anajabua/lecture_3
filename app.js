// Data:
// A list of friends (with name, age, and ticket info).

const friends = [
  { name: "Ana", age: 21, hasTicket: true },
  { name: "Giorgi", age: 19, hasTicket: true },
  { name: "Niko", age: 22, hasTicket: true },
  { name: "Lela", age: 28, hasTicket: false },
  { name: "Levan", age: 17, hasTicket: true },
]

// Two separate arrays of snacks.

const snack1 = ["Chips", "Coca-Cola"]
const snack2 = ["Churchxela", "Ponchiki"]

// Instructions
// Filter:
// From the list of friends, keep only those who:
// are 18 or older,
// and have a ticket.

const filtered = friends.filter(friend => friend.age >= 18 && friend.hasTicket)
console.log(filtered)

// Map:
// From the filtered list, create a new array that contains only the names of the friends who are allowed.

const nameMap = filtered.map(friend => friend.name)
console.log(nameMap)

// Reduce:
// Count how many friends are allowed to come to the movie night.

const allowedPerson = filtered.reduce((count) => count + 1, 0)
console.log(allowedPerson)

// Concat:
// Combine the two snack arrays into one single list of snacks.

// const allSnacks = snack1.concat(snack2)
const allSnacks = [...snack1, ...snack2]
console.log(allSnacks)

// Final Output (Decision with Boolean logic):
// If no one is allowed to join, display:
// "Movie night is canceled!"
// Otherwise, display:
//  "We have X friends coming: [list of names]"
//  "Snacks: [list of snacks]"

if (allowedPerson == 0) {
  console.log("Movie night is canceled!")
} else {
  console.log(`We have ${allowedPerson} friends coming: ${nameMap.join(", ")}`)
  console.log(`Snacks: ${allSnacks.join(", ")}`)
}

//მახსოვს წინაზე ასეც განვიხილეთ 

allowedPerson === 0 ? console.log("Movie night is canceled!") : (
    console.log(`We have ${allowedPerson} friends coming: ${nameMap.join(", ")}`),
    console.log(`Snacks: ${allSnacks.join(", ")}`))
