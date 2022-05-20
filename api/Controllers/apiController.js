

const index = async(req, res)=>{
    try {
        res.render('index')
        // res.render('client/register')
    } catch (err) {
        console.log(err.message);
    }
}

const register = async(req, res)=>{
    try {
        res.render('register')
    } catch (err) {
        console.log(err.message);
    }
}

const special_offer = async(req, res)=>{
    try {
        res.render('special_offer')
    } catch (err) {
        console.log(err.message);
    }
}
const contact = async(req, res)=>{
    try {
        res.render('contact')
    } catch (err) {
        console.log(err.message);
    }
}
const delivery = async(req, res)=>{
    try {
        res.render('delivery')
    } catch (err) {
        console.log(err.message);
    }
}



module.exports = {
    index,
    register,
    special_offer,
    contact,
    delivery
}