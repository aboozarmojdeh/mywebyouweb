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

//GET ALL QUESTION
app.get('/questions',async (req,res)=>{
    try {
      const allQuestions=await pool.query('SELECT * FROM questions');
        res.json(allTodos.rows)
        
    } catch (err) {
        console.error(err.message)
    }
});

//GET A QUESTION

app.get('/questions/:id',async (req,res)=>{
    // console.log(req.params)
    const {id}=req.params;
    const question=await pool.query('SELECT * FROM questions WHERE (question_id)=$1',[id]);
    res.json(question.rows[0])
});

//UPDATE A QUESTION
app.put('/questions/:id',async (req,res)=>{
    try {
        const {id}=req.params;
        const {email,question,answer}=req.body;
        const updatedQuestion=await pool.query("UPDATE questions SET email=$1,question=$2, answer=$3 WHERE question_id=$4",[email,question,answer,id]);    
        res.json("todo updated successfully!!!! Hurray!")
    } catch (err) {
        console.error(err.message)
    }
    
});

//Delete a question

app.delete('/questions/:id',async (req,res)=>{
    try {
        const {id}=req.params;
        const deletedQuestion=await pool.query("DELETE FROM questions WHERE question_id=$1",[id]);
        res.json("Question deleted successfully");
        
    } catch (err) {
        console.error(err.message)
    }
});

app.listen(5000,()=>{
    console.log('app is listening to PORT 5000')
});
