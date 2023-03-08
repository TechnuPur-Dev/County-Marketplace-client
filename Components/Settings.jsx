import React, { useState } from 'react'

const Settings = (props) => {
  const { styleClass } = props
  const [info, setInfo] = useState(props.info)
  const handleChange=(e)=>{
    const {value,name} = e.target;
    setInfo({
      ...info,
      [name]: value
    });
    console.log(info,'infooo');
  }
  return (
    <div className={styleClass} id="tab-setting" role="tabpanel" aria-labelledby="tab-setting">
      <div className="row mb-2">
        <div className="col-lg-6"></div>
        <div className="col-lg-6 " style={{ textAlign: 'right' }}>
          <button className="btn btn-sm btn-success py-2">Add New Address</button>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 mb-20">
          <form action="#" method="get">
            <div className="row">
              <div className="col-lg-12 mb-20">
                <h5 className="font-md-bold color-brand-3 text-sm-start text-center">Contact information</h5>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <input className="form-control font-sm" type="text" name="full_name" value={info?.full_name} onChange={handleChange} placeholder="Fullname *" />
                </div>
              </div>

              <div className="col-lg-12 mb-3">
                <div className=" form-control">
                  <div className="row ">
                    <div className="col-lg-6">

                      <input className=" font-sm" type="text" value="Gender *" style={{ border: 'none', color: '#B2C2E1' }} readonly="readonly" />
                    </div>
                    <div className="col-lg-6">

                      <select name="gender" id="cars" value={info?.gender} onChange={handleChange} style={{ padding: '3px 30px', color: '#B2C2E1' }}>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other"> Other</option>

                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-12 mb-3">
                <div className=" form-control">
                  <div className="row ">
                    <div className="col-lg-6">

                      <input className=" font-sm" type="text" value="Date of Birth *" style={{ border: 'none', color: '#B2C2E1' }} readonly="readonly" />
                    </div>
                    <div className="col-lg-6">
                      <input className=" font-sm" type="date" placeholder="Contact *" onChange={handleChange} name="birthday" value={info?.birthday} style={{ border: 'none', color: '#B2C2E1' }} />

                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="form-group">
                  <input className="form-control font-sm" type="text" name="contact_no" onChange={handleChange} placeholder="Contact *" value={info?.contact_no} />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group mt-20">
                  <a className="btn btn-cart w-auto">Save Contact Info</a>
                </div>
              </div>


            </div>
          </form>
        </div>

        <div className="col-lg-6 mb-20">

          <div className="col-lg-12">
            <div className="row">
              <div className="col-lg-6">
                <h5 className="font-md-bold color-brand-3 mb-20">Shipping address</h5>
              </div>
              <div className="col-lg-6 " style={{ textAlign: 'right' }}>
                <button className="btn btn-sm btn-warning py-1 px-3 text-right" >Edit</button>
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="form-group">
              <input className="form-control font-sm" type="text" placeholder="Full Name*" />
            </div>
          </div>

          <div className="col-lg-12">
            <div className="form-group">
              <input className="form-control font-sm" type="text" placeholder="Address 1*" />
            </div>
          </div>
          <div className="col-lg-12">
            <div className="form-group">
              <input className="form-control font-sm" type="text" placeholder="Address 2*" />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="form-group">
                <input className="form-control font-sm" type="text" placeholder="City Id*" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-group">
                <input className="form-control font-sm" type="text" placeholder="State/Province Id*" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="form-group">
                <input className="form-control font-sm" type="text" placeholder="Landmark*" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-group">
                <div className="form-control">
                  <label className="container p-0" style={{ border: 'none', color: '#B2C2E1' }}>Default Address
                    <input type="checkbox" style={{ marginLeft: '20px' }} />

                  </label>
                </div>
              </div>
            </div>
          </div>



        </div>

      </div>
    </div>
  )
}

export default Settings