export namespace api {
    export namespace teacher {
        export const login = 'teacher/login';
        export const register = 'teacher/registerTeacher';
        export const getAllTeachers = 'teacher/getAllTeachers';
    }

    export namespace student {
        export const login = 'student/login';
        export const getAllStudents = 'student/getAllStudents';
        export const addStudent = 'student/addStudent';
    }

    export namespace admin {
        export const login = 'admin/login';
    }
}
