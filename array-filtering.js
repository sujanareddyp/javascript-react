/* var pets = ['cat', 'dog', 'elephant'];

     var filtered = pets.filter(function (pet) {
       return (pet !== 'elephant');
     });
	 console.log(filtered);*/
	 var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	 var filtered = numbers.filter(function evenNumbers(number){
		return (number % 2 === 0) ;
	 });
	 console.log(filtered);