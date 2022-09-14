const { Router } = require(`express`)
const router = Router()
const Contenedor = require('../class/class')

router.get(`/`, async (req , res)=>{
    Contenedor.getAll().then(r =>res.json(r))})

router.get(`/:id`, (req , res)=>{
    const id = Number(req.params.id)
    Contenedor.getById(id).then(i => res.status(200).json(i))
})

router.post(`/`, (req , res )=>{
    const { title, price, thumbnail } = req.body
    Contenedor.postProduct({ title, price, thumbnail }).then(i => res.send({msg:`El id del producto agregado es: ${i.id}`}))
})

router.put(`/:id` ,(req , res)=>{
    const { title, price, thumbnail } = req.body
    const id = Number(req.params.id)
    Contenedor.putProduct(id, { title, price, thumbnail }).then(i => res.json(i))
   
})

router.delete(`/:id` ,(req , res)=>{
    const id = Number(req.params.id)
    Contenedor.deleteById(id).then(i => res.json(i))
})






module.exports = router