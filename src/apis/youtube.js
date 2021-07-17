import axios from 'axios';

const KEY = 'AIzaSyAb7iXxzjV5sj9r3EicDlryFI1qv78otxc';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet', 
    type: 'video',
    maxResults: 5,
    key: KEY
  }
});