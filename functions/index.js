'use strict';
const functions = require('firebase-functions');
const admin = require('firebase-admin');
const storage = require('@google-cloud/storage')();
const Busboy = require('busboy');
const path = require('path');
const os = require('os');
const fs = require('fs');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello from Firebase!");
});

exports.addMemo = functions.https.onRequest((req, res) => {
  if (req.method !== 'POST') {
    res.status(405).send('Method Not Allowed');
    return;
  }
  if (!req.body || !req.body.title) {
    res.status(400).send('Request Body Not Found');
    return;
  }
  const memo = {
    'title': req.body.title,
    'description': req.body.description || 'unknown',
    'platforms': req.body.platforms || [],
    'million': req.body.million || false,
    'releasedAt': req.body.releasedAt ? new Date(req.body.releasedAt) : new Date()
  };
  console.log(memo);

  admin.firestore().collection('memos')
    .add(memo)
    // FirebaseFirestore.DocumentReference
    .then(docRef => {
      console.log(docRef);
      // return res.status(200).send(docRef.id);
      return docRef.get();
    })
    // firebase.firestore.DocumentSnapshot
    .then(snapshot => {
      console.log(snapshot);
      console.log(snapshot.id);
      if (snapshot.exists) {
        return res.status(200).send(snapshot.data());
      }
      return res.status(400).send("Data Not Found !!");
    })
    .catch(err => {
      console.error(err);
      return res.status(500).send('Error adding document:', err)
    });
});

exports.fileupload = functions.https.onRequest((req, res) => {
  if (req.method !== 'POST') {
    res.status(405).send('Method Not Allowed');
    return;
  }

  const busboy = new Busboy({ headers: req.headers });
  // This object will accumulate all the uploaded files, keyed by their name.
  const uploads = {};
  const allowMimeTypes = ['image/png', 'image/jpg'];
  // file upload bucket
  const bucket = storage.bucket('gs://project*********.appspot.com');

  // This callback will be invoked for each file uploaded.
  busboy.on('file', (fieldname, file, filename, encoding, mimetype) => {
    if (!allowMimeTypes.includes(mimetype.toLocaleLowerCase())) {
      console.warn('disallow mimetype: ' + mimetype);
      return;
    }
    // Note that os.tmpdir() is an in-memory file system, so should
    // only be used for files small enough to fit in memory.
    const tmpdir = os.tmpdir();
    const filepath = path.join(tmpdir, filename);
    file.pipe(fs.createWriteStream(filepath));

    file.on('end', () => {
      console.log('upload file: ' + filepath + ' metadata: ' + mimetype);
      uploads[fieldname] = { filepath, mimetype };
      bucket.upload(filepath, { destination: `upload_images/${path.parse(filepath).base}`, metadata: { contentType: mimetype } })
        .then(() => {
          console.log('file upload success: ' + filepath);
          return new Promise((resolve, reject) => {
            fs.unlink(filepath, (err) => {
              if (err) {
                reject(err);
              }
              resolve();
            });
          });
        })
        .catch(err => {
          console.error(err);
          // TODO error handling
        });
    });
  });

  // This callback will be invoked after all uploaded files are saved.
  busboy.on('finish', () => {
    if (Object.keys(uploads).length === 0) {
      res.status(200).send('success: 0 file upload');
      return;
    }
    console.log('finish : ' + JSON.stringify(uploads));
    res.status(200).send(JSON.stringify(uploads));
  });

  // The raw bytes of the upload will be in req.rawBody. Send it to
  // busboy, and get a callback when it's finished.
  busboy.end(req.rawBody);
});
