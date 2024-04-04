#! /usr/bin/env node
import inquirer from "inquirer"
let todo=[]
let condition=true

while (condition) {
let ansTodo = await inquirer.prompt([
    {name:"item",
    type:"input",
     message:"What you want add in Todo?"
},
{
    name:"addmore",
    type:"confirm",
    message:"whould you like to add more??",
    default:"false"
},
]
)

todo.push( ansTodo.item)
condition=ansTodo.addmore}//while loop ends here 
console.log(`Your Todo is here ${todo}`)
//for delete the items
    let delTodo = await inquirer.prompt([{
        name:'delete',
        type:'confirm',
        message:"Do you want to delete the last item?",
        default:'false'
    }])
if ( delTodo.delete===true){
    todo.pop()
    console.log(`Your Todo is here ${todo}`)
} 
//for replace the items
    let repTodo=await inquirer.prompt([{
        name:'replace',
        type:'confirm',
        message:'Do you want to replace something form your Todo?'
    }])
    if ( repTodo.replace===true){
        let repItems=await inquirer.prompt([{
       name:'replace',
       type:'list',
       message:'Select what you want to replace from your Todo',
       choices:todo
        }])
        //replace the item with indexof
        let repRem=todo.indexOf(repItems.replace)
        if (repRem!==0)
        
        {let newInp = await inquirer.prompt([
            {name:"item",
            type:"input",
            message:"What you want to add  in your Todo?"
        }])
        //putting the new item in the list on the place of replace  item
        todo[repRem]=newInp.item

        console.log(`Your Todo is here ${todo}`)
    }
            }
   else {
    console.log(`Your Todo is here ${todo}`)
   }


   


