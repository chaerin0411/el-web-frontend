import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const QnAList = (props) => {

    const list = props.qnaList.map((data, index) => (
        <TableRow key={index}>
            <TableCell align='right'>{index}</TableCell>
            <TableCell align='right'><a href={`/api/QnAView/${data.seq}`}>{data.title}</a></TableCell>
            <TableCell align='right'>{data.writer}</TableCell>
            <TableCell align='right'>{data.regDate}</TableCell>
            <TableCell align='right'>{data.answer}</TableCell>
        </TableRow>
    )
    )

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell align="right">번호</TableCell>
                        <TableCell align="right">제목</TableCell>
                        <TableCell align="right">작성자</TableCell>
                        <TableCell align="right">등록일</TableCell>
                        <TableCell align="right">답변</TableCell>
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