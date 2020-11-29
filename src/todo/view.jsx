import React from 'react'
import { Badge, ListGroup, ListGroupItem } from 'reactstrap';


const View = props => {
    const values = props.values

    const status = e => {
        props.statusFunc(e)
    }

    return <>

        <ListGroup>
            {values.filter(value => {

                if (props.search == null) {
                    return value
                } else if (value.title.toLowerCase().includes(props.search.toLowerCase()) || value.status.toString().includes(props.search.toLowerCase())) {
                    return value
                }

            }).map(value => (
                <ListGroupItem className="filterData d-flex justify-content-between">
                    <input type="checkbox" />
                    <Badge className="badge-danger">Id={Math.floor(value.id)}</Badge>
                    <Badge className="badge-warning">Title={value.title}</Badge>
                    <button onClick={() => status(value.id)} className="btn btn-info">{value.status ? 'Completed' : 'Running'}</button>
                </ListGroupItem>
            ))}
        </ListGroup>

    </>
}

export default View