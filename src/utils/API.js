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
        return axios.post("/api/newEmployee/", data);
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

    addShift: function (data) {
        return axios.post(BASEURL + "/api/addShift", data);
    },

    //Login

    login: function (data) {
        return axios.post(BASEURL + "/api/login", data);
    },
};




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



