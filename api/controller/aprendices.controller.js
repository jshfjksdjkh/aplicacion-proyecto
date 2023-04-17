import {pool} from "../bd.js"

export const getAprendices= async (req,res)=>{
    try{
        const[result]=await pool.query("SELECT * FROM usuario ORDER BY id DESC");
        console.log("resultado:"+ result[0])
        res.json(result);
    }catch (error){
        return res.status(500).json({
            message:error.message
        })
    }
}
export const getAprendiz= async(req,res)=>{
    try{
        const[result]= await pool.query
        ("SELECT * FROM usuario where id=?",[req.params.id,]);
        if(result.length=== 0){
            return res.status(400).json({message:"aprendiz no found"});
        }
        res.json(result[0]);


    }catch(err){
        return res.status(404).json({message:err.message})
    }
}
/// insetar usario
export const createAprendiz= async(req,res)=>{
    try{
        const {nombre,cedula,celular}=req.body;
        const [result]= await pool.query("INSERT INTO usuario(nombre,cedula,celular) VALUES(?,?,?)",[nombre,cedula,celular]);
         res.json({
            id: result.insertId,
            nombre,
            cedula,
            celular
        });
        
    }catch(error){
        return res.status(404).json({
            message:error.message
        });
    }
}

// editar un aprendiz
export const editAprendiz= async (req,res)=>{
    try{
        const{nombre,cedula,celular} = req.body;
        const[result]= await pool.query("UPDATE usuario SET ? WHERE id=?",
        [req.body,req.params.id] );

        return res.status(200).json(result)
       }catch(error){
        return res.error(404).json({
            message:error.message
        })
    }
}

// metodo elimimar un aprendiz
export const deleteAprendiz = async(req,res) => {
    try{
        const [result]= await pool.query(
            "DELETE FROM usuario WHERE id=?",[req.params.id]);
        return res.status(200).json({message:"usuario eliminado"})
    }catch(error){
        return res.error(500).json({
          message:error.message  
        })
    }
}