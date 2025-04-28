const companies = [
    { name: "Company A", revenue: 1000000, employees: 50 },
    { name: "Company B", revenue: 2000000, employees: 100 },
    { name: "Company C", revenue: 1500000, employees: 75 },
    { name: "Company D", revenue: 3000000, employees: 150 },
    { name: "Company E", revenue: 2500000, employees: 125 },
    { name: "Company F", revenue: 500000, employees: 30 },
    { name: "Company G", revenue: 4000000, employees: 200 },
]

const Ages = [23, 45, 32, 25, 40, 29, 35, 50, 60, 28]

//forEach

companies.forEach(company => {
    console.log(`Company Name: ${company.name}, Revenue: ${company.revenue}, Employees: ${company.employees}`)
})

//filter- returns an array of companies with revenue greater than 2 million

const highRevenueCompanies = companies.filter(company => company.revenue > 2000000)
console.log("High Revenue Companies:", highRevenueCompanies)


//map - returns an array of company names

const companyNames = companies.map(company => company.name)
console.log("Company Names:", companyNames) 
//without using arrow function

const companyNamesWithoutArrow = companies.map(function (company) {
    return company.name
});
console.log("Company Names without Arrow Function:", companyNamesWithoutArrow)

const agemap = Ages
    .map(age =>Math.floor( Math.sqrt(age)))
    .map(age => age * 2)
console.log("Mapped Ages:", agemap)

//sort
//to sort companies on the basis of revenue in descending order
const sortedCompanies = companies.sort((a, b) => b.revenue - a.revenue)
 //b.revenue - a.revenue is used to sort in descending order, if we want to sort in ascending order we can use a.revenue - b.revenue
console.log("Sorted Companies by Revenue:", sortedCompanies)


//or

const sortedCompaniesByRevenue = companies.sort((a,b)=> (a.revenue > b.revenue) ? 1 : -1)
console.log("Sorted Companies by Revenue:", sortedCompaniesByRevenue)

//reduce -adds up all the given values in the array and returns a single value
const totalRevenue = companies.reduce((accumulator, company) => accumulator + company.revenue, 0)
console.log("Total Revenue:", totalRevenue)

//or
const totalRevenueWithoutArrow = companies.reduce(function (accumulator, company) {
    return accumulator + company.revenue
}, 0)

//here 0 is the initial value of the accumulator, it can be any value, if we don't provide it, the first element of the array will be used as the initial value and the iteration will start from the second element of the array.

//get the total number of employees in all companies

const totalemployees = companies.reduce((total, company) => total + company.employees, 0)
console.log("Total Employees:", totalemployees)


//combine methods

const combined = Ages.map(age => age * 2)
    .filter(age => age > 50)
    .sort((a, b) => a - b)
    .reduce((total, age) => total + age, 0)
console.log("Combined Result:", combined)
