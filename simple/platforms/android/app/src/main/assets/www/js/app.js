
var app = angular.module('myApp', ['onsen']);

// Run

app.run(function () {
  var task = {
    pending :[
      {name: "apple",
       id:1},
      {name: "mango",
       id:2}
    ],
    completed :[]
  }
 localStorage.setItem('todoList',JSON.stringify(task));

});

// Config

app.config( function ($httpProvider) {
  delete $httpProvider.defaults.headers.common['X-Requested-With'];
});
