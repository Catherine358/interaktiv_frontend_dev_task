import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { data } from '../redux/mockData';

const initialState = {
    courses: [],
    isCoursesLoading: false,
    error: ''
};

export const fetchCourses = createAsyncThunk('courses/fetchCourses', async () => {
    const result = await new Promise((resolve, reject) => {
        setTimeout(resolve(data), Math.random() * 1000);
    });
    return result.data;
});

// in redux docs is written that using only redux is already deprecated
const slice = createSlice({
    name: 'courses',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchCourses.fulfilled, (state, { payload }) => {
            // I have no idea what the data looks like and I believe in BE, but in case courses are not grouped by category
            state.courses = payload.courses.reduce((arr, curr) => {
                const existingCategoryInd = arr.findIndex((c) => c.name === curr.category);
                if (existingCategoryInd < 0) {
                    return [...arr, {
                        name: curr.category,
                        image: curr.image,
                        courses: [curr]
                    }];
                }
                arr[existingCategoryInd].courses.push(curr);
                return arr;
            }, []);
            state.isCoursesLoading = false;
        });
        builder.addCase(fetchCourses.rejected, (state, { error }) => {
            state.courses = initialState.courses;
            state.error = error ? error.message : '';
            state.isCoursesLoading = false;
        });
        builder.addCase(fetchCourses.pending, (state) => {
            state.isCoursesLoading = true;
        });
    }
});

export const coursesReducer = slice.reducer;

export const getCourses = (state) => state.courses.courses;
