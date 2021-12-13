const UserModel = require('../model/UserData');



module.exports = {
    userData: async (req,res)=>{
        try {
            let proceed = true
            const { name,id,title} = req.body;
            if(proceed){
                let userData = await UserModel.create({
                    Name: name,                    
                    ID: id,
                    Title: title,
                })
                res.send({
                    type: "Data Save",
                    data: userData,
                })
            }
            
        }  catch (error) {

            res.send({
                type: "Catch Error",
                data: error
            })
            console.log(error);
        }
    },
    getUserData: async (req,res)=>{
        try {
            let proceed = true
            const { id} = req.body;
            let userData = await UserModel.find({ID:id})

            if(userData.length==0){
                proceed=false;
                res.send({
                    type: "Error",
                    data: {
                        msg: "User not in database"
                    }
                })
            }

            if(proceed){
                console.log(userData);
                res.send({
                    type: "Data Save",
                    data: userData,
                })
            }
            
        }  catch (error) {

            res.send({
                type: "Catch Error",
                data: error
            })
            console.log(error);
        }
    },
    userUpdate: async (req,res)=>{
        try {
            let proceed = true
            const {name, id} = req.body;
            let userData = await UserModel.find({ID:id})

            if(userData.length==0){
                proceed=false;
                res.send({
                    type: "Error",
                    data: {
                        msg: "User not in database"
                    }
                })
            }

            if(proceed){
              let updateData = await UserModel.findOneAndUpdate(
                   {ID:id},
                   {'$set':{
                       Name : name
                   }},
                   {new:true}
                   );
                res.send({
                    type: "Data Update",
                    data: updateData,
                })
            }
            
        }  catch (error) {

            res.send({
                type: "Catch Error",
                data: error
            })
            console.log(error);
        }
    }
}