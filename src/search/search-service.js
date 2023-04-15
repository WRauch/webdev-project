import axios from 'axios';
import {createAsyncThunk}
  from "@reduxjs/toolkit"

export const findScheduleToday = async (link) => {
    const response = await axios.get(link);
    const data = response.data.dates;
    return data;
}