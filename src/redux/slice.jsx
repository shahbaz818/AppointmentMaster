import { createSlice } from '@reduxjs/toolkit';

const appointmentsSlice = createSlice({
  name: 'appointments',
  initialState:[],
  reducers: {
    addAppointment: (state, action) => {
      state.push(action.payload);
    },
    deleteAppointment: (state, action) => {
      return state.filter(appointment => appointment.id !== action.payload);
    },
    clearAll:(sate,action)=>{
      return []
    },
  },
});

export const { addAppointment, deleteAppointment,clearAll} = appointmentsSlice.actions;
export default appointmentsSlice.reducer;
