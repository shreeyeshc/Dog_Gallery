import React from 'react';
import axios from "axios";
import './App.css';
import FeaturedImage from './components/FeaturedImage';
import BreedSelect from './components/BreedSelect';
import ImageGrid from './components/ImageGrid';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedBreed: "",
      imgSrc: [],
      photos: [],
      url: "https://dog.ceo/api/breed/husky/images/random",
      url2: "https://dog.ceo/api/breed/husky/images"
    };

    this.selectOnChange = this.selectOnChange.bind(this);
    this.showImage = this.showImage.bind(this);

  }

  showImage(photo)
  {
    this.setState({
      imgSrc: photo
    });
  }

  componentDidMount() {
    axios
      .get(this.state.url)
      .then(response => {
        return response.data.message;
      })
      .then(imgSrc => {
        this.setState({
          imgSrc
        });
        console.log(this.state.imgSrc);
      });
    
    axios
      .get(this.state.url2)
      .then(response => {
        return response.data.message;
      })
      .then(photos => {
        this.setState({
          photos
        });
        console.log(this.state.photos);
      });
  }

componentDidUpdate(prevProps, prevState, snapshot)
{
  if (this.props.imgSrc !== prevProps.imgSrc) {
    this.fetchData(this.props.imgSrc);
  }
}
  selectOnChange() {
    let selectedBreed = document.getElementById("breedsSelect").value;
    this.setState({
      selectedBreed,
      url: `https://dog.ceo/api/breed/${selectedBreed}images/random`
    });

    axios
      .get(`https://dog.ceo/api/breed/${selectedBreed}images/random`)
      .then(response => {
        return response.data.message;
      })
      .then(imgSrc => {
        this.setState({
          imgSrc
        });
        console.log(this.state.imgSrc);
      });

    axios
      .get(`https://dog.ceo/api/breed/${selectedBreed}images`)
      .then(response => {
        return response.data.message;
      })
      .then(photos => {
        this.setState({
          photos
        });
        console.log(this.state.photos);
      });
    }
  
  render() {
    let dogBreed = "Husky";
    if (this.state.selectedBreed === "husky/") {
      dogBreed = "Husky";
    } else if (this.state.selectedBreed === "retriever/golden/") {
      dogBreed = "Golden Retriever";
    } else if (this.state.selectedBreed === "terrier/american/") {
      dogBreed = "American Terrier";
    }
    return (
      <div className="App">
        <div className="container">
          <div className="jumbotron">
            <h1 className="display-4">{dogBreed} Dog Gallery</h1>
            <h3 className="lead">ITMD-565-schauhan3@hawk.iit.edu</h3>
            <hr className="my-4"></hr>
            <BreedSelect selectOnChange={this.selectOnChange} />
        </div>
            <FeaturedImage imgSrc={this.state.imgSrc} dogBreed={dogBreed} />

            <ImageGrid onPress={this.showImage} photos={this.state.photos} dogBreed={dogBreed} />
        </div>
      </div>
    );
  } 
}

export default App;
