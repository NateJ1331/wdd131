const form = document.querySelector("#event_ticket");
const guestType = document.querySelector("#guestType");
const studentIdContainer = document.querySelector("#studentIdContainer")
const accessCodeContainer = document.querySelector("#accessCodeContainer")
const Id = document.querySelector("#studentID");
const Code = document.querySelector("#accessCode")
const output = document.querySelector("#output");


function isPastDate(value) {
  const today = new Date();
  const chosen = new Date(value);
  return chosen < today;
}

function updateStudentID() {
  const value = guestType.value;
    console.log(value)
    if(value === 'Student'){
        accessCodeContainer.hidden = true;
        Code.required = false;

        studentIdContainer.hidden = false;
        Id.required = true;
        return;
    }
    if(value === 'Guest'){
        studentIdContainer.hidden = true;
        Id.required = false;

        accessCodeContainer.hidden = false;
        Code.required = true;
        return;
    }
    else{
        accessCodeContainer.hidden = true;
        studentIdContainer.hidden = true;
        Id.required = false;
        Code.required = false;
    }
  
}

guestType.addEventListener("change", updateStudentID);
updateStudentID();

form.addEventListener("submit", function (event) {
  event.preventDefault();
  output.textContent = "";

  const firstName = form.firstName.value.trim();
  const lastName = form.lastName.value.trim();
  const email = form.email.value.trim();
  const type = form.guestType.value;
  const eventDate = form.eventDate.value;
  const Id = form.studentID.value.trim();
  const Code = form.accessCode.value.trim();


if (isPastDate(eventDate)) {
    output.textContent = "Please choose a later date.";
    return;
    }

if (type === 'Student' && Id.length != 9){
    output.textContent = "Student ID must be 9 digits";
    return;
    }

if (type === 'Guest' && Code != "EVENT131"){
    output.textContent = "Please Enter the correct Event Code";
    return;
    }

  output.innerHTML = `
  <h2>Ticket Creatted</h2>
  <p>${firstName} ${lastName}</p>
  <p>Email: ${email}</p>
  <p>Event Date: ${eventDate}</p>
  <p>Guest Type: ${type}</p>
  `;

  form.reset();
  updateStudentID();
});