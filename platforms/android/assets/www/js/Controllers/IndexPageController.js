MyApp.angular.controller('IndexPageController', function (
		$scope, 
		InitService, 
		$compile
		){
  'use strict';
  
  InitService.addEventListener('ready', function () {
    // DOM ready
    console.log('IndexPageController: ok, DOM ready');
    var page;
   
    //We need this to ensure controllers work on each page
    MyApp.fw7.domAccess(document).on('pageInit', function (e) {
      page = e.detail.page.name;
      console.log("page is "+page);
      $compile(e.target)($scope);
      setTimeout(function () {
        $scope.$apply();
      }, 1);
    });    
  });
  
});