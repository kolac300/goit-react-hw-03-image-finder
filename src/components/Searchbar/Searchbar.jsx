import { Field, Formik } from 'formik'
import React, { Component } from 'react'
import { StyledForm } from './Searchbar.styled'
import PropTypes from 'prop-types'
import { toast } from 'react-hot-toast'

const initialValue = {
	search: ''
}
export class Searchbar extends Component {
	static propTypes = {
		updateSearch: PropTypes.func.isRequired,
	}
	onSubmit = (value, ections) => {
		if (value.search === "") {
			toast.error("Nothing searched, Try again")
		} else {
			this.props.updateSearch(value.search)
			ections.resetForm()
		}

	}
	render() {
		return (
			<Formik initialValues={initialValue} onSubmit={this.onSubmit}>
				<StyledForm>
					<Field className='SearchForm-input' type="text" name="search" />
					<button className='SearchForm-button' type='submit'>Find</button>
				</StyledForm>
			</Formik>
		)
	}
}
