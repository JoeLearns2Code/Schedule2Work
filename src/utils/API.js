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
        return axios.post(BASEURL + "/api/newemployee/", data);
    },
    //TODO:
    updateEmployee: function (id) {
        return axios.put("/api/employee" + id);
    },
    deleteEmployee: function(id) {
        return axios.delete(BASEURL + "/api/deleteemployee" + id);
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




