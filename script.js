function getFormvalue() {
    //Write your code here
	 event.preventDefault();

    // Get the values of the input elements
    var firstName = document.getElementById('fname').value;
    var lastName = document.getElementById('lname').value;

    // Display the first and last name in an alert
    alert(firstName + " " + lastName);

}
