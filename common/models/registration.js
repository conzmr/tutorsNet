'use strict';

module.exports = function(Registration) {

  Registration.scheduleCourse = function(courseId, options, cb) {
    console.log(options.accessToken.userId);
    Registration.create(
      {
        studentId: options.accessToken.userId,
        courseId: courseId
      },
      function(err, registration) {
        if (err) return cb(err)
        return cb(null, registration)
      }
    )
   }

   Registration.remoteMethod('scheduleCourse', {
         accepts: [{arg: 'courseId', type: 'string'},
         {
           "arg": "options",
           "type": "object",
           "http": "optionsFromRequest"
         }
       ],
         returns: {arg: 'courseId', type: 'string'}
   });

  Registration.observe('after save', function(ctx, next) {

    Registration.findById('ctx.instance.id',{
      console.log(ctx.instance);
      filter: {
          include: [
              {
                  relation: 'student'
              }
          ]
      },
      function(err, registration){
        if(err) console.log("Error " +err);
      }
    })
      next();
});



};


// {
// "email":"falatorre@hotmail.com",
// "password":"falatorre"
// }
//
//
// {
//   "email": "cpadilla@hotmail.com",
//   "password": "Carlota18*"
// }
