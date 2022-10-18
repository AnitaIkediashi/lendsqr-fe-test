import { idText } from 'typescript'
import './widgets.css'

const userData = [
    {
      id: 1,
      icon: (<i className="fa-solid fa-user-group icon" style={{color: "#DF18FF", backgroundColor: "#fce6ff"}}></i>),
      title: 'USERS',
      num: '2,453'
    },
    {
      id: 2,
      icon: (<i className="fa-solid fa-users icon" style={{color: "#5718FF", backgroundColor: "#ece6ff"}}></i>),
      title: 'ACTIVE USERS',
      num: '2,453'
    },
    {
      id: 3,
      icon: (<i className="fa-solid fa-user-group icon" style={{color: "#F55F44", backgroundColor: "#feeae7"}}></i>),
      title: 'USERS WITH LOANS',
      num: '12,453'
    },
    {
      id: 4,
      icon: (<i className="fa-solid fa-coins icon" style={{color: "#FF3366", backgroundColor: "#ffe6ec"}}></i>),
      title: 'USERS WITH SAVINGS',
      num: '102,453'
    }
  ]

const Widgets = () => {

  return (
    <div className="widgets">
      <h2>Users</h2>
      <div className="widgets__container">
        {
          userData.map(({ id, icon, title, num }) => {
            return (
              <article className="widget" key={id}>
                <i className="icon">{icon}</i>
                <h3>{title}</h3>
                <div className="number">{num}</div>
              </article>
            )
          })
        }
      </div>
    </div>
  )
}

export default Widgets