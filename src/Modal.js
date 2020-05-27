import React, { useEffect } from 'react'
import user from './img/user.jpeg';
import user_lady from './img/user-lady.png';

export default function Modal({ data, header }) {
    return (
        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h4 className="modal-title" id="leadership-header">
                            Leadership in {header}
                        </h4>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <ul className="list-group list-group-flush">

                            {data && data.map(leader =>
                                <li className="list-group-item card">
                                    <figure className="row">
                                        <img src={leader.gender === 'male' ? user : user_lady} />
                                        <figcaption className="col">
                                            <div className="card-title">
                                                <a href="#"><h5>{leader.name}</h5></a>
                                            </div>
                                            <div className="card-text">
                                                {leader.title}
                                            </div>
                                        </figcaption>
                                    </figure>
                                </li>)
                            }
                        </ul>
                    </div>
                    {/* <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div> */}
                </div>
            </div>
        </div>
    )
}