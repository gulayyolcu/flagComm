import React from 'react'
import "./accordion.css"
import singlesided from "./image/Single-Sided.jpg"
import doublesided from "./image/Double-Sided.jpg"
import poleset from "./image/Pole-Set.jpg"
import groundstake from "./image/Base-Ground-Stake.jpg"
import squarebase from "./image/Base-Square-Base.jpg"
import crossbase from "./image/Base-Cross-Base.jpg"
import waterbag from "./image/Base-Cross-Base-with-Water-Bag.jpg"
import carringcase from "./image/carrying-case.jpg"

const Accordion = () => {
    return (
        <div className="accordion">
            <form>
                                <div className="sizeDiv">
                                    <p>Size</p>
                                    <select name="size" id="size" className="size">
                                        <option>Size</option>
                                        <option value="small">Small (24.25"x79.5")</option>
                                        <option value="medium">Medium (25.5"x105.5")</option>
                                        <option value="large">Large (29.5"x139.5")</option>
                                        <option value="x-large">X-Large (27"x191")</option>   
                                    </select>
                                </div>
                                <div className="quantity">
                                    <p>Quantity</p>
                                    <input type="number" id="quantity" name="quantity" />
                                </div>
                            </form>
            <div>
                <input type="radio" name="example_accordion" id="section1" class="accordion__input"/>
                <label for="section1" class="accordion__label">Printed Sides: Single Sided</label>
                <div class="accordion__content">
                    <div class="radio-buttons">
                        <label class="custom-radio">
                        <input type="radio" name="radio" checked />
                        <span class="radio-btn"
                            ><i class="las la-check"></i>
                            <div class="hobbies-icon">
                                <img src={singlesided} alt="/"/>
                            </div>
                        </span>
                        </label>
                        <label class="custom-radio">
                        <input type="radio" name="radio" />
                        <span class="radio-btn"
                            ><i class="las la-check"></i>
                            <div class="hobbies-icon">
                            <img src={doublesided} alt="/"/>
                            </div>
                        </span>
                        </label>
                        
                    </div>

                </div>
            </div>
            <div>
                <input type="radio" name="example_accordion" id="section2" class="accordion__input"/>
                <label for="section2" class="accordion__label">Poles: Pole Set</label>
                <div class="accordion__content">
                    <div class="radio-buttons">
                        <label class="custom-radio">
                        <input type="radio" name="radio" checked />
                        <span class="radio-btn"
                            ><i class="las la-check"></i>
                            <div class="hobbies-icon">
                                <img src={poleset} alt="/"/>
                            </div>
                        </span>
                        </label>
                        <label class="custom-radio">
                        <input type="radio" name="radio" />
                        <span class="radio-btn"
                            ><i class="las la-check"></i>
                            <div class="hobbies-icon">
                                None
                            </div>
                        </span>
                        </label>
                        
                    </div>

                </div>
            </div>
            <div>
                <input type="radio" name="example_accordion" id="section3" class="accordion__input"/>
                <label for="section3" class="accordion__label">Base: Ground Stake</label>
                <div class="accordion__content">
                <div class="radio-buttons custom">
                     	<div>
                        <label class="custom-radio">
                        <input type="radio" name="radio" checked />
                        <span class="radio-btn">
			                <i class="las la-check"></i>
                            <div class="hobbies-icon">
                                <img src={groundstake} alt=""/>
                            </div>
                        </span>
			            </label>
                       </div>

                        <div>
                        <label class="custom-radio">
                        <input type="radio" name="radio" />
                        <span class="radio-btn">
		                    <i class="las la-check"></i>
                            <div class="hobbies-icon">
                            <img src={squarebase} alt=""/>
                            </div>
                        </span>
			            </label>
                      </div>

                       <div> 
                        <label class="custom-radio">
                        <input type="radio" name="radio" />
                        <span class="radio-btn">
			                <i class="las la-check"></i>
                            <div class="hobbies-icon">
                            <img src={crossbase} alt=""/>
                            </div>
                        </span>
			            </label>
                      </div>

                       <div> 
                        <label class="custom-radio">
                        <input type="radio" name="radio" />
                        <span class="radio-btn">
			                <i class="las la-check"></i>
                            <div class="hobbies-icon">
                                <img src={waterbag} alt=""/>
                            </div>
                        </span>
			            </label>
                     </div>
                     <div>  
                        <label class="custom-radio">
                        <input type="radio" name="radio" />
                        <span class="radio-btn">
			                <i class="las la-check"></i>
                            <div class="hobbies-icon">
                                None
                            </div>
                        </span>
                        </label>
                     </div>
                   
                     </div>  
                </div>
            </div>
         <div>
                <input type="radio" name="example_accordion" id="section4" class="accordion__input"/>
                <label for="section4" class="accordion__label">Accessories: None</label>
                <div class="accordion__content">
                <div class="radio-buttons">
                        <label class="custom-radio">
                        <input type="radio" name="radio" checked />
                        <span class="radio-btn"
                            ><i class="las la-check"></i>
                            <div class="hobbies-icon">
                                <img src={carringcase} alt="/"/>
                            </div>
                        </span>
                        </label>
                        <label class="custom-radio">
                        <input type="radio" name="radio" />
                        <span class="radio-btn"
                            ><i class="las la-check"></i>
                            <div class="hobbies-icon">
                                None
                            </div>
                        </span>
                        </label>
                        
                    </div>
                </div>
            </div>


            <div>
               <input type="radio" name="example_accordion" id="section5" class="accordion__input"/>
                <label for="section5" class="accordion__label"></label>
                <div class="accordion__content last">
                
                
                    <div>
                        <p>Price Each</p>
                        <p className="green">$104.46</p>
                    </div>
                    <div>
                        <button>
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Accordion
