import React from 'react';
import '../bootstrap/phoenix-v1/assets/css/theme.css';

const Building = () => {
    return (
        <div className="content">
            <nav className="mb-3" aria-label="breadcrumb">
                <ol className="breadcrumb mb-0">
                    <li className="breadcrumb-item"><a href="#!">Pages</a></li>
                    <li className="breadcrumb-item active">Buildings</li>
                </ol>
            </nav>
            <h2 className="text-bold text-body-emphasis mb-5">Buildings</h2>
            <div id="buildings"
                data-list='{"valueNames":["building","mobile_number","city","last_active","joined"],"page":10,"pagination":true}'>
                <div className="row align-items-center justify-content-between g-3 mb-4">
                    <div className="col col-auto">
                        <div className="search-box">
                            <form className="position-relative">
                                <input className="form-control search-input search" type="search" placeholder="Search buildings"
                                    aria-label="Search" />
                                <span className="fas fa-search search-box-icon"></span>

                            </form>
                        </div>
                    </div>
                    <div className="col-auto">
                        <div className="d-flex align-items-center">
                            <button className="btn btn-primary"><span className="fas fa-plus me-2"></span>Add building</button>
                        </div>
                    </div>
                </div>
                <div className="mx-n4 mx-lg-n6 px-4 px-lg-6 mb-9 bg-body-emphasis border-y mt-2 position-relative top-1">
                    <div className="table-responsive scrollbar ms-n1 ps-1">
                        <table className="table table-sm fs-9 mb-0">
                            <thead>
                                <tr>
                                    <th className="white-space-nowrap fs-9 align-middle ps-0">
                                        <div className="form-check mb-0 fs-8">
                                            <input className="form-check-input" id="checkbox-bulk-buildings-select" type="checkbox"
                                                data-bulk-select='{"body":"buildings-table-body"}' />
                                        </div>
                                    </th>
                                    <th className="sort align-middle" scope="col" data-sort="building" style="width:50%; min-width:200px;">
                                        BUILDING</th>
                                    <th className="sort align-middle" scope="col" data-sort="city" style="width:50%;">ADDRESS</th>
                                </tr>
                            </thead>
                            <tbody className="list" id="buildings-table-body">
                                <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                                    <td className="fs-9 align-middle ps-0 py-3">
                                        <div className="form-check mb-0 fs-8">
                                            <input className="form-check-input" type="checkbox"
                                                data-bulk-select-row='{"building": Carry Anna","address":"Budapest"}' />
                                        </div>
                                    </td>
                                    <td className="customer align-middle white-space-nowrap"><a
                                        className="d-flex align-items-center text-body text-hover-1000" href="#!">
                                        <h6 className="mb-0 ms-0 fw-semibold">Carry Anna</h6>
                                        </a>
                                    </td>
                               </tr>
                            </tbody>
                            <td className="city align-middle white-space-nowrap text-body">Budapest</td>
                        </table>
                    <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                        <td className="fs-9 align-middle ps-0 py-3">
                            <div className="form-check mb-0 fs-8">
                                <input className="form-check-input" type="checkbox"
                                    data-bulk-select-row='{"building":"{"avatar":"/team/avatar.webp","name":"Milind Mikuja","placeholder":true},"mobile":"+8801564768976","city":"Manchester","lastActive":"6 hours ago","joined":"Dec 9, 2:28 PM"}' />
                            </div>
                        </td>
                        <td className="customer align-middle white-space-nowrap"><a
                            className="d-flex align-items-center text-body text-hover-1000" href="#!">
                            <h6 className="mb-0 ms-0 fw-semibold">Milind Mikuja</h6>
                        </a></td>
                        <td className="city align-middle white-space-nowrap text-body">Manchester</td>
                    </tr>
                    <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                        <td className="fs-9 align-middle ps-0 py-3">
                            <div className="form-check mb-0 fs-8">
                                <input className="form-check-input" type="checkbox"
                                    data-bulk-select-row='{"building":"{"avatar":"/team/35.webp","name":"Stanly Drinkwater"},"mobile":"+78675436798","city":"Smallville","lastActive":"43 min ago","joined":"Dec 4, 12:56 PM"}' />
                            </div>
                        </td>
                        <td className="customer align-middle white-space-nowrap"><a
                            className="d-flex align-items-center text-body text-hover-1000" href="#!">
                            <h6 className="mb-0 ms-0 fw-semibold">Stanly Drinkwater</h6>
                        </a></td>
                        <td className="city align-middle white-space-nowrap text-body">Smallville</td>
                    </tr>
                    <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                        <td className="fs-9 align-middle ps-0 py-3">
                            <div className="form-check mb-0 fs-8">
                                <input className="form-check-input" type="checkbox"
                                    data-bulk-select-row='{"building":"{"avatar":"/team/57.webp","name":"Josef Stravinsky"},"mobile":"+118796567894","city":"Metropolis","lastActive":"2 hours ago","joined":"Dec 1,  4:07 AM"}' />
                            </div>
                        </td>
                        <td className="customer align-middle white-space-nowrap"><a
                            className="d-flex align-items-center text-body text-hover-1000" href="#!">
                            <h6 className="mb-0 ms-0 fw-semibold">Josef Stravinsky</h6>
                        </a></td>
                        <td className="city align-middle white-space-nowrap text-body">Metropolis</td>
                    </tr>
                    <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                        <td className="fs-9 align-middle ps-0 py-3">
                            <div className="form-check mb-0 fs-8">
                                <input className="form-check-input" type="checkbox"
                                    data-bulk-select-row='{"building":"{"avatar":"/team/58.webp","name":"Igor Borvibson"},"mobile":"+65899655678","city":"Central city","lastActive":"5 days ago","joined":"Nov 28, 7:28 PM"}' />
                            </div>
                        </td>
                        <td className="customer align-middle white-space-nowrap"><a
                            className="d-flex align-items-center text-body text-hover-1000" href="#!">
                            <h6 className="mb-0 ms-0 fw-semibold">Igor Borvibson</h6>
                        </a></td>
                        <td className="city align-middle white-space-nowrap text-body">Central city</td>
                    </tr>
                    <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                        <td className="fs-9 align-middle ps-0 py-3">
                            <div className="form-check mb-0 fs-8">
                                <input className="form-check-input" type="checkbox"
                                    data-bulk-select-row='{"building":"{"avatar":"/team/59.webp","name":"Katerina Karenin"},"mobile":"+00564327890","city":"Gotham","lastActive":"2 weeks ago","joined":"Nov 24, 10:16 AM"}' />
                            </div>
                        </td>
                        <td className="customer align-middle white-space-nowrap"><a
                            className="d-flex align-items-center text-body text-hover-1000" href="#!">
                            <h6 className="mb-0 ms-0 fw-semibold">Katerina Karenin</h6>
                        </a></td>
                        <td className="city align-middle white-space-nowrap text-body">Gotham</td>
                    </tr>
                    <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                        <td className="fs-9 align-middle ps-0 py-3">
                            <div className="form-check mb-0 fs-8">
                                <input className="form-check-input" type="checkbox"
                                    data-bulk-select-row='{"building":"{"avatar":"","name":"Roy Anderson"},"mobile":"+55890776","city":"Vancouver","lastActive":"4 days ago","joined":"Nov 18, 5:43 PM"}' />
                            </div>
                        </td>
                        <td className="customer align-middle white-space-nowrap"><a
                            className="d-flex align-items-center text-body text-hover-1000" href="#!">
                            <h6 className="mb-0 ms-0 fw-semibold">Roy Anderson</h6>
                        </a></td>
                        <td className="city align-middle white-space-nowrap text-body">Vancouver</td>
                    </tr>
                    <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                        <td className="fs-9 align-middle ps-0 py-3">
                            <div className="form-check mb-0 fs-8">
                                <input className="form-check-input" type="checkbox"
                                    data-bulk-select-row='{"building":"{"avatar":"/team/31.webp","name":"Martina scorcese"},"mobile":"+666611896","city":"Viena","lastActive":"6 min ago","joined":"Nov 18, 2:09 AM"}' />
                            </div>
                        </td>
                        <td className="customer align-middle white-space-nowrap"><a
                            className="d-flex align-items-center text-body text-hover-1000" href="#!">
                            <h6 className="mb-0 ms-0 fw-semibold">Martina scorcese</h6>
                        </a></td>
                        <td className="city align-middle white-space-nowrap text-body">Viena</td>
                    </tr>
                    <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                        <td className="fs-9 align-middle ps-0 py-3">
                            <div className="form-check mb-0 fs-8">
                                <input className="form-check-input" type="checkbox"
                                    data-bulk-select-row='{"building":"{"avatar":"/team/33.webp","name":"Luis Bunuel"},"mobile":"+55786534","city":"Bangalore","lastActive":"56 min ago","joined":"Nov 16, 3:22 PM"}' />
                            </div>
                        </td>
                        <td className="customer align-middle white-space-nowrap"><a
                            className="d-flex align-items-center text-body text-hover-1000" href="#!">
                            <h6 className="mb-0 ms-0 fw-semibold">Luis Bunuel</h6>
                        </a></td>
                        <td className="city align-middle white-space-nowrap text-body">Bangalore</td>
                    </tr>
                    <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                        <td className="fs-9 align-middle ps-0 py-3">
                            <div className="form-check mb-0 fs-8">
                                <input className="form-check-input" type="checkbox"
                                    data-bulk-select-row='{"building":"{"avatar":"/team/34.webp","name":"Jean Renoir"},"mobile":"+8801765458767","city":"Chittagong","lastActive":"Yesterday","joined":"Nov 09, 8:49 AM"}' />
                            </div>
                        </td>
                        <td className="customer align-middle white-space-nowrap"><a
                            className="d-flex align-items-center text-body text-hover-1000" href="#!">
                            <h6 className="mb-0 ms-0 fw-semibold">Jean Renoir</h6>
                        </a></td>
                        <td className="city align-middle white-space-nowrap text-body">Chittagong</td>
                    </tr>
                    <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                        <td className="fs-9 align-middle ps-0 py-3">
                            <div className="form-check mb-0 fs-8">
                                <input className="form-check-input" type="checkbox"
                                    data-bulk-select-row='{"building":"{"avatar":"/team/29.webp","name":"Ricky Antony"},"mobile":"+2012001851","city":"New Jersey","lastActive":"1 hour ago","joined":"Oct 19, 8:00 AM"}' />
                            </div>
                        </td>
                        <td className="customer align-middle white-space-nowrap"><a
                            className="d-flex align-items-center text-body text-hover-1000" href="#!">
                            <h6 className="mb-0 ms-0 fw-semibold">Ricky Antony</h6>
                        </a></td>
                        <td className="city align-middle white-space-nowrap text-body">New Jersey</td>
                    </tr>
                    <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                        <td className="fs-9 align-middle ps-0 py-3">
                            <div className="form-check mb-0 fs-8">
                                <input className="form-check-input" type="checkbox"
                                    data-bulk-select-row='{"building":"{"avatar":"/team/3.webp","name":"Emma Watson"},"mobile":"+2122288403","city":"New York","lastActive":"6 hours ago","joined":"Oct 15, 12:00 PM"}' />
                            </div>
                        </td>
                        <td className="customer align-middle white-space-nowrap"><a
                            className="d-flex align-items-center text-body text-hover-1000" href="#!">
                            <h6 className="mb-0 ms-0 fw-semibold">Emma Watson</h6>
                        </a></td>
                        <td className="city align-middle white-space-nowrap text-body">New York</td>
                    </tr>
                    <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                        <td className="fs-9 align-middle ps-0 py-3">
                            <div className="form-check mb-0 fs-8">
                                <input className="form-check-input" type="checkbox"
                                    data-bulk-select-row='{"building":"{"avatar":"/team/avatar.webp","name":"Jennifer Schramm","placeholder":true},"mobile":"+8283829631","city":"Charlotte","lastActive":"12 hours ago","joined":"Oct 12, 11:00 AM"}' />
                            </div>
                        </td>
                        <td className="customer align-middle white-space-nowrap"><a
                            className="d-flex align-items-center text-body text-hover-1000" href="#!">
                            <h6 className="mb-0 ms-0 fw-semibold">Jennifer Schramm</h6>
                        </a></td>
                        <td className="city align-middle white-space-nowrap text-body">Charlotte</td>
                    </tr>
                    <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                        <td className="fs-9 align-middle ps-0 py-3">
                            <div className="form-check mb-0 fs-8">
                                <input className="form-check-input" type="checkbox"
                                    data-bulk-select-row='{"building":"{"avatar":"/team/32.webp","name":"Raymond Mims"},"mobile":"+5624685646","city":"Artesia","lastActive":"2 day ago","joined":"Oct 10, 8:30 AM"}' />
                            </div>
                        </td>
                        <td className="customer align-middle white-space-nowrap"><a
                            className="d-flex align-items-center text-body text-hover-1000" href="#!">
                            <h6 className="mb-0 ms-0 fw-semibold">Raymond Mims</h6>
                        </a></td>
                        <td className="city align-middle white-space-nowrap text-body">Artesia</td>
                    </tr>
                    <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                        <td className="fs-9 align-middle ps-0 py-3">
                            <div className="form-check mb-0 fs-8">
                                <input className="form-check-input" type="checkbox"
                                    data-bulk-select-row='{"building":"{"avatar":"/team/25.webp","name":"Michael Jenkins"},"mobile":"+3026138829","city":"Philadelphia","lastActive":"12 hours ago","joined":"Oct 3, 8:30 AM"}' />
                            </div>
                        </td>
                        <td className="customer align-middle white-space-nowrap"><a
                            className="d-flex align-items-center text-body text-hover-1000" href="#!">
                            <h6 className="mb-0 ms-0 fw-semibold">Michael Jenkins</h6>
                        </a></td>
                        <td className="city align-middle white-space-nowrap text-body">Philadelphia</td>
                    </tr>
                    </div>
                </div>
            </div>
            <div className="row align-items-center justify-content-between py-2 pe-0 fs-9">
                <div className="col-auto d-flex">
                    <button className="page-link" data-list-pagination="prev"><span className="fas fa-chevron-left"></span></button>
                    <ul className="mb-0 pagination"></ul>
                    <button className="page-link pe-0" data-list-pagination="next"><span
                        className="fas fa-chevron-right"></span></button>
                </div>
            </div>
        </div>
    );
};