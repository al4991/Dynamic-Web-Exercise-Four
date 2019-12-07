const express = require('express');
const path = require("path"); 
const router = express.Router(); 
const blogPosts = require('../../firebase.js');

const sampleData = {  
    title: 'Just a prank',
    text: 'My name Yujie',
    author: 'Yujie Qiu'
};

router.get('/', (req, res) => {
    res.send('Welcome to /');
});

router.get('/getDoc', (req, res) => {
    blogPosts.doc('eC3r3l0IlIFAJRMUM0at')
    .get()
    .then(doc => {
        if (doc) {
            res.send(doc.data()); 
        }
        else {
            res.send(' something went wrong');
        }
    })
    .catch(err => {
        console.log('error!', err);
    })
});

router.get('/writeDoc', (req, res) => {
    blogPosts.doc('manualEntry')
    .set(sampleData)
    .then(() => res.send('okieDokie'))
    .catch(err => {
        console.log('error!', err);
    })
})

router.get('/getSampleDoc', (req, res) => {
    blogPosts.doc('manualEntry')
    .get()
    .then(doc => {
        if (doc) {
            res.send(doc.data()); 
        }
        else {
            res.send('oof something went wrong');
        }
    })
    .catch(err => {
        console.log('error!', err);
    })
});

router.get('/submit', (req, res) => {
    blogPosts
    .add({
        title: req.query.title ? req.query.title : '', 
        text: req.query.text ? req.query.text : '', 
        author: req.query.author ? req.query.author : ''
    })
    .then(ref => {
        console.log(ref); 
        res.send(ref)
    })
    .catch(err => res.send(err)); 
}); 

module.exports = router; 

