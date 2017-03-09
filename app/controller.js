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
		$scope.data[index].comments.push({text:comment});
	}

	$scope.updateLike=function(index){
		$scope.data[index].likes.status=!$scope.data[index].likes.status
	}

	// $scope.filterFunc=function(dropdown){
	// 	socpe.data=$filter(dropdown)($scope.data,dropdown);
	// }

}])
