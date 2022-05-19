

const index = async(req, res)=>{
    try {
        res.render('client_index')
    } catch (err) {
        console.log(err.message);
    }
}



module.exports = {
    index
}