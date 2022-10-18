import './pagination.css'

const Pagination = () => {
  return (
    <div className="pagination">
      <div className="left">
        <span>Showing</span>
        <input type="number" className='number' />
        <span>out of 100</span>
      </div>
      <div className="right">
        <button><i className="fa-solid fa-chevron-left"></i></button>
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>...</span>
        <span>15</span>
        <span>16</span>
        <button><i className="fa-solid fa-chevron-right"></i></button>
      </div>
    </div>
  )
}

export default Pagination