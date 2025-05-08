const db = require('../models'); 
const Brand = db.Brand; 


const index = async(req, res)=>{
    try{
        const data = await Brand.findAll(); 
        res.json(data);
    }catch(err){
        console.error(err);
        res.status(500).json({massage:'internal server error!!!'});
    }
};



const store = async(req, res)=>{
    try{
        const data = await Brand.create(req.body); 
        res.json(data);
    }catch(err){
        console.error(err);
        res.status(500).json({massage:'internal server error!!!'});
    }
};


const getById = async(req, res)=>{
    try{
        const {id} = req.params;
        const data = await Brand.findByPk(id);

        if(data){
            res.json(data);
        }else{
            res.status(404).json({massage: 'Brand not found'});
        }
    }catch(err){
        console.error(err);
        res.status(500).json({massage: 'internal server error'});
    }
};



const updateById = async(req, res)=>{
    try{
        const {id} = req.params;
        const data = await Brand.findByPk(id);

        if(data){
            const updatedData = await data.update(req.body);
            res.json(updatedData);
        }else{
            res.status(404).json({massage: 'Brand not found!!'});
        }
    }catch(err){
        console.error(err);
        res.status(500).json({massage: 'internal server error'});
    }
};

const deleteById = async(req, res)=>{
    try{
        const {id} = req.params;
        const data = await Brand.findByPk(id);

        if(data){
            await data.destroy();
            res.json({massage: 'Brand deleted sucessfully!!'});
        }else{
            res.status(404).json({massage: 'Brand not found !!'});
        }
    }catch(err){
        console.error(err);
        res.status(500).json({massage: 'internal server error!'});
    }
}


module.exports = {index, store, getById, updateById, deleteById};
