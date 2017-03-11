app.controller('commentController',["$scope","$http","$filter",function($scope,$http,$filter){
	
	$scope.dropdown=''
	$scope.comment={}

	$http.get('data.json').then(function(res){
			$scope.data=res.data.data
		},function(data){
			console.log('where is data');
		}
	)
	
	$scope.submitCallback=function(comment,index){
		for(var i=0;i<$scope.data.length;i++){
			if($scope.data[i].id==index){
				$scope.data[i].comments.push({text:comment});
			}
		}	
	}

	$scope.updateLike=function(index){
		for(var i=0;i<$scope.data.length;i++){
			if($scope.data[i].id==index){
				 $scope.data[i].likes.status=!$scope.data[i].likes.status
			}
		}
	}
	
}])
