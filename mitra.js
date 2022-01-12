
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
        console.log(a)
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
        for(d of a.blog){ 
            linkBLog = d.title.replace(/\s+/g, "-")
            blog += `
                <div class="item features-image сol-12 col-md-6 col-lg-4">
                    <div class="item-wrapper">
                        <div class="item-img">
                            <a href="${linkBLog}.php">
                                <img src="${d.picture}" alt="${d.title}" title="${d.title}">
                            </a>
                        </div>
                        <div class="item-content">
                            <h5 class="item-title mbr-fonts-style display-7">
                                <strong>${d.title}</strong>
                            </h5>
                        </div>
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
    <section class="features3 cid-sCDR0aIcwN" id="features3-a" style= 'background-image:none'>
        <div class="container">
            <div class="mbr-section-head">
                <h4 class="mbr-section-title mbr-fonts-style align-center mb-0 display-2" style='color:black'>
                    <strong>Baca juga yang lain!</strong>
                </h4>
            </div>
            <div class="row mt-4" id="slide">
            ${blog}
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

