import {PHOTOS_LOADING, PHOTOS_SUCCESS, PHOTOS_FAILURE} from '../constants'

export function getPhotos() {
    return function (dispatch) {
        dispatch(photosLoading());

        let count = 'per_page=30';
        let key = 'client_id=CLIENT-KEY';
        let url = `https://api.unsplash.com/photos/?${count}&${key}`;
        fetch(url)
            .then(response => response.json())
            .then(photos => {
                dispatch(photosSuccess(photos))
            })
            .catch(error => dispatch(photosFailure(error)))
    }
}

export function photosLoading() {
    return {
        type: PHOTOS_LOADING,
    }
}

export function photosSuccess(payload) {
    return {
        type: PHOTOS_SUCCESS,
        payload
    }
}

export function photosFailure(payload) {
    return {
        type: PHOTOS_FAILURE,
        payload
    }
}



