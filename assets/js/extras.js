    function calculateAge() {
      const birthdateInput = "07/07/1994";
      const birthdate = new Date(birthdateInput);
      const currentDate = new Date();
      let age = currentDate.getFullYear() - birthdate.getFullYear();

      if (
        currentDate.getMonth() < birthdate.getMonth() ||
        (currentDate.getMonth() === birthdate.getMonth() &&
          currentDate.getDate() < birthdate.getDate())
      ) {
        age--; // Subtract 1 from age if not yet had birthday this year
      }

      document.getElementById('myage').innerHTML = '<i class="bi bi-chevron-right"></i> <strong>Age:</strong> <span>' + age + ' </span>' ;
    }
	
	calculateAge();