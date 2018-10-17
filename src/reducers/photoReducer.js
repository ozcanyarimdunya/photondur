import {PHOTOS_LOADING, PHOTOS_SUCCESS, PHOTOS_FAILURE} from '../constants'

const initialState = {
    photos: [],
    isLoading: false,
    error: null
};

export default function (state = initialState, action) {
    switch (action.type) {
        case PHOTOS_LOADING:
            return {
                ...state,
                isFetching: true,
                photos: [],
                error: null
            };
        case PHOTOS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                photos: action.payload,
                error: null
            };
        case PHOTOS_FAILURE:
            return {
                ...state,
                isFetching: false,
                photos: [],
                error: action.payload,
            };
        default:
            return state
    }
}