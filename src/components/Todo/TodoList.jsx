function TodoComponent()
{
  const date = new Date();
  const targetDate = new Date(date.getFullYear()+12,date.getMonth(),date.getDate());
  const todos =[
    {id:1,description:'Learn AWS',done:false ,targetDate:targetDate},
    {id:2,description:'Learn Cloud',done:false, targetDate:targetDate},
    {id:3,description:'Learn Full Stack Dev',done:false,targetDate:targetDate}
  ]
  return(
    <div className="container">
       <table className="table">
        <thead>
         <tr>
          <td>id</td>
          <td>description</td>
          <td>is Done?</td>
          <td>Target Date</td>
         </tr>
        </thead>
        <tbody>
          {
          todos.map(
            todo =>
            <tr key={todo.id}>
            <td>{todo.id}</td>
            <td>{todo.description}</td>
            <td>{todo.done.toString()}</td>
            <td>{todo.targetDate.toDateString()}</td>
            </tr>

          )
}
        </tbody>
       </table>
    </div>
  )
}

export default TodoComponent