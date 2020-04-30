const express = require('express')

const app = express()

let todos = [
    'first task',
    'second task',
    'third task'
]




app.get('/',(req,res)=>{
    let todoList = ''
    for(let i= 0;i<todos.length;i++){
        todoList += '<li>'+todos[i]+'</li>' 
    }

    let html = 
`
<html>
<body>
    <form action = "add">
        <input name = "task">
            <button type ="submit">ADD</button>
    </form>
    <ul>
        ${todoList}
    </ul>
</body>
</html>

`

    res.send(html)
})

app.get('/add',(req,res)=>{

    todos.push(req.query.task)
    res.redirect("/")

})

app.listen(3030)