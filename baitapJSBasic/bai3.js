function changeName() {
    for (let i = 0; i < persons.length; i++) {
        if (persons[i].firstname == "Trần") {
            persons[i].firstname = "Nguyễn"
        }
        if (persons[i]. lastname == "Huy") {
            persons[i].lastname = "Hoàng"
        }
    }
    return persons
}
const persons = [
    {firstname : "Đào", lastname: "Văn Anh"},
    {firstname : "Trần", lastname: "Huy"},
    {firstname : "Lê", lastname: "Hoàng"}
  ]; 	
let newPersons = [
    {firstname : "Lâm", lastname: "Vũ"},
    {firstname : "Hải", lastname: "Nguyễn"}
]
newPersons.map((person) => {
    person.address = "Hà Nội"
}) 
console.log(newPersons);