import { useState } from "react";

export default function useForm (initialValues) {
    const [form, setForm] = useState(initialValues)
  
    const onChange = (value, name) => {
      setForm({ ...form, [name]: value })
    };
  
    return { form, onChange };
};