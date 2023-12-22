


const Search = (props) => (

  <div className='flex shadow-lg'>

    <input type="text"
      value={props.searchData}
      onChange={(e) => props.setSearch(e.target.value)}
      className='border border-black  w-full p-2 text-base' />

    <button onClick={props.getWeatherData}
      className='bg-blue-500 text-white w-1/5'>
      Search
    </button>

  </div>
)

export default Search