
    data = async (a,b,c,d) =>{
        await fetch(`https://suryakartanusantara.smooth.asia/${a}`,{
            method : 'POST',
            headers: {
                "Content-Type" : "application/json",
                'Access-Control-Allow-Origin': '*',
            },
            body : JSON.stringify(c)
         })
         .then(b => b.json())
         .then(b)
         .catch(d)
    }
    sharing = async (shareTitle,shareLink) => {
        try {
            await navigator.share({ title: shareTitle, url: shareLink });
            console.log("Data was shared successfully");
        } catch (err) {
            console.error("Share failed:", err.message);
        }
    }
    whatsapp = wa => {window.location.href = wa}
    data('2021/admin.php',a => {
        title = document.title
        content = document.querySelector('meta[itemprop="image"]').content
        discription = document.querySelector('meta[itemprop="description"]').content
        let mitra ='',buttonMitra,background = '',blog='',yt=''
        for(b of a.mitra){ 
            buttonMitra = b.link? `<div class="mbr-section-btn item-footer mt-2"><a href="${b.link}" class="btn btn-primary item-btn display-7" target="_blank">Website</a></div>` : ''
            mitra += `
                <div class="item features-image сol-12 col-md-6 col-lg-4">
                    <div class="item-wrapper">
                        <div class="item-img">
                            <a href="https://suryakartanusantara.smooth.asia">
                                <img src="${b.img}" alt="${b.title}">
                            </a>
                        </div>
                        <div class="item-content">
                            <h5 class="item-title mbr-fonts-style display-7">
                                <strong>${b.title}</strong>
                            </h5>
                            <p class="mbr-text mbr-fonts-style mt-3 display-7">${b.subtile}</p>
                        </div>
                        ${buttonMitra}
                    </div>
                </div>`
        }
        for(c of a.background){ 
            background += `
                <div class="carousel-item slider-image item ${(c.id==1)? 'active' : ''}">
                    <div class="item-wrapper">
                        <img class="d-block w-100" src="${c.picture}">
                    </div>
                </div>`
        }
        for(d of a.blog){ 
            linkBLog = d.title.replace(/\s+/g, "-")
            blog += `
                <div class="row timeline-element first-separline mb-5">
                    <span class="iconBackground"></span>
                    <div class="col-12 col-md-6">
                        <div class="image-wrapper">
                            <a href="${linkBLog}.php"><img src="${d.picture}" alt="${d.title}" title="${d.title}"></a>
                        </div>
                    </div>
                    <div class="col-12 col-md-6">
                        <div class="timeline-text-wrapper">
                            <h4 class="mbr-timeline-title mbr-fonts-style mb-0 display-5">
                                <strong><a href="${linkBLog}.php" class="text-black">${d.title}</a></strong>
                            </h4>
                            <p class="mbr-text mbr-fonts-style mt-3 mb-0 display-7">
                                <a href="${linkBLog}.php" class="text-black">${d.text}</a>
                            </p>
                            <p class="mbr-text mbr-fonts-style mt-3 mb-0 display-7" id='share'>
                                <button class="btn btn-primary text-white" onclick="sharing('${d.title}','https://suryakartanusantara.smooth.asia/${linkBLog}.php')">Bagikan 
                                <span class="mbr-iconfont mbr-iconfont-social socicon-sharethis socicon"></span>
                                </button>
                            </p>
                        </div>
                    </div>
                </div>`
        }
        for(e of a.yt){ 
            yt += `
                <div class="item features-image сol-12 col-md-6 col-lg-4">
                    <div class="item-wrapper">
                        <a class="item-img" href="${e.link}">
                            <video src="${e.video}" alt="${e.title}" autoplay loop style="width:100%"></video>
                        </a>
                        <div class="mbr-section-btn item-footer mt-2"><a href="${e.link}" class="display-7" target="_blank">tonton selengkapnya</a></div>
                    </div>
                </div>`
        }
        tamplate = `
    <section class="menu menu1 cid-sCDQkmEztW">
        <nav class="navbar navbar-dropdown navbar-fixed-top collapsed">
            <div class="container-fluid">
                <div class="navbar-brand">
                    <span class="navbar-logo">
                        <a href="https://suryakartanusantara.smooth.asia">
                            <img src="${a.info.cover}" alt="${a.info.fulltitle}" style="height: 3rem;">
                        </a>
                    </span>
                    <span class="navbar-caption-wrap">
                        <a class="navbar-caption text-black text-primary display-7" href="https://suryakartanusantara.smooth.asia">${a.info.subtitle}</a>
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
                            <a class="nav-link link text-black display-4" href="blog.php">Blog</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link link text-black display-4" href="tentang.php">Tentang</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link link text-black display-4" href="visimisi.php">Visi Misi</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link link text-black display-4" href="mitra.php">Mitra</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link link text-black display-4" href="concact.php">Kontak</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link link text-black display-4" href="organisasi.php">Organisasi</a>
                        </li>
                    </ul>
                    <div class="navbar-buttons mbr-section-btn">
                        <a class="btn btn-primary display-4" href="https://wa.me/+62${a.kontak.phone}" target="_blank">Whatsapp</a>
                    </div>
                </div>
            </div>
        </nav>
    </section>
    <section class="header7 cid-sCDQmB1PD9 mbr-fullscreen" id="header7-1">
        <div class="text-right container">
            <div class="row justify-content-end">
                <div class="col-12 col-lg-5">
                    <h1 class="mbr-section-title mbr-fonts-style mb-3 display-5">
                        <strong>${a.info.title}</strong>
                    </h1>
                    <p class="mbr-text mbr-fonts-style display-2">${a.info.subtitle}</p>
                    <div class="mbr-section-btn mt-3">
                        <a class="btn btn-primary display-4" href="https://wa.me/62${a.kontak.phone}">Whatsapp</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="slider2 cid-sCDQqKXJ25" id="slider2-2">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12 col-md-12">
                    <div class="carousel slide" id="sCEAlV2Hur" data-ride="carousel" data-interval="5000">
                        <ol class="carousel-indicators">
                            <li data-slide-to="0" class="active" data-target="#sCEAlV2Hur"></li>
                            <li data-slide-to="1" class="" data-target="#sCEAlV2Hur"></li>
                            <li data-slide-to="2" class="" data-target="#sCEAlV2Hur"></li>
                            <li data-slide-to="3" class="" data-target="#sCEAlV2Hur"></li>
                        </ol>
                        <div class="carousel-inner">
                            ${background}
                        </div>
                        <a class="carousel-control carousel-control-prev" role="button" data-slide="prev" href="#sCEAlV2Hur">
                            <span class="mobi-mbri mobi-mbri-arrow-prev" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control carousel-control-next" role="button" data-slide="next" href="#sCEAlV2Hur">
                            <span class="mobi-mbri mobi-mbri-arrow-next" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="content4 cid-sCDQFUz8E4 mbr-parallax-background" id="content4-3">
        <div class="mbr-overlay" style="opacity: 0.7; background-color: rgb(53, 53, 53);"></div>
        <div class="container">
            <div class="row justify-content-center">
                <div class="title col-md-12 col-lg-12">
                    <h3 class="mbr-section-title mbr-fonts-style align-center mb-4 display-2">
                        <strong>${a.info.title}</strong>
                        <div>
                            <strong>${a.info.subtitle}</strong>
                        </div>
                    </h3>
                    <h4 class="mbr-section-subtitle align-center mbr-fonts-style mb-4 display-5">"${a.info.tagline}"</h4>
                </div>
            </div>
        </div>
    </section>
    <section class="content7 cid-sCDQHVtRHR" id="content7-4">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12 col-md-7">
                    <blockquote>${a.info.tentang}</blockquote>
                </div>
                <div class="col-12 col-lg-8">
                    <div class="image-block">
                        <a href="https://suryakartanusantara.smooth.asia">
                            <img src="${a.info.cover}" alt="${a.info.fulltitle}">
                        </a>
                        <p class="mbr-description mbr-fonts-style mt-2 align-center display-4">Logo ${a.info.title}</p>
                    </div>
                </div>
                <div class="col-12 col-md-7">
                    <blockquote>
                        Garis besar program kerja yayasan.
                        <ol>
                            <li class="mbr-pb-2">
                                ${a.gerakan[0].text}
                            </li>
                            <li class="mbr-pb-2">
                                ${a.gerakan[1].text}
                            </li>
                            <li class="mbr-pb-2">
                                ${a.gerakan[2].text}
                            </li>
                        </ol>
                    </blockquote>
                </div>
            </div>
        </div>
    </section>
    <section class="video1 cid-sCDT4nwv2d mbr-parallax-background" id="video1-f">
        <div class="container">
            <div class="mbr-row mbr-jc-c">
                <div class="mbr-col-sm-12 mbr-col-md-12 mbr-col-lg-8">
                    <div class="video-title align-center">
                        <h2 class="mbr-section-title mbr-white mbr-fonts-style mbr-bold mbr-pb-4 display-2">Kami bergerak</h2>
                    </div>
                    <div class="video-block">
                        <iframe width="420" height="345" frameborder="0" allowfullscreen="1" src="https://www.youtube.com/embed/x407BtixhJM"></iframe>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="content9 cid-sCDQTFZrqF" id="content9-8">
        <div class="container">
            <div class="row justify-content-center">
                <div class="counter-container col-md-12 col-lg-9">
                    <h4 class="mbr-section-title mbr-fonts-style mb-4 display-1"><strong>Filosofi Nama dan Logo</strong></h4>
                    <div class="mbr-text mbr-fonts-style display-5">
                        <ol>
                            <li>
                                <strong>${a.logo[0].title}</strong> - ${a.logo[0].subtitle}
                            </li>
                            <li>
                                <strong>${a.logo[1].title}</strong> - ${a.logo[1].subtitle}
                            </li>
                            <li>
                                <strong>${a.logo[2].title}</strong> - ${a.logo[2].subtitle}
                            </li>
                            <li>
                                <strong>${a.logo[3].title}</strong> - ${a.logo[3].subtitle}
                            </li>
                            <li>
                                <strong>${a.logo[4].title}</strong> - ${a.logo[4].subtitle}
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="tabs content18 cid-sCDQVk3EmV mbr-parallax-background" id="tabs1-9">
        <div class="mbr-overlay" style="opacity: 0.5; background-color: rgb(53, 53, 53);"></div>
        <div class="container">
            <div class="row justify-content-center mt-4">
                <div class="col-12 col-md-8">
                    <div class="tab-content">
                        <div class="tab-pane in active" role="tabpanel">
                            <div class="row">
                                <div class="col-md-12">
                                    <ul class="nav nav-tabs mb-4" role="tablist">
                                        <li class="nav-item">
                                            <strong  class="nav-link mbr-fonts-style display-7">Visi</strong>
                                        </li>
                                    </ul>
                                    <p class="mbr-text mbr-fonts-style display-7">
                                        <strong>${a.visimisi.visi.title}</strong><br>${a.visimisi.visi.subtitle}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane in active" role="tabpanel">
                            <div class="row">
                                <div class="col-md-12">
                                    <ul class="nav nav-tabs mb-4" role="tablist">
                                        <li class="nav-item">
                                            <strong  class="nav-link mbr-fonts-style display-7">Misi</strong>
                                        </li>
                                    </ul>
                                    <p class="mbr-text mbr-fonts-style display-7">
                                        <strong>${a.visimisi.misi.title}</strong><br>${a.visimisi.misi.subtitle}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="timeline3 cid-sCE4WiUsqi" id="timeline3-h">
        <div class="container">
            <div class="timelines-container mt-4">
                ${blog}
            </div>
        </div>
    </section>
    <section class="features3 cid-sCDR0aIcwN" id="features3-a">
        <div class="container">
            <div class="mbr-section-head">
                <h4 class="mbr-section-title mbr-fonts-style align-center mb-0 display-2">
                    <strong>Mitra</strong>
                </h4>
            </div>
            <div class="row mt-4">
                ${mitra}
            </div>
        </div>
    </section>
    <section class="features18 cid-sCE57xlXGv" id="features19-i">
        <div class="container">
            <div class="row justify-content-center">
                <div class="card col-12 col-lg">
                    <div class="card-wrapper">
                        <h6 class="card-title mbr-fonts-style mb-4 display-2">
                            <strong>Yayasan</strong>
                        </h6>
                        <p class="mbr-text mbr-fonts-style display-7">Kami terdiri dari barisan generasi muda yang mempunyai peran masing-masing didalam struktur yayasan untuk mendukung visi dan misi yayasan.</p>
                        <div class="mbr-section-btn">
                            <a class="btn btn-primary display-4" href="organisasi.php">Stuktur yayasan</a>
                        </div>
                    </div>
                </div>
                <div class="col-12 col-lg-6">
                    <div class="image-wrapper">
                        <a href="https://suryakartanusantara.smooth.asia">
                            <img src="assets/images/02-1280x720.jpg" alt="Yayasan marhaenis mukmin suryakarta nusantara">
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="features3 cid-sCDR0aIcwN" id="features3-a">
        <div class="container">
            <div class="mbr-section-head">
                <h4 class="mbr-section-title mbr-fonts-style align-center mb-0 display-2">
                    <strong>Gallery</strong>
                </h4>
            </div>
            <div class="row mt-4">
                ${yt}
            </div>
        </div>
    </section>
    <section class="footer6 cid-sCDRaOQfxn" id="kontak">
        <div class="container">
            <div class="row content mbr-white">
                <div class="col-12 col-md-3 mbr-fonts-style display-7">
                    <h5 class="mbr-section-subtitle mbr-fonts-style mb-2 display-7">
                        <strong>Alamat</strong>
                    </h5>
                    <p class="mbr-text mbr-fonts-style display-7">${a.kontak.alamat}</p> <br>
                    <h5 class="mbr-section-subtitle mbr-fonts-style mb-2 mt-4 display-7">
                        <strong>Kontak</strong>
                    </h5>
                    <p class="mbr-text mbr-fonts-style mb-4 display-7">
                        Email: ${a.kontak.email} <br>
                        Phone: +62 ${a.kontak.phone}
                    </p>
                </div>
                <div class="col-12 col-md-3 mbr-fonts-style display-7">
                    <h5 class="mbr-section-subtitle mbr-fonts-style mb-2 display-7">
                        <strong>Menu</strong>
                    </h5>
                    <ul class="list mbr-fonts-style mb-4 display-4">
                        <li class="mbr-text item-wrap">
                            <a href="blog.php" class="text-white text-primary">Blog</a>
                        </li>
                        <li class="mbr-text item-wrap">
                            <a href="tentang.php" class="text-white">Tentang</a>
                        </li>
                        <li class="mbr-text item-wrap">
                            <a href="visimisi.php" class="text-white">Visi dan Misi</a>
                        </li>
                        <li class="mbr-text item-wrap">
                            <a href="mitra.php" class="text-white">Mitra</a>
                        </li>
                        <li class="mbr-text item-wrap">
                            <a href="concact.php" class="text-white">kontak</a>
                        </li>
                        <li class="mbr-text item-wrap">
                            <a href="organisasi.php" class="text-white">Organisasi</a>
                        </li>
                    </ul>
                    <h5 class="mbr-section-subtitle mbr-fonts-style mb-2 mt-5 display-7">
                        <strong>Info</strong>
                    </h5>
                    <p class="mbr-text mbr-fonts-style mb-4 display-7">Senin- Sabtu : 9am – 4pm<br>Minggu &amp; hari besar tutup</p>
                </div>
                <div class="col-12 col-md-6">
                    <div class="google-map">
                        <iframe frameborder="0" style="border:0" src="${a.kontak.map}" allowfullscreen=""></iframe>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="social-list align-left">
                        <div class="soc-item">
                            <a href="${a.kontak.instagram}" target="_blank">
                                <span class="mbr-iconfont mbr-iconfont-social socicon-instagram socicon"></span>
                            </a>
                        </div>
                        <div class="soc-item">
                            <a href="${a.kontak.facebook}" target="_blank">
                                <span class="mbr-iconfont mbr-iconfont-social socicon-facebook socicon"></span>
                            </a>
                        </div>
                        <div class="soc-item">
                            <a href="${a.kontak.youtube}" target="_blank">
                                <span class="mbr-iconfont mbr-iconfont-social socicon-youtube socicon"></span>
                            </a>
                        </div>
                        <div class="soc-item">
                            <a href="https://wa.me/+62${a.kontak.phone}" target="_blank">
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
    </section>
    <button style="position:fixed;width: 50px;height: 50px;background-color: green;bottom: 30px;right: 15px;border:none" onclick="whatsapp('https://wa.me/+62${a.kontak.phone}')">
        <span class="mbr-iconfont mbr-iconfont-social socicon-whatsapp socicon" style="color:white"></span>
    </button>
    <button style="position:fixed;width: 50px;height: 50px;background-color: orange;bottom: 85px;right: 15px;border:none" onclick="whatsapp('${a.kontak.street}')">
        <span class="mbr-iconfont mbr-iconfont-social socicon-googlemaps socicon" style="color:white"></span>
    </button>
    <button id='share' style="position:fixed;width: 50px;height: 50px;background-color: blue;bottom: 140px;right: 15px;border:none" onclick="sharing('${title}','https://suryakartanusantara.smooth.asia/https://suryakartanusantara.smooth.asia')">
        <span class="mbr-iconfont mbr-iconfont-social socicon-sharethis socicon" style="color:white"></span>
    </button>
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5890023057020023"
     crossorigin="anonymous"></script>
        <ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-5890023057020023" data-ad-slot="6977264590" data-ad-format="auto" data-full-width-responsive="true"></ins>
    <script>
        (adsbygoogle = window.adsbygoogle || []).push({});
    </script>`
        document.body.innerHTML = tamplate
        if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
        }else{
            for(shareButton of document.querySelectorAll('#share')){
                shareButton.remove()
            }
        }
    },{id:true})

