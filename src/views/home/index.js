import React from 'react';
import Header from '../../components/header';
import Banner from '../../components/banner';
import './styles.css';
import site from '../../images/site.png'
import facebook from '../../images/facebook.png'
import linkedin from '../../images/linkedin.png'
import email from '../../images/email.png'
import instagram from '../../images/instagram.png'
import twitter from '../../images/twitter.png'


export default function Home(props) {
    return(
        <div className='home-container'>
          <Header />
            <div className='banner-wrapper'>
                <Banner 
                  name='Site Tech Legion'
                  link='#'
                  image={site}
                />
                <Banner 
                  name='Facebook'
                  link='https://www.facebook.com/techlegionbr'
                  image={facebook}
                />
                <Banner
                  id= 'banner-linkedin-desktop'
                  name='LinkedIn'
                  link='https://www.linkedin.com/company/techlegionbr/'
                  image={linkedin}
                />
                <Banner
                  id= 'banner-email-desktop'
                  name='E-mail'
                  link='mailto:contato@techlegion.com.br'
                  image={email}
                />

                
                {/* MODIFOCAÇÃO PARA A ORDEM NO MOBILE */}
                <Banner
                  id= 'banner-email-mobile'
                  name='E-mail'
                  link='mailto:contato@techlegion.com.br'
                  image={email}
                />

                <Banner
                  id= 'banner-linkedin-mobile'
                  name='LinkedIn'
                  link='https://www.linkedin.com/company/techlegionbr/'
                  image={linkedin}
                />
                  {/* ################## */}
                


                <Banner
                  name='Instagram'
                  link='https://www.instagram.com/techlegionbr/'
                  image={instagram}
                />
                <Banner 
                  name='Twitter'
                  link='https://twitter.com/techlegionbr'
                  image={twitter}
                />
            </div>
        </div>
    )
}