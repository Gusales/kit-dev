import { app } from './app'

app.get('/', () => {
  return {
    message: 'Hello World'
  }
})

app.listen({
  port: 3333
}).then(() => {
  console.log('🚀 HTTP SERVER RUNNING 🚀')
})