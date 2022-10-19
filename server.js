const express = require('express');
const fs = require('fs');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 4000;
const connection = require('./config/db');
// var url = require('url');
// var urlObject = url.parse('http://localhost:3000/path/abc.php?id=student&page=12#hash');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

const multer = require('multer');
const upload = multer({ dest: './upload' })

app.get('/api/memberList', (req, res) => {
    console.log('/api/memberList');
    connection.query('select * from member', (err, data) => {
        if (!err) {
            res.send(data);
            console.log(data);
        } else {
            console.log(err);
        }
    })
})

app.get('/api/QnAList', (req, res) => {
    console.log('/api/QnAList');
    connection.query('select * from board', (err, data) => {
        if (!err) {
            res.send(data);
            console.log(data);
        } else {
            console.log(err);
        }
    })
})

app.get('/api/feedback/workoutList/:id&/:date', (req, res) => {
    console.log(req.params)
    const id = req.params.id;
    const date = req.params.date;
    const sql = `select * from workout where id='${id}' and date='${date}';`
    connection.query(sql, (err, data) => {
        if (!err) {
            res.send(data);
            console.log(data);
        } else {
            console.log(err);
        }
    })
})

app.get('/api/feedback/dietList/:id&/:date', (req, res) => {
    console.log(req.params)
    const id = req.params.id;
    const date = req.params.date;
    const sql = `select * from diet where id='${id}' and date='${date}';`
    connection.query(sql, (err, data) => {
        if (!err) {
            res.send(data);
            console.log(data);
        } else {
            console.log(err);
        }
    })
})

var requestData = function (req, res, next) {
    req.requestData = req.body;
    next();
}

app.use(requestData)

app.post('/api/memberView/:id', (req, res) => {
    console.log(req.params)
    const id = req.params.id;
    const sql = `select * from member where id='${id}';`
    connection.query(sql, (err, data) => {
        if (!err) {
            res.send(data);
            console.log(data);
        } else {
            console.log(err);
        }
    })
})

app.post('/api/trainerView/:id', (req, res) => {
    console.log(req.params)
    const id = req.params.id;
    const sql = `select * from trainer where id='${id}';`
    connection.query(sql, (err, data) => {
        if (!err) {
            res.send(data);
            console.log(data);
        } else {
            console.log(err);
        }
    })
})

app.post('/api/QnAView/:seq', (req, res) => {
    console.log(req.params)
    const seq = req.params.seq;
    const sql = `select * from board where seq=${seq};`
    connection.query(sql, (err, data) => {
        if (!err) {
            res.send(data);
            console.log(data);
        } else {
            console.log(err);
        }
    })
})

app.post('/api/memberWrite', (req, res, next) => {
    console.log(req.requestData);
    const name = req.requestData.name;
    const age = req.requestData.age;
    const sex = req.requestData.sex;
    const birth = req.requestData.birth;
    const height = req.requestData.height;
    const weight = req.requestData.weight;
    const period = req.requestData.period;
    const regDate = req.requestData.regDate;
    const endDate = req.requestData.endDate;
    const phone = req.requestData.phone;
    const email = req.requestData.email;
    const sql = `insert into member (name,age,sex,birth,height,weight,period,regDate,endDate,phone,email) values ('${name}','${age}','${sex}','${birth}','${height}','${weight}','${period}','${regDate}','${endDate}','${phone}','${email}');`;
    connection.query(sql, async (err, result) => {
        if (err) throw err;
        console.log("1 record inserted");
        res.send(result);
    })
})

// app.post('/api/scheduleWrite/:schedule', (req, res, next) => {
//     console.log(req.params.schedule);
//     const id = req.params.schedule.id;
//     const date = req.params.schedule.date;
//     const title = req.params.schedule.title;
//     const start = req.params.schedule.start;
//     const end = req.params.schedule.end;
//     const color = req.params.schedule.backgroundColor;
//     const sql = `insert into schedule (id,date,title,start,end,color) values ('${id}','${date}','${title}','${start}','${end}',${color});`;
//     connection.query(sql, async (err, result) => {
//         if (err) throw err;
//         console.log("1 record inserted");
//         res.send(result);
//     })
// })

// app.post('/api/trainerWrite', upload.single('image'), (req, res, next) => {
//     console.log(req.requestData);
//     const age = req.requestData.age;
//     const sex = req.requestData.sex;
//     const birth = req.requestData.birth;
//     const height = req.requestData.height;
//     const weight = req.requestData.weight;
//     const phone = req.requestData.phone;
//     const email = req.requestData.email;
//     const award = req.requestData.award;
//     const career = req.requestData.career;
//     const image = req.file.fileName;
//     const sql = `insert into trainer (age,sex,birth,height,weight,phone,email,award,career,image) values ('${age}','${sex}','${birth}','${height}','${weight}','${phone}','${email}','${award}','${career}','${image}');`;
//     connection.query(sql, async (err, result) => {
//         if (err) throw err;
//         console.log("1 record inserted");
//     })
// })

app.post('/api/feedback/workoutUpdate', (req, res, next) => {
    const seq = req.requestData.seq;
    const feedback = req.requestData.feedback;
    const sql = `update workout set feedback='${feedback}' where seq=${seq}`;
    connection.query(sql, async (err, result) => {
        if (err) throw err;
        console.log("1 record inserted");
        res.send(result);
    })
})

app.post('/api/feedback/dietUpdate', (req, res, next) => {
    const seq = req.requestData.seq;
    const feedback = req.requestData.feedback;
    const sql = `update diet set feedback='${feedback}' where seq=${seq}`;
    connection.query(sql, async (err, result) => {
        if (err) throw err;
        console.log("1 record inserted");
        res.send(result);
    })
})

app.post("/api/search/:searchText", (req, res) => {
    console.log(req.params.searchText);
    const text = req.params.searchText;
    const sql = `select * from member where name like '%${text}%'`
    connection.query(sql, async (err, data) => {
        if (!err) {
            res.send({ searchData: data })
            console.log(data);
        } else {
            console.log(err);
        }
    })
})

app.post('/api/memberUpdate', (req, res, next) => {
    console.log(req.requestData);
    const id = req.requestData.id;
    const name = req.requestData.name;
    const age = req.requestData.age;
    const sex = req.requestData.sex;
    const birth = req.requestData.birth;
    const height = req.requestData.height;
    const weight = req.requestData.weight;
    const regDate = req.requestData.regDate;
    const endDate = req.requestData.endDate;
    const phone = req.requestData.phone;
    const email = req.requestData.email;
    const sql = `update member set name='${name}', age=${age}', sex='${sex}', birth='${birth}', height='${height}', weight='${weight}', regDate='${regDate}', endDate='${endDate}', phone='${phone}', email='${email}' where id='${id}'`;
    connection.query(sql, async (err, result) => {
        if (err) throw err;
        console.log("1 record updated");
        res.send(result);
    })
})

app.use('/image', express.static('./upload'));

app.post('/api/trainerUpdate', upload.single('image'), (req, res, next) => {
    console.log(req.requestData);
    const id = req.requestData.id;
    const name = req.requestData.name;
    const age = req.requestData.age;
    const sex = req.requestData.sex;
    const birth = req.requestData.birth;
    const height = req.requestData.height;
    const weight = req.requestData.weight;
    const award = req.requestData.award;
    const career = req.requestData.career;
    const image = 'http://localhost:4000/image/' + req.requestData.file;
    const sql = `update trainer set name='${name}', age='${age}', sex='${sex}', birth='${birth}', height='${height}', weight='${weight}', award='${award}', career='${career}', image='${image}' where id='${id}'`;
    connection.query(sql, async (err, result) => {
        if (err) throw err;
        console.log("1 record updated");
    })
})

// app.post('/api/trainerUpdate', upload.single('image'), (req, res, next) => {
//     console.log(req.requestData);
//     const id = req.requestData.id;
//     const age = req.requestData.age;
//     const sex = req.requestData.sex;
//     const birth = req.requestData.birth;
//     const height = req.requestData.height;
//     const weight = req.requestData.weight;
//     const phone = req.requestData.phone;
//     const email = req.requestData.email;
//     const award = req.requestData.award;
//     const career = req.requestData.career;
//     const image = req.file.fileName;
//     const sql = `update member set age=${age}', sex='${sex}', birth='${birth}', height='${height}', weight='${weight}', phone='${phone}', email='${email}', award='${award}', career='${career}', image='${image}' where id='${id}'`;
//     connection.query(sql, async (err, result) => {
//         if (err) throw err;
//         console.log("1 record updated");
//     })
// })

app.post('/api/memberDelete/:id', (req, res, next) => {
    const id = req.params.id;
    console.log(id);
    const sql = `delete from member where id=${id}`;
    connection.query(sql, (err, data) => {
        console.log(sql);
        res.send(data);
    })
})

app.delete('/api/trainerDelete/:id', (req, res, next) => {
    const id = req.params.id;
    console.log(id);
    const sql = `delete from trainer where id='${id}'`;
    connection.query(sql, (err, data) => {
        console.log(sql);
        res.send(data);
    })
})

app.post('/api/member/:id&/:password&/:name&/:email&/:phone&/:addr', (req, res, next) => {
    console.log("member");
    console.log(req.params.id);
    console.log(req.params.password);
    console.log(req.params.name);
    console.log(req.params.email);
    console.log(req.params.phone);
    console.log(req.params.addr);
    const id = req.params.id;
    const password = req.params.password;
    const name = req.params.name;
    const email = req.params.email;
    const phone = req.params.phone;
    const addr = req.params.addr;
    const sql = `insert into trainer (id,password,name,email,phone,addr) values('${id}','${password}','${name}','${email}','${phone}','${addr}');`
    connection.query(sql, (err, data) => {
        if (!err) {
            res.send()
        } else {
            console.log(err)
        }
    })
})

app.post('/api/login/:id&/:password', (req, res, next) => {
    const id = req.params.id;
    const password = req.params.password;
    console.log(id, password);
    const sql = `select id,password from trainer where id='${id}' and password='${password}'`;
    connection.query(sql, (err, data) => {
        console.log(sql);
        res.send(data);
    })
})

app.listen(PORT, () => {
    console.log(`Server run : http://localhost:${PORT}/`)
})