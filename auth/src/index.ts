
import express ,{Request,Response} from 'express';

import 'express-async-errors'
const app  = express();
app.set('trust proxy',true); // to make sure that you trust nginx ingress proxy
app.get('/api/users/jerry', (req:Request, res:Response)=>{
    res.send('hello mo2men & walid and dabos and sara and eman from the cloud <3 ')
})
app.get('/api/users/zeyed', (req:Request, res:Response)=>{
    res.send('zeyed 7abeb 2lbe')
})

app.listen(3000,()=>{
    console.log("listening on port 4444....    ")
})
