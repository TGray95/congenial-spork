import React, { createElement, getElementById } from 'react';
import { useQuery } from "@apollo/client";
import { QUERY_GROUPS } from "../utils/queries";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_GROUP } from "../utils/mutations";
import otherLogo from "../Images/other-logo.png";
import beybladeLogo from "../Images/beyblade-logo.png";
import catanLogo from "../Images/catan-logo.png";
import dndLogo from "../Images/dnd-logo.png";
import magicLogo from "../Images/magic-logo.png";
import "../styles/Home.css";
import Profile from './Profile';
import ActiveGroups from './ActiveGroups';

function Home(){

    return(
        <div className='home'>
            {/* Home page profile sidebar */}
            <div className='homeProfile'>
                <Profile/>
            </div>

            <div className='homeBody'>
                {/* Home page active groups div */}
                <div className='homeGroups'>
                    <ActiveGroups/>
                </div>

                {/* Current events div */}
                <a href='https://github.com/TGray95/congenial-spork' target='_blank'>
                    <div className='homeEvents'>
                        <h1>Official Launch of Dice & Paper!</h1>
                        <p>Check out our GitHub to see how it was created.</p>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Home;
