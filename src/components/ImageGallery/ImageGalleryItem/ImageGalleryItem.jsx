import React, { Component } from 'react'
import { Li } from './ImageGalleryItem.styled'
import PropTypes from 'prop-types'

export class ImageGalleryItem extends Component {
	static propTypes = {
		smallViewURL: PropTypes.string.isRequired,
		id: PropTypes.number.isRequired,
		bigViewURL: PropTypes.string.isRequired,
		showModal: PropTypes.func.isRequired,
	}
	render() {
		const { showModal, id, bigViewURL, smallViewURL } = this.props
		return (

			<Li onClick={() =>
				showModal(id, bigViewURL)}>
				<img src={smallViewURL}
					alt="pictures" /></Li>

		)
	}
}
