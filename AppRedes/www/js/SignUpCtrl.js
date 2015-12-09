angular.module('AppRedes')


.controller('SignUpCtrl', function ($scope){  
	$scope.selectperfil = "Empreendedor";

	$scope.empreendedor = {
    	nome: "",
		email: "",
		endereco: "",	
		numero: "",
		complemento: "",
		cep: "",
		telefone1: "",
		telefone2: "",
		descricao: "",
		erronome: false,
		erroemail1: false,
		erroemail2: false,
		erroendereco: false,
		erronumero1: false,
		erronumero2: false,
		errocep: false,
		errotelefone1: false,
    };

    $scope.escola = {
    	nome: "",
		email: "",
		endereco: "",	
		numero: "",
		complemento: "",
		cep: "",
		telefone1: "",
		telefone2: "",
		descricao: "",
		erronome: false,
		erroemail1: false,
		erroemail2: false,
		erroendereco: false,
		erronumero1: false,
		erronumero2: false,
		errocep: false,
		errotelefone1: false,
    };

    $scope.bolsista = {
    	nome: "",
		email: "",
		telefone1: "",
		descricao: "",
		erronome: false,
		erroemail1: false,
		erroemail2: false,
    };

    $scope.professor = {
    	nome: "",
		email: "",
		telefone1: "",
		descricao: "",
		erronome: false,
		erroemail1: false,
		erroemail2: false,
    };
	

	$scope.SignUpEmpreendedor = function () {
		if($scope.empreendedor.nome == ""){
			$scope.empreendedor.erronome = true;
		}
		if($scope.empreendedor.email == ""){
			$scope.empreendedor.erroemail1 = true;
		}
		if($scope.empreendedor.endereco == ""){
			$scope.empreendedor.erroendereco = true;
		}
		if($scope.empreendedor.numero == ""){
			$scope.empreendedor.erronumero1 = true;
		}
		if($scope.empreendedor.cep == ""){
			$scope.empreendedor.errocep = true;
		}
		if($scope.empreendedor.telefone1 == ""){
			$scope.empreendedor.errotelefone1 = true;
		}
		if(isNaN($scope.empreendedor.numero) && $scope.empreendedor.numero != ""){
			$scope.empreendedor.erronumero2 = true;
		}
		if($scope.empreendedor.email.indexOf("@") == -1 && $scope.empreendedor.email != ""){
			$scope.empreendedor.erroemail2 = true;
		}


	};

	$scope.SignUpEscola = function () {
		if($scope.escola.nome == ""){
			$scope.escola.erronome = true;
		}
		if($scope.escola.email == ""){
			$scope.escola.erroemail1 = true;
		}
		if($scope.escola.endereco == ""){
			$scope.escola.erroendereco = true;
		}
		if($scope.escola.numero == ""){
			$scope.escola.erronumero1 = true;
		}
		if($scope.escola.cep == ""){
			$scope.escola.errocep = true;
		}
		if($scope.escola.telefone1 == ""){
			$scope.escola.errotelefone1 = true;
		}
		if(isNaN($scope.escola.numero) && $scope.escola.numero != ""){
			$scope.escola.erronumero2 = true;
		}
		if($scope.escola.email.indexOf("@") == -1 && $scope.escola.email != ""){
			$scope.escola.erroemail2 = true;
		}


	};

	$scope.SignUpBolsista = function () {
		if($scope.bolsista.nome == ""){
			$scope.bolsista.erronome = true;
		}
		if($scope.bolsista.email == ""){
			$scope.bolsista.erroemail1 = true;
		}
		if($scope.bolsista.email.indexOf("@") == -1 && $scope.bolsista.email != ""){
			$scope.bolsista.erroemail2 = true;
		}


	};

	$scope.SignUpProfessor = function () {
		if($scope.professor.nome == ""){
			$scope.professor.erronome = true;
		}
		if($scope.professor.email == ""){
			$scope.professor.erroemail1 = true;
		}
		if($scope.professor.email.indexOf("@") == -1 && $scope.professor.email != ""){
			$scope.professor.erroemail2 = true;
		}


	};

	
});
