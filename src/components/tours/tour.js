import React, { Component } from 'react'
import './tour.scss';
import {MdClose} from 'react-icons/md';
import {FaCaretSquareDown} from 'react-icons/fa';
export default class Tour extends Component {
    state={
        showInfo: false
    };
    handleInfo = () => {
        this.setState({
            showInfo: !this.state.showInfo
        })
    }
   
    render() {
        const {id,img,name,info,city} =this.props.tours;
        const {handleClose} = this.props
        return (
            <article className="tour">
              <div className="img-container">
                  <img   src={img} alt="" className="img"/>
                  <span className="btn-close" onClick={()=>handleClose(id)}>
                    <MdClose/>
                  </span>
              </div>
              <div className="tour-info">
                  <h3>{city}</h3>
                  <h4>{name}</h4>
                  <h5>
                     info: <span onClick={()=>this.handleInfo()}><FaCaretSquareDown /></span>
                  </h5>
                  <p>
                      {this.state.showInfo && <p>{info}</p> }
                     
                  </p>
              </div>
            </article>
        )
    }
}
