import { ImageGalleryItem } from 'components/ImageGallery/ImageGalleryItem/ImageGalleryItem'
import React, { Component } from 'react'
import { Ul } from './ImageGallery.styled'
import PropTypes from 'prop-types'

export class ImageGallery extends Component {
	static propTypes = {
		images: PropTypes.arrayOf(PropTypes.shape({
			id: PropTypes.number.isRequired,
			webformatURL: PropTypes.string.isRequired,
			largeImageURL: PropTypes.string.isRequired,
		}),).isRequired,
		showModal: PropTypes.func.isRequired,
	}
	render() {
		const { images, showModal } = this.props
		return (
			<Ul>{images.map(image =>
				<ImageGalleryItem key={image.id}
					id={image.id}
					showModal={showModal}
					smallViewURL={image.webformatURL}
					bigViewURL={image.largeImageURL}
				/>)}</Ul>
		)
	}
}
