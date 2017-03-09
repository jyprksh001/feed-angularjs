angular.module('post-comment',[])
.directive('poscom',['dropdownFilter',function(dropdown){
	return {
		restrict: 'AE',
        controller : "@",
        name:"controllerName",
        scope: {
        		'data':'=',
                'commentdata':'@',
        		'updateLike':'&',
        		'submitCallback':'&',
                // 'filterFunc':'&'
        },
        link:function(scope, element, attrs){
            scope.Callback=function(commentdata,index){
                scope.submitCallback(commentdata,index)
            }

            scope.likeToggle=function(index){
                scope.updateLike(index)
            }
            
        },
        
        templateUrl: 'lib/post.html'
    } 	
}])
.filter('dropdown', function() {
  return function(data, dropdown) {
    if(dropdown==''){
        return data
    }else{
            var newdata=[]
            for(var i=0;i<data.length;i++){
                if(dropdown=="text"){
                    if((data[i].text!=undefined && data[i].text!='')&& (data[i].image==undefined || data[i].image=='')){
                        newdata.push(data[i]);
                    }
                }
                else if(dropdown=='image'){
                        if((data[i].image!=undefined && data[i].image!='')&& (data[i].text==undefined || data[i].text=='')){
                            newdata.push(data[i])
                        }
                }else if(dropdown=="text-image"){
                        if((data[i].text!=undefined && data[i].text!='') && (data[i].image!=undefined && data[i].image!='')){
                            newdata.push(data[i])
                        }
                }
            }
        return newdata
    };
    }
})
