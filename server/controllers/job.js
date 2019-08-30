const express = require('express');
const Job = require('../models/job');
var router = express.Router();
router.get("/", function (req, res) {
    Job.find().then(jobs => res.send(jobs))
})

router.post("/", function (req, res) {
    Jobs.create(req.body.job, (err, job) => {
        if (!err){
            job.master.id = req.user._id;
            job.master.username = req.user.username;
            job.save()
            res.statusCode(200).send({ "err": null, item: job})
        } else{
            res.statusCode(500).send({"err": err})
        }
    })
})

router.put("/:jobId", function (req, res) {
    Job.findByIdAndUpdate(req.params.jobId, req.body.job, function (err, updatedJob) {
        if (!err) {
            res.statusCode(200).send({ "err": null, item: updatedJob })
        } else {
            res.statusCode(500).send({ "err": err })
        }
    });
})
    
router.put("/:jobId", function (req, res) {
    Job.findByIdAndUpdate(req.params.jobId, req.body.job, function (err, updatedJob) {
        if (!err) {
            res.statusCode(200).send({ "err": null, item: updatedJob })
        } else {
            res.statusCode(500).send({ "err": err })
        }
    });
})
    
module.exports = router;