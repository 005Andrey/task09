
window.onload = function()
{
    const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('surnameOutput').innerText = initPerson.surname;
   // document.getElementById("birthYearOutput").innerText = initPerson.
   document.getElementById('genderOutput').innerText = initPerson.gender;
   document.getElementById('birthYearOutput').innerText = initPerson.year;
}
