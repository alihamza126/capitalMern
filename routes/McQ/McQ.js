const mongoose = require('mongoose');
const wrapAsync = require('../../utils/wrapAsync.js');
const MCQ = require('../../models/mcq.js');
const userModel = require('../../models/user.js');
const { isBuyCourse } = require('../../utils/middleware.js');
const router = require('express').Router();



// Add all MCQs
router.post('/add', (req, res) => {
    const mcq = new MCQ(req.body);
    mcq.save().then(() => {
        res.send(mcq);
    }).catch((err) => {
        res.send(err);
    })
});


router.post('/get', wrapAsync(async (req, res) => {
    const course = req.body.course?.trim();
    const subject = req.body.subject?.trim();
    const chapter = req.body.chapter?.trim();
    const topic = req.body.topic?.trim();
    const category = req.body.catagory?.trim(); // past, normal, solved, unsolved
    const userId = req.body?.userId;
    const limit = 100;

    try {
        let mcqs = [];

        if (subject !== 'mock') {
            let queryCriteria = { course, subject, chapter };
            // Only add the topic to query criteria if the subject is not 'english' or 'logic'
            if (subject !== 'english' && subject !== 'logic') {
                queryCriteria.topic = topic;
            }

            if (category === 'past') {
                queryCriteria.category = category;
                mcqs = await MCQ.find(queryCriteria).limit(limit);

            } else if (category === 'unsolved') {
                const userSolvedMCQs = await userModel.findById(userId).select(['solved_mcqs', 'wrong_mcqs']);
                const solvedMCQIds = userSolvedMCQs.solved_mcqs;
                const wrongMCQIds = userSolvedMCQs.wrong_mcqs;

                queryCriteria._id = { $nin: [...solvedMCQIds, ...wrongMCQIds] };
                mcqs = await MCQ.find(queryCriteria).limit(limit);

            } else if (category === 'solved') {
                try {
                    const userSolvedId = await userModel.findById(userId).select('solved_mcqs');
                    queryCriteria._id = { $in: userSolvedId.solved_mcqs };
                    mcqs = await MCQ.find(queryCriteria).limit(limit);
                } catch (error) {
                    return res.status(201).json(mcqs);
                }
            }
            else if (category === 'wrong') {
                try {
                    const userWrongId = await userModel.findById(userId).select('wrong_mcqs');
                    queryCriteria._id = { $in: userWrongId.wrong_mcqs };
                    mcqs = await MCQ.find(queryCriteria).limit(limit);
                } catch (error) {
                    return res.status(201).json(mcqs);
                }
            }
            else if (category === 'all') {
                try {
                    mcqs = await MCQ.find(queryCriteria).limit(limit);
                } catch (error) {
                    return res.status(201).json(mcqs);
                }
            }
        }
        //for mock test
        else if (subject === 'mock') {
            let queryCriteria = { course };
            const sampleSize = 200; // Number of random documents to retrieve

            if (category === 'past') {
                queryCriteria.category = category;
                mcqs = await MCQ.aggregate([
                    { $match: queryCriteria },
                    { $sample: { size: sampleSize } }
                ]);

            } else if (category === 'solved') {
                try {
                    const userSolvedId = await userModel.findById(userId).select('solved_mcqs');
                    queryCriteria._id = { $in: userSolvedId.solved_mcqs };
                    mcqs = await MCQ.aggregate([
                        { $match: queryCriteria },
                        { $sample: { size: sampleSize } }
                    ]);
                } catch (error) {
                    return res.status(201).json(mcqs);
                }
            }
            else if (category === 'unsolved') {
                const userSolvedMCQs = await userModel.findById(userId).select(['solved_mcqs', 'wrong_mcqs']);
                const solvedMCQIds = userSolvedMCQs.solved_mcqs;
                const wrongMCQIds = userSolvedMCQs.wrong_mcqs;

                queryCriteria._id = { $nin: [...solvedMCQIds, ...wrongMCQIds] };
                mcqs = await MCQ.aggregate([
                    { $match: queryCriteria },
                    { $sample: { size: sampleSize } }
                ]);
            }
            else if (category === 'wrong') {
                try {
                    const userWrongId = await userModel.findById(userId).select('wrong_mcqs');
                    queryCriteria._id = { $in: userWrongId.wrong_mcqs };
                    mcqs = await MCQ.aggregate([
                        { $match: queryCriteria },
                        { $sample: { size: sampleSize } }
                    ]);
                } catch (error) {
                    return res.status(201).json(mcqs);
                }
            }
            else if (category === 'all') {
                try {
                    mcqs = await MCQ.aggregate([
                        { $match: queryCriteria },
                        { $sample: { size: sampleSize } }
                    ]);
                } catch (error) {
                    return res.status(201).json(mcqs);
                }
            }

        }

        res.json(mcqs);
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
}));


//delete mcqs data form model database
router.delete('/delete', wrapAsync(async (req, res) => {
    const ids = req.body.ids; // Assuming the request body contains an array of IDs
    if (!Array.isArray(ids)) {
        return res.status(400).json({ message: 'Invalid input: ids should be an array' });
    }
    try {
        const result = await MCQ.deleteMany({ _id: { $in: ids } });
        if (result.deletedCount === 0) {
            return res.status(404).json({ message: 'No MCQs found to delete' });
        }
        res.json({ message: `${result.deletedCount} MCQs deleted` });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}));

//update mcq data
router.put('/update', wrapAsync(async (req, res) => {
    try {
        await MCQ.findByIdAndUpdate(req.body.id,
            {
                question: req.body.formData.question,
                options: req.body.formData.options,
                correctOption: req.body.formData.correctOption,
                difficulty: req.body.formData.difficulty,
                subject: req.body.formData.subj,
                chapter: req.body.formData.chap,
                category: req.body.formData.category,
                topic: req.body.formData.topic,
                course: req.body.formData.course,
                info: req.body.formData.info,
                explain: req.body.formData.explain,
                imageUrl: req.body.formData.imageUrl,
            },
        )
        res.send("updated");
    } catch (error) {
        res.send(error)
    }
}));

//get pages mcqs
router.get('/', wrapAsync(async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = 500;
    try {
        const mcqs = await MCQ.find()
            .sort({ topic: -1 })  // Static sort order: descending by createdAt
            .skip((page - 1) * limit)
            .limit(limit);
        const totalCount = await MCQ.countDocuments();
        res.json({
            mcqs,
            totalPages: Math.ceil(totalCount / limit),
            currentPage: page
        });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}));


router.put('/solved', wrapAsync(async (req, res) => {
    const correctMcqIds = req.body?.correctMcq || [];
    const wrongMcqIds = req.body?.wrongMcq || [];
    const userId = req.body?.userId;

    if (userId) {
        try {
            // First update: Pull correct MCQs from wrong_mcqs and wrong MCQs from solved_mcqs arrays
            const pullResult = await userModel.updateOne(
                { _id: userId },
                {
                    $pull: {
                        wrong_mcqs: { $in: correctMcqIds },
                        solved_mcqs: { $in: wrongMcqIds }
                    }
                }
            );

            if (pullResult.matchedCount === 0) {
                return res.status(404).json({ message: 'User not found' });
            }

            // Second update: Add correct MCQs to solved_mcqs and wrong MCQs to wrong_mcqs
            const addToSetResult = await userModel.updateOne(
                { _id: userId },
                {
                    $addToSet: {
                        solved_mcqs: { $each: correctMcqIds },
                        wrong_mcqs: { $each: wrongMcqIds }
                    }
                }
            );

            if (addToSetResult.nModified === 0) {
                return res.status(404).json({ message: 'No changes made' });
            }

            res.json(addToSetResult);
        } catch (err) {
            res.status(500).json({ message: 'Internal Server Error', error: err });
        }
    } else {
        res.status(401).json({ message: 'User Id validation Failed' });
    }
}));

//
router.post('/cout', wrapAsync(async (req, res) => {
    try {
        const course = req.body.course?.trim();
        const subject = req.body.subject?.trim();
        const chapter = req.body.chapter?.trim();
        const category = req.body.catagory?.trim(); // past, normal, solved, unsolved
        const userId = req.body?.userId; // userId
        const topics = req.body?.topic; // array of topics

        let matchCriteria = {
            course: course,
            subject: subject,
            chapter: chapter,
        };

        // Only add the topics condition if the subject is not 'english' or 'logic'
        if (subject !== 'mock') {
            if (subject !== 'english' && subject !== 'logic') {
                matchCriteria.topic = {
                    $in: topics
                };
            }

            // Add category condition based on category type
            if (category === "past") {
                matchCriteria.category = category;

            } else if (category === "solved") {
                const userSolvedMCQs = await userModel.findById(userId).select('solved_mcqs');
                const solvedMCQIds = userSolvedMCQs.solved_mcqs;
                // Add condition to match only solved MCQs
                matchCriteria._id = { $in: solvedMCQIds };

            } else if (category === "unsolved") {
                const userSolvedMCQs = await userModel.findById(userId).select(['solved_mcqs', 'wrong_mcqs']);
                const solvedMCQIds = userSolvedMCQs.solved_mcqs;
                const wrongMCQIds = userSolvedMCQs.wrong_mcqs;
                // Add condition to exclude solved MCQs
                matchCriteria._id = { $nin: [...solvedMCQIds, ...wrongMCQIds] };
            }
            else if (category === "wrong") {
                const userWrongMCQs = await userModel.findById(userId).select('wrong_mcqs');
                const wrongMCQIds = userWrongMCQs.wrong_mcqs;
                // Add condition to exclude solved MCQs
                matchCriteria._id = { $in: wrongMCQIds };
            }
            else if (category === "all") {
                // const userWrongMCQs = await userModel.findById(userId).select('wrong_mcqs');
                // const wrongMCQIds = userWrongMCQs.wrong_mcqs;
                // // Add condition to exclude solved MCQs
                // matchCriteria._id = { $in: wrongMCQIds };
            }
        }

        // ================================To check mock counts ==============
        else if (subject === 'mock') {
            matchCriteria = {
                course: course,
            }

            if (category === "past") {
                matchCriteria.category = category;

            } else if (category === "solved") {
                const userSolvedMCQs = await userModel.findById(userId).select('solved_mcqs');
                const solvedMCQIds = userSolvedMCQs.solved_mcqs;
                // Add condition to match only solved MCQs
                matchCriteria._id = { $in: solvedMCQIds };
            } else if (category === "unsolved") {
                const userSolvedMCQs = await userModel.findById(userId).select(['solved_mcqs', 'wrong_mcqs']);
                const solvedMCQIds = userSolvedMCQs.solved_mcqs;
                const wrongMCQIds = userSolvedMCQs.wrong_mcqs;
                // Add condition to exclude solved MCQs
                matchCriteria._id = { $nin: [...solvedMCQIds, ...wrongMCQIds] };
            } else if (category === "wrong") {
                const userWrongMCQs = await userModel.findById(userId).select('wrong_mcqs');
                const wrongMCQIds = userWrongMCQs.wrong_mcqs;
                // Add condition to exclude solved MCQs
                matchCriteria._id = { $in: wrongMCQIds };
            } else if (category === "all") {
                //do nothing here
            }

        }


        // ==================Aggerate counts==================
        // Aggregate data from MCQ collection
        const data = await MCQ.aggregate([
            {
                $match: matchCriteria
            },
            {
                $group: {
                    _id: subject !== 'english' && subject !== 'logic' ? "$topic" : null,
                    count: { $sum: 1 }
                }
            }
        ]);
        
        // Convert aggregated data to a dictionary for easier lookup
        const topicCounts = data.reduce((acc, item) => {
            if (subject !== 'english' && subject !== 'logic') {
                acc[item._id] = item.count;
            } else {
                acc.total = (acc.total || 0) + item.count;
            }
            return acc;
        }, {});

        // Prepare the final result ensuring all topics are included
        const result = subject !== 'english' && subject !== 'logic'
            ? topics.map(topic => ({
                topic,
                count: topicCounts[topic] || 0
            }))
            : [{ subject, count: topicCounts.total || 0 }];

            res.json(result);
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
}));


// ===============================stats====================
router.post('/stats', wrapAsync(async (req, res) => {
    const userId = req.body?.userId;

    try {
        // Fetch user's solved and wrong MCQs
        const user = await userModel.findById(userId).select('solved_mcqs wrong_mcqs');
        const solvedMCQIds = user.solved_mcqs;
        const wrongMCQIds = user.wrong_mcqs;

        // Calculate lengths
        const solvedLength = solvedMCQIds.length;
        const wrongLength = wrongMCQIds.length;

        // Aggregate unique subjects and their counts from solved MCQs
        const solvedSubjectCounts = await MCQ.aggregate([
            { $match: { _id: { $in: solvedMCQIds } } },
            { $group: { _id: "$subject", count: { $sum: 1 } } }
        ]);

        // Aggregate unique subjects and their counts from wrong MCQs
        const wrongSubjectCounts = await MCQ.aggregate([
            { $match: { _id: { $in: wrongMCQIds } } },
            { $group: { _id: "$subject", count: { $sum: 1 } } }
        ]);

        // Aggregate the total count of MCQs per subject
        const totalSubjectCounts = await MCQ.aggregate([
            { $group: { _id: "$subject", totalCount: { $sum: 1 } } }
        ]);

        // Merge the counts into a single object for each subject
        const subjectCounts = {};

        // Initialize subject counts with total MCQ counts
        totalSubjectCounts.forEach(({ _id, totalCount }) => {
            subjectCounts[_id] = { subject: _id, correctCount: 0, wrongCount: 0, totalCount };
        });

        // Add correct counts to the respective subjects
        solvedSubjectCounts.forEach(({ _id, count }) => {
            if (!subjectCounts[_id]) {
                subjectCounts[_id] = { subject: _id, correctCount: 0, wrongCount: 0, totalCount: 0 };
            }
            subjectCounts[_id].correctCount += count;
        });

        // Add wrong counts to the respective subjects
        wrongSubjectCounts.forEach(({ _id, count }) => {
            if (!subjectCounts[_id]) {
                subjectCounts[_id] = { subject: _id, correctCount: 0, wrongCount: 0, totalCount: 0 };
            }
            subjectCounts[_id].wrongCount += count;
        });

        // Convert the object to an array
        const combinedSubjectCounts = Object.values(subjectCounts);

        // Prepare the final result
        const result = {
            solvedLength,
            wrongLength,
            combinedSubjectCounts
        };

        res.json(result);
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
}));


//mcq group by topics 
router.get('/topics', wrapAsync(async (req, res) => {
    course = 'nums';
    const data = await MCQ.aggregate([
        {
            $group: {
                _id: {
                    topic: "$topic",
                    chapter: "$chapter",
                    subject: "$subject"
                }
            }
        },
        {
            $project: {
                _id: 0,
                topic: "$_id.topic",
                chapter: "$_id.chapter",
                subject: "$_id.subject"
            }
        }
    ])

    res.send("okkk")

}));






module.exports = router;