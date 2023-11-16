import './style.css'
import React from 'react'

export default function Footer() {
    return (
        <div>
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-1 my-1 border-top">
                <div className="col-md-4 d-flex align-items-center">
                    <span className="mb-3 mb-md-0 text-body-secondary ms-3">@ Event Hub Organization</span>
                </div>

                <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <li className="ms-3"><button className="btn">About Us</button></li>
                    <li className="ms-3"><button className="btn" data-bs-toggle="modal" data-bs-target="#ContactInfo">Contact Info</button></li>
                    <li className="ms-3"><button className="btn">Facebook</button></li>
                </ul>
            </footer>

            {/* Modal */}
            <div className="modal fade" id="ContactInfo" tabIndex="-1" aria-labelledby="ContactInfoLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <h2 className="fw-bold text-center mt-2" id="ContactInfoLabel">Contact Info</h2>
                        <ul className="d-grid gap-4 my-5 list-unstyled small">
                            <li className="d-flex gap-4">
                                <div className='mx-3'>
                                    <h5>  <i className="fa-solid fa-envelope fa-beat fa-xl me-3" style={{ color: '#000000' }} /> Email Address</h5>
                                    Manem_Puli@Gmail.com
                                </div>
                            </li>
                            <li className="d-flex gap-4">
                                <div className='mx-3'>
                                    <h5><i className="fa-solid fa-phone fa-shake fa-xl me-3" style={{ color: '#000000' }} />Phone Number</h5>
                                    1234567890
                                </div>
                            </li>
                            <li className="d-flex gap-4">
                                <div className="mx-3">
                                    <h5><i className="fa-solid fa-building fa-flip fa-xl me-3" style={{ color: '#000000' }} />Address</h5>
                                    Manem Puli House, Vijaywada
                                </div>
                            </li>
                        </ul>
                        <button type="button" className="btn btn-lg btn-primary mx-5 mb-3" data-bs-dismiss="modal">Okay, thanks!</button>
                    </div>
                </div>
            </div>
        </div>
    )
}