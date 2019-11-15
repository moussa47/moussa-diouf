import React, { Component } from 'react';
import {Photo} from './photoData';

const PhotoContext = React.createContext();
export default class ContextPhoto extends Component {
    state ={
        photo: Photo,
        modalOpen: false,
        photoDetail: ''
       
    };
    getItem = (id)=>{
        const photo = this.state.photo.find(item=>
            item.id===id);
            return photo;
 }
   
//  openModal=(id)=>{
    
//      const tempPhoto = this.state.photo.find(photo=>photo.id===id);
//      this.setState({
//         photoDetail: tempPhoto,
//         modalOpen:true
//      })
     

//  }
 

 openModal = (id) =>{
    const photo = this.getItem(id);
    this.setState(()=>{
        return{photoDetail: photo,modalOpen:true}
    })
 }
 closeModal = () =>{
     this.setState(()=>{
         return{modalOpen:false}
     })
 }

handleDetail = (id) =>{
    const photo=this.getItem(id);
    this.setState(()=>{
        return {detailPhoto: photo}
    });
}
    render() {
      
        return (
            <PhotoContext.Provider value={{
                ...this.state,
                openModal: this.openModal,
                closeModal: this.closeModal,
                openModal: this.openModal,
              }}>

                {this.props.children}
            </PhotoContext.Provider>
        )
    }
}
const PhotoConsumer = PhotoContext.Consumer;
export {ContextPhoto,PhotoConsumer}
