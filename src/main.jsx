import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
 
    //  top div
    function Top(){

        return(
        
            <div id="top">
                <div id="toop">
              <a href=" ">  <h3><span style={{color:"black"}}> Get 4X Points** on ALL PATRICK TA.</span>  Use code<span style={{color:"black"}}>  PATRICKTA.
                </span>  Ends 3/6. **Terms apply. <span style={{color:"black"}}> SHOP NOW ▸</span></h3></a>
                </div>
                </div>
                
        )
    }
    
    // search bar
function Search(){
  return (
    <div id="search">
      <div>
      <h1> SEPHORA </h1></div>
    <div><input placeholder="Search" type="search" id="input" /></div>
    <div style={{display:"flex"}}> 
       <img src=" https://cdn-icons-png.flaticon.com/128/3443/3443338.png " alt="y"/> 
      <div className="p">
      <h4>Stores & Services</h4><p>Choose Your Store</p></div>
    </div>
      <div style={{display:"flex"}}>
        
      <img src="https://cdn-icons-png.flaticon.com/128/3364/3364929.png " />  <div><h4>Community </h4></div>
      </div>
    <div style={{display:"flex"}}>
      <img src=" https://cdn-icons-png.flaticon.com/128/10479/10479887.png" alt="3" />
      <div><h4>Sign in </h4><p>For free shipping</p> </div>
      </div>
    <div>
      <img src="https://cdn-icons-png.flaticon.com/128/1077/1077035.png" alt="4"/>
      <img src="https://cdn-icons-png.flaticon.com/128/325/325335.png" alt="5" />
      </div>
      </div>
  )
}
  function Navbar(){
    return(
      <div id="Navbar">
    
    <div><a href="" ><h3>New</h3></a></div>
    <div><a href="" ><h3>Brands</h3></a></div>
    <div><a href="" ><h3>Makeup</h3></a></div>
    <div><a href="" ><h3>Skincare</h3></a></div>
    <div><a href="" ><h3>Hair </h3></a></div>
    <div><a href="" ><h3>Fragrance</h3></a></div>
    <div><a href="" ><h3>Tools & Freshness</h3></a></div>
    <div><a href="" ><h3>Bath & Body</h3></a></div>
    <div><a href="" ><h3>Mini Size </h3></a></div>
    <div><a href="" ><h3>Gifts & Gift Card</h3></a></div>
    <div><a href="" ><h3>Beauty Under $20</h3></a></div>
    <div><a href="" ><h3>Sale & Offers</h3></a></div>
        </div>
    
    )
  }
 

  function Product(){
     //  product list of product section
  let Arr=[ 
     {
       img:"https://www.sephora.com/contentimages/2024-feb-lip-and-cheek-site-desktop-mobile-rwd-hero-banner-color-story-berry-US-CAN-image-3005-release.jpg?imwidth=1090",
       flavour:"Berry on Berry",
       description:"Double down on a matching lip and cheek.It wins everytime.",
       shop:"SHOP NOW"
     },
     {
      img:" https://www.sephora.com/contentimages/2024-feb-lip-cheek-site-home-page-rwd-hero-banner-color-story-mauve-image-only-us-3003-3079-release.jpg?imwidth=1090",
      flavour: " Mauve On Mauve",
      description:"Play up your lips and cheeks with a wash of color.",
      shop:"SHOP NOW"
     },
    
     {
      img:"  https://www.sephora.com/contentimages/2024-feb-lip-cheek-site-home-page-rwd-hero-banner-color-story-pink-us-can-2883-release.jpg?imwidth=1090",
      flavour:"Pink on Pink  ",
      description:"Make this lip-and-cheek look your whole personality. ",
      shop:" SHOP NOW"
     },
     {
      img:"https://www.sephora.com/contentimages/2024-02-19-slotting-bestsellers-v2-site-rwd-hp-hero-banner-US-CA_01.jpg?imwidth=1090 ",
      flavour:"Bestselling Beauty",
      description:"These fan favourites are worth the type . ",
      shop:" SHOP NOW"
     },
     {
      img:"https://www.sephora.com/contentimages/2024-2-17-mufe-hd-skin-hydra-glow-skincare-foundation-site-desktop-home-page-rwd-hero-banner-1200x800-en-us-can.jpg?imwidth=1090 ",
      flavour:"New MAKEUP FOR EVER ",
      description:" Hd Skin Hydra Glow Foundation: 24 hours Of Hydrating, Blurring coverge Only at sephora ",
      shop:" SHOP NOW"
     },
     {
      img:"https://www.sephora.com/contentimages/2024-2-14-kosas-bb-burst-tinted-moisturizer-site-desktop-home-page-rwd-hero-banner-1200x800-en-us.jpg?imwidth=1090 ",
      flavour:"New Kosas BB Burst Tinted Gel Cream",
      description:"Hydrates Visibly smooth, comes in 24 shades.  ",
      shop:" SHOP NOW "
     }
  ]
 
  return (
   
    
    <div id="product">
       
        {Arr.map((prop) => (
           <a href="https://www.sephora.com/beauty/monochromatic-makeup?icid2=homepage_slideshow_color_animation_febmakeupstory0224_berry_fy243190_broadcast_us_rwd_banner_030124#berry ">
            <div id="products">
            <img  id="imgtag"  src={prop.img} /> 
            <div id="cover"> 
          <h1>{prop.flavour}</h1> 
          <p>{prop.description}</p> 
           <h3>{prop.shop}</h3>
           </div>
          </div>
         </a>   
        ))}
       
    </div>
   
  )
      
}
//  Example for understanmding the loiop concept 
function ArrayLoopExample() {
  const myArray = ['one', 'two', 'three'];

  return (
    <div>
      <ul>
        {myArray.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
    
  );
  
    // <div>
    //   <img src="  " alt=" model2"/>
    //   <h1>  {item.flavour} </h1>
    //   <p> {item.description} </p>
    //   <h3>{ item.shop}</h3>
    //   </div>

    // <div>
    //   <img src={Arr.img} alt=" model2"/>
    //   <h1>  {Arr.flavour} </h1>
    //   <p>{Arr[0]?.description} </p>
    //   <h3>{Arr[0]?.shop}</h3>
    //   </div>



    // <div>
    //   <ul>
        
    //     {Arr.map((itm)=>(
         
    //     <li key={itm.flavour}>{itm.flavour}  </li>
       
        
    //     ))}
        
    //   </ul>
    
    //   <img src={Arr[itm].img} alt=" model2"/>
    //   <h1>  {Arr[0]?.flavour} </h1>
    //   <p> {Arr[0]?.description} </p>
    //   <h3>{ Arr[0]?.shop}</h3>
    // </div>
}
 
//  from hereweare making listof procts

function Choosen(){
  let Array=[
    {  
      id:0,
      img:"https://www.sephora.com/productimages/sku/s2735223-main-zoom.jpg?imwidth=332",
      quick:"Quicklook",
      name:"Tower 28 Beauty",
      work:"Lip Softie Hydrating Tinted Lip Treatment Balm",
      price:"$16.00"
    },
    {
      id:1,
    img:" https://www.sephora.com/productimages/sku/s2735207-main-zoom.jpg?imwidth=332 ",
    quick:"Quicklook",
    name:"Tower 28 Beauty ",
    work:"SOS Lip Softie Hydrating  Lip Treatment Balm",
    price:"$16.00 "
  },
  {
    id:2,
    img:" https://www.sephora.com/productimages/sku/s2736866-main-zoom.jpg?imwidth=332 ",
    quick:"Quicklook",
    name:"HAUS LABS BY LADY GAGA",
    work:"PhDHybrid Lip GlaZe Plumping Gloss ",
    price:" $26.00"
  },
  {
    id:3,
    img:"https://www.sephora.com/productimages/sku/s2659985-main-zoom.jpg?imwidth=332  ",
    quick:"Quicklook",
    name:"HAUS LABS BY LADY GAGA",
    work:"Le Monster Lip Crayon Vegan Lipstickand Lip...",
    price:" $22.00"
  },  {
    id:4,
    img:"https://www.sephora.com/productimages/sku/s2484509-main-zoom.jpg?imwidth=332  ",
    quick:"Quicklook",
    name:"Tower 28 Beauty",
    work:"JuiceBalm Vegan Tinted Lip Balm",
    price:" $16.00"
  },  {
    id:5,
    img:"https://www.sephora.com/productimages/sku/s2571941-main-zoom.jpg?imwidth=332  ",
    quick:"Quicklook",
    name:"Hauss LABBS BY LADY GAGA ",
    work:"PhD HYbrid Lip Oil",
    price:" $16.00 -$26.00"
  },
  {
    id:6,
    img:"  https://www.sephora.com/productimages/sku/s2648467-main-zoom.jpg?imwidth=332",
    quick:"Quicklook",
    name:"OLEHENRIKSEN",
    work:"Pout Preserve Hydrating Peptide lip Treatment ",
    price:"$22.00 "
  },
  {
    id:7,
    img:"https://www.sephora.com/productimages/sku/s2549970-main-zoom.jpg?imwidth=332  ",
    quick:"Quicklook",
    name:"Tower 28 Beauty ",
    work:"ShineOn Lip Jelly Non-Sticky Gloss ",
    price:"$16.00 "
  },{
    id:8,
    img:" https://www.sephora.com/productimages/sku/s2737005-main-zoom.jpg?imwidth=332 ",
    quick:"Quicklook",
    name:"MILK MAKEUP",
    work:"Cooling Water Jelly Tint Lip + Cheek Blush Stain ",
    price:" $24.00"
  },{
    id:9,
    img:" https://www.sephora.com/productimages/sku/s2691434-main-zoom.jpg?imwidth=332 ",
    quick:"Quicklook",
    name:"Sale",
    work:"Glossybounce High -shine Hydrating Lip Glo...",
    price:" $22.00"
  }
  ]
  return (
  <>
  <div>
    <h1>Choosen For You</h1>
  </div>
  <div  id="produ" >
  { Array.map((i)=>(

<div id="pro" >
  <div >
  <img id="imu"src={i.img} alt=" choosen "/>
  </div>
  <div>
  <h4>{i.name}</h4>
  <p>{i.work}</p>
  <h2>{i.price}</h2>
</div>
</div>

  ))
} 
</div>
    </>
    )
 }
 
//  Arrival start 
 
 function Arrival(){
  let Array=[
  {
    id:8,
      img:"https://www.sephora.com/productimages/sku/s2742492-main-zoom.jpg?imwidth=332",
    quick:"Quicklook",
    name:" PATRICK TA",
    work:"Major Headlines Double Take Creme & Powder  ",
    price:" $38.00"
  },{
    id:9,
    img:"https://www.sephora.com/productimages/sku/s2737005-main-zoom.jpg?imwidth=332 ",
    quick:"Quicklook",
    name:"MILK MAKEUP ",
    work:"Cooling Water Jelly tint Lip + Cheek Blush Stain  ",
    price:" $22.00"
  },
    {  
      id:0,
      img:"https://www.sephora.com/productimages/sku/s2742195-main-zoom.jpg?imwidth=332 ",
      quick:"Quicklook",
      name:"Glow Recipe ",
      work:" Watermelon Glow Niacinamode Hue Drops",
      price:"$35.00 "
    },
    {
      id:1,
    img:"  https://www.sephora.com/productimages/sku/s2735223-main-zoom.jpg?imwidth=332 ",
    quick:"Quicklook",
    name:" Tower 28 Beauty ",
    work:"Lip Softie Hydrating Tinted Lip Treatment Balm  ",
    price:"$16.00 "
  },
  {
    id:2,
    img:"https://www.sephora.com/productimages/sku/s2744696-main-zoom.jpg?imwidth=332 ",
    quick:"Quicklook",
    name:" Summer Fridays",
    work:" Dream Lip Oil For Moisturizing Sheer.. ",
    price:" $26.00"
  },
  {
    id:3,
    img:"https://www.sephora.com/productimages/sku/s2571941-main-zoom.jpg?imwidth=332https://www.sephora.com/productimages/sku/s2737070-main-zoom.jpg?imwidth=332 ",
    quick:"Quicklook",
    name:"dae ",
    work:"fairy Duster Volumizing Dry shampoo powder ",
    price:" $30.00"
  },  {
    id:4,
    img:"https://www.sephora.com/productimages/sku/s2752509-main-zoom.jpg?imwidth=332  ",
    quick:"Quicklook",
    name:"OLEHENRIKSEN ",
    work:"Pout preserve Hydrating Peptide Lip Treatment ",
    price:" $22.00"
  },  {
    id:5,
    img:"https://www.sephora.com/productimages/sku/s2742989-main-zoom.jpg?imwidth=332  ",
    quick:"Quicklook",
    name:" Saie ",
    work:"Dew Blush BlenLiquid Blush ",
    price:" $25.00"
  },
  {
    id:6,
    img:"  https://www.sephora.com/productimages/sku/s2749133-main-zoom.jpg?imwidth=332",
    quick:"Quicklook",
    name:"Fenty Beauty by Rihanna",
    work:"  Gloss Bomb Universal Lip Luminizer ",
    price:"$21.00 "
  },
  {
    id:7,
    img:"https://www.sephora.com/productimages/sku/s2617983-main-zoom.jpg?imwidth=332  ",
    quick:"Quicklook",
    name:" Tower 28 Beauty ",
    work:" Sos daily RescueFacial Spray ",
    price:"$12.00-$68.00 ($112.00 vale)"
  }
  ]
  return (
  <>
  <div>
    <h1> New Arrivals </h1>
  </div>
  <div  id="produ" >
  { Array.map((i)=>(

<div id="pro" >
  <div >
  <img id="imu"src={i.img} alt=" choosen "/>
  </div>
  <div>
  <h4>{i.name}</h4>
  <p>{i.work}</p>
  <h2>{i.price}</h2>
</div>
</div>

  ))
} 
</div>
    </>
  

  )
 }
//   B eauty offre 24 satart
function Beauty(){

  let Array=[
  {
    id:8,
      img:"https://www.sephora.com/contentimages/2024-spend-more-get-more-multiworld-app-site-desktop-mobile-beauty-offers-page-banner-us-final.jpg?imwidth=480",
   
    name:" Spend More, Get More",
    work:" Choose up to three trial sizes from top brands like Drunk Elephant, ceremonia and more!  ",
    price:" $38.00"
  },{
    id:9,
    img:"https://www.sephora.com/contentimages/promo/bpme/2024/February/2024-2-29-february-bpme-site-desktop-mobile-app-beauty-offers-page-banner-peter-thomas-roth-en-us-can-kohls.jpg?imwidth=480 ",
    
    name:"Get 4X Pointstt ",
    work:" on ALL Peter Thomas Roth.  ",
    price:" $22.00"
  },
    {  
      id:0,
      img:"https://www.sephora.com/contentimages/promo/bpme/2024/February/2024-2-29-february-bpme-site-desktop-mobile-app-beauty-offers-page-banner-patrick-ta-en-us-can.jpg?imwidth=480 ",
      quick:"Quicklook",
      name:" Get 4X POintstt ",
      work:" oN ALL  PATRICK TA.",
      price:"$35.00 "
    },
    {
      id:1,
    img:"  https://www.sephora.com/contentimages/promo/bpme/2024/February/2024-2-29-february-bpme-site-desktop-mobile-app-beauty-offers-page-banner-nutrafol-app-only-en-us.jpg?imwidth=480 ",
    quick:"Quicklook",
    name:"  Get 4X Pointstt",
    work:" oN all Netrafol-- only on the app. ",
    price:"$16.00 "
  },
  {
    id:2,
    img:"https://www.sephora.com/contentimages/promo/beautyoffers/2024/March/2024-03-01-slotting-baar-app-home-page-beauty-offer-banner-ddg-US-CA-handoff.jpg?imwidth=480 ",
    quick:"Quicklook",
    name:"  Auto-REplanish Hot Deal",
    work:"  Get 0% off your first three Alpha Beta Peel Pad subscription deliveries ",
    price:" $26.00"
  },
  {
    id:3,
    img:"https://www.sephora.com/contentimages/promo/beautyoffers/2024/March/2024-3-04-laneige-water-bank-moisture-collection-site-desktop-mobile-app-beauty-offers-page-banner-en-us-can.jpg?imwidth=480 ",
  
    name:"Free LANEIGE Trial Size",
    work:"Say goodbye to dry skin with this new, barrier-supporting moisturizer.  ",
    price:" $30.00"
  },  {
    id:4,
    img:"https://www.sephora.com/contentimages/promo/beautyoffers/2024/March/2024-03-01-PICKNEWNESS-slotting-promo-app-beauty-offers-banner-US-handoff.jpg?imwidth=480  ",
    
    name:"Choose a free trial size",
    work:" Get a kiels Since 1851 treatment,josie maran bodylotion,or Elemsis cleanser.",
    price:" $22.00"
  },  {
    id:5,
    img:"https://www.sephora.com/contentimages/promo/beautyoffers/2024/March/2024-03-01-slotting-baar-app-home-page-beauty-offers-banner-1000x750-abh-US-CA-handoff.jpg?imwidth=480  ",
    quick:"Quicklook",
    name:" Auto replenish Hot deal",
    work:"Get 10% off your first thrree Brow wiz ultrea -slim-precision Pencel subscription deliveries. ",
    price:" $25.00"
  },
  {
    id:6,
    img:"  https://www.sephora.com/contentimages/promo/beautyoffers/2024/February/2024-02-29-PRETTYHAIR-slotting-promo-app-beauty-offers-banner-US.jpg?imwidth=480",
    quick:"Quicklook",
    name:"Choose a free Hair -care-trial size",
    work:"  Get a NutrfolConditioner or Living Proof shampoo ",
    price:""
  },
  {
    id:7,
    img:" https://www.sephora.com/contentimages/promo/beautyoffers/2024/February/2024-2-28-skinfix-barrier-protection-site-desktop-mobile-app-beauty-offers-page-banner-en-us-can.jpg?imwidth=480 ",
    quick:"Quicklook",
    name:" Get a skinfix Trial size",
    work:"Visibly plump skin with this new and improved ,barrier-supporting moisturizer. ",
    price:"Free witrh $30 purchase .Beauty insider members onnly"
  }
  ]
  return (
  <>
  <div>
    <h1> Beauty Offer (24) </h1>
  </div>
  <div  id="produ" >
  { Array.map((i)=>(

<div id="pro" >
  <div >
  <img id="imu"src={i.img} alt=" choosen "/>
  </div>
  <div>
  <h4>{i.name}</h4>
  <p>{i.work}</p>
   <p> Free with $30 purchase.* Beauty insider members only.</p>
   <p>App only *Exclusions/terms apply</p>
   <br/>
   <br/>
   <button style={{ width:"40%" ,height:"50px" ,margin:"50px",color:"black"}}>APPLY </button>
</div>
</div>

  ))
} 
</div>
    </>
  

  )
}



function Productlist(){
  return(
    <>
    <Choosen/>
    <Arrival/>
    <Beauty/>
  </>
    )
  
 }

function Only(){
  
  let Array=[
  {
    id:8,
      img:"https://www.sephora.com/contentimages/2024-3-1-kerastase-premiere-collection-site-desktop-home-page-rwd-marketing-banner-800x534-en-us-can.jpg?imwidth=800",
   
    name:" Fight Damage with New Kerestase Premiere",
    work:" SHOP  NOW   ",
    price:" Visibly restore 99% of hair's original strnghth"
  },{
    id:9,
    img:"https://www.sephora.com/contentimages/2024-02-01-slotting-baar-site-rwd-home-page-marketing-banner-english-sknfx-US-CA-handoff_01.jpg?imwidth=800",
    
    name:"Auto-Replinish Hot Deal",
    work:" Getr10% off  ",
    price:" Get 10% off your three skinflix triple Lipid peptide Crem refill subscription deleiveries in select size"
  },
    {  
      id:0,
      img:"https://www.sephora.com/contentimages/2024-02-19-digital-personalization-bundle-b-site-desktop-home-page-rwd-marketing-banner-february-skincare-trending-on-social-us-final.jpg?imwidth=800 ",
      
      name:" Hot on Social   ",
      work:" SHOP NOW ",
      price:"On-trend skincare picks all over your #fyp"
    }
    
 
  ]
  return (
  <>
  <div>
    <br/>
    <br/>
    <br/>
  </div>
  <div  id="productt" >
  { Array.map((i)=>(

<div id="pro" >
  <div >
  <img id="imu"src={i.img} alt=" choosen "/>
  </div>
  <div>
  <h4>{i.name}</h4>
  <p>{i.work}</p>
    <p><i class="price"></i></p>
</div>
</div>

  ))
} 
</div>
    </>
  

  )
}

function Test(){

        return(
          <div>
<Top/>
<Search/>
<Navbar/>
<Product/>
 <Productlist/>
 <Only/>
</div>
        )
    }
   



    let rot=ReactDOM.createRoot(document.getElementById("root"))
    rot.render(<Test/>)
   


     