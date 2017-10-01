var app = require('../../server/server');
var Role = app.models.Role;
var RoleMapping = app.models.RoleMapping;
var Administrator = app.models.Administrator;
var Student = app.models.Student;
var Instructor = app.models.Instructor;

Role.create({
    name: 'admin'
}, function (err, role) {
    if(err)console.log(err);
    Administrator.find({}, function (adminErr, res) {
        for (var a = 0; a < res.length; a++) {
            role.principals.create({
                principalType: RoleMapping.USER,
                principalId: res[a].id
            }, function (err, principal) {
               if (err) throw err;
            });
        }
    });
});

Role.create({
    name: 'student'
}, function (err, role) {
    if(err)console.log(err);
    Student.find({}, function (studentErr, res) {
        for (var a = 0; a < res.length; a++) {
            role.principals.create({
                principalType: RoleMapping.USER,
                principalId: res[a].id
            }, function (err, principal) {
               if (err) throw err;
            });
        }
    });
});

Role.create({
    name: 'instructor'
}, function (err, role) {
    if(err)console.log(err);
    Instructor.find({}, function (instructorErr, res) {
        for (var a = 0; a < res.length; a++) {
            role.principals.create({
                principalType: RoleMapping.USER,
                principalId: res[a].id
            }, function (err, principal) {
               if (err) throw err;
            });
        }
    });
});
