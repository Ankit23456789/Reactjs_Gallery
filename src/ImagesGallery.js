import React, { useState } from 'react'
import ImageData from './ImageData'

const ImagesGallery = () => {
    const [items, setItems] = useState(ImageData);
    const filterItem = (cateimage) => {
        const updatedItem = ImageData.filter((curElem) => {
            return curElem.category === cateimage;

        });
        setItems(updatedItem);

    }
    return (
        <div>
            <div className='menu-tabs container'>
                <div className=' menu-tab text-center d-flex justify-content-around'>
                    <button className='btn btn-danger ' onClick={() => filterItem('sunrise')}> Sunrise  </button>
                    <button className='btn btn-danger ' onClick={() => filterItem('sunset')}> Sunset  </button>
                    <button className='btn btn-danger' onClick={() => filterItem('flower')}> Flower  </button>
                    <button className='btn btn-danger' onClick={() => filterItem('nature')}> Nature  </button>
                    <button className='btn btn-danger' onClick={() => setItems(ImageData)}> All  </button>

                </div>
            </div>
            <div className='container imagebox'>
                <div className='row'>
                    <div className=' col-12 '>
                        <div className='row'>
                            {
                                items.map((elem) => {

                                    return (
                                        <div className='col-12 col-sm-6 col-md-6  col-lg-4 col-xl-4'>
                                            <img src={elem.imageLink} alt=" images" className='img-fluid my-3' />

                                        </div>

                                    )
                                })
                            }
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default ImagesGallery
