import { fetchImages } from './Helper/Api';
import React, { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';
import { Wrapper } from './App.styled';
import { Toaster, toast } from 'react-hot-toast';
import Loader from './Loader/Loader';
export default class App extends Component {
  state = {
    search: '',
    images: [],
    page: 1,
    modal: false,
    modalURL: '',
    isLoading: false,
    isActiveButton: false,
  };
  componentDidUpdate(_, prevState) {
    const { search, page } = this.state;

    if (prevState.search !== search || prevState.page !== page) {
      this.setState({ isLoading: true });
      fetchImages(search, page)
        .then(images => {
          const { hits, totalHits } = images;
          if (hits.length) {
            this.setState(prev => ({
              images: [...prev.images, ...hits],
              isActiveButton: true,
            }));
            if (totalHits < page * 12) {
              this.setState({ isActiveButton: false });
            }
          } else toast.error(`any pictures weren't found`);
        })
        .catch(er => {
          toast.error(`something is wrong, try again`);
        })
        .finally(() => this.setState({ isLoading: false }));
    }
  }

  updateSearch = search => {
    if (this.state.search === search)
      toast.error(`you have alredy found ${search}`);
    else
      this.setState({
        search: search,
        page: 1,
        images: [],
      });
  };
  updatePage = () => {
    this.setState(prev => ({
      page: prev.page + 1,
    }));
  };
  toggleModal = url => {
    this.setState(prev => ({
      modal: !prev.modal,
      modalURL: url,
    }));
  };

  render() {
    const {
      updateSearch,
      toggleModal,
      updatePage,
      state: { images, modalURL, isLoading, modal, isActiveButton },
    } = this;

    return (
      <Wrapper>
        <Toaster position="top-center" reverseOrder={false} />
        <Searchbar updateSearch={updateSearch} />
        <ImageGallery showModal={toggleModal} images={images} />
        {isLoading && <Loader />}
        {isActiveButton && !isLoading && <Button updatePage={updatePage} />}
        {modal && <Modal toggleModal={toggleModal} modalURL={modalURL} />}
      </Wrapper>
    );
  }
}
