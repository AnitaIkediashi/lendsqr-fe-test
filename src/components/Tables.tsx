import { useState } from 'react'
import FilterDropDown from './FilterDropDown'
import StatusDropDown from './StatusDropDown'
import './table.css'

const Tables = () => {

  const [isShowing, setIsShowing] = useState(false)
  const [isStatusShowing, setIsStatusShowing] = useState(false)

  return (
    <div className="table__wrapper">
      <table className='table'>
        <thead>
          <tr className='hide-border'>
            <th className='table__head' onClick={() => setIsShowing(!isShowing)}>organization&nbsp;&nbsp;</th>
            <th className='table__head'>&nbsp;username</th>
            <th className='table__head'>&nbsp;email</th>
            <th className='table__head'>&nbsp;phone number&nbsp;</th>
            <th className='table__head'>&nbsp;date joined</th>
            <th className='table__head'>status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Lendsqr</td>
            <td>Adedeji</td>
            <td>adedeji@lendsqr.com&nbsp;</td>
            <td>08078903721&nbsp;</td>
            <td>May 15, 2020 10:00 AM&nbsp;</td>
            <td className='td-flex'>
              <span style={{color: '#545F7D', backgroundColor: '#f0f1f5'}}>Inactive</span>
              <i className="fa-solid fa-ellipsis-vertical" onClick={() => setIsStatusShowing(!isStatusShowing)}></i>
            </td>
          </tr>
          <tr>
            <td>Irorun</td>
            <td>Debby Ogana</td>
            <td>debby2@irorun.com&nbsp;</td>
            <td>08160780928&nbsp;</td>
            <td>May 15, 2020 10:00 AM&nbsp;</td>
            <td className='td-flex'>
              <span style={{color: '#E9B200', backgroundColor: '#fff9e6'}}>Pending</span>
              <i className="fa-solid fa-ellipsis-vertical" onClick={() => setIsStatusShowing(!isStatusShowing)}></i>
            </td>
          </tr>
          <tr>
            <td>Lendsqr</td>
            <td>Grace Effiom</td>
            <td>grace@lendstar.com&nbsp;</td>
            <td>07060780922&nbsp;</td>
            <td>May 15, 2020 10:00 AM&nbsp;</td>
            <td className='td-flex'>
              <span style={{color: '#E4033B', backgroundColor: '#ffe6ec'}}>Blacklisted</span>
              <i className="fa-solid fa-ellipsis-vertical" onClick={() => setIsStatusShowing(!isStatusShowing)}></i>
            </td>
          </tr>
          <tr>
            <td>Lendsqr</td>
            <td>Tosin Dokunmu&nbsp;</td>
            <td>tosin@lendsqr.com&nbsp;</td>
            <td>07003309226&nbsp;</td>
            <td>Apr 10, 2020 10:00 AM&nbsp;</td>
            <td className='td-flex'>
              <span style={{color: '#E9B200', backgroundColor: '#fff9e6'}}>Pending</span>
              <i className="fa-solid fa-ellipsis-vertical" onClick={() => setIsStatusShowing(!isStatusShowing)}></i>
            </td>
          </tr>
          <tr>
            <td>Lendsqr</td>
            <td>Grace Effiom</td>
            <td>grace@lendstar.com&nbsp;</td>
            <td>07060780922&nbsp;</td>
            <td>Apr 30, 2020 10:00 AM&nbsp;</td>
            <td className='td-flex'>
              <span style={{color: '#39CD62', backgroundColor: '#ebfaef'}}>Active</span>
              <i className="fa-solid fa-ellipsis-vertical" onClick={() => setIsStatusShowing(!isStatusShowing)}></i>
            </td>
          </tr>
          <tr>
            <td>Lendsqr</td>
            <td>Tosin Dokunmu&nbsp;</td>
            <td>tosin@lendsqr.com&nbsp;</td>
            <td>08060780900&nbsp;</td>
            <td>Apr 10, 2020 10:00 AM&nbsp;</td>
            <td className='td-flex'>
              <span style={{color: '#39CD62', backgroundColor: '#ebfaef'}}>Active</span>
              <i className="fa-solid fa-ellipsis-vertical" onClick={() => setIsStatusShowing(!isStatusShowing)}></i>
            </td>
          </tr>
          <tr>
            <td>Lendsqr</td>
            <td>Grace Effiom</td>
            <td>grace@lendstar.com&nbsp;</td>
            <td>07060780922&nbsp;</td>
            <td>Apr 30, 2020 10:00 AM&nbsp;</td>
            <td className='td-flex'>
              <span style={{color: '#E4033B', backgroundColor: '#ffe6ec'}}>Blacklisted</span>
              <i className="fa-solid fa-ellipsis-vertical" onClick={() => setIsStatusShowing(!isStatusShowing)}></i>
            </td>
          </tr>
          <tr>
            <td>Lendsqr</td>
            <td>Tosin Dokunmu&nbsp;</td>
            <td>tosin@lendsqr.com&nbsp;</td>
            <td>08060780900&nbsp;</td>
            <td>Apr 10, 2020 10:00 AM&nbsp;</td>
            <td className='td-flex'>
              <span style={{color: '#545F7D', backgroundColor: '#f0f1f5'}}>Inactive</span>
              <i className="fa-solid fa-ellipsis-vertical" onClick={() => setIsStatusShowing(!isStatusShowing)}></i>
            </td>
          </tr>
          <tr>
            <td>Lendsqr</td>
            <td>Grace Effiom</td>
            <td>grace@lendstar.com&nbsp;</td>
            <td>07060780922&nbsp;</td>
            <td>Apr 30, 2020 10:00 AM&nbsp;</td>
            <td className='td-flex'>
              <span style={{color: '#545F7D', backgroundColor: '#f0f1f5'}}>Inactive</span>
              <i className="fa-solid fa-ellipsis-vertical" onClick={() => setIsStatusShowing(!isStatusShowing)}></i>
            </td>
          </tr>
        </tbody>
      </table>
      {isShowing && <FilterDropDown />}
      {isStatusShowing && <StatusDropDown />}
    </div>
  )
}

export default Tables