const express  = require('express')
const {body, validationResult} = require('express-validator')


const router = express.Router()

// @route  POST api/users  
// @desc   Register User
// @access public
router.post('/',
    body('name', 'name is required').not().isEmpty(),
    body('email', 'please add a valid email').isEmail(),
    body('password', 'please enter a password of more than 6 characters').isLength({
        min:6
    }),

(req, res) => {
        // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req)
    // this means no error at all
    // if(errors.isEmpty())

    // if it has some errors
    if(!errors.isEmpty()){
        res.status(400).json({errors: errors.array()})
    }

    console.log(req.body)
    res.send("user route")
})

module.exports = router