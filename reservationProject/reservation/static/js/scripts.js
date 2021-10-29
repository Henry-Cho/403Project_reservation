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

// toggle
const toggleClick = () => {
    const toggleBtn = document.querySelector(".toggleBtn");
    const toggle = document.querySelector(".toggle");
    if (toggleBtn.classList.contains("right")) {
        console.log("DDDDD")
        toggleBtn.classList.remove("right");
        toggleBtn.innerHTML = "OFF";
        toggle.style.background = '#ccc';
        popModal("app");
        return;
    }
    toggleBtn.classList.add("right");
    toggleBtn.innerHTML = "ON";
    toggle.style.backgroundColor = '#2196F3';
    popModal("vac_app");
}

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
    "symptom": "coughing",
    "vaccinated": false,
    "first_dose": false,
    "second_dose": false,
    "vac_date": "11/11/2021",
    "vac_time": "10:00 A.M.",
}

function popModal(type) {
    const toggleBox = document.querySelector(".toggleBox");
    if (toggleBox.style.display === "none") {
        toggleBox.style.display = "block";
    }
    const modal_bg = document.querySelector(".modal_bg");
    const modal = document.querySelector(".modal");
    const modal_content = document.querySelector(".modal_content");
    const nav = document.querySelector(".navbar");
    const navHeight = nav.getBoundingClientRect().height;
    const body = document.querySelector(".body");
    const bodyHeight = body.getBoundingClientRect().height;
    const restHeight = bodyHeight - navHeight;
    if (type === "app") {
        modal_content.innerHTML = `
    <div class="app_container">
        <div class="app_header">
        <p class="app_title">${appointment_info.user_name}'s Appointment</p>
    </div>
    <div>
        <p class="app_date">Appointment Date: <b>${appointment_info.date}</b></p>
        <p class="app_time">Appointment Time: <b>${appointment_info.time}</b></p>
        <p class="byuID">Your BYU ID: <b>${appointment_info.BYU_ID}</b></p>
        <p class="app_doctor">Name of Doctor: <b>Dr. ${appointment_info.doctor}</b></p>
        <p class="app_department">Department: <b>${appointment_info.department}</b></p>
        <p class="symptom">Symptom you have: <b>${appointment_info.symptom}</b></p>
    </div>

    <div class="btnBox">
        <button class = "updateBtn" onclick="updateApp()">UPDATE</button>
        <button class="cancelBtn" onclick="cancelModal()">CANCEL</button>
    </div>
    `;
    }
    else if (type === 'vac') {
        const toggleBox = document.querySelector(".toggleBox");
        toggleBox.style.display = "none";
        modal_content.innerHTML = `
    <div class="app_container">
        <div class="app_header">
        <p class="app_title">${appointment_info.user_name}'s Vaccination</p>
    </div>
    <p class="byuID">Your BYU ID: <b>${appointment_info.BYU_ID}</b></p>
    <div>
        <p>Available Date & Time on This Week</p>
        <p>2021.10.1 ~ 10.5</p>
        <p>2021.10.1</p>
        <div>
            <button>08:00 A.M.</button>
            <br>
            <button>09:00 A.M.</button>
            <br>
            <button>10:00 A.M.</button>
            <br>
            <button>11:00 A.M.</button>
            <br>
        </div>
    </div>

    <div class="btnBox">
        <button class = "updateBtn">CONFIRM</button>
        <button class="cancelBtn">CLOSE</button>
    </div>
        `;
    }
    else {
        modal_content.innerHTML = `
    <div class="app_container">
        <div class="app_header">
        <p class="app_title">Vaccination Appointment</p>
    </div>
    <p class="byuID">Your BYU ID: <b>${appointment_info.BYU_ID}</b></p>
    <div>
        <p>Appointment Date: <b>${appointment_info.vac_date}</b></p>
        <p>Appointment Time: <b>${appointment_info.vac_time}</b></p>
        <p>First dose</p>
    </div>

    <div class="btnBox">
        <button class = "updateBtn">UPDATE</button>
        <button class="cancelBtn">CANCEL</button>
    </div>
        `;
    }
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

