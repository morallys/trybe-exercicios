const express = require('express');
const fs = require('fs');
const {
  validateToken,
  validateName,
  validateAge,
  validateTalk,
  validateWatchedAt,
  validateRate,
} = require('../services/Validate');

const router = express.Router();

const speakers = require('../talker.json');

const pathTalker = './talker.json';

router.get('/talker', (_req, res) => {
  //
  const speakersFile = fs.readFileSync(pathTalker, 'utf-8');
  const speakersFileParse = JSON.parse(speakersFile);

  if (speakersFileParse.length === 0) return res.status(200).json([]);

  res.status(200).json(speakers);
});

router.get('/talker/search', validateToken, (req, res) => {
  //
  const speakersFile = fs.readFileSync(pathTalker, 'utf-8');
  const speakersFileParse = JSON.parse(speakersFile);
  const { q } = req.query;

  if (!q || q === '') return res.status(200).json(speakersFileParse);

  const filteredSpeakers = speakersFileParse.filter((talker) => talker.name.includes(q));

  if (filteredSpeakers.length === 0) return res.status(200).json(filteredSpeakers);

  res.status(200).json(filteredSpeakers);
});

router.get('/talker/:id', (req, res) => {
  //
  const speakersFile = fs.readFileSync(pathTalker, 'utf-8');
  const speakersFileParse = JSON.parse(speakersFile);

  const { id } = req.params;

  const findSpeaker = speakersFileParse.find((s) => s.id === parseInt(id, 10));

  if (!findSpeaker) {
    return res
      .status(404)
      .json({ message: 'Pessoa palestrante não encontrada' });
  }

  res.status(200).json(findSpeaker);
});

router.post(
  '/talker',
  validateToken,
  validateName,
  validateAge,
  validateTalk,
  validateWatchedAt,
  validateRate,
  (req, res) => {
    const speakersFile = fs.readFileSync(pathTalker, 'utf-8');
    const speakersFileParse = JSON.parse(speakersFile);

    const { name, age, talk } = req.body;
    const id = speakersFileParse.length + 1;

    const talker = {
      id,
      name,
      age,
      talk,
    };
    speakersFileParse.push(talker);

    fs.writeFileSync(pathTalker, JSON.stringify(speakersFileParse));

    res.status(201).json(talker);
  },
);

router.put(
  '/talker/:id',
  validateToken,
  validateName,
  validateAge,
  validateTalk,
  validateWatchedAt,
  validateRate,
  (req, res) => {
    //
    const speakersFile = fs.readFileSync(pathTalker, 'utf-8');
    const speakersFileParse = JSON.parse(speakersFile);

    const { id } = req.params;

    const speakerIndex = speakersFileParse.findIndex((s) => s.id === parseInt(id, 10));

    speakersFileParse[speakerIndex] = {
      ...speakersFileParse[speakerIndex], ...req.body };

    fs.writeFileSync(pathTalker, JSON.stringify(speakersFileParse));

    res.status(200).json(speakersFileParse[speakerIndex]);
  },
);

router.delete('/talker/:id', validateToken, (req, res) => {
  const speakersFile = fs.readFileSync(pathTalker, 'utf-8');
  const speakersFileParse = JSON.parse(speakersFile);

  const { id } = req.params;

  const speakerIndex = speakersFileParse.findIndex((s) => s.id === parseInt(id, 10));

  speakersFileParse.splice(speakerIndex, 1);

  fs.writeFileSync(pathTalker, JSON.stringify(speakersFileParse));

  res.status(204).end();
});

module.exports = router;
