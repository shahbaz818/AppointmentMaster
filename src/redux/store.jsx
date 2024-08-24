import { configureStore } from "@reduxjs/toolkit";

import appointmentsSlice from './slice'

const store=configureStore({
    reducer:{
        appointments:appointmentsSlice
    }
})

export default store