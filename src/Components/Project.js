import React from 'react'

function Project() {
    return (
        <div style={{ backgroundColor: '#13345A', paddingLeft: '10px' }}>
            <nav class="navbar">
                <div class="container">
                    <span class="navbar-brand mb-0 h1 text-white">Project</span>
                </div>
            </nav>
            <nav class="navbar">
                <div class="container">
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search project"
                            aria-label="Search"
                            style={{ border: '1px solid #B8C1CD', backgroundColor: '#B8C1CD' }} />
                    </form>
                    <div style={{ float: 'right' }}>
                        <button type="button" class="btn btn-outline-primary me-3">Show Archived Projects</button>
                        <button type="button" class="btn btn-primary">Add Project</button>
                    </div>
                </div>
            </nav>
            <div className='container' style={{ color: '#B8C1CD' }}>
                <div className='row g-0 py-3' style={{ backgroundColor: '#103158' }}>
                    <div className='col'>
                        <h3>No.</h3>
                    </div>
                    <div className='col-6'>
                        <h3>Name</h3>
                    </div>
                    <div className='col'>
                        <h3>Position</h3>
                    </div>
                    <div className='col'>
                        <h3>Status</h3>
                    </div>
                    <div className='col'>
                        <h3>Action</h3>
                    </div>
                </div>
                <div className='row g-0 py-2' style={{ borderBottom: '1px solid white' }}>
                    <div className='col my-3'>
                        <h3>#1</h3>
                    </div>
                    <div className='col-6'>
                        <p className='text-white'>Software Services Bryan's Megacorporation</p>
                        <p>This project is used to record internal expenses such as illness or holidays.</p>
                    </div>
                    <div className='col d-flex ml-3'>
                        <img src='./Images/Position.png' style={{ height: '25px', width: '25px' }} />
                        <p style={{ color: '#0E8DF0', marginLeft: '4px' }}>2</p>
                    </div>
                    <div className='col'>
                        <button type="button" class="btn btn-secondary btn-sm" style={{ backgroundColor: '#70BFFE1A', color: '#70BFFE' }}>Active</button>
                    </div>
                    <div className='col'>
                        <img src='./Images/Action.png' />
                    </div>
                </div>
                <div className='row g-0 py-2' style={{ borderBottom: '1px solid white' }}>
                    <div className='col my-3'>
                        <h3>#2</h3>
                    </div>
                    <div className='col-6'>
                        <p className='text-white'>Internal</p>
                        <p>This project records all expenses for Bryan's megacorporation</p>
                    </div>
                    <div className='col d-flex ml-3'>
                        <img src='./Images/Position.png' style={{ height: '25px', width: '25px' }} />
                        <p style={{ color: '#0E8DF0', marginLeft: '4px' }}>1</p>
                    </div>
                    <div className='col'>
                        <button type="button" class="btn btn-secondary btn-sm" style={{ backgroundColor: '#70BFFE1A', color: '#70BFFE' }}>Active</button>
                    </div>
                    <div className='col'>
                        <img src='./Images/Action.png' />
                    </div>
                </div>
                <div className='row g-0 py-2' style={{ borderBottom: '1px solid white' }}>
                    <div className='col my-3'>
                        <h3>#3</h3>
                    </div>
                    <div className='col-6'>
                        <p className='text-white'>Website Enis Badoglu</p>
                        <p>This project records all efforts required to create Enis Badoglu's website.</p>
                    </div>
                    <div className='col d-flex ml-3'>
                        <img src='./Images/Position.png' style={{ height: '25px', width: '25px' }} />
                        <p style={{ color: '#0E8DF0', marginLeft: '4px' }}>3</p>
                    </div>
                    <div className='col'>
                        <button type="button" class="btn btn-secondary btn-sm" style={{ backgroundColor: '#70BFFE1A', color: '#70BFFE' }}>Active</button>
                    </div>
                    <div className='col'>
                        <img src='./Images/Action.png' />
                    </div>
                </div>
                <div className='row g-0 py-2' style={{ borderBottom: '1px solid white' }}>
                    <div className='col my-3'>
                        <h3>#4</h3>
                    </div>
                    <div className='col-6'>
                        <p className='text-white'>Software Services Bryan's Megacorporation</p>
                        <p>This project is used to record internal expenses such as illness or holidays.</p>
                    </div>
                    <div className='col d-flex ml-3'>
                        <img src='./Images/Position.png' style={{ height: '25px', width: '25px' }} />
                        <p style={{ color: '#0E8DF0', marginLeft: '4px' }}>0</p>
                    </div>
                    <div className='col'>
                        <button type="button" class="btn btn-secondary btn-sm" style={{ backgroundColor: '#70BFFE1A', color: '#70BFFE' }}>Active</button>
                    </div>
                    <div className='col'>
                        <img src='./Images/Action.png' />
                    </div>
                </div>
                <div className='row g-0 py-2' style={{ borderBottom: '1px solid white' }}>
                    <div className='col my-3'>
                        <h3>#5</h3>
                    </div>
                    <div className='col-6'>
                        <p className='text-white'>Internal</p>
                        <p>This project records all expenses for Bryan's megacorporation</p>
                    </div>
                    <div className='col d-flex ml-3'>
                        <img src='./Images/Position.png' style={{ height: '25px', width: '25px' }} />
                        <p style={{ color: '#0E8DF0', marginLeft: '4px' }}>4</p>
                    </div>
                    <div className='col'>
                        <button type="button" class="btn btn-secondary btn-sm" style={{ backgroundColor: '#70BFFE1A', color: '#70BFFE' }}>Active</button>
                    </div>
                    <div className='col'>
                        <img src='./Images/Action.png' />
                    </div>
                </div>
                <div className='row g-0 py-2' style={{ borderBottom: '1px solid white' }}>
                    <div className='col my-3'>
                        <h3>#6</h3>
                    </div>
                    <div className='col-6'>
                        <p className='text-white'>Website Enis Badoglu</p>
                        <p>This project records all efforts required to create Enis Badoglu's website.</p>
                    </div>
                    <div className='col d-flex ml-3'>
                        <img src='./Images/Position.png' style={{ height: '25px', width: '25px' }} />
                        <p style={{ color: '#0E8DF0', marginLeft: '4px' }}>2</p>
                    </div>
                    <div className='col'>
                        <button type="button" class="btn btn-secondary btn-sm" style={{ backgroundColor: '#70BFFE1A', color: '#70BFFE' }}>Active</button>
                    </div>
                    <div className='col'>
                        <img src='./Images/Action.png' />
                    </div>
                </div>
                <div className='row g-0 py-2'>
                    <div className='col my-3'>
                        <h3>#7</h3>
                    </div>
                    <div className='col-6'>
                        <p className='text-white'>Software Services Bryan's Megacorporation</p>
                        <p>This project is used to record internal expenses such as illness or holidays.</p>
                    </div>
                    <div className='col d-flex ml-3'>
                        <img src='./Images/Position.png' style={{ height: '25px', width: '25px' }} />
                        <p style={{ color: '#0E8DF0', marginLeft: '4px' }}>3</p>
                    </div>
                    <div className='col'>
                        <button type="button" class="btn btn-secondary btn-sm" style={{ backgroundColor: '#70BFFE1A', color: '#70BFFE' }}>Active</button>
                    </div>
                    <div className='col'>
                        <img src='./Images/Action.png' />
                    </div>
                </div>
            </div>
            <div className='container'>
                <footer>
                    <div className='d-flex mt-2'>
                        <p style={{ color: '#B8C1CD' }}>Showing rows </p>
                        <button type="button" class="btn btn-outline-light d-flex mx-3">
                            5
                            <img src='./Images/arrow.png' className='pl-2 mt-1' />
                        </button>
                    </div>
                    <nav aria-label="Page navigation example" >
                        <ul class="pagination" style={{ justifyContent: 'end' }}>
                            <li class="page-item">
                                <a class="page-link" href="#" aria-label="Previous" style={{ backgroundColor: '#13345A', border: 'none' }}>
                                    <span>&laquo;</span>
                                </a>
                            </li>
                            <li class="page-item"><a class="page-link mx-1" href="#" style={{ backgroundColor: '#0E8DF01A', border: '1px solid #0E8DF0', borderRadius: '10px' }}>1</a></li>
                            <li class="page-item"><a class="page-link" href="#" style={{ backgroundColor: '#13345A', border: 'none' }}>2</a></li>
                            <li class="page-item"><a class="page-link" href="#" style={{ backgroundColor: '#13345A', border: 'none' }}>3</a></li>
                            <li class="page-item"><a class="page-link" href="#" style={{ backgroundColor: '#13345A', border: 'none' }}>...</a></li>
                            <li class="page-item"><a class="page-link" href="#" style={{ backgroundColor: '#13345A', border: 'none' }}>10</a></li>
                            <li class="page-item">
                                <a class="page-link" href="#" aria-label="Next" style={{ backgroundColor: '#13345A', border: 'none' }}>
                                    <span aria-hidden="true">&raquo;</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </footer>
            </div>
        </div>
    )
}

export default Project