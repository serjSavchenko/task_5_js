class Car{
    constructor(ID, Mark, Model, IssueYear, Color, Cost, RegisterNumber)
    {
        this.ID = ID;
        this.Mark = Mark;
        this.Model = Model;
        this.IssueYear = IssueYear;
        this.Color = Color;
        this.Cost = Cost;
        this.RegisterNumber = RegisterNumber;
    };
}
try {
var mainArray = [
    new Car(1, "Volvo", "Sedan", 1998, "red", 1900.50, 882361),
    new Car(2, "BMW", "Hatchback", 2007, "yellow", 3200.50, 177564),
    new Car(3, "BMW", "Sportcar", 2017, "white", 11430, 555555),
    new Car(4, "Audi", "Sedan", 2009, "purple", 2080.70, 647321),
    new Car(5, "Setra", "Hatchback", 2011, "gray", 6900, 789678),
    new Car(6, "Audi", "Sportcar", 2015, "dark-red", 9500, 197546),
    new Car(7, "Chevrolet", "Sedan", 2004, "black", 2100.50, 789215),
];
} catch (e) {
    console.log(e.message);
}
finally{
    mainArray.forEach(elem => {
        console.log(elem);
    });
}

console.log("\n\n");

function getMarks(Mark)
{
    let temp = new Car();
    mainArray.forEach(car => {
        if (car.Mark == Mark)
        {
            console.log(car);
            temp = car;
        }
    });
    if (temp.ID == new Car().ID)
    {
        console.log("No such car in base!");
    }
    console.log("\n\n");
};


function getCarList(Mark, countYear)
{
    let temp = new Car();
    mainArray.forEach(car => {
        if ((car.Mark == Mark) && ((new Date().getFullYear() - car.IssueYear) == countYear))
        {
            console.log(car);
            temp = car;
        }
    });
    if (temp.ID == new Car().ID)
    {
        console.log("No such car in base!");
    }
    console.log("\n\n");
};

function getCarByIssueYear(IssueYear, Price)
{
    let temp = new Car();
    mainArray.forEach(car => {
        if ((car.IssueYear == parseInt(IssueYear)) && (car.Cost > parseFloat(Price)))
        {
            console.log(car);
            temp = car;
        }
    });
    if (temp.ID == new Car().ID)
    {
        console.log("No such car in base!");
    }
    console.log("\n\n");
};


try {    
    switch (prompt("Choose, what func you want to run! \n 1. Find car by mark; (default) \n 2. Find car by mark and exploatatinon year; \n 3. Find car by issue year and price;\n", 1)) 
    {
        case "1":
            try {
                getMarks(prompt("Enter mark to find!", ""));
            } catch (e) {
                console.log("In this function : ");
                throw e;
            }
            break;
        case "2": 
            try {
                getCarList(
                    prompt("Enter mark to find!", ""),
                    prompt("Enter count of exploatation years!", "")
                    );
            } catch (e) {
                console.log("In this function ");
                throw e;
            }
            break;
        case "3":
            try {
                getCarByIssueYear(
                    prompt("Enter issue year to find!", ""),
                    prompt("Enter price of car! (program will find all cars where price bigger)", "")
                    );
            } catch (e) {
                console.log("In this function ");
                throw e;
            }
            break;
        // default:
        //     alert("We can't find such function, sorry.");
        //     break;
    }
} catch (e) {
    console.log("We catch an error : " + e.message);
}

    