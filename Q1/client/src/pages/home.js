import logo from './logo.svg';
import './home.css';
import { useEffect, useState } from 'react';
import axios from 'axios'

function Home() {
  const [menu, setMenu] = useState('')
  const [price, setPrice] = useState('')
  const [restoName, setRestoName] = useState([])
  const [order, setOrder] = useState([])
  const [cashierName, setCashierName] = useState('')
  const [checkOut, setCheckOut] = useState(false)

  const url = "http://localhost:3001/order"

  useEffect(() => {
    fetchData()

  }, [])
  useEffect(() => {
    totalPrice()
  }, [fetchData])

  async function fetchData() {
    const getOrder = await axios(url)
    return setOrder(getOrder.data)
  }
  function setresto_name(e) {
    let name = e.target.value
    if (name.length > 30) {
      let resto_name = []
      resto_name.push(name.slice(0, 30))
      resto_name.push(name.slice(31, name.length))
      setRestoName(resto_name)
    } else {
      setRestoName(name)
    }
  }
  function setcashier_name(e) {
    setCashierName(e.target.value)
  }
  function setmenuOrder(e) {
    setMenu(e.target.value)
  }
  function setpriceOrder(e) {
    setPrice(e.target.value.toString())
  }
  async function postData(payload) {
    return await axios.post(url, payload)
  }
  function checkoutOrder(e) {
    e.preventDefault()
    setCheckOut(true)
  }
  function addOrder(e) {
    e.preventDefault()
    const payload = { menu, price }
    postData(payload)
    setMenu('')
    setPrice('')
    fetchData()
  }
  function dot_spacing(menu, price) {
    let dot = []
    const spacing = 30 - menu - price - 5
    for (let i = 0; i < spacing; i++) {
      dot.push('.')
    }
    return dot
  }
  let totalPrice = () => {
    let total_price = 0
    order.map(menu => {
      total_price += Number(menu.price)
    })
    return total_price.toString()
  }
  return (
    <div className="App">
      <img src={logo} className="App-logo mt-0" alt="logo" style={{ width: '100px', marginTop: '0px' }} />
      <div style={{ display: 'flex', width: '100vw', justifyContent: 'center' }}>
        <div className="mr-5">
          <form onSubmit={checkoutOrder}>
            <div className="mb-3">
              <input
                type="text"
                placeholder="Resto Name"
                onChange={setresto_name}
                className="form-control"
                defaultValue={restoName}
              />
            </div>
            <div className="mb-3">
              <input
                type="text"
                placeholder="Cashier Name"
                onChange={setcashier_name}
                className="form-control"
                defaultValue={cashierName}
              />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'baseline' }}>
              <div className="mb-3 mr-3">
                <input
                  type="text"
                  placeholder="Menu"
                  onChange={setmenuOrder}
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  value={menu}
                />
              </div>
              <div className="mb-3 mr-3">
                <input
                  type="number"
                  placeholder="Price"
                  onChange={setpriceOrder}
                  className="form-control"
                  id="exampleInputPassword1"
                  value={price}
                />
              </div>
              <button className="h-50 btn btn-sm btn-success" onClick={addOrder}>Add order</button>
            </div>
            <button type="submit" className="btn btn-danger">Exit</button>
          </form>
        </div>
        <div
          style={{
            backgroundColor: '#edffec',
            width: '250px',
            color: 'black',
            fontSize: '10px'
          }}
        >
          {
            checkOut === true ?
              (
                Array.isArray(restoName) ?
                  restoName.map(el =>
                    <p
                      style={{
                        fontFamily: 'monospace',
                        fontSize: '17px',
                        paddingTop: '10px'
                      }}
                    >
                      {el}
                    </p>
                  ) :
                  <p
                    style={{
                      fontFamily: 'monospace',
                      fontSize: '17px',
                      paddingTop: '10px'
                    }}
                  >
                    {restoName}
                  </p>
              )
              :
              <></>
          }
          {
            checkOut === true ?
              <>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontFamily: 'monospace',
                    fontSize: '15px'
                  }}
                >
                  <p>Tanggal :</p>
                  <p>{new Date().toLocaleString().split(',').join('')}</p>
                </div>
                <div
                  style={{
                    display: 'flex',
                    fontSize: '15px',
                    fontFamily: 'monospace',
                    justifyContent: 'space-between'
                  }}
                >
                  <p>Nama Kasir :</p>
                  <p>{cashierName}</p>
                </div>
                <p
                  style={{
                    fontFamily: 'monospace',
                    fontSize: '15px',
                    display: 'flex',
                    margin: '0px',
                    marginBottom: '10px'
                  }}
                >
                  ==============================
                </p>
              </>
              :
              <></>
          }
          {
            order.map(el =>
              <p
                style={{
                  fontFamily: 'monospace',
                  display: 'flex',
                  marginBottom: '5px',
                  fontSize: '15px'
                }}
              >
                {el.menu}{dot_spacing(el.menu.length, el.price.length)} Rp.{new Intl.NumberFormat('id').format(el.price)}
              </p>
            )
          }
          <p
            style={{
              fontFamily: 'monospace',
              fontSize: '15px',
              display: 'flex',
              margin: '0px'
            }}
          >
            ==============================
          </p>
          <p
            style={{
              fontSize: '15px',
              fontFamily: 'monospace',
              display: 'flex',
              marginTop: '30px'
            }}
          >
            Total{dot_spacing(5, totalPrice().length)} Rp.{new Intl.NumberFormat('id').format(totalPrice())}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
