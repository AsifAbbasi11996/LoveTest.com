import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import homepagebgvideo from '../assets/images/homepagebgvideo.mp4'

const LoveCompatibility = () => {
    return (
        <div>
            <Navbar />

            <div className="container">
            <video autoPlay loop muted src={homepagebgvideo}></video>
                <div className="left-container">
                    <div className="heading">
                        <h1>Free Love Compatibility Analysis</h1>
                    </div>

                    <div className="para">
                        <p>Ever wondered how compatible you are with your dream partner? There are several ways to find out if you are a perfect match.</p>

                        <p>Well, you probably know quite a bit about your heartthrob and it's good to get to know a person in different situations. The LoveTest site has lots of different tests and quizzes to figure out your own character and the character of your perfect match.</p>

                        <p>Below, you can find our newest love analyzer… enter your birthday and the birthday of your partner to find out how compatible you are on that level.</p>

                    </div>

                    <div className="form">
                        <form action="" method='post'>
                            <h2>Information About You :</h2>
                            <label htmlFor="">Your Birthday :</label><br />

                            <select name="date" id="date">
                                <option value="">Date</option>
                                <option value="">01</option>
                                <option value="">02</option>
                                <option value="">03</option>
                                <option value="">04</option>
                                <option value="">05</option>
                                <option value="">06</option>
                                <option value="">07</option>
                                <option value="">08</option>
                                <option value="">09</option>
                                <option value="">10</option>
                                <option value="">11</option>
                                <option value="">12</option>
                                <option value="">13</option>
                                <option value="">14</option>
                                <option value="">15</option>
                                <option value="">16</option>
                                <option value="">17</option>
                                <option value="">18</option>
                                <option value="">19</option>
                                <option value="">20</option>
                                <option value="">21</option>
                                <option value="">22</option>
                                <option value="">23</option>
                                <option value="">24</option>
                                <option value="">25</option>
                                <option value="">26</option>
                                <option value="">27</option>
                                <option value="">28</option>
                                <option value="">29</option>
                                <option value="">30</option>
                                <option value="">31</option>
                            </select>
                            &nbsp;&nbsp;

                            <select name="month" id="month">
                                <option value="">Month</option>
                                <option value="">January</option>
                                <option value="">February</option>
                                <option value="">March</option>
                                <option value="">April</option>
                                <option value="">May</option>
                                <option value="">June</option>
                                <option value="">July</option>
                                <option value="">August</option>
                                <option value="">September</option>
                                <option value="">October</option>
                                <option value="">November</option>
                                <option value="">December</option>
                            </select>
                            &nbsp;&nbsp;

                            <select name="year" id="year">
                                <option value="">Year</option>
                                <option value="">1921</option>
                                <option value="">1922</option>
                                <option value="">1923</option>
                                <option value="">1924</option>
                                <option value="">1925</option>
                                <option value="">1926</option>
                                <option value="">1927</option>
                                <option value="">1928</option>
                                <option value="">1929</option>
                                <option value="">1930</option>
                                <option value="">1931</option>
                                <option value="">1932</option>
                                <option value="">1933</option>
                                <option value="">1934</option>
                                <option value="">1935</option>
                                <option value="">1936</option>
                                <option value="">1937</option>
                                <option value="">1938</option>
                                <option value="">1939</option>
                                <option value="">1940</option>
                                <option value="">1941</option>
                                <option value="">1942</option>
                                <option value="">1943</option>
                                <option value="">1944</option>
                                <option value="">1945</option>
                                <option value="">1946</option>
                                <option value="">1947</option>
                                <option value="">1948</option>
                                <option value="">1949</option>
                                <option value="">1950</option>
                                <option value="">1951</option>
                                <option value="">1952</option>
                                <option value="">1953</option>
                                <option value="">1954</option>
                                <option value="">1955</option>
                                <option value="">1956</option>
                                <option value="">1957</option>
                                <option value="">1958</option>
                                <option value="">1959</option>
                                <option value="">1960</option>
                                <option value="">1961</option>
                                <option value="">1962</option>
                                <option value="">1963</option>
                                <option value="">1964</option>
                                <option value="">1965</option>
                                <option value="">1966</option>
                                <option value="">1967</option>
                                <option value="">1968</option>
                                <option value="">1969</option>
                                <option value="">1970</option>
                                <option value="">1971</option>
                                <option value="">1972</option>
                                <option value="">1973</option>
                                <option value="">1974</option>
                                <option value="">1975</option>
                                <option value="">1976</option>
                                <option value="">1977</option>
                                <option value="">1978</option>
                                <option value="">1979</option>
                                <option value="">1980</option>
                                <option value="">1981</option>
                                <option value="">1982</option>
                                <option value="">1983</option>
                                <option value="">1984</option>
                                <option value="">1985</option>
                                <option value="">1986</option>
                                <option value="">1987</option>
                                <option value="">1989</option>
                                <option value="">1990</option>
                                <option value="">1991</option>
                                <option value="">1992</option>
                                <option value="">1993</option>
                                <option value="">1994</option>
                                <option value="">1995</option>
                                <option value="">1996</option>
                                <option value="">1997</option>
                                <option value="">1998</option>
                                <option value="">1999</option>
                                <option value="">2000</option>
                                <option value="">2001</option>
                                <option value="">2002</option>
                                <option value="">2003</option>
                                <option value="">2004</option>
                                <option value="">2005</option>
                                <option value="">2006</option>
                                <option value="">2007</option>
                                <option value="">2008</option>
                                <option value="">2009</option>
                                <option value="">2010</option>
                                <option value="">2011</option>
                                <option value="">2012</option>
                                <option value="">2013</option>
                                <option value="">2014</option>
                                <option value="">2015</option>
                                <option value="">2016</option>
                                <option value="">2017</option>
                                <option value="">2018</option>
                                <option value="">2019</option>
                                <option value="">2020</option>
                            </select><br /><br />

                            <h2>Information About Your Dream Partner :</h2>
                            <label htmlFor="">Partner Birthday :</label><br/>

                            <select name="date" id="date">
                                <option value="">Date</option>
                                <option value="">01</option>
                                <option value="">02</option>
                                <option value="">03</option>
                                <option value="">04</option>
                                <option value="">05</option>
                                <option value="">06</option>
                                <option value="">07</option>
                                <option value="">08</option>
                                <option value="">09</option>
                                <option value="">10</option>
                                <option value="">11</option>
                                <option value="">12</option>
                                <option value="">13</option>
                                <option value="">14</option>
                                <option value="">15</option>
                                <option value="">16</option>
                                <option value="">17</option>
                                <option value="">18</option>
                                <option value="">19</option>
                                <option value="">20</option>
                                <option value="">21</option>
                                <option value="">22</option>
                                <option value="">23</option>
                                <option value="">24</option>
                                <option value="">25</option>
                                <option value="">26</option>
                                <option value="">27</option>
                                <option value="">28</option>
                                <option value="">29</option>
                                <option value="">30</option>
                                <option value="">31</option>
                            </select>
                            &nbsp;&nbsp;

                            <select name="month" id="month">
                                <option value="">Month</option>
                                <option value="">January</option>
                                <option value="">February</option>
                                <option value="">March</option>
                                <option value="">April</option>
                                <option value="">May</option>
                                <option value="">June</option>
                                <option value="">July</option>
                                <option value="">August</option>
                                <option value="">September</option>
                                <option value="">October</option>
                                <option value="">November</option>
                                <option value="">December</option>
                            </select>
                            &nbsp;&nbsp;

                            <select name="year" id="year">
                                <option value="">Year</option>
                                <option value="">1921</option>
                                <option value="">1922</option>
                                <option value="">1923</option>
                                <option value="">1924</option>
                                <option value="">1925</option>
                                <option value="">1926</option>
                                <option value="">1927</option>
                                <option value="">1928</option>
                                <option value="">1929</option>
                                <option value="">1930</option>
                                <option value="">1931</option>
                                <option value="">1932</option>
                                <option value="">1933</option>
                                <option value="">1934</option>
                                <option value="">1935</option>
                                <option value="">1936</option>
                                <option value="">1937</option>
                                <option value="">1938</option>
                                <option value="">1939</option>
                                <option value="">1940</option>
                                <option value="">1941</option>
                                <option value="">1942</option>
                                <option value="">1943</option>
                                <option value="">1944</option>
                                <option value="">1945</option>
                                <option value="">1946</option>
                                <option value="">1947</option>
                                <option value="">1948</option>
                                <option value="">1949</option>
                                <option value="">1950</option>
                                <option value="">1951</option>
                                <option value="">1952</option>
                                <option value="">1953</option>
                                <option value="">1954</option>
                                <option value="">1955</option>
                                <option value="">1956</option>
                                <option value="">1957</option>
                                <option value="">1958</option>
                                <option value="">1959</option>
                                <option value="">1960</option>
                                <option value="">1961</option>
                                <option value="">1962</option>
                                <option value="">1963</option>
                                <option value="">1964</option>
                                <option value="">1965</option>
                                <option value="">1966</option>
                                <option value="">1967</option>
                                <option value="">1968</option>
                                <option value="">1969</option>
                                <option value="">1970</option>
                                <option value="">1971</option>
                                <option value="">1972</option>
                                <option value="">1973</option>
                                <option value="">1974</option>
                                <option value="">1975</option>
                                <option value="">1976</option>
                                <option value="">1977</option>
                                <option value="">1978</option>
                                <option value="">1979</option>
                                <option value="">1980</option>
                                <option value="">1981</option>
                                <option value="">1982</option>
                                <option value="">1983</option>
                                <option value="">1984</option>
                                <option value="">1985</option>
                                <option value="">1986</option>
                                <option value="">1987</option>
                                <option value="">1989</option>
                                <option value="">1990</option>
                                <option value="">1991</option>
                                <option value="">1992</option>
                                <option value="">1993</option>
                                <option value="">1994</option>
                                <option value="">1995</option>
                                <option value="">1996</option>
                                <option value="">1997</option>
                                <option value="">1998</option>
                                <option value="">1999</option>
                                <option value="">2000</option>
                                <option value="">2001</option>
                                <option value="">2002</option>
                                <option value="">2003</option>
                                <option value="">2004</option>
                                <option value="">2005</option>
                                <option value="">2006</option>
                                <option value="">2007</option>
                                <option value="">2008</option>
                                <option value="">2009</option>
                                <option value="">2010</option>
                                <option value="">2011</option>
                                <option value="">2012</option>
                                <option value="">2013</option>
                                <option value="">2014</option>
                                <option value="">2015</option>
                                <option value="">2016</option>
                                <option value="">2017</option>
                                <option value="">2018</option>
                                <option value="">2019</option>
                                <option value="">2020</option>
                            </select><br /><br />

                            <h2>Are You Ready ?</h2>
                            <button>Continue</button>
                        </form>
                    </div>

                    <p>Please Note:</p>
                    <ul>
                        <li>Submit accurate information for best results.</li>
                        <li>This information will only be used to calculate the results and to display personalized information for you.</li>
                        <li>Your information will NOT be saved, stored or transferred to any 3rd parties.</li>
                        <li>Check the privacy policy at the bottom of the page if you have any questions.</li>
                    </ul>

                </div>
            </div>

            <Footer />
        </div>
    )
}

export default LoveCompatibility
