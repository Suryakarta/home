tamplate = `
    <section class="menu menu1 cid-sCDQkmEztW" id ="head">
        <nav class="navbar navbar-dropdown navbar-fixed-top collapsed">
            <div class="container-fluid">
                <div class="navbar-brand">
                    <span class="navbar-logo">
                        <a href="https://suryakartanusantara.smooth.asia">
                            <img src="https://suryakartanusantara.smooth.asia/assets/images/logo1-96x96.png" alt="Yayasan Marhaenis Mukmin Suryakarta Nusantara" style="height: 3rem;">
                        </a>
                    </span>
                    <span class="navbar-caption-wrap">
                        <a class="navbar-caption text-black text-primary display-7" href="https://suryakartanusantara.smooth.asia">Suryakarta Nusantara</a>
                    </span>
                </div>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <div class="hamburger">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav nav-dropdown">
                        <li class="nav-item">
                            <a class="nav-link link text-black display-4" href="https://suryakartanusantara.smooth.asia">Branda</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link link text-black display-4" href="https://suryakartanusantara.smooth.asia/blog.php">Blog</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link link text-black display-4" href="https://suryakartanusantara.smooth.asia/tentang.php">Tentang</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link link text-black display-4" href="https://suryakartanusantara.smooth.asia/visimisi.php">Visi Misi</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link link text-black display-4" href="https://suryakartanusantara.smooth.asia/mitra.php">Mitra</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link link text-black display-4" href="https://suryakartanusantara.smooth.asia/#kontak">Kontak</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link link text-black display-4" href="https://suryakartanusantara.smooth.asia/organisasi.php">Organisasi</a>
                        </li>
                    </ul>
                    <div class="navbar-buttons mbr-section-btn">
                        <a class="btn btn-primary display-4" href="https://wa.me/+6287881570146" target="_blank">Whatsapp</a>
                    </div>
                </div>
            </div>
        </nav>
    </section>
    <section class="header3 mt-5" >
        <div class="align-center container">
            <img id="dataImg" src="assets/images/01-1280x720.jpg" alt="Yayasan Marhaenis Mukmin | Suryakarta Nusantara">
        </div>
    </section>
    <section class="content5 cid-sCEwQv5jnx">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-12 col-lg-10">
                    <h4 class="mbr-section-subtitle mbr-fonts-style mb-4 display-5" id="dataTitle"></h4>
                    <p class="mbr-text mbr-fonts-style display-7" id="dataSubTitle"></p>
                </div>
            </div>
        </div>
    </section>
    <section class="features3 cid-sCDR0aIcwN" id="features3-a" style= 'background-image:none'>
        <div class="container">
            <div class="row mt-4" id="slide">
            </div>
        </div>
    </section>
    <section class="footer6 cid-sCDRaOQfxn" id="kontak">
    <div class="container">
        <div class="row content mbr-white">
            <div class="col-sm-12">
                <p class="mbr-text mbr-fonts-style mbr-white display-7">Unduh versi android <a href="https://smooth.asia" class="text-primary" target="_blank">Smooth</a></p>
            </div>
            <div class="col-md-6">
                <div class="social-list align-left">
                    <div class="soc-item">
                        <a href="https://twitter.com/suryakartanusantara" target="_blank">
                            <span class="mbr-iconfont mbr-iconfont-social socicon-instagram socicon"></span>
                        </a>
                    </div>
                    <div class="soc-item">
                        <a href="https://www.facebook.com/pages/suryakartanusantara" target="_blank">
                            <span class="mbr-iconfont mbr-iconfont-social socicon-facebook socicon"></span>
                        </a>
                    </div>
                    <div class="soc-item">
                        <a href="https://www.youtube.com/channel/UCZNJP0mmdSUDbf5OxGnW1vw" target="_blank">
                            <span class="mbr-iconfont mbr-iconfont-social socicon-youtube socicon"></span>
                        </a>
                    </div>
                    <div class="soc-item">
                        <a href="https://wa.me/+6287881570146" target="_blank">
                            <span class="mbr-iconfont mbr-iconfont-social socicon-whatsapp socicon"></span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer-lower">
            <div class="media-container-row">
                <div class="col-sm-12">
                    <hr>
                </div>
            </div>
            <div class="col-sm-12 copyright pl-0">
               <p class="mbr-text mbr-fonts-style mbr-white display-7">Design By <a href="https://smooth.asia" class="text-primary" target="_blank">Smooth</a></p>
            </div>
        </div>
    </div>
    </section>`
document.addEventListener('DOMContentLoaded',()=>{       
        if (window.location.protocol != "https:") {
           window.location.protocol = "https";
        }
    document.body.innerHTML += tamplate
    img = document.querySelector('#dataImg')
    img.src = document.querySelector('meta[itemprop="image"]').content
    img.alt = document.title
    title = document.querySelector('#dataTitle')
    title.innerHTML = document.title
    subtitle = document.querySelector('#dataSubTitle')
    subtitle.innerHTML = document.querySelector('meta[itemprop="description"]').content
    data = async (a,b,c,d) =>{
        await fetch('https://suryakartanusantara.smooth.asia/' + a,{
            method : 'POST',
            headers: {
                "Content-Type" : "application/json",
                'Access-Control-Allow-Origin': '*'
            },
            body : JSON.stringify(c)
         })
         .then(b => b.json())
         .then(b)
         .catch(d)
    }
    data('2021/blog.php',a =>{
        console.log(a)
        let blog = ''
        for(b of a.data){
            linkBLog = b.text.replace(/\s+/g, "-")
            blog += `
                <div class="item features-image сol-12 col-md-6 col-lg-4">
                    <div class="item-wrapper">
                        <div class="item-img">
                            <a href="${linkBLog}.php">
                                <img src="${b.picture}" alt="${b.text}" title="${b.text}">
                            </a>
                        </div>
                        <div class="item-content">
                            <h5 class="item-title mbr-fonts-style display-7">
                                <strong>${b.text}</strong>
                            </h5>
                        </div>
                    </div>
                </div>`
        }
        document.querySelector('#slide').innerHTML = blog
    },{page:0})

}, false);
