import React from 'react';
// import Header from '../components/Header';
import Grid from '@mui/material/Grid';
import specialConfigratorLeftImg from '../components/images/oturma-odasi.jpg';
import specialConfigratorRightImg from '../components/images/oturma-odasi.jpg';

export interface IHomePageProps {}

const HomePage: React.FunctionComponent<IHomePageProps> = (props) => {
    // console.log(logo);
    return (
        <>
            {/* <Header /> */}
            <div>
                <Grid container spacing={1}>
                    <Grid item xs={6}>
                        <div className="special-configrator-left-box">
                            <img src={specialConfigratorLeftImg} alt="aa" />
                        </div>
                    </Grid>
                    <Grid item xs={6}>
                        <div className="infor"></div>
                        <iframe src="https://www.content212.com/romi/11/" className="marzipano" title="W3Schools Free Online Web Tutorials"></iframe>
                        {/* <div className="special-configrator-right-box">
                            <img src={specialConfigratorRightImg} alt="aa" />
                        </div> */}
                    </Grid>
                </Grid>
            </div>
        </>
    );
};

export default HomePage;
