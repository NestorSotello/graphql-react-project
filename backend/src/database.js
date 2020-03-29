import mongoose from 'mongoose';

mongoose.connect("mongodb://localhost/grapgqlreactdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db => console.log('database is Connected'))
    .catch(err => console.log(err));