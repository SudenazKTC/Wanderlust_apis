const express= require("express");
const app =express();

const path=require("path");
const router=express.Router();

router.get("/", function(req,res){
    res.set({
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
    });
    res.sendFile(path.join(__dirname+"/api/ulkeler.json"));
});

app.use("/", router);
app.listen(process.env.port || 3000);
console.log("Helloo");