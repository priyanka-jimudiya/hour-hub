import React from 'react';
import './Employee.css';
function Employee() {
    return (
        <div style={{ backgroundColor: '#13345A', padding: '24px 24px 0' }}>
            <div className='container'>
                <button type="button" class="btn d-flex text-white">
                    <img src='./Images/Back.png' />
                    Back
                </button>
                <h1>Edit Employee</h1>
                <form>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Name</label>
                        <input type="text" class="form-control"
                            id="exampleInputEmail1" placeholder='Bessie Anderson'
                            aria-describedby="emailHelp" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email</label>
                        <input type="email" class="form-control"
                            id="exampleInputEmail1" placeholder='bessie.hugotet@gmail.com'
                            aria-describedby="emailHelp" />
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Assign working scheme</label>
                        <input type="text" class="form-control"
                            id="exampleInputEmail1" placeholder='Week 1'
                            aria-describedby="emailHelp" />
                    </div>
                    <div className='d-flex'>
                        <div className='mb-3 mr-2'>
                            <label className='form-label'>From Date</label>
                            <input type='date' style={{ width: '190px' }} className='form-control' />
                        </div>
                        <div className='mb-3'>
                            <label className='form-label'>From Date</label>
                            <input type='date' style={{ width: '190px' }} className='form-control' />
                        </div>
                    </div>
                </form>
                <h1>Past Workload Schemes</h1>
                <div className='cal'>
                    <p className='text-white'>Internal</p>
                    <p>This project records all expenses for Bryan's megacorporation</p>
                    <div className='row g-0 text-center'>
                        <div className='col-1'>
                            <p>S</p>
                        </div>
                        <div className='col-1'>
                            <p>M</p>
                        </div>
                        <div className='col-1'>
                            <p>T</p>
                        </div>
                        <div className='col-1'>
                            <p>W</p>
                        </div>
                        <div className='col-1'>
                            <p>T</p>
                        </div>
                        <div className='col-1'>
                            <p>F</p>
                        </div>
                        <div className='col-1'>
                            <p>S</p>
                        </div>
                    </div>
                    <div className='row g-0 text-center'>
                        <div className='col-1'>
                            <p>4.5</p>
                        </div>
                        <div className='col-1'>
                            <p>6</p>
                        </div>
                        <div className='col-1'>
                            <p>4.5</p>
                        </div>
                        <div className='col-1'>
                            <p>4.5</p>
                        </div>
                        <div className='col-1'>
                            <p>6.6</p>
                        </div>
                        <div className='col-1'>
                            <p>4.5</p>
                        </div>
                        <div className='col-1'>
                            <p>4.5</p>
                        </div>
                    </div>
                    <p>15-08-2024 to 21-08-2024</p>
                    <p className='text-white'>Internal</p>
                    <p>This project records all expenses for Bryan's megacorporation</p>
                    <div className='row g-0 text-center'>
                        <div className='col-1'>
                            <p>S</p>
                        </div>
                        <div className='col-1'>
                            <p>M</p>
                        </div>
                        <div className='col-1'>
                            <p>T</p>
                        </div>
                        <div className='col-1'>
                            <p>W</p>
                        </div>
                        <div className='col-1'>
                            <p>T</p>
                        </div>
                        <div className='col-1'>
                            <p>F</p>
                        </div>
                        <div className='col-1'>
                            <p>S</p>
                        </div>
                    </div>
                    <div className='row g-0 text-center'>
                        <div className='col-1'>
                            <p>4.5</p>
                        </div>
                        <div className='col-1'>
                            <p>6</p>
                        </div>
                        <div className='col-1'>
                            <p>4.5</p>
                        </div>
                        <div className='col-1'>
                            <p>4.5</p>
                        </div>
                        <div className='col-1'>
                            <p>6.6</p>
                        </div>
                        <div className='col-1'>
                            <p>4.5</p>
                        </div>
                        <div className='col-1'>
                            <p>4.5</p>
                        </div>
                    </div>
                    <p>15-08-2024 to 21-08-2024</p>
                </div>
            </div>
        </div>
    )
}

export default Employee