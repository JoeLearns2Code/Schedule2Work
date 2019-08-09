import axios from "axios";

const BASEURL = "https://limitless-bayou-55894.herokuapp.com";

export default {

    //Employee
    getAllEmployees: function () {
        return axios.get(BASEURL + "/api/employees");
    },

    getEmployee: function (id) {
        return axios.get(BASEURL + "/api/employee/" + id);
    },
    addEmployee: function (data) {
        return axios.post("/api/employee/", data);
    },
    updateEmployee: function (id) {
        return axios.put("/api/employee" + id);
    },
    deleteEmployee: function(id) {
        return axios.delete("/api/employee" + id);
    },

    //Shift
    getShifts: function () {
        return axios.get(BASEURL + "/api/schedule");
    },
};


//     getEmpSchedules: function () {
//         return axios.get('/getEmpSchedules')
//             .then(function (response) {
//                 return response;
//             })
//     },

//     addEmpSchedule: function (emp_id, firstName, lastName) {
//         return axios.post('/addEmpSchedule', {
//             emp_id: emp_id,
//             firstName: firstName,
//             lastName: lastName
//         });
//     },

//     updateEmpSchedule: function (empSchedule) {
//         return axios.put('/updateSchedule/' + empSchedule._id, {
//             employeeSchedule: empSchedule
//         });
//     },

//     addEmployee: function (firstName, lastName, addressOne, addressTwo, city, state, zip, email, phone, phoneType) {
//         return axios.post("/addEmployee", {
//             firstName: firstName,
//             lastName: lastName,
//             addressOne: addressOne,
//             addressTwo: addressTwo,
//             city: city,
//             state: state,
//             zip: zip,
//             email: email,
//             phone: phone,
//             phoneType: phoneType
//         });
//     },

//     updateEmployee: function (id, firstName, lastName, addressOne, addressTwo, city, state, zip, email, phone, phoneType) {
//         return axios.put("/updateEmployee/" + id, {
//             firstName: firstName,
//             lastName: lastName,
//             addressOne: addressOne,
//             addressTwo: addressTwo,
//             city: city,
//             state: state,
//             zip: zip,
//             email: email,
//             phone: phone,
//             phoneType: phoneType
//         });
//     },

//     updateEmpName: function (emp_id, firstName, lastName) {
//         return axios.put("/updateEmpName/" + emp_id, {
//             firstName: firstName,
//             lastName: lastName
//         });
//     },

//     removeEmployee: function (id) {
//         return axios.put("/removeEmployee/" + id);
//     },

//     removeEmpSchedule: function (emp_id) {
//         return axios.put("/removeEmpSchedule/" + emp_id);
//     },

//     getAnnouncements: function () {
//         return axios.get("/getAnnouncements");
//     },

//     addAnnouncements: function (title, content) {
//         return axios.post("/addAnnouncements", {
//             title: title,
//             content: content
//         });
//     }
// };

