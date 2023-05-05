const {RateModel} = require('../model/model')

const RateLimitor = async (req, res, next) => {
    try {
        const ip =  req.ip;
        //console.log(ip)
        const data = await RateModel.findOne({ip});
        let rem =0;
        if (data) {
            rem = data.remainingreq
        }
        if (data && data.remainingreq > 0) {
            await  RateModel.findOneAndUpdate({ ip }, { $set: { remainingreq: rem - 1 } })
            next()
        }
        else if (data && data.remainingreq <= 0) {

            const diff = Math.floor(new Date().getTime() / 1000) - data.time
            console.log(diff)
            if (diff >= 59) {
                await RateModel.findOneAndUpdate({ ip }, { $set: { remainingreq: 9, time: Math.floor(new Date().getTime() / 1000) } })
                next()
            } else {
                await RateModel.findOneAndUpdate({ ip }, { $set: { remainingreq: 0, time: Math.floor(new Date().getTime() / 1000) } })
                res.status(403).send({ "msg": "blocked for 1 minute" })
            }
        }
        else {
            const date = new Date();
            const time = Math.floor(date.getTime() / 1000)
            const payload = new RateModel({ ip, time })
            await payload.save()
            next()
        }
    }
    catch (err) {
        console.log(err);
        res.status(500).send("server side error")
    }
}

module.exports = {RateLimitor}