import React from 'react'
import user from './img/user.jpeg';
import user_lady from './img/user-lady.png'

export default function Modal() {
    return (
        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                            Leadership in North America
                        </h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item card">
                                <figure className="row">
                                    <img src={user} />
                                    <figcaption className="col">
                                        <div class="card-title">
                                            <a href="#"><h5>Joe Tocco</h5></a>
                                        </div>
                                        <div class="card-text">
                                            Head Of North America P&C
                                        </div>
                                    </figcaption>
                                </figure>
                            </li>
                            <li className="list-group-item">
                                <figure className="row">
                                    <img src={user_lady} />
                                    <figcaption className="col">
                                        <div class="card-title">
                                            <a href="#">
                                                <h5>
                                                    Domna Nadeau
                                                </h5>
                                            </a>
                                        </div>
                                        <div class="card-text">
                                            COO North America
                                        </div>
                                    </figcaption>
                                </figure>
                            </li>
                            <li className="list-group-item">
                                <figure className="row">
                                    <img src={user_lady} />
                                    <figcaption className="col">
                                        <div class="card-title">
                                            <a href="#">
                                                <h5>Susan Veliattta</h5>
                                            </a>
                                        </div>
                                        <div class="card-text">
                                            Head Of Middle Office, North America
                                        </div>
                                    </figcaption>
                                </figure>
                            </li>

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