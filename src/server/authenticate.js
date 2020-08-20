import { v4 as uuidv4 } from 'uuid';
import md5 from 'md5';
import { connectDB } from './connect-db';

const authenticationTokens = [];

async function assembleUserState(user){
    let db = await connectDB();

    let tasks = await db.collection(`tasks`).find({owner:user.id}).toArray();
    let comments = await db.collection(`comments`).find({task:{$in:tasks.map(task=>task.id)}}).toArray();
    let users = [
        await db.collection(`users`).findOne({id:user.id}),
        ...await db.collection(`users`).find({id:{$in:[...tasks,comments].map(x=>x.owner)}}).toArray()
    ];

    return {
        session:{authenticated:`AUTHENTICATED`,id:user.id},
        groups:await db.collection(`groups`).find({owner:user.id}).toArray(),
        tasks,
        users,
        comments
    };
}

export const authenticationRoute = app => {
    app.post('/authenticate',async (req, res)=>{
        let {username, password} =req.body;
        let db = await connectDB();
        let collection = db.collection(`users`);

        let user = awaitcollection.findOne({name:username});

        if(!user) {return res.status(500).send("User not found")
    };

    let hash = md5(password);
    let passwordCorrect = hash === user.passwordHarsh;

    if (!passwordCorrect) {
        return res.status(500).send("Password incorrect");
    }
    let token = uuidv4();

    authenticationTokens.push({
        token,
        userID: user.id
    })

    let state =  await assembleUserState(user);

    res.send({token, state});
    })
}