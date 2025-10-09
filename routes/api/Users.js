const express = require("express");
const router = express.Router();
const uuid = require("uuid");

let users = require("../../Users");

//Getting all users Data........

router.get("/", (req,res)=>{
    res.json(users);
});

//Getting user data by Id.......

router.get("/:id",(req,res) => {
    const found = users.some(users => users.id === parseInt(req.params.id));

    if(found){
        res.json(users.filter(users => users.id === parseInt(req.params.id)));
    }else{
        res.sendStatus(400);
    }
});

// Creating a new user data..........

router.post("/", (req,res) => {
    const newUser = {
        id: uuid.v4(),
        name: req.body.name,
        email: req.body.email
    };

    if(!newUser.name || !newUser.email){
        return res.sendStatus(400);
    }

    users.push(newUser);
    res.json(users);

});

//Updating the user data.......

router.put("/:id", (req,res) => {
    const found = users.some(users => users.id === parseInt(req.params.id));

    if(found){
        const updateUser = req.body;
        users.forEach(users => {
            if(users.id === parseInt(req.params.id)){
                users.name = updateUser.name ? updateUser.name : users.name;
                users.email = updateUser.email ? updateUser.email : users.email;
                res.json({msg:"users updated", users});
            }
        })
    }
        
});

// Deleting User Data...........

router.delete("/:id", (req,res) => {
    const found = users.some(users => users.id === parseInt(req.params.id));

    if(found){
        users = users.filter(users => users.id !== parseInt(req.params.id));

            res.json({
            msg:"userDeleted", users
         });
        }    
        else{
            res.sendStatus(400);
        }
});



module.exports = router