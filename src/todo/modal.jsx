import React from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';


class InputModal extends React.Component {

    state = {
        mx: false,
        values: {
            title: '',
            desc: '',
        }
    }

    openModal = () => {
        this.setState({
            mx: !this.state.mx
        })
    }

    handleChange = event => {
        this.setState({
            values: {
                ...this.state.values,
                [event.target.name]: event.target.value
            }
        })
    }

    formHandle = event => {
        event.preventDefault()
        this.props.getValues(this.state.values)
        event.target.reset()
        this.setState({
            values: {
                title: '', desc: ''
            }
        })
    }

    render() {
        return <>
            <div>
                <Button className="btn btn-priamry" onClick={this.openModal}>Add New Job</Button>
                <Modal isOpen={this.state.mx}>
                    <ModalHeader>
                        This is modal header
                    </ModalHeader>
                    <form onSubmit={this.formHandle}>
                        <ModalBody>
                            <input type="text" name="title" onChange={this.handleChange} value={this.state.values.title} className="form-control rounded-0" placeholder="Enter Title" />
                            <textarea name="desc" rows="3" onChange={this.handleChange} value={this.state.values.desc} className="form-control rounded-0 my-2" placeholder="Enter Description..."></textarea>
                        </ModalBody>

                        <ModalFooter>
                            <Button color="secondary" type="submit" >Save</Button>
                            <Button color="secondary" onClick={this.openModal}>Close</Button>
                        </ModalFooter>
                    </form>
                </Modal>
            </div>

        </>
    }
}


export default InputModal