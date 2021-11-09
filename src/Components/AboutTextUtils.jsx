import React, {useState} from 'react'

const AboutTextUtils = () => {

    const [darkModeButton, setDarkModeButton] = useState("Enable Dark Mode")

    const [style, setStyle] = useState(
        {
            backgroundColor:'white',
            color:'black'
        }
    )

    const setDarkMode=()=>{
        if(style.backgroundColor==="white")
        {
           setStyle(
               {
                backgroundColor:'black',
                color:'white'  
              }
           );
           setDarkModeButton("Enable Light Mode");
        }else{
            setStyle(
                {
                 backgroundColor:'white',
                 color:'black'  
               }
            );
            setDarkModeButton("Enable Dark Mode");
        }
    }

    return (
        <div className="container my-3">
            <label  htmlFor="AboutTextUtils" style={style}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi minus explicabo sapiente nisi, provident atque veniam ipsam praesentium ratione reiciendis esse quas est mollitia tempora quaerat voluptatum deserunt aspernatur aliquid in corporis. Delectus nesciunt explicabo alias quod accusamus repellat laborum suscipit dolorem inventore natus ipsa porro at assumenda aliquam modi officia iusto iste voluptas quos nemo, in iure deserunt mollitia provident! Necessitatibus eius mollitia optio eaque, repudiandae quis at cum, officia repellat harum unde illo dolor ipsum ut odio cupiditate laborum tempore illum et dicta, molestias quo! Reiciendis sed earum enim magni. Illum quis animi sapiente magnam tempore enim voluptate eligendi, laboriosam maxime quisquam exercitationem rerum eveniet reprehenderit non unde molestias incidunt eaque! Laboriosam quam recusandae neque nesciunt eum excepturi expedita, doloremque eveniet deserunt commodi aperiam eius blanditiis, atque tempore vel voluptatum qui, fugiat officia debitis reprehenderit esse. Porro, ducimus commodi omnis sapiente quasi quibusdam, illo excepturi maiores cum in rerum. Nam eum beatae explicabo voluptatum numquam distinctio. Sunt asperiores omnis perspiciatis natus molestias, dolorem officiis cum aspernatur optio, quibusdam modi adipisci maxime vel voluptatem rem dolore sapiente recusandae in? Vel, accusantium libero in ad eligendi voluptas velit eum! Nisi, ipsam et iste, delectus eaque est enim necessitatibus natus facilis molestiae optio, magni sapiente officia vitae doloribus sequi itaque cumque quasi doloremque vero eum aperiam repellendus eligendi. Accusantium ut assumenda, explicabo culpa aperiam molestias a maiores, doloremque repellat tempora illo sint unde quod voluptates deleniti sunt? Eos veniam amet placeat vel corrupti quis quod quas ad velit debitis doloribus ipsum accusantium ratione qui hic aut voluptates sapiente, neque labore. Molestias nam ad perspiciatis necessitatibus neque error, similique molestiae tempore natus? Dolore earum quia fugit? Possimus impedit tenetur hic reprehenderit architecto officia aspernatur temporibus porro nam. Inventore ratione laboriosam iure id necessitatibus impedit fugiat rem vel maiores vitae voluptatem, earum reprehenderit!
            </label>
            <button className="btn btn-dark my-3" onClick={setDarkMode}>{darkModeButton}</button>
        </div>
    )
}

export default AboutTextUtils
