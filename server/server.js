import app from './app'
import config from './config/index'


//const {PORT} = config

const PORT = '7000';

app.listen(PORT, () => {
    console.log(`Server started on Port ${PORT}`);
});