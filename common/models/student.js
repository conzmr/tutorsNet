'use strict';

module.exports = function(Student) {

  Student.uploadPhoto = function(cb){
    getTheStreamBody(function(err, stream) {
      if (err) return cb(err);
      cb(null, stream, 'application/octet-stream');
    });
  };

  Student.remoteMethod('uploadPhoto', {
    isStatic: true,
    returns: [
      {arg: 'body', type: 'file', root: true},
      {arg: 'Content-Type', type: 'string', http: { target: 'header' }}
    ]
  });
};
