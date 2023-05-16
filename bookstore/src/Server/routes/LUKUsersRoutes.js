const express = require('express');
const router = express.Router();
const cors = require('cors');
const lukusersModel = require('../models/LUKUsers');
router.use(cors())
router.use(express.json())

//save lukusers
router.post('/save', async (req, res) => {

    const {LUKName,LUKShop,LUKAddresss,LUKDescription,LUKEmail}=req.body;

    try {
        const newUser = new lukusersModel({
            LUKName,
            LUKShop,
            LUKAddresss,
            LUKDescription,
            LUKEmail,
        });

        await newUser.save();
        res.json(newUser);
    } catch (err) {
        res.status(500).json({ message: 'Error adding article', error: err });
    }



});


//delete lukusers

router.delete('/deleteUser/:id', async (req, res) => {
    const id = req.params.id;
  
    try {
      const deletedUser = await lukusersModel.findByIdAndDelete(id);
      if (!deletedUser) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.json({ message: 'User deleted successfully' });
    } catch (error) {
      console.error('Error deleting User:', error);
      res.status(500).json({ error: 'Server error'});
}
});

//update lukusers

router.post('/updateUser/:id', async (req, res) => {
    const { id } = req.params;
    const { newLUKName, newLUKShop, newLUKAddresss, newLUKDescription, newLUKEmail } = req.body;
  
    try {
      const updatedUser = await lukusersModel.findByIdAndUpdate(
        id,
        {
            LUKName: newLUKName,
            LUKShop: newLUKShop,
            LUKAddresss: newLUKAddresss,
            LUKDescription: newLUKDescription,
            LUKEmail: newLUKEmail,


        },
        { new: true }
      );
  
      res.json(updatedUser);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while updating the user'});
}});

//getartical


// router.get("/getUsers", async ( req, res) => {
//     lukusersModel.find({}, (err, result) => {
//       if (err) {
//         res.json(err);
//       } else {
//         res.json(result);
//       }
//     });
//   });

  
  

router.get('/getUser', (req,res) => {
  lukusersModel.find().exec().then((data, error) => {
      if(error) return res.status(400).json({status: false, error});
      return res.status(200).json({
          status: true,
          message: "Get category successfully",
          data,
      });
  });
});





module.exports = router;