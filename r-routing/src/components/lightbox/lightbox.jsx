import React, { Component} from 'react'


export default class Lightbox extends Component {


    render(){
        return (
            <section class="gall-activity">
                <div class="container">
                    <div class="heading">
                        <h2>Some Activity Name <span>Dated: 26/Dec/2022</span></h2>
                        <h6>Place : Noida</h6>
                    </div>
                </div>

                <div class="container">
                    <div class="gall-act">
                        <div class="left-act">
                            <div class="popup-gallery">
                                <div class="box-gall">
                                    <a href="assets/img/client/img-1.jpg" class="image" title="This is a image">
                                        <img src="assets/img/client/img-1.jpg" alt="Alt text" />
                                    </a>
                                    <div class="h-gall-const"></div>
                                </div>

                                <div class="box-gall">
                                    <a href="assets/img/client/img-1.jpg" class="image" title="This is a image">
                                        <img src="assets/img/client/img-1.jpg" alt="Alt text" />
                                    </a>
                                    <div class="h-gall-const"></div>
                                </div>

                            </div>
                        </div>
                        
                    </div>


                </div>
            </section>
        )
    }
}
