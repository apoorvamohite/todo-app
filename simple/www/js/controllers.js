angular.module('myApp')
    .controller('SplitterController', function() {
        this.load = function(page) {
            mySplitter.content.load(page)
                .then(function() {
                    mySplitter.left.close();
                });
        };
    })
    .controller('TabbarController', function($scope) {
        $scope.title = 'Pending Tasks';
        $scope.updateTitle = function($event) {
            $scope.title = angular.element($event.tabItem).attr('label');
        };
    })
    .controller('PageController', function() {
        this.login = function() {
        	var impTask=0;
        	if(this.imp==true){
        		impTask=1;
        	}
            var p = { name: this.username, id: Math.random() * 100, imp: impTask};
            var task = JSON.parse(localStorage.getItem('tasks'));
            task.pending.push(p);
            window.localStorage.setItem('tasks', JSON.stringify(task));
            //ons.notification.alert('Added!');
            location.reload();
        };
    })
    .controller('pendingList', function($scope) {
        var l = JSON.parse(localStorage.getItem('tasks'));
        if (l == null) {
            var task = {
                pending: [],
                completed: []
            }
            window.localStorage.setItem('tasks', JSON.stringify(task));
            $scope.pending = task.pending;
        } else {
            $scope.pending = l.pending;
            $scope.completeTask = function(item, index) {
                var task = JSON.parse(localStorage.getItem('tasks'));
                task.pending.splice(index, 1);
                task.completed.push(item);
                window.localStorage.setItem('tasks', JSON.stringify(task));
                location.reload();
            }
        }

    })
    .controller('completedList', function($scope) {
        $scope.completed = JSON.parse(localStorage.getItem('tasks')).completed;
        $scope.delete = function(item, index) {
            var task = JSON.parse(localStorage.getItem('tasks'));
            task.completed.splice(index, 1);
            window.localStorage.setItem('tasks', JSON.stringify(task));
            location.reload();
            //$( "#Tab2" ).load(window.location.href + " #Tab2" );
        }
    });