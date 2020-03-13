const exerciseCategories = [
    "Cardio",
    "Strength",
    "Flexibility", 
    "Balance"
];

function add(category){
    exerciseCategories.push(category);
}

module.exports = {
    list: exerciseCategories,
    add: add
}