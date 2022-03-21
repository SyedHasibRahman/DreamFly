import React from 'react';
import './PaymentCard.css';
import chip from './../../../../img/chip.png';
import visa from './../../../../img/visa.png';


// document.querySelector('.card-number-input').oninput = () => {
//     document.querySelector('.card-number-box').innerText = document.querySelector('.card-number-input').value;
// }

// document.querySelector('.card-holder-input').oninput = () => {
//     document.querySelector('.card-holder-name').innerText = document.querySelector('.card-holder-input').value;
// }

// document.querySelector('.month-input').oninput = () => {
//     document.querySelector('.exp-month').innerText = document.querySelector('.month-input').value;
// }

// document.querySelector('.year-input').oninput = () => {
//     document.querySelector('.exp-year').innerText = document.querySelector('.year-input').value;
// }

// document.querySelector('.cvv-input').onmouseenter = () => {
//     document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(-180deg)';
//     document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(0deg)';
// }

// document.querySelector('.cvv-input').onmouseleave = () => {
//     document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(0deg)';
//     document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(-180deg)';
// }

// document.querySelector('.cvv-input').oninput = () => {
//     document.querySelector('.cvv-box').innerText = document.querySelector('.cvv-input').value;
// }

const PaymentCard = () => {
    return (
        <div>
            <h2 className='text-center mt-5'>Pay Now</h2>
            <div className="cart">
            <div className='card-container'>
                <div className='cart-container'>
                    <div className="front">
                        <div className="image">
                            <img src={chip} alt="" />
                            <img src={visa} alt="" />
                        </div>
                        <div className="card-number-box">#################</div>
                        <div className="flexBox">
                            <div className="box">
                                <span style={{color: 'black'}}>card holder</span>
                                <div className="card-holder-name">
                                    full name
                                </div>
                            </div>
                            <div className="box">
                                <span style={{color: 'black'}}>expires</span>
                                <div className="expiration">
                                   <span className='exp-month'>mm</span>
                                   <span>/</span>
                                   <span className='exp-year'>yy</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="back">
                        <div className="stripe"></div>
                        <div className="box">
                            <span>cvv</span>
                            <div className="cvv-box"></div>
                            <img src={visa} alt="" />
                        </div>
                    </div>
                </div>
                <form action="">
                    <div className='inputBox'>
                        <span>card number</span>
                        <input type="number" maxlength='16' className='card-number-input' />
                    </div>
                    <div className='inputBox'>
                        <span>card holder</span>
                        <input type="text" className='card-holder-input' />
                    </div>
                    <div className="flexbox">
                        <div className="inputBox">
                            <span>expiration mm</span>
                            <select name="" id="" className='month-input'>
                                <option value="month" selected disabled>month</option>
                                <option value="01">01</option>
                                <option value="02">02</option>
                                <option value="03">03</option>
                                <option value="04">04</option>
                                <option value="05">05</option>
                                <option value="06">06</option>
                                <option value="07">07</option>
                                <option value="08">08</option>
                                <option value="09">09</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                            </select>
                        </div>
                        <div className="inputBox">
                            <span>expiration yy</span>
                            <select name="" id="" className='year-input'>
                                <option value="year" selected disabled>year</option>
                                <option value="2021">2021</option>
                                <option value="2022">2022</option>
                                <option value="2023">2023</option>
                                <option value="2024">2024</option>
                                <option value="2025">2025</option>
                                <option value="2026">2026</option>
                                <option value="2027">2027</option>
                                <option value="2028">2028</option>
                                <option value="2029">2029</option>
                                <option value="2030">2030</option>
                            </select>
                        </div>
                        <div className='inputBox'>
                            <span>cvv</span>
                            <input type="number" maxlength='4' className='cvv-input' />
                        </div>
                    </div>
                    <input type="submit" value="submit" className='submit-btn' />
                </form>
            </div>
            </div>
        </div>
    );
};

export default PaymentCard;