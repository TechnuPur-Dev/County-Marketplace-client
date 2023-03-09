import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import Select from 'react-select'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
const Settings = (props) => {
  var axios = require('axios');

  const { styleClass } = props
  const [info, setInfo] = useState(props.info)
  const [provinceData, setProvinceData] = useState([])
  const [cityData, setCityData] = useState([])
  const [allAddress, setAllAddress] = useState(props.allAddress)
  const [addressId, setAddressId] = useState(-1)
  let [validation, setValidtation] = useState(false);
  const [changeAddress, setChangeAddress] = useState({
    full_name: "",
    address_line1: "",
    address_line2: "",
    city_id: 0,
    state_province_id: 0,
    landmark: "",
    is_default_address: false,

  })
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (address) => {
    if (address) {
      console.log(address.address_id);
      setShow(true)
      setChangeAddress({
        full_name: address.full_name,
        address_line1: address.address_line1,
        address_line2: address.address_line2,
        city_id: address.city_id,
        state_province_id: address.province_id,
        landmark: address.landmark,
        is_default_address: (address.is_default_address == 'true') ? true : false
      })
      setAddressId(address.address_id)
    }
    else {
      setShow(true)
      setAddressId(-1)
      setChangeAddress({
        full_name: "",
        address_line1: "",
        address_line2: "",
        city_id: 0,
        state_province_id: 0,
        landmark: "",
        is_default_address: false
      })

    }
  }
  const handleChange = (e) => {
    console.log(e, e.target);
    const { value, name } = e.target;
    setChangeAddress({
      ...changeAddress,
      [name]: value
    });
  }
  const handleInfoChange = (e) => {

    const { value, name } = e.target;
    setInfo({
      ...info,
      [name]: value
    });
    console.log(info);
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
    if (info.birthday != null) {
      var day = new Date(info.birthday).toLocaleDateString(undefined, { day: "2-digit" });
      var month = new Date(info.birthday).toLocaleDateString(undefined, { month: "2-digit" });
      var year = new Date(info.birthday).toLocaleDateString(undefined, { year: "numeric" });
      const dateToday = `${year}-${month}-${day}`;
      setInfo({
        ...info,
        "birthday": dateToday
      });
    }
  }, [info.birthday])
  useEffect(() => {
    fetchApi('http://countydev92-001-site1.ftempurl.com/api/marketplace/GetPrvinces')
    fetchApi('http://countydev92-001-site1.ftempurl.com/api/marketplace/GetCities')
  }, [])
  const AddAddress = () => {
    let token = localStorage.getItem("token");
    let validate = false;
    if (changeAddress.full_name == '' || changeAddress.address_line1 == ''
      || changeAddress.address_line2 == '' || changeAddress.city_id == 0
      || changeAddress.state_province_id == 0 || changeAddress.landmark == '')
      validate = true;
    setValidtation(validate)
    if (!validate) {
      var data = JSON.stringify(changeAddress);

      var config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'http://countydev92-001-site1.ftempurl.com/api/marketplace/postCustomerAddressBook',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        data: data
      };

      axios(config)
        .then(function (response) {
          toast.success(
            response.data.message
          );
          handleClose()
          getAddres()

        })
        .catch(function (error) {
          toast.error(
            error.response.data.Message
          );
        });
    }
  }
  const EditAddress = () => {
    let token = localStorage.getItem("token");
    let validate = false;
    if (changeAddress.full_name == '' || changeAddress.address_line1 == ''
      || changeAddress.address_line2 == '' || changeAddress.city_id == 0
      || changeAddress.state_province_id == 0 || changeAddress.landmark == '')
      validate = true;
    setValidtation(validate)
    if (!validate) {
      var data = JSON.stringify(changeAddress);

      var config = {
        method: 'put',
        maxBodyLength: Infinity,
        url: `http://countydev92-001-site1.ftempurl.com/api/marketplace/putCustomerAddressBook?address_id=${addressId}`,
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        data: data
      };

      axios(config)
        .then(function (response) {
          toast.success(
            response.data.message
          );
          handleClose()
          getAddres()

        })
        .catch(function (error) {
          toast.error(
            error.response.data.Message
          );
        });
    }
  }
  const getAddres = () => {
    let token = localStorage.getItem("token");
    var config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'http://countydev92-001-site1.ftempurl.com/api/marketplace/GetCustomerAddressBook',
      headers: {
        'Authorization': `Bearer ${token}`
      },

    };

    axios(config)
      .then(function (response) {
        setAllAddress(response.data.payload)
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  const UpdateContactInfo = () => {
    let token = localStorage.getItem("token");
    let validate = false;
    if (info.full_name == '' 
    // || info.gender == '' || info.gender == null
      || info?.birthday == '' || info?.birthday == null
      || info?.contact_no == '' || info?.contact_no == null)
      validate = true;
    setValidtation(validate)
    if (!validate) {
      var data = JSON.stringify({
        "full_name": info?.full_name,
        "gender": info?.gender,
        "birthday": info?.birthday,
        "contact_no": info?.contact_no
      });
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
            "Contact Info Updated"
          );


        })
        .catch(function (error) {
          toast.error(
            error.response.data.Message
          );
        });
    }
  }
  const DeleteAddress = (id) => {
    let token = localStorage.getItem("token");
    var config = {
      method: 'delete',
      maxBodyLength: Infinity,
      url: `http://countydev92-001-site1.ftempurl.com/api/marketplace/DeleteCustomerAddressBook?address_id=${id}`,
      headers: {
        'Authorization': `Bearer ${token}`
      },

    };

    axios(config)
      .then(function (response) {
        toast.success(
          response.data.message
        );
        getAddres()
      })
      .catch(function (error) {
        toast.error(
          error.response.data.Message
        );
      });

  }
  return (
    <div className={styleClass} id="tab-setting" role="tabpanel" aria-labelledby="tab-setting">
      <div className="row mb-2">
        <div className="col-lg-6"></div>
        <div className="col-lg-6 " style={{ textAlign: 'right' }}>
          <button className="btn btn-sm btn-success py-2" onClick={() => handleShow()}>Add New Address</button>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 mb-5">
          <form action="#" method="get">
            <div className="row">
              <div className="col-lg-12 mb-2">
                <h5 className="font-md-bold color-brand-3 text-sm-start text-center">Contact information</h5>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                </div>
              </div>
              <div className="col-lg-12 mb-3">
                <div className=" form-control">
                  <div className="row ">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-5">

                      <input className=" font-sm" type="text" value="Full Name *" style={{ border: 'none', color: '#425A8B ' }} readonly="readonly" />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-5">

                      <input className=" font-sm" type="text" name="full_name" value={info?.full_name} onChange={handleInfoChange} placeholder="Fullname *" style={{ color: '#B2C2E1', border: 'none', borderBottom: '1px solid #ced4da', textAlign: 'center' }} />

                    </div>

                  </div>

                </div>
                {validation && info.full_name == '' && <span className="error">This field is required !</span>}
              </div>

              <div className="col-lg-12 mb-3">
                <div className=" form-control">
                  <div className="row ">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-5">

                      <input className=" font-sm" type="text" value="Gender *" style={{ border: 'none', color: '#425A8B ' }} readonly="readonly" />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-5">

                      <select name="gender" id="cars" value={info?.gender} onChange={handleInfoChange} style={{ padding: '3px 45px', color: '#B2C2E1', border: 'none', borderBottom: '1px solid #ced4da', textAlign: 'center' }}>
                        <option value="male">Male</option>
                        <option value="female">Female</option></select>
                    </div>
                  </div>
                </div>
                {/* {validation && (info.gender == '' || info.gender == null) && <span className="error">This field is required !</span>} */}
              </div>
              <div className="col-lg-12 mb-3">
                <div className=" form-control">
                  <div className="row ">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-5">

                      <input className=" font-sm" type="text" value="Date of Birth *" style={{ border: 'none', color: '#425A8B ' }} readonly="readonly" />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-5">
                      <input className=" font-sm" type="date" onChange={handleInfoChange} name="birthday" value={info?.birthday} data-date-format="yyyy mm dd" style={{ padding: '3px 16px', color: '#B2C2E1', border: 'none', borderBottom: '1px solid #ced4da', textAlign: 'center' }} />

                    </div>
                  </div>
                </div>
                {validation &&( info.birthday == 'Invalid Date-Invalid Date-Invalid Date' || info.birthday == null) && <span className="error">This field is required !</span>}
              </div>
              <div className="col-lg-12 mb-3">
                <div className=" form-control">
                  <div className="row ">
                    <div className="col-lg-6 col-md-6 col-sm-6 col-5">

                      <input className=" font-sm" type="text" value="Contact No *" style={{ border: 'none', color: '#425A8B ' }} readonly="readonly" />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 col-5">

                      <input className=" font-sm" type="text" name="contact_no" onChange={handleInfoChange}  value={info?.contact_no} style={{ color: '#B2C2E1', border: 'none', borderBottom: '1px solid #ced4da', textAlign: 'center' }} />

                    </div>
                  </div>
                </div>
                {validation && (info.contact_no == '' || info.contact_no == null) && <span className="error">This field is required !</span>}
              </div>

              <div className="col-lg-12">
                <div className="form-group mt-20">
                  <a className="btn btn-cart w-auto" onClick={UpdateContactInfo}>Save Contact Info</a>
                </div>
              </div>


            </div>
          </form>
        </div>
        {allAddress?.map((address, id) => (<> <div className="col-lg-6 mb-20">

          <div className="col-lg-12">
            <div className="row">
              <div className="col-lg-6">
                <h5 className="font-md-bold color-brand-3 mb-20">Shipping address {id + 1}</h5>
              </div>
              <div className="col-lg-6 " style={{ textAlign: 'right' }}>
                <button className="btn btn-sm btn-warning py-1 px-3 mx-1 text-right" onClick={() => handleShow(address)} >Edit</button>
                <button className="btn btn-sm btn-danger py-1 px-3 text-right" onClick={() => { DeleteAddress(address.address_id) }}>Delete</button>
              </div>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-lg-6">
              <div className="form-control">
                <div className="row">

                  <div className="col-lg-3 col-md-3 col-sm-3 col-3">

                    <input className=" font-sm" type="text" value="Name *" style={{ border: 'none', color: '#425A8B ' }} readonly="readonly" />
                  </div>
                  <div className="col-lg-9 col-md-9 col-sm-9 col-9">
                    <input className=" font-sm" type="text" value={address.full_name} style={{ color: '#B2C2E1', border: 'none', borderBottom: '1px solid #ced4da', textAlign: 'center' }} readonly="readonly" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-control">
                <div className="row">

                  <div className="col-lg-6 col-md-6 col-sm-6 col-5">

                    <input className=" font-sm" type="text" value="Default Address *" style={{ border: 'none', color: '#425A8B ' }} readonly="readonly" />
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-6 col-5">
                    <input type="checkbox" style={{ marginLeft: '20px' }} checked={address.is_default_address == 'true' ? true : false} readonly="readonly" />


                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-12 mb-3">
            <div className=" form-control">
              <div className="row ">
                <div className="col-lg-4 col-md-4 col-sm-4 col-4">

                  <input className=" font-sm" type="text" value="Address 1 *" style={{ border: 'none', color: '#425A8B ' }} readonly="readonly" />
                </div>
                <div className="col-lg-8 col-md-8 col-sm-8 col-8">

                  <input className=" font-sm" type="text" value={address.address_line1} readonly="readonly" placeholder="Fullname *" style={{ color: '#B2C2E1', border: 'none', borderBottom: '1px solid #ced4da', textAlign: 'center' }} />

                </div>
              </div>
            </div>
          </div> <div className="col-lg-12 mb-3">
            <div className=" form-control">
              <div className="row ">
                <div className="col-lg-4 col-md-4 col-sm-4 col-4">

                  <input className=" font-sm" type="text" value="Address 2 *" style={{ border: 'none', color: '#425A8B ' }} readonly="readonly" />
                </div>
                <div className="col-lg-8 col-md-8 col-sm-8 col-8">

                  <input className=" font-sm" type="text" value={address.address_line2} readonly="readonly" placeholder="Fullname *" style={{ color: '#B2C2E1', border: 'none', borderBottom: '1px solid #ced4da', textAlign: 'center' }} />

                </div>
              </div>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-lg-6">
              <div className="form-control">
                <div className="row">

                  <div className="col-lg-3 col-md-3 col-sm-3 col-3">

                    <input className=" font-sm" type="text" value="City *" style={{ border: 'none', color: '#425A8B ' }} readonly="readonly" />
                  </div>
                  <div className="col-lg-9 col-md-9 col-sm-9 col-9">
                    <input className=" font-sm" type="text" value={address.city_name} style={{ color: '#B2C2E1', border: 'none', borderBottom: '1px solid #ced4da', textAlign: 'center' }} readonly="readonly" />


                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="form-control">
                <div className="row">
                  <div className="col-lg-3 col-md-3 col-sm-3 col-3">

                    <input className=" font-sm" type="text" value="State *" style={{ border: 'none', color: '#425A8B ' }} readonly="readonly" />
                  </div>

                  <div className="col-lg-9 col-md-9 col-sm-9 col-9">
                    <input className=" font-sm" type="text" value={address.province_name} style={{ color: '#B2C2E1', border: 'none', borderBottom: '1px solid #ced4da', textAlign: 'center' }} readonly="readonly" />


                  </div>
                </div>
              </div>
            </div>
          </div>




        </div>
        </>))}
        <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
          <Modal.Header  >
            <Modal.Title >Edit/Add Address</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="col-lg-12 mb-10">

              <div className="col-lg-12">
                <div className="row">
                  <div className="col-lg-6">
                    <h5 className="font-md-bold color-brand-3 mb-20">Shipping address</h5>
                  </div>

                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <input className="form-control font-sm" type="text" value={changeAddress.full_name} name="full_name" onChange={handleChange} placeholder="Full Name*" />
                  {validation && changeAddress.full_name == '' && <span className="error">This field is required !</span>}
                </div>

              </div>

              <div className="col-lg-12">
                <div className="form-group">
                  <input className="form-control font-sm" type="text" value={changeAddress.address_line1} name="address_line1" onChange={handleChange} placeholder="Address 1*" />
                  {validation && changeAddress.address_line1 == '' && <span className="error">This field is required !</span>}
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <input className="form-control font-sm" type="text" value={changeAddress.address_line2} name="address_line2" onChange={handleChange} placeholder="Address 2*" />
                  {validation && changeAddress.address_line2 == '' && <span className="error">This field is required !</span>}

                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group">

                    <Select placeholder="Select City"
                      value={cityData.find(e => e.value == changeAddress.city_id) || ''}
                      onChange={(e) => {
                        setChangeAddress({
                          ...changeAddress,
                          city_id: e.value
                        });
                      }}
                      name="city_id"
                      options={cityData}
                    />
                    {validation && changeAddress.city_id == 0 && <span className="error">This field is required !</span>}

                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <Select placeholder="Select Provice"
                      value={provinceData.find(e => e.value == changeAddress.state_province_id) || ''}
                      name="state_province_id"
                      onChange={(e) => {
                        setChangeAddress({
                          ...changeAddress,
                          state_province_id: e.value
                        });
                      }}
                      options={provinceData}
                    />
                    {validation && changeAddress.state_province_id == 0 && <span className="error">This field is required !</span>}

                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6">
                  <div className="form-group">
                    <input className="form-control font-sm" value={changeAddress.landmark} onChange={handleChange} name="landmark" type="text" placeholder="Landmark*" />
                    {validation && changeAddress.landmark == 0 && <span className="error">This field is required !</span>}

                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <div className="form-control">
                      <label className="container p-0" style={{ border: 'none', color: '#B2C2E1' }}>Default Address
                        <input type="checkbox" style={{ marginLeft: '20px' }} onChange={(e) => {

                          setChangeAddress({
                            ...changeAddress,
                            is_default_address: e.target.checked
                          });
                        }} name="is_default_address"

                          checked={changeAddress.is_default_address}
                        />

                      </label>
                    </div>
                  </div>
                </div>
              </div>



            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={() => { { (addressId == -1) ? AddAddress() : EditAddress() } }} >
              {(addressId == -1) ? 'Add' : 'Edit'}
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  )
}

export default Settings