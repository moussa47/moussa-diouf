import React, { Component } from 'react';
import './tourList.scss';
import Tour from '../tours/tour';
import {tourData} from '../../tourData';
export default class TourList extends Component {
    state={
        tours:tourData
    }
    handleClose = (id) =>{
       let {tours}= this.state;
       let sortedTours= tours.filter(tour=>tour.id!==id);
       this.setState({
           tours: sortedTours
       })
        
    }
    render() {
        const {tours} = this.state;
      
        return (
            <section className="tour-list"> 
               {tours.map(item=>{
                return <Tour key={item.id} tours={item} handleClose={this.handleClose}/>

               })}
            </section>
        )
    }
}
