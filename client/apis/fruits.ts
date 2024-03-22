// TODO 5 call the data from the client side
//Call the API from the client (client/api/fruits.ts): Use the client-side code to interact with the API set up.

export async function getTodos() {
  try {
    const response = await fetch('/api/v1/todos')
    if (!response.ok) {
      throw new Error('Network response was not ok')
    }
    const result = await response.json()
    return result.tasks
  } catch (error) {
    throw new Error('Failed to fetch todos: ' + error)
  }
}
