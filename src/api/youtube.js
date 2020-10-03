import axios from 'axios';

const KEY = 'AIzaSyBxKP1LfAvMaSj7ybDds4zVPZ3RsQZGJI4';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
      part: 'snippet',
      type: 'video',
      maxResults: 5,
      key: KEY
    }
});
