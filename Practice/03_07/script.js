/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const binder = {
    color : "blue",
    height : 12,
    width : 10,
    rings : {
        color : "silver",
        quantity : 3,
        size: "2 inches"
    },
    sheets : {
        lined : true,
        quantity : 75
    },
    open: false,
    openBinder: function (openStatus) {
        this.open = openStatus;
    },
    newSheets: function (sheetType) {
        this.sheets.lined = sheetType;
    },
};

console.log("The binder object:", binder)
console.log("The binder sheet quantity:", binder["sheets"]["quantity"])

