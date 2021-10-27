/*!
* Start Bootstrap - Landing Page v6.0.3 (https://startbootstrap.com/theme/landing-page)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-landing-page/blob/master/LICENSE)
*/

// This file is intentionally blank
// Use this file to add JavaScript to your project

// This checks if a user has an appoinment 
// if so, show that he/she has an appointment
// otherwise, change the calendar icon's color more lightly & replace the text with "You have no appointment"
// This variable will be assigned a boolean value after checking this user's info in our database
let haveAppointment = true;

// modal

const closeModal = () => {
    const btnBox = document.querySelector(".btnBox");
    const modal_bg = document.querySelector(".modal_bg");
    const modal = document.querySelector(".modal");

    modal_bg.style.display="none";
    modal.style.display = "none";

    btnBox.innerHTML = `<button class = "updateBtn" onclick="updateApp()">UPDATE</button>
    <button class="cancelBtn" onclick="cancelModal()">CANCEL</button>`
}

// cancel appointment
const cancelModal = () => {
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Cancel It!',
        cancelButtonText: 'Never Mind!',
        reverseButtons: true
    }).then((result) => {
        if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
            'Canceled!',
            'Your appointment has been canceled.',
            'success'
            
        )
            haveAppointment = false;
            showMain();
        }
    })
    closeModal();
}

// First, we need to get the current user's info from database
let appointment_info = {
    "user_name": "Henry Cho",
    "BYU_ID": "99-999-9999",
    "date": "11/11/2021",
    "time": "10:00 A.M.",
    "doctor": "Smith",
    "department": "Internal Medicine",
    "symptom": "coughing"
}

function popModal(e) {
    const modal_bg = document.querySelector(".modal_bg");
    const modal = document.querySelector(".modal");
    const nav = document.querySelector(".navbar");
    const navHeight = nav.getBoundingClientRect().height;
    const body = document.querySelector(".body");
    const bodyHeight = body.getBoundingClientRect().height;
    const restHeight = bodyHeight - navHeight;

    const app_title = document.querySelector(".app_title");
    const app_date = document.querySelector(".app_date");
    const app_time = document.querySelector(".app_time");
    const byu_id = document.querySelector(".byuID");
    const app_doctor = document.querySelector(".app_doctor");
    const app_location = document.querySelector(".app_department");
    const symptom = document.querySelector(".symptom")

    app_title.innerHTML = `${appointment_info.user_name}'s Appointment`;
    app_date.innerHTML = `Appointment Date: <b>${appointment_info.date}</b>`;
    app_time.innerHTML = `Appointment Time: <b>${appointment_info.time}</b>`;
    byu_id.innerHTML = `Your BYU ID: <b>${appointment_info.BYU_ID}</b>`;
    app_doctor.innerHTML = `Name of Doctor: <b>Dr. ${appointment_info.doctor}</b>`;
    app_location.innerHTML = `Department: <b>${appointment_info.department}</b>`;
    symptom.innerHTML = `Symptom you have: <b>${appointment_info.symptom}</b>`;

    modal_bg.style.height = `${restHeight}px`;
    modal_bg.style.display="block";
    modal.style.display = "block";
}

const updateAppointment = () => {

    let date = appointment_info.date;
    let time = appointment_info.time;
    let symptom = appointment_info.symptom;

    appointment_info.date = document.getElementById("input_date").value;
    appointment_info.time = document.getElementById("input_time").value;
    appointment_info.symptom = document.getElementById("input_symptom").value;

    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
        title: 'Before confirmation',
        text: "Is every information correct?",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes',
        cancelButtonText: 'Hold on',
        reverseButtons: true
    }).then((result) => {
        if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
            'Updated!',
            'Your appointment has been updated.',
            'success'
        )}
        else {
            appointment_info.date = date;
            appointment_info.time = time;
            appointment_info.symptom = symptom;
        }
    })
    closeModal();
}

const updateApp = () => {
    const app_title = document.querySelector(".app_title");
    const app_date = document.querySelector(".app_date");
    const app_time = document.querySelector(".app_time");
    const symptom = document.querySelector(".symptom");
    const updateBtn = document.querySelector(".updateBtn");
    const btnBox = document.querySelector(".btnBox");
    const cancelBtn = document.querySelector(".cancelBtn");

    // today
    const today = new Date().toISOString().split('T')[0];

    app_title.innerHTML = `${appointment_info.user_name}'s Update`;
    app_date.innerHTML = `Appointment Date: <input type="date" placeholder=${appointment_info.date} id='input_date' min='${today}'>`;
    app_time.innerHTML = `Appointment Time: <input type="text" placeholder=${appointment_info.time} id='input_time'>`
    symptom.innerHTML = `Symptom you have: <input type="text" placeholder=${appointment_info.symptom} id='input_symptom'>`;

    let newNode = document.createElement("button");
    let newNode2 = document.createElement("button"); 

    newNode.onclick = updateAppointment;
    newNode2.onclick = closeModal;

    newNode.classList.add("confirm");
    newNode.innerHTML = "CONFIRM";
    cancelBtn.style.display = "none";
    updateBtn.style.display = 'none';
    btnBox.appendChild(newNode);
    newNode2.classList.add("closeBtn");
    newNode2.innerHTML = "CLOSE";
    btnBox.appendChild(newNode2);
}

const showMain = () => {
    console.log(haveAppointment);
    const calendarIcon = document.querySelector("#calendar");
    const calendarTitle = document.querySelector(".calendar_title");
    const calendarDescription = document.querySelector("#calendar_description");
    if (haveAppointment === false) {
        calendarIcon.style.color = 'gray';
        calendarIcon.style.pointerEvents = 'none';
        calendarTitle.innerHTML = "Appointment";
        calendarDescription.innerHTML = "No appointment made"
        calendarIcon.classList.remove("bounce");
        return;
    }
    calendarIcon.classList.add("bounce");
}

