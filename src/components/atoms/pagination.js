import React from 'react';
import ICON from "../../ressources/utils/icon.utils";

function Pagination({itemPerPage, totalItems, changePage, currentPage}) {

    const page_numbers = []

    for (let i = 1; i <= Math.ceil(totalItems / itemPerPage); i++) page_numbers.push(i)

    return (
        <div className="my-3">
            {totalItems > itemPerPage ? (
                <nav>
                    <ul className="pagination justify-content-end">
                        <li className={`page-item ${currentPage === 1 && 'disabled'}`}>
                            <button type="button" className="page-link" onClick={() => changePage(currentPage - 1)}>
                                {ICON.NAV_LEFT}
                            </button>
                        </li>
                        {
                            page_numbers.map(number => (
                                    <li className={`page-item ${currentPage === number && 'active'}`} key={number}>
                                        <button type="button" onClick={() => changePage(number)}
                                                className="page-link">{number}</button>
                                    </li>
                                )
                            )
                        }

                        <li className={`page-item ${currentPage === page_numbers.length && 'disabled'}`}>
                            <button type="button" className="page-link" onClick={() => changePage(currentPage + 1)}>
                                {ICON.NAV_RIGHT}
                            </button>
                        </li>
                    </ul>
                </nav>
            ) : null}


        </div>
    );

}

export default Pagination;
