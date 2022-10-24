import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Paper, TableContainer, Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';


const QnAList = () => {
    const [loadQnAList, setLoadQnaList] = useState([]);

    const resQnAList = async () => {
        const loadQnAList = await axios.get('/api/QnAList');
        console.log(loadQnAList.data);
        setLoadQnaList(loadQnAList.data);
    }

    useEffect(() => {
        resQnAList()
    }, [])

    const cellList = ["번호", "제목", "작성자", "등록일", "답변"]

    const list = loadQnAList.map((data, index) => (
        <TableRow key={index}>
            <TableCell align='left'>{index + 1}</TableCell>
            <TableCell align='left'><Link to={`/QnAView/${data.seq}`}>{data.title}</Link></TableCell>
            <TableCell align='left'>{data.writer}</TableCell>
            <TableCell align='left'>{data.regDate}</TableCell>
            <TableCell align='left'>{data.answerCheck}</TableCell>
        </TableRow>
    ))

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        {cellList.map(cell => {
                            return <TableCell align='left'>{cell}</TableCell>
                        })}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {list}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default QnAList;