function createExpenseTracker(username, intial){
    
    let user = {
        name: username,
        budget: intial
    };
    let nextId = 0;
    let expenses = [];
    
    return{
        Add : (amount, category,description) => {
        expenses.push({
            id: nextId,
            amount: amount,
            category: category,
            description: description
            });
                nextId++;
        },
        Remove : (id) => {
        let idremove = expenses.findIndex(expense => expense.id == id );
        if(idremove !== -1){
        expenses.splice(idremove,1);
       }else{
        console.log("Not found");
       }
        },

        UpdateExpense : (id,newData) => {
        let index = expenses.findIndex(exp => exp.id === id);
        if(index !== -1){
            expenses[index].amount = newData;
       }else{
        console.log("Not found")
       }
        },
        getTotal : () =>{
            let total = expenses.reduce((acc,exp) => acc + exp.amount,0);
            return total;
        },
        getExpByCat : (category) => {
            let filtered = expenses.filter((exp) => exp.category === category)
            let finale = 0;
            for(let exp of filtered)
            {
                finale += exp.amount;
            }
            return finale;
        },
        getHighest : () =>{
        let maxi = expenses.reduce((max, exp) =>{
            return exp.amount > max ? exp.amount : max
        },0)
        return maxi;
        },
        getLowest : () => {
            if (expenses.length === 0) {
        return 0;
        }
            let low = expenses.reduce((min,exp) =>{
                return exp.amount < min ? exp.amount : min;
            },expenses[0].amount)
            return low;
        },
       getUser: () => {
          console.log(`${user.name} Budget: ${user.budget}`);
          },
        showallexp : () => {
            for(let exp of expenses)
            {
                console.log(`ID: [${exp.id}]   Amount: [${exp.amount}] Category: [${exp.category}]   Description: [${exp.description}] `)
            }
        },
        updateUser : (newdatauser,budget) =>{
            user.name = newdatauser;
            user.budget = budget;
        }
    };
};
