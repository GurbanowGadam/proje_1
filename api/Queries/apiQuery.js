const { query } = require('./../../Database/indexDB')

const q_get_categories = async() =>{
    try {
        const q = `
        select 
            c.*,
            (select json_agg(sc.*) as sub from sub_categories sc where sc.category_id = c.id) 
        from categories c;
        
        ;`
        const res = await query(q,[])
        return res.rows
    } catch (err) {
        return false
    }
}

module.exports = {
    q_get_categories
}