import React from 'react';
import classes from './Pagination.module.css'

type PropsType = {
    totalUsersCount: number
    pageSize: number
    onPageChanged: (pageNumber: number) => void
    currentPage: number
}

export const Pagination = (props: PropsType) => {
    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            {
                pages.map(p => <span
                    onClick={() => props.onPageChanged(p)}
                    className={props.currentPage === p ? classes.selectedPage : ''}>{p}</span>)
            }
        </div>
    )
}