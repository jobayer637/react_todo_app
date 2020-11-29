import React, { Component } from 'react'

import InputModal from './modal'
import View from './view'
import Search from './search'

class Todo extends Component {
    state = {
        InputValues: [],
        status: false,
        searchValue: ''
    }

    getInputValues = values => {
        const todo = {
            id: Math.random() * 1000,
            title: values.title,
            desc: values.desc,
            isChecked: false,
            status: false
        }
        this.setState({
            InputValues: [...this.state.InputValues, todo],

        })
    }

    getStatus = s => {
        let InputValues = [...this.state.InputValues]
        let todo = InputValues.find(i => i.id === s)
        todo.status = !todo.status
        this.setState({
            InputValues
        })

    }

    filterJob = sts => {
        if (sts === 'r') {
            this.setState({ searchValue: 'false'})
        }
        if (sts === 'c') {
            this.setState({ searchValue: 'true' })
        }
        if (sts === 'a') {
            this.setState({ searchValue: '' })
        }
        if (sts === 'cl') {
            this.setState({
                InputValues: []
            })
        }
    }

    handleSearch = event => {
        this.setState({
            searchValue: event.target.value
        })
    }

    render() {
        return <div className="card rounded-0">
            <div className="card-header d-flex">
                <InputModal
                    getValues={this.getInputValues}
                />
                <button onClick={() => this.filterJob('r')} className="btn btn-success mx-2">Running Jobs</button>
                <button onClick={() => this.filterJob('c')} className="btn btn-success mx-2">Completed Jobs</button>
                <button onClick={() => this.filterJob('a')} className="btn btn-success mx-2">All Jobs</button>
                <button onClick={() => this.filterJob('cl')} className="btn btn-success mx-2">Clear All Jobs</button>
            </div>

            <div className="card-body">

                <Search
                    handleSearch={this.handleSearch}
                    value={this.state.searchValue}
                />

                <View
                    values={this.state.InputValues}
                    statusFunc={this.getStatus}
                    search={this.state.searchValue}
                    filter={this.state.filter}
                />

            </div>
        </div>
    }
}

export default Todo