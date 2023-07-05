import 'dotenv/config'
import { app } from './express'
import { Enviroment } from '../config'

const { port } = Enviroment.getInstance()

app.listen(port, () => { console.log(`Server running at ${port}`) })
