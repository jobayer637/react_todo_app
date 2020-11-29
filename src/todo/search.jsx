import React from 'react'
import { Form, Input } from 'reactstrap';

const Search = ({ value, handleSearch }) => {
    var val = '';
    if (value === 'false') {
         val=''
    }else if (value === 'true') {
        val=''
    }else{val=value}
    return <>
        <Form className="my-2">
            <Input
                value={val}
                onChange={handleSearch}
                type="text"
                autoComplete="off"
                placeholder="Enter your search data"
            />
        </Form>
    </>
}

export default Search