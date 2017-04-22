var app = angular.module('clase2', []); // [] : Carga las Dependencias, cosas externas que voy usar en la aplicación

app.controller('saludo', function($scope){
	$scope.nombre = 'Franklin';
});

app.controller('costos', function($scope){
	$scope.productos1 = $scope.productos2 = $scope.total = 0;

	$scope.sumar = function(){
		$scope.total = $scope.productos1 + $scope.productos2;
	};
	
});