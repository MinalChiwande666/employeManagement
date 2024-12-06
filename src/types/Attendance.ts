export interface Attendance {
    id:string,
    empId : string,
    emp_name : string,
    date : Date,
    status : "Present" | "Absent" | "Late"
}