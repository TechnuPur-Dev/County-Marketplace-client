import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import Select from 'react-select'

const Settings = (props) => {
  var axios = require('axios');
  const { styleClass } = props
  const [info, setInfo] = useState(props.info)
  const [provinceData, setProvinceData] = useState([])
  const [cityData, setCityData] = useState([])
  const [allAddress, setAllAddress] = useState(props.allAddress)
  const handleChange = (e) => {
    const { value, name } = e.target;
    setInfo({
      ...info,
      [name]: value
    });
  }
  const fetchApi = (url) => {
    var config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: url,
      headers: {}
    };
    (config.url == `http://countydev92-001-site1.ftempurl.com/api/marketplace/GetPrvinces`) ? (axios(config)
      .then(function (response) {
        console.log(response.data.payload);
        const proData = response.data.payload.map((each_voucher) => {
          return {
            label: each_voucher.province_name,
            value: each_voucher.province_id,

          }

        })

        setProvinceData(proData);

      })
      .catch(function (error) {

      })) : (axios(config)
        .then(function (response) {
          console.log(response.data.payload);
          const ctyData = response.data.payload.map((each_voucher) => {
            return {
              label: each_voucher.city_name,
              value: each_voucher.city_id,

            }

          })

          setCityData(ctyData);

        })
        .catch(function (error) {

        }))
  }
  useEffect(() => {
    var day = new Date(info.birthday).toLocaleDateString(undefined, { day: "2-digit" });
    var month = new Date(info.birthday).toLocaleDateString(undefined, { month: "2-digit" });
    var year = new Date(info.birthday).toLocaleDateString(undefined, { year: "numeric" });
    const dateToday = `${year}-${month}-${day}`;
    setInfo({
      ...info,
      "birthday": dateToday
    });
  }, [info.birthday])
  useEffect(() => {
    fetchApi('http://countydev92-001-site1.ftempurl.com/api/marketplace/GetPrvinces')
    fetchApi('http://countydev92-001-site1.ftempurl.com/api/marketplace/GetCities')
  }, [])

  const UpdateContactInfo = () => {

    var data = JSON.stringify({
      "full_name": info?.full_name,
      "gender": info?.gender,
      "birthday": info?.birthday,
      "contact_no": info?.contact_no
    });
    let token = localStorage.getItem("token");
    var config = {
      method: 'put',
      maxBodyLength: Infinity,
      url: 'http://countydev92-001-site1.ftempurl.com/api/marketplace/putStoreCustomerProfile',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        setInfo(response.data.payload)
        toast.success(
          "Successfully Login"
        );
      })
      .catch(function (error) {
        console.log(error);
      });

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

                      <select name="gender" id="cars" value={info?.gender} onChange={handleChange} style={{ padding: '3px 30px', color: '#B2C2E1', border: 'none', borderBottom: '1px solid #ced4da' }}>
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
                      <input className=" font-sm" type="date" placeholder="Contact *" onChange={handleChange} name="birthday" value={info?.birthday} data-date-format="yyyy mm dd" style={{ border: 'none', color: '#B2C2E1' }} />

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
                  <a className="btn btn-cart w-auto" onClick={UpdateContactInfo}>Save Contact Info</a>
                </div>
              </div>


            </div>
          </form>
        </div>
        {allAddress.map((address, id) => (<> <div className="col-lg-6 mb-20">

          <div className="col-lg-12">
            <div className="row">
              <div className="col-lg-6">
                <h5 className="font-md-bold color-brand-3 mb-20">Shipping address {id + 1}</h5>
              </div>
              <div className="col-lg-6 " style={{ textAlign: 'right' }}>
                <button className="btn btn-sm btn-warning py-1 px-3 mx-1 text-right" >Edit</button>
                <button className="btn btn-sm btn-danger py-1 px-3 text-right" >Delete</button>
              </div>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="form-group">
              <input className="form-control font-sm" type="text" value={address.full_name} placeholder="Full Name*" />
            </div>
          </div>

          <div className="col-lg-12">
            <div className="form-group">
              <input className="form-control font-sm" type="text" value={address.address_line1} placeholder="Address 1*" />
            </div>
          </div>
          <div className="col-lg-12">
            <div className="form-group">
              <input className="form-control font-sm" type="text" value={address.address_line2} placeholder="Address 2*" />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="form-group">
                <Select placeholder="Select City"
                  value={cityData.find(e => e.value == address.city_id) || ''}
                  options={cityData}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-group">
                <Select placeholder="Select Provice"
                 value={provinceData.find(e => e.value == address.province_id) || ''}
                  options={provinceData}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <div className="form-group">
                <input className="form-control font-sm" value={address.landmark} type="text" placeholder="Landmark*" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-group">
                <div className="form-control">
                  <label className="container p-0" style={{ border: 'none', color: '#B2C2E1' }}>Default Address
                    <input type="checkbox" style={{ marginLeft: '20px' }} checked={address.is_default_address=='true'?true:false} />

                  </label>
                </div>
              </div>
            </div>
          </div>



        </div>
        </>))}

      </div>
    </div>
  )
}

export default Settings