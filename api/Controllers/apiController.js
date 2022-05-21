const {q_get_categories} = require('./../Queries/apiQuery')

const index = async(req, res)=>{
    try {
        const result = await q_get_categories()
        if(result){
            console.log(result);
            res.render("index",{layout: 'layout_2',  result})
        } else {
            res.json({ msg: "query err" })
        }
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

const products = async(req, res)=>{
    try {
        res.render('products')
    } catch (err) {
        console.log(err.message);
    }
}

const product_details = async(req, res)=>{
    try {
        res.render('product_details')
    } catch (err) {
        console.log(err.message);
    }
}

const compair = async(req, res)=>{
    try {
        res.render('compair')
    } catch (err) {
        console.log(err.message);
    }
}

const product_summary = async(req, res)=>{
    try {
        res.render('product_summary')
    } catch (err) {
        console.log(err.message);
    }
}

const tac = async(req, res)=>{
    try {
        res.render('tac')
    } catch (err) {
        console.log(err.message);
    }
}

const login = async(req, res)=>{
    try {
        res.render('login')
    } catch (err) {
        console.log(err.message);
    }
}

const legal_notice = async(req, res)=>{
    try {
        res.render('legal_notice')
    } catch (err) {
        console.log(err.message);
    }
}

const faq = async(req, res)=>{
    try {
        res.render('faq')
    } catch (err) {
        console.log(err.message);
    }
}

const forgetpass = async(req, res)=>{
    try {
        res.render('forgetpass')
    } catch (err) {
        console.log(err.message);
    }
}

const components = async(req, res)=>{
    try {
        res.render('components')
    } catch (err) {
        console.log(err.message);
    }
}



const get_categories = async(req, res)=>{
    try {
        const result = await q_get_categories()
        if(result){
            console.log(result);
            res.render("index",{result})
        } else {
            res.json({ msg: "query err" })
        }
    } catch (err) {
        console.log(err.message);
        res.json({ msg: "query err" })
    }
}



module.exports = {
    index,
    register,
    special_offer,
    contact,
    delivery,
    products,
    product_details,
    compair,
    product_summary,
    tac,
    faq,
    legal_notice,
    login,
    components,
    forgetpass,

    get_categories,

}