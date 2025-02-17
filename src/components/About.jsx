import '../styles/About.css'

import { FaPhp, FaHtml5, FaReact, FaBootstrap, FaRust, FaLaravel, FaGit } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { MdOutlineCss } from "react-icons/md";
import { FaGolang } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiCodeigniter } from "react-icons/di";


function About() {
    return (
        <section id="about">
            <div className='wrapper'>
                <h3>About</h3>
                <p>Halo, saya Faisal, seorang mahasiswa di Universitas Nusa Putra yang sedang mendalami bidang Teknik Informatika. Saya memiliki passion dalam pengembangan perangkat lunak, khususnya dalam pengembangan aplikasi mobile menggunakan React Native, Saat ini, saya sedang mengerjakan beberapa proyek. Selain itu, saya juga tertarik dalam desain web dan pemrograman backend.</p>
                <h4>Programming Language & Tools</h4>
                <div className="skills">
                    <FaPhp /><FaHtml5 /><SiJavascript /><FaReact /><MdOutlineCss />
                    <FaGolang /><FaBootstrap /><FaRust /><RiTailwindCssFill />
                    <FaLaravel /><DiCodeigniter /><FaGit />

                </div>
            </div>
        </section>
    )
}

export default About