const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/user');

//const db="mongodb://vaibhav:vaibhav123@ds229690.mlab.com:29690/javalogin";
const db="mongodb://localhost:27017/javalogin";
mongoose.Promise = global.Promise;
mongoose.connect(db, function(err){
    if(err){
        console.error("Error! "+err);
    }
}) 

  router.get('/users', function(req, res){
    //res.send('api works');
    console.log('Get request for all users');
    User.find({}).exec(function(err,users){
        if(err){
            console.log("Error retrieving users");
        } else {
            res.json(users);
        }
    })
}); 

 router.get('/user/:id', function(req, res){
    console.log('Get request for single user');
    User.findById(req.params.id).exec(function(err,user){
        if(err){
            console.log("Error retrieving users");
        } else {
            res.json(user);
        }
    })
}); 

 router.post('/user', function(req,res){
    console.log('Post a user');
    var newUser = new User();
    newUser.name = req.body.name;
    newUser.role = req.body.role;
    newUser.salary = req.body.salary;
    newUser.save(function(err, insertedUser){
        if(err){
            console.log('Error in saving user');
        } else {
            res.json(insertedUser);
        }
    });
});

router.put('/user/:id', function(req,res){
    console.log('Update a user');
    user.findByIdAndUpdate(req.params.id,
    {
        $set: {name: req.body.name, role: req.body.role, salary: req.body.salary}
    },
    {
        new: true
    },
    function(err, updateUser){
        if(err){
            res.send("Error Updating user");
        } else {
            res.json(updateUser)
        }
    }
);
});

router.delete('/user/:id', function(req,res){
    console.log('Deleting a user');
    User.findByIdAndDelete(req.params.id, function(err, deleteUser){
        if(err){
            res.send("Error deleting user");
        } else {
            res.json(deleteUser);
        }
    });
});  

module.exports = router;