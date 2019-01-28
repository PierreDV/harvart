const API_KEY = '81c02e10-19a3-11e9-a436-ede6838aae81';
const BASE_URL = 'https://api.harvardartmuseums.org/'
// https://github.com/harvardartmuseums/api-docs

export const FETCH_IMAGES = 'FETCH_IMAGES';

export function fetchImagesAsync(place){
  return (dispatch) => {
    const PLACE_URL = `${BASE_URL}place?apikey=${API_KEY}&q=name:${place}&size=1`;
    fetch(PLACE_URL)
      .then(res => res.json())
      .then((res) => {
        const OBJECT_URL = `${BASE_URL}object?apikey=${API_KEY}&place=${res.records[0].id}&q=people.role:Artist AND imagepermissionlevel:0`
        return fetch(OBJECT_URL)
          .then(result => result.json())
          .then((result) => {
            dispatch(fetchImagesSuccess(result))
  				})
      })
  }
}

export function fetchImagesSuccess(data) {
  return {
    type: FETCH_IMAGES,
    data: data.records
  }
}
