import React, { PureComponent } from "react";
// import Masonry from 'react-masonry-component';
// import a from '../../assets/gallery/_RPR9219-min.jpg';
// import b from '../../assets/gallery/_RPR9253-min.jpg';
// import c from '../../assets/gallery/_RPR9352-min.jpg';
// import d from '../../assets/gallery/_RPR9361-min.jpg';
// import e from '../../assets/gallery/_RPR9382-min.jpg';
// import f from '../../assets/gallery/_RPR9388-min.jpg';
// import g from '../../assets/gallery/_RPR9428-min.jpg';
// import h from '../../assets/gallery/_RPR9446-min.jpg';
// import i from '../../assets/gallery/_RPR9475-min.jpg';
// import j from '../../assets/gallery/_RPR9508-min.jpg';
// import k from '../../assets/gallery/_RPR9560-min.jpg';
// import l from '../../assets/gallery/_RPR9571-min.jpg';
// import m from '../../assets/gallery/_RPR9574-min.jpg';
// import n from '../../assets/gallery/_RPR9589-min.jpg';

// const masonryOptions = {
//     transitionDuration: 0
// };

// const images = [a, b, c, d, e, f, g, h, i, j, k, l, m, n];

export class Gallery extends PureComponent {
    render() {
        // const childElements = images.map(function(element){
        //     return (
        //         <li className="image-element-class">
        //             <img src={element} alt="gallery" />
        //         </li>
        //     );
        // });
        return (
            <section className="image-gallery container">
                {/* <Masonry
                className={'my-gallery-class'}
                elementType={'ul'}
                options={masonryOptions}
                disableImagesLoaded={false}
                updateOnEachImageLoad={false}>
                    {childElements}
            </Masonry> */}
            </section>
        );
    }
}