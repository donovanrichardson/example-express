const { Hit } = require("../models");

async function getLast() {
  return await Hit.findOne().sort({
        time: -1,
      }); //do i need to add exec here?
}

async function insertNew(){
    const h = await Hit.create({})
    console.log(h);
    return h
}

async function findCount(){
    return await Hit.count()
}

async function doHit(req, res){
    try{
        const prevHit = await getLast()
        const hit = await insertNew()
        const numHits = await findCount()
        res.send({prevHit, hit, numHits})
    }catch(e){
        console.error(e);
        res.status(500).send(e)
    }
}

module.exports = doHit