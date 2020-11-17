const express=require('express');
const app=express();
const cors=require('cors');
const pool = require('./db');


app.use(express.json());
app.use(cors());


//ROUTES

// USER ROUTES
// CREATE A USER
app.post('/users',async(req,res)=>{
    try {
        const {first_name,last_name,email}=req.body;
        const newUser=await pool.query('INSERT INTO users (first_name,last_name,email) VALUES ($1,$2,$3) RETURNING *',[first_name,last_name,email])
    res.json(newUser.rows[0])
    } catch (err) {
        console.error(err.message)
    }
});


// POST A QUESTION



// Get all questions
app.get('/questions', async (req, res) => {
    try {
        const allQuestions=await pool.query('SELECT * FROM questions')
        res.json(allQuestions.rows) 

    } catch (err) {
        console.error(err)
    }
   
});

// QUESTION ROUTES
// CREATE A QUESTION
app.post('/questions',async(req,res)=>{
    try {
        const {email,question,answer}=req.body;
        const newUser=await pool.query('INSERT INTO questions (email,question,answer) VALUES ($1,$2,$3) RETURNING *',[email,question,answer])
        res.json(newUser.rows[0])
    } catch (err) {
        console.error(err.message)
    }
});


app.listen(5000,()=>{
    console.log('app is listening to PORT 5000')
});
