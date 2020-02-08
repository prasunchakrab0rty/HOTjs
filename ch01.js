//Ch 01: Function Borrowing

const player1 = {
    firstname : "Saurav",
    lastname : "Ganguly",
    fullname : function () {console.log(this.firstname+ " "+ this.lastname)}
}

player1.fullname(); 

const player2 = {
    firstname: "Sachin",
    lastname: "Tendulkar"
}

player1.fullname.call(player2)
// function of player1 object used for player2