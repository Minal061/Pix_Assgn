import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { FunctionAddUser } from "../Redux/Action";

const Adduser = () => {
    const [name, namechange] = useState('');
    const [email, emailchange] = useState('');
    const [phone, phonechange] = useState('');
    const [state, statechange] = useState('');
    const [pincode, pincodechange] = useState('');
    const [pancard, pancardchange] = useState('');
    
    const dispatch=useDispatch();
    const navigate=useNavigate();

    
    const handlesubmit = (e) => {
        e.preventDefault();
        const userobj = { name, email, phone,state,pincode,pancard };
        dispatch(FunctionAddUser(userobj));
        navigate('/user');
    }

    return (
        <div>
            <form onSubmit={handlesubmit}>
                <div className="card">
                    <div className="card-header" style={{ textAlign: 'left' }}>
                        <h2>Add User</h2>
                    </div>
                    <div className="card-body" style={{ textAlign: 'left' }}>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label>Name</label>
                                    <input value={name} onChange={e => namechange(e.target.value)} className="form-control"></input>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label>Email</label>
                                    <input value={email} onChange={e => emailchange(e.target.value)} className="form-control"></input>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label>Phone</label>
                                    <input value={phone} onChange={e => phonechange(e.target.value)} className="form-control"></input>
                                </div>
                                <div className="col-lg-12">
                                <div className="form-group">
                                    <label>State</label>
                                    <input value={state} onChange={e => statechange(e.target.value)} className="form-control"></input>
                                </div>
                            </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label>Pincode</label>
                                    <input value={pincode} onChange={e => pincodechange(e.target.value)} className="form-control"></input>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label>Pancard</label>
                                    <input value={pancard} onChange={e => pancardchange(e.target.value)} className="form-control"></input>
                                </div>
                            </div>
                            

                        </div>
                    </div>
                    <div className="card-footer" style={{ textAlign: 'center' }}>
                        <button className="btn btn-primary add" type="submit">Submit</button> 
                        <Link className="btn btn-danger add" to={'/user'}>Back</Link>
                    </div>

                </div>
            </form>
        </div>
    );
}

export default Adduser