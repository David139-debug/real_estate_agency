import { createAsyncThunk  } from "@reduxjs/toolkit";

const propertySlice = createAsyncThunk(
    "property/addProperty",
    async (data) => {
        const res = await fetch("/api/property/addProperty", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })

        return res.json();
    }
)