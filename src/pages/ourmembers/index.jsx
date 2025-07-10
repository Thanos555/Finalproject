import React from 'react'
import styles from './index.module.css'
import chef1 from '../../img/Pierre-Gagnaire.chef1.jpg'
import chef2 from '../../img/chef2.jpeg'
import chef3 from '../../img/ecolducaassechef3.jpg'
import chef4 from '../../img/gordonchef4.jpg'
import chef5 from '../../img/ivlevchef5.jpg'
import chef6 from '../../img/reubenriffenchef6.jpeg'
import chef7 from '../../img/womenchef.jpg'
import chef8 from '../../img/blackchef.jpeg'
import chef9 from '../../img/americaman.jpg'
import img1 from '../../img/tacorootlogo2.png'
import { Link } from 'react-router-dom'

const Members = () => {
  return (
    <div>
      <div className={styles.chefs}>
        <Link to='/'><img src={img1} alt="" /></Link>
        {/* <img src={img1} alt="" /> */}
        <h2 className={styles.meet}>Meet Our Chefs!</h2>
      </div>
      <div className={styles.images}>
        <div className={styles.cards}>
          <img src={chef1} alt="" />
          <p>Pierre Garnaire is a legendary French chef and one of the most influential figures in modern haute cuisine. Born in Apinac, France, Gagnaire rose to fame for his daring approach to traditional French cooking—blending unexpected ingredients, avant-garde techniques, and artistic presentation. His flagship restaurant in Paris,Pierre Gagnaire, has held three Michelin stars for decades and is renowned for its emotionally driven menus.</p>
        </div>
        <div className={styles.cards}>
          <img src={chef2} alt="" />
          <p>Fernando Sanches is a world-renowned culinary maestro, celebrated for his bold fusion of Latin American flavors with cutting-edge gastronomic techniques. Born in São Paulo, Brazil, Fernando began his culinary journey at the age of 15 in his grandmother’s kitchen. After training in Michelin-starred restaurants across Europe, he launched his flagship restaurant Fuego in Barcelona.</p>
        </div>
        <div className={styles.cards}>
          <img src={chef3} alt="" />
          <p>École Ducasse is a world-renowned culinary and pastry arts school founded by legendary French chef Alain Ducasse. With a mission to pass on excellence, innovation, and French savoir-faire, the school offers programs for aspiring chefs, professionals, and enthusiasts. Known for its rigorous standards and cutting-edge facilities, École Ducasse combines traditional techniques with modern culinary trends.</p>
        </div>
        <div className={styles.cards}>
          <img src={chef4} alt="" />
          <p>Gordon Ramsay is a world-renowned British chef, restaurateur, and television personality known for his fiery personality and exceptional culinary skills. With multiple Michelin stars to his name, Ramsay has built a global restaurant empire and starred in hit shows like Hell’s Kitchen, MasterChef, and Kitchen Nightmares. Trained under legendary chefs like Marco Pierre White and Guy Savoy.</p>
        </div>
        <div className={styles.cards}>
          <img src={chef5} alt="" />
          <p>Konstantin Ivlev is a renowned Russian chef, TV host, and restaurateur known for his modern take on Russian cuisine. With decades of experience, he has led top Moscow restaurants and starred in popular culinary shows like *Hell’s Kitchen Russia* and *On Knives*. Ivlev is also an author of several cookbooks and the founder of Ivlev Group, promoting quality food culture across Russia.</p>
        </div>
        <div className={styles.cards}>
          <img src={chef6} alt="" />
          <p>Reuben Riffel is a renowned South African chef and restaurateur, famous for his modern take on South African cuisine. Rising from humble beginnings in Franschhoek, he gained national acclaim with his restaurant Reuben’s, winning multiple awards. Reuben is also a TV personality and judge on MasterChef South Africa, known for promoting local ingredients and culinary excellence.</p>
        </div>
        <div className={styles.cards}>
          <img src={chef7} alt="" />
          <p>Isabella María López is a rising star in the culinary world, known for her innovative fusion of Latin American flavors with modern techniques. With a passion for fresh, local ingredients, she crafts dishes that are both vibrant and memorable. Isabella continues to inspire food lovers worldwide with her creative approach and dedication to excellence.</p>
        </div>
        <div className={styles.cards}>
          <img src={chef8} alt="" />
          <p>Chinedu Emeka Okafor is a Nigerian entrepreneur and philanthropist known for his diverse business ventures and humanitarian efforts. He is the chairman of the VGH Group, a conglomerate with subsidiaries in music, real estate, and industrial production. His record label, VGH Music, has produced notable artists such as Crayon and Somto.</p>
        </div>
        <div className={styles.cards}>
          <img src={chef9} alt="" />
          <p>Jackson Reed is a celebrated American chef known for his bold flavors and innovative farm-to-table cuisine. With a passion for fresh, local ingredients, he has transformed traditional American dishes into modern culinary experiences. Jackson’s creative approach and dedication to sustainability have earned him multiple awards and a loyal following.</p>
        </div>
      </div>
    </div>
  )
}

export default Members
