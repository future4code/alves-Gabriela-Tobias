import { useState } from 'react';

const useForm = (initialState) => {
const [form, setForm] = useState (initialState)

const getData = (event) =>{
    const {name,value} = event.target;
    setForm ({...form,[name]: value});
};
const cleanData = () =>{
    setForm(initialState)
}
return {form, getData, cleanData };

};

export default useForm;