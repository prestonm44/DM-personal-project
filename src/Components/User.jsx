import React from 'react';
// import '../bootstrap/phoenix-v1/assets/css/theme.css';

const User = () => {
    return (
        <>
            <div className="content">
                <nav className="mb-3" aria-label="breadcrumb">
                    <ol className="breadcrumb mb-0">
                        <li className="breadcrumb-item"><a href="#!">Pages</a></li>
                        <li className="breadcrumb-item active">Users</li>
                    </ol>
                </nav>
                <h2 className="text-bold text-body-emphasis mb-5">Users</h2>
                <div id="users" data-list='{"valueNames":["customer","email","city","last_active","joined"],"page":10,"pagination":true}'>
                    <div className="row align-items-center justify-content-between g-3 mb-4">
                        <div className="col col-auto">
                            <div className="search-box">
                                <form className="position-relative">
                                    <input className="form-control search-input search" type="search" placeholder="Search users" aria-label="Search" />
                                    <span className="fas fa-search search-box-icon"></span>

                                </form>
                            </div>
                        </div>
                        <div className="col-auto">
                            <div className="d-flex align-items-center">
                                <button className="btn btn-primary"><span className="fas fa-plus me-2"></span>Add user</button>
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
                                                <input className="form-check-input" id="checkbox-bulk-users-select" type="checkbox" data-bulk-select='{"body":"users-table-body"}' />
                                            </div>
                                        </th>
                                        <th className="sort align-middle" scope="col" data-sort="customer" style={{ width: '30%', minWidth: '200px' }}>USER</th>
                                        <th className="sort align-middle" scope="col" data-sort="email" style={{ width: '30%', minWidth: '200px' }}>POSITION</th>
                                        <th className="sort align-middle" scope="col" data-sort="city" style={{ width: '30%' }}>BUILDING</th>
                                        <th className="sort align-middle" scope="col" data-sort="last_active" style={{ width: '20%', minWidth: '200px' }}>ACCESS TYPE</th>
                                    </tr>
                                </thead>
                                <tbody className="list" id="users-table-body">
                                    <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                                        <td className="fs-9 align-middle ps-0 py-3">
                                            <div className="form-check mb-0 fs-8">
                                                <input className="form-check-input" type="checkbox" data-bulk-select-row='{"customer":{"avatar":"/team/32.webp","name":"Carry Anna"},"email":"annac34@gmail.com","city":"Budapest","lastActive":"34 min ago","joined":"Dec 12, 12:56 PM"}' />
                                            </div>
                                        </td>
                                        <td className="customer align-middle white-space-nowrap">
                                            <a className="d-flex align-items-center text-body text-hover-1000" href="#!">
                                                <div className="avatar avatar-m">
                                                    <img className="rounded-circle" src="../assets/img/team/32.webp" alt="" />
                                                </div>
                                                <h6 className="mb-0 ms-3 fw-semibold">Carry Anna</h6>
                                            </a>
                                        </td>
                                        <td className="email align-middle white-space-nowrap">
                                            <a className="fw-semibold" href="mailto:annac34@gmail.com">annac34@gmail.com</a>
                                        </td>
                                        <td className="city align-middle white-space-nowrap text-body">Budapest</td>
                                        <td className="last_active align-middle white-space-nowrap text-body-tertiary">34 min ago</td>
                                    </tr>
                                    <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                                        <td className="fs-9 align-middle ps-0 py-3">
                                            <div className="form-check mb-0 fs-8">
                                                <input className="form-check-input" type="checkbox" data-bulk-select-row='{"customer":{"avatar":"/team/avatar.webp","name":"Milind Mikuja","placeholder":true},"email":"mimiku@yahoo.com","city":"Manchester","lastActive":"6 hours ago","joined":"Dec 9, 2:28 PM"}' />
                                            </div>
                                        </td>
                                        <td className="customer align-middle white-space-nowrap"><a className="d-flex align-items-center text-body text-hover-1000" href="#!">
                                            <div className="avatar avatar-m"><img className="rounded-circle avatar-placeholder" src="../assets/img/team/avatar.webp" alt="" />
                                            </div>
                                            <h6 className="mb-0 ms-3 fw-semibold">Milind Mikuja</h6>
                                        </a></td>
                                        <td className="email align-middle white-space-nowrap"><a className="fw-semibold" href="mailto:mimiku@yahoo.com">mimiku@yahoo.com</a></td>
                                        <td className="city align-middle white-space-nowrap text-body">Manchester</td>
                                        <td className="last_active align-middle white-space-nowrap text-body-tertiary">6 hours ago</td>
                                    </tr>
                                    <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                                        <td className="fs-9 align-middle ps-0 py-3">
                                            <div className="form-check mb-0 fs-8">
                                                <input className="form-check-input" type="checkbox" data-bulk-select-row='{"customer":{"avatar":"/team/35.webp","name":"Stanly Drinkwater"},"email":"stnlwasser@hotmail.com","city":"Smallville","lastActive":"43 min ago","joined":"Dec 4, 12:56 PM"}' />
                                            </div>
                                        </td>
                                        <td className="customer align-middle white-space-nowrap"><a className="d-flex align-items-center text-body text-hover-1000" href="#!">
                                            <div className="avatar avatar-m"><img className="rounded-circle" src="../assets/img/team/35.webp" alt="" />
                                            </div>
                                            <h6 className="mb-0 ms-3 fw-semibold">Stanly Drinkwater</h6>
                                        </a></td>
                                        <td className="email align-middle white-space-nowrap"><a className="fw-semibold" href="mailto:stnlwasser@hotmail.com">stnlwasser@hotmail.com</a></td>
                                        <td className="city align-middle white-space-nowrap text-body">Smallville</td>
                                        <td className="last_active align-middle white-space-nowrap text-body-tertiary">43 min ago</td>
                                    </tr>
                                    <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                                        <td className="fs-9 align-middle ps-0 py-3">
                                            <div className="form-check mb-0 fs-8">
                                                <input className="form-check-input" type="checkbox" data-bulk-select-row='{"customer":{"avatar":"/team/57.webp","name":"Josef Stravinsky"},"email":"Josefsky@sni.it","city":"Metropolis","lastActive":"2 hours ago","joined":"Dec 1,  4:07 AM"}' />
                                            </div>
                                        </td>
                                        <td className="customer align-middle white-space-nowrap"><a className="d-flex align-items-center text-body text-hover-1000" href="#!">
                                            <div className="avatar avatar-m"><img className="rounded-circle" src="../assets/img/team/57.webp" alt="" />
                                            </div>
                                            <h6 className="mb-0 ms-3 fw-semibold">Josef Stravinsky</h6>
                                        </a></td>
                                        <td className="email align-middle white-space-nowrap"><a className="fw-semibold" href="mailto:Josefsky@sni.it">Josefsky@sni.it</a></td>
                                        <td className="city align-middle white-space-nowrap text-body">Metropolis</td>
                                        <td className="last_active align-middle white-space-nowrap text-body-tertiary">2 hours ago</td>
                                    </tr>
                                    <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                                        <td className="fs-9 align-middle ps-0 py-3">
                                            <div className="form-check mb-0 fs-8">
                                                <input className="form-check-input" type="checkbox" data-bulk-select-row='{"customer":{"avatar":"/team/58.webp","name":"Igor Borvibson"},"email":"vibigorr@technext.it","city":"Central city","lastActive":"5 days ago","joined":"Nov 28, 7:28 PM"}' />
                                            </div>
                                        </td>
                                        <td className="customer align-middle white-space-nowrap"><a className="d-flex align-items-center text-body text-hover-1000" href="#!">
                                            <div className="avatar avatar-m"><img className="rounded-circle" src="../assets/img/team/58.webp" alt="" />
                                            </div>
                                            <h6 className="mb-0 ms-3 fw-semibold">Igor Borvibson</h6>
                                        </a></td>
                                        <td className="email align-middle white-space-nowrap"><a className="fw-semibold" href="mailto:vibigorr@technext.it">vibigorr@technext.it</a></td>
                                        <td className="city align-middle white-space-nowrap text-body">Central city</td>
                                        <td className="last_active align-middle white-space-nowrap text-body-tertiary">5 days ago</td>
                                    </tr>
                                    <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                                        <td className="fs-9 align-middle ps-0 py-3">
                                            <div className="form-check mb-0 fs-8">
                                                <input className="form-check-input" type="checkbox" data-bulk-select-row='{"customer":{"avatar":"/team/59.webp","name":"Katerina Karenin"},"email":"karkat99@gmail.com","city":"Gotham","lastActive":"2 weeks ago","joined":"Nov 24, 10:16 AM"}' />
                                            </div>
                                        </td>
                                        <td className="customer align-middle white-space-nowrap"><a className="d-flex align-items-center text-body text-hover-1000" href="#!">
                                            <div className="avatar avatar-m"><img className="rounded-circle" src="../assets/img/team/59.webp" alt="" />
                                            </div>
                                            <h6 className="mb-0 ms-3 fw-semibold">Katerina Karenin</h6>
                                        </a></td>
                                        <td className="email align-middle white-space-nowrap"><a className="fw-semibold" href="mailto:karkat99@gmail.com">karkat99@gmail.com</a></td>
                                        <td className="city align-middle white-space-nowrap text-body">Gotham</td>
                                        <td className="last_active align-middle white-space-nowrap text-body-tertiary">2 weeks ago</td>
                                    </tr>
                                    <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                                        <td className="fs-9 align-middle ps-0 py-3">
                                            <div className="form-check mb-0 fs-8">
                                                <input className="form-check-input" type="checkbox" data-bulk-select-row='{"customer":{"avatar":"","name":"Roy Anderson"},"email":"andersonroy@netflix.chill","city":"Vancouver","lastActive":"4 days ago","joined":"Nov 18, 5:43 PM"}' />
                                            </div>
                                        </td>
                                        <td className="customer align-middle white-space-nowrap"><a className="d-flex align-items-center text-body text-hover-1000" href="#!">
                                            <div className="avatar avatar-m">
                                                <div className="avatar-name rounded-circle"><span>R</span></div>
                                            </div>
                                            <h6 className="mb-0 ms-3 fw-semibold">Roy Anderson</h6>
                                        </a></td>
                                        <td className="email align-middle white-space-nowrap"><a className="fw-semibold" href="mailto:andersonroy@netflix.chill">andersonroy@netflix.chill</a></td>
                                        <td className="city align-middle white-space-nowrap text-body">Vancouver</td>
                                        <td className="last_active align-middle white-space-nowrap text-body-tertiary">4 days ago</td>
                                    </tr>
                                    <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                                        <td className="fs-9 align-middle ps-0 py-3">
                                            <div className="form-check mb-0 fs-8">
                                                <input className="form-check-input" type="checkbox" data-bulk-select-row='{"customer":{"avatar":"/team/31.webp","name":"Martina scorcese"},"email":"cesetina1@gmail.com","city":"Viena","lastActive":"6 min ago","joined":"Nov 18, 2:09 AM"}' />
                                            </div>
                                        </td>
                                        <td className="customer align-middle white-space-nowrap"><a className="d-flex align-items-center text-body text-hover-1000" href="#!">
                                            <div className="avatar avatar-m"><img className="rounded-circle" src="../assets/img/team/31.webp" alt="" />
                                            </div>
                                            <h6 className="mb-0 ms-3 fw-semibold">Martina scorcese</h6>
                                        </a></td>
                                        <td className="email align-middle white-space-nowrap"><a className="fw-semibold" href="mailto:cesetina1@gmail.com">cesetina1@gmail.com</a></td>
                                        <td className="city align-middle white-space-nowrap text-body">Viena</td>
                                        <td className="last_active align-middle white-space-nowrap text-body-tertiary">6 min ago</td>
                                    </tr>
                                    <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                                    <td className="fs-9 align-middle ps-0 py-3">
                                        <div className="form-check mb-0 fs-8">
                                            <input className="form-check-input" type="checkbox" data-bulk-select-row='{"customer":{"avatar":"/team/33.webp","name":"Luis Bunuel"},"email":"luisuel@live.com","city":"Bangalore","lastActive":"56 min ago","joined":"Nov 16, 3:22 PM"}' />
                                        </div>
                                    </td>
                                    <td className="customer align-middle white-space-nowrap"><a className="d-flex align-items-center text-body text-hover-1000" href="#!">
                                        <div className="avatar avatar-m"><img className="rounded-circle" src="../assets/img/team/33.webp" alt="" />
                                        </div>
                                        <h6 className="mb-0 ms-3 fw-semibold">Luis Bunuel</h6>
                                    </a></td>
                                    <td className="email align-middle white-space-nowrap"><a className="fw-semibold" href="mailto:luisuel@live.com">luisuel@live.com</a></td>
                                    <td className="city align-middle white-space-nowrap text-body">Bangalore</td>
                                    <td className="last_active align-middle white-space-nowrap text-body-tertiary">56 min ago</td>
                                    </tr>
                                <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                                    <td className="fs-9 align-middle ps-0 py-3">
                                        <div className="form-check mb-0 fs-8">
                                            <input className="form-check-input" type="checkbox" data-bulk-select-row='{"customer":{"avatar":"/team/34.webp","name":"Jean Renoir"},"email":"renoirjean1836@gmail.com","city":"Chittagong","lastActive":"Yesterday","joined":"Nov 09, 8:49 AM"}' />
                                        </div>
                                    </td>
                                    <td className="customer align-middle white-space-nowrap"><a className="d-flex align-items-center text-body text-hover-1000" href="#!">
                                        <div className="avatar avatar-m"><img className="rounded-circle" src="../assets/img/team/34.webp" alt="" />
                                        </div>
                                        <h6 className="mb-0 ms-3 fw-semibold">Jean Renoir</h6>
                                    </a></td>
                                    <td className="email align-middle white-space-nowrap"><a className="fw-semibold" href="mailto:renoirjean1836@gmail.com">renoirjean1836@gmail.com</a></td>
                                    <td className="city align-middle white-space-nowrap text-body">Chittagong</td>
                                    <td className="last_active align-middle white-space-nowrap text-body-tertiary">Yesterday</td>
                                </tr>
                                <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                                    <td className="fs-9 align-middle ps-0 py-3">
                                        <div className="form-check mb-0 fs-8">
                                            <input className="form-check-input" type="checkbox" data-bulk-select-row='{"customer":{"avatar":"/team/29.webp","name":"Ricky Antony"},"email":"ricky@example.com", "city":"New Jersey","lastActive":"1 hour ago","joined":"Oct 19, 8:00 AM"}' />
                                        </div>
                                    </td>
                                    <td className="customer align-middle white-space-nowrap"><a className="d-flex align-items-center text-body text-hover-1000" href="#!">
                                        <div className="avatar avatar-m"><img className="rounded-circle" src="../assets/img/team/29.webp" alt="" />
                                        </div>
                                        <h6 className="mb-0 ms-3 fw-semibold">Ricky Antony</h6>
                                    </a></td>
                                    <td className="email align-middle white-space-nowrap"><a className="fw-semibold" href="mailto:ricky@example.com">ricky@example.com</a></td>
                                    <td className="city align-middle white-space-nowrap text-body">New Jersey</td>
                                    <td className="last_active align-middle white-space-nowrap text-body-tertiary">1 hour ago</td>
                                </tr>
                                <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                                    <td className="fs-9 align-middle ps-0 py-3">
                                        <div className="form-check mb-0 fs-8">
                                            <input className="form-check-input" type="checkbox" data-bulk-select-row='{"customer":{"avatar":"/team/3.webp","name":"Emma Watson"},"email":"emma@example.com","city":"New York","lastActive":"6 hours ago","joined":"Oct 15, 12:00 PM"}' />
                                        </div>
                                    </td>
                                    <td className="customer align-middle white-space-nowrap"><a className="d-flex align-items-center text-body text-hover-1000" href="#!">
                                        <div className="avatar avatar-m"><img className="rounded-circle" src="../assets/img/team/3.webp" alt="" />
                                        </div>
                                        <h6 className="mb-0 ms-3 fw-semibold">Emma Watson</h6>
                                    </a></td>
                                    <td className="email align-middle white-space-nowrap"><a className="fw-semibold" href="mailto:emma@example.com">emma@example.com</a></td>
                                    <td className="city align-middle white-space-nowrap text-body">New York</td>
                                    <td className="last_active align-middle white-space-nowrap text-body-tertiary">6 hours ago</td>
                                </tr>
                                <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                                    <td className="fs-9 align-middle ps-0 py-3">
                                        <div className="form-check mb-0 fs-8">
                                            <input className="form-check-input" type="checkbox" data-bulk-select-row='{"customer":{"avatar":"/team/avatar.webp","name":"Jennifer Schramm","placeholder":true},"email":"jennifer@example.com", "city":"Charlotte","lastActive":"12 hours ago","joined":"Oct 12, 11:00 AM"}' />
                                        </div>
                                    </td>
                                    <td className="customer align-middle white-space-nowrap"><a className="d-flex align-items-center text-body text-hover-1000" href="#!">
                                        <div className="avatar avatar-m"><img className="rounded-circle avatar-placeholder" src="../assets/img/team/avatar.webp" alt="" />
                                        </div>
                                        <h6 className="mb-0 ms-3 fw-semibold">Jennifer Schramm</h6>
                                    </a></td>
                                    <td className="email align-middle white-space-nowrap"><a className="fw-semibold" href="mailto:jennifer@example.com">jennifer@example.com</a></td>
                                    <td className="city align-middle white-space-nowrap text-body">Charlotte</td>
                                    <td className="last_active align-middle white-space-nowrap text-body-tertiary">12 hours ago</td>
                                </tr>
                                <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                                    <td className="fs-9 align-middle ps-0 py-3">
                                        <div className="form-check mb-0 fs-8">
                                            <input className="form-check-input" type="checkbox" data-bulk-select-row='{"customer":{"avatar":"/team/32.webp","name":"Raymond Mims"},"email":"raymond@example.com","city":"Artesia","lastActive":"2 day ago","joined":"Oct 10, 8:30 AM"}' />
                                        </div>
                                    </td>
                                    <td className="customer align-middle white-space-nowrap"><a className="d-flex align-items-center text-body text-hover-1000" href="#!">
                                        <div className="avatar avatar-m"><img className="rounded-circle" src="../assets/img/team/32.webp" alt="" />
                                        </div>
                                        <h6 className="mb-0 ms-3 fw-semibold">Raymond Mims</h6>
                                    </a></td>
                                    <td className="email align-middle white-space-nowrap"><a className="fw-semibold" href="mailto:raymond@example.com">raymond@example.com</a></td>
                                    <td className="city align-middle white-space-nowrap text-body">Artesia</td>
                                    <td className="last_active align-middle white-space-nowrap text-body-tertiary">2 day ago</td>
                                </tr>
                                <tr className="hover-actions-trigger btn-reveal-trigger position-static">
                                    <td className="fs-9 align-middle ps-0 py-3">
                                        <div className="form-check mb-0 fs-8">
                                            <input className="form-check-input" type="checkbox" data-bulk-select-row='{"customer":{"avatar":"/team/25.webp","name":"Michael Jenkins"},"email":"jenkins@example.com","city":"Philadelphia","lastActive":"12 hours ago","joined":"Oct 3, 8:30 AM"}' />
                                        </div>
                                    </td>
                                    <td className="customer align-middle white-space-nowrap"><a className="d-flex align-items-center text-body text-hover-1000" href="#!">
                                        <div className="avatar avatar-m"><img className="rounded-circle" src="../assets/img/team/25.webp" alt="" />
                                        </div>
                                        <h6 className="mb-0 ms-3 fw-semibold">Michael Jenkins</h6>
                                    </a></td>
                                    <td className="email align-middle white-space-nowrap"><a className="fw-semibold" href="mailto:jenkins@example.com">jenkins@example.com</a></td>
                                    <td className="city align-middle white-space-nowrap text-body">Philadelphia</td>
                                    <td className="last_active align-middle white-space-nowrap text-body-tertiary">12 hours ago</td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                            
                    </div>
                    <div className="row align-items-center justify-content-between py-2 pe-0 fs-9">
                        <div className="col-auto d-flex">
                            <p className="mb-0 d-none d-sm-block me-3 fw-semibold text-body" data-list-info="data-list-info"></p><a className="fw-semibold" href="#!" data-list-view="*">View all<span className="fas fa-angle-right ms-1" data-fa-transform="down-1"></span></a><a className="fw-semibold d-none" href="#!" data-list-view="less">View Less<span className="fas fa-angle-right ms-1" data-fa-transform="down-1"></span></a>
                        </div>
                        <div className="col-auto d-flex">
                            <button className="page-link" data-list-pagination="prev"><span className="fas fa-chevron-left"></span></button>
                            <ul className="mb-0 pagination"></ul>
                            <button className="page-link pe-0" data-list-pagination="next"><span className="fas fa-chevron-right"></span></button>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="footer position-absolute">
                <div className="row g-0 justify-content-between align-items-center h-100">
                    <div className="col-12 col-sm-auto text-center">
                        <p className="mb-0 mt-2 mt-sm-0 text-body">Please give me a 100% on this project<span className="d-none d-sm-inline-block"></span><span className="d-none d-sm-inline-block mx-1">|</span><br className="d-sm-none" />2024 &copy;<a className="mx-1" href="https://themewagon.com">Themewagon</a></p>
                    </div>
                    <div className="col-12 col-sm-auto text-center">
                        <p className="mb-0 text-body-tertiary text-opacity-85">v1.18.1</p>
                    </div>
                </div>
            </footer>
        </>

    )
}

export default User;