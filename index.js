// // QUESTION ONE
// function FeatureToggle(featureName, isEnabled, userGroupAccess) {
//     this.featureName = featureName,
//         this.isEnabled = isEnabled,
//         this.userGroupAccess = userGroupAccess
// }
// FeatureToggle.prototype.canAccess = function (userRole) {
//     return this.userGroupAccess.includes(userRole);
// };
// FeatureToggle.prototype.toggleFeature = function (flag) {
//     this.isEnabled = flag;
// };
// function simulateAccess(featureToggle, userRole) {
//     if (featureToggle.isEnabled) {
//         if (featureToggle.canAccess(userRole)) {
//             console.log(`${userRole} has access to ${featureToggle.featureName}.`);
//         } else {
//             console.log(`${userRole} does not have access to ${featureToggle.featureName}.`);
//         }
//     } else {
//         console.log(`${featureToggle.featureName} is disabled.`);
//     }
// }   
// const newFeature = new FeatureToggle("New Dashboard", true, ["betaTesters", "admins"]);
// console.log(newFeature)
// console.log(newFeature.canAccess("user"))


// // QUESTION 2
// function Timelog(freelancerName, projectName,logs){
//     this.freelancerName = freelancerName,
//     this.projectName = projectName,
//     this.logs = logs
//     t
// }
// Timelog.prototype.totalEarnings = function(){
//     return this.projectName.hourlyRate * this.logs.hoursWorked
// }

// QUESTION THREE You are developing a startup’s order management system where an Order constructor 
// function should contain customer (object with name and email), items (array of objects with productName,
//  quantity, and unitPrice), and status (string), then implement prototype methods to compute total cost, 
// update order status based on payment, and categorize order urgency using switch and conditional statements.

function Order (customer, items,status){
    this.customer = customer,
    this.items = items,
    this.status = status
}

Order.prototype.totalcost = function(){
    let totalPrice = this.items.unitPrice * this.items.quantity
    return totalPrice
};
Order.prototype.updateStatus = function (payment){
    if(payment >= this.totalcost()){
        return (this.status="paid")
    }
    else{
        return this.status
    }
};
Order.prototype.priority = function (){
    if (this.items.quantity >= 20 && this.status=="paid"){
        return ("High priority")
    } 
    else {
        return ("not priority")
    }
};
const order = new Order ({name:"Emeline", email:"emelyneniyo12@gmail.com"},{productName:"mandazi",quantity: 30, unitPrice: 300},"notpaid")
console.log(order);
console.log(order.totalcost());
console.log(order.updateStatus(9000));
console.log(order.priority())

// QUESTION FOUR
// In a startup’s employee review tool, design an Employee class with properties: id (number), name (string), 
// performanceMetrics (object with keys like communication, efficiency, and reliability), and feedback (array of strings), 
// then use prototypes to calculate an average score, classify performance level using control flow, and add new feedback based on conditions.


