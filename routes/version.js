const express = require('express');
const router = express.Router();


const Testing = require('../models/testing');
const TestingEntryCounter = require('../models/testingEntryCounter');

const versionCtrl = require('./controllers/versionCtrl');
const { isEmpty, path, length, equals, pathOr } = require('ramda');

router.get('/getVersion', async (req, res) => {
  try {
    const version = await versionCtrl();
    const { versionId } = version;

    const updateEntryCounter = async (versionId) => {
      const counter = await TestingEntryCounter.find({ versionId });
      if (isEmpty(counter)) {
        await TestingEntryCounter.create({ versionId, counter: 1 });
      } else {
        const newCounter = pathOr(1, [0, 'counter'], counter) + 1;
        await TestingEntryCounter.findOneAndUpdate({ versionId }, { counter: newCounter });
      }
    };

    if (equals('1', versionId)) {
      await updateEntryCounter('1')
    } else {
      await updateEntryCounter('2')
    }
  
    res.send({ ...version });
  } catch(err) {
    res.status(400).send({ error: err });
  }
});

router.get('/stats', async (req, res) => {
  try {
    const calculateStats = async (versionId) => {
      const versionSuccess = await Testing.find({ versionId });
      const versionEntry = await TestingEntryCounter.find({ versionId })

      const versionSuccessCounter = length(versionSuccess);
      const versionEntryCounter = path([0, 'counter'], versionEntry);

      return (versionSuccessCounter / versionEntryCounter) * 100;
    }

    res.send({ 
        stats: {
          version1: await calculateStats('1'),
          version2: await calculateStats('2') 
        } 
    });
  } catch (err) {
    res.status(404).send({ message: err.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const newSuccessEntry = await Testing.create({ versionId: req.body.versionId, success: req.body.success });
     res.send({ newSuccessEntry });
  } catch(err) {
    res.status(400).send({ error: err });
  }

});

module.exports = router;