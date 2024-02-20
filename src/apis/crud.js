import axios from 'axios'

const USER_ID = 1
const URL = 'https://dummyjson.com'
export const addTodo = (todo, completed, setTasks) => {
  axios
    .post(
      `${URL}/todos/add`,
      JSON.stringify({
        todo: todo,
        completed: completed,
        userId: USER_ID,
      }),
      { headers: { 'Content-Type': 'application/json' } }
    )
    .then((res) => {
      console.log(res)
      setTasks((prev) => [...prev, res.data])
    })
}
