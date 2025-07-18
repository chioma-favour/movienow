    "use client"

import { Button, Card, CardContent, CardHeader, FormControl, InputLabel, MenuItem, Select, TextField } from "@mui/material"
import { useFormik } from "formik";
import * as yup from "yup";

const schema =yup.object().shape({
  title: yup.string().required("movie title is required").min(5),
  posterUrl:yup.string().url("Please Enter a vid URL "),
  status:yup.string().oneOf(["to-watch","watched"]).required("status is required"),
  Comment:yup.string().required().min(10)
})

export default function MovieList (){

    const {handleSubmit,handleChange,handleBlur,touched,values,errors} = useFormik({
        initialValues: {
            title:"",
            posterUrl:"",
            status:"",
            comment:""
        },
       onSubmit: ()=>{
        console.log(`title: ${values.title}, comment:${values.comment}, status:${values.status} , posterUrl:${values.posterUrl}`)
       },
       validationSchema:schema
    })

    
    return(

        <Card sx={{maxWidth:500, margin:"auto",mt:5,p:2}}>
        <CardHeader  title="Add Movie"/>
        <CardContent>
         <form onSubmit={handleSubmit}
         
         className="flex flex-col gap-4">
          <div>
          <TextField
          fullWidth
          type="text"
          label="Movie Title"
          id="title"
          placeholder="Enter movie Title"
          value={values.title}
          onChange={handleChange}
          />
          {touched.title && errors.title ? <span className="text-red-600">{errors.title}</span> : null}
          </div>

          <div>
          <TextField
          fullWidth
          type="Url"
          label="Enter poster URL"
          id="posterUrl"
          value={values.posterUrl}
          onChange={handleChange}
          placeholder="Enter poster URL"
          />
            {touched.posterUrl && errors.posterUrl ? <span className="text-red-600">{errors.posterUrl}</span> : null}
          </div>

          <FormControl>
            <InputLabel>Status</InputLabel>
            <Select 
            labelId="status-label"
            id="status"
            name="status"
            label="status"
            value={values.status}
            onChange={handleChange}
            onBlur={handleBlur}
            >
                  {touched.status && errors.status? <span className="text-red-600">{errors.status}</span> : null}
            <MenuItem value="to-watch">To-watch</MenuItem>
            <MenuItem value="watched">watched</MenuItem>
            </Select>
            
          </FormControl>


          <div>
            <TextField
            fullWidth
            multiline
            rows={3}
            label="comment"
            id="comment"
            value={values.Comment}
            onChange={handleChange}
            placeholder="Enter comments about movie"
            
            />
            {touched.comment && errors.comment ? <span className="text-red-600">{errors.comment}</span> : null}
          </div>

          <Button type="submit" variant="contained" color="error" fullWidth>ADD MOVIE</Button>
         </form>

        </CardContent>
        </Card>

    
    )
}