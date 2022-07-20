import React,{ Component } from 'react'
import DateInput from './DateInput'
import Main from './Main'

class Navbar extends Component {
  state = {
    date: new Date(),
    photo: ''
  }
  randomDate = (start, end) => {
    return new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    )
  }

  handleClick = (date) => {
    let ranDate = this.randomDate(new Date(1995, 0o6 - 1, 16), new Date())
    this.changeDate(ranDate)
  }
  formatDate = (date) => {
    return date.toISOString().split('T')[0]
  }
  changeDate = (date) => {
    this.setState({ date: date })
    this.getPhotoByDate(this.formatDate(date))
  }

  getPhotoByDate = date => {
    fetch(`https://api.nasa.gov/planetary/apod?date=${date}&api_key=EGWRigoGliSNC7OlWStee3t6ps1Kbyb8iAT9LlL0`)
      .then((response) => {
        return response.json()
      })
      .then((photoData) => {
        this.setState({ photo: photoData })
      })
  }
  
  componentDidMount(){
    fetch(`https://api.nasa.gov/planetary/apod?api_key=EGWRigoGliSNC7OlWStee3t6ps1Kbyb8iAT9LlL0`)
      .then((response) => {
        return response.json()
      })
      .then((json) => {
        this.setState({ photo: json })
      })
  }

  


  render() {
  return (
    <>
    <div>
        <nav className="flex items-center justify-between  w-full bg-white shadow p-2 dark:bg-gray-800">
          <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
            <div className="container-fluid flex items-center justify-between w-full sm:flex-row md:flex-row lg:flex-row flex-col">
              <h1 className="text-xl text-white pr-2 font-bold text-center" >NASA's Astronomy Picture of the Day</h1>
              <DateInput
            date={this.state.date}
            changeDate={this.changeDate}
            handleClick={this.handleClick}
          />
           
            </div>
          </div>
        </nav>
        <Main photo={this.state.photo} />
      </div>
    </>
    
  )
}
}

export default Navbar