# Maintainer: Astroncia <kestraly+gmail+com>

pkgname=astronciaiptv
pkgver=0.0.74
pkgrel=1
pkgdesc="IPTV player with EPG support"
arch=('any')
url="https://gitlab.com/astroncia/iptv"
license=('GPL3')
depends=('python' 'qt6-base' 'mpv' 'pyside6' 'python-pillow' 'python-pandas' 'python-gobject' 'python-pydbus' 'python-unidecode' 'python-requests' 'ffmpeg')
source=(${url}/-/archive/${pkgver}/iptv-${pkgver}.tar.gz)
b2sums=('d141c9b6248ff3110db1801d1236ca909de189bab6052cc45bd35a4a8c9759cc0c1c96f5c40be13344c7c0fab163d4de529bc378f01ec08ac2b92b96ffff8ebf')

build() {
        cd iptv-${pkgver}
        make
}

package() {
        cd iptv-${pkgver}
        install -D      -t "${pkgdir}"/usr/bin usr/bin/astronciaiptv
        install -Dm755  -t "${pkgdir}"/usr/lib/astronciaiptv usr/lib/astronciaiptv/astroncia_iptv.py
        install -Dm644  -t "${pkgdir}"/usr/share/applications usr/share/applications/astronciaiptv.desktop
        install -Dm644  -t "${pkgdir}"/usr/share/astronciaiptv/icons usr/share/astronciaiptv/icons/*.{gif,png}
        install -Dm644  -t "${pkgdir}"/usr/share/astronciaiptv/icons_dark usr/share/astronciaiptv/icons_dark/*.{gif,png}
        for i in 16 32 48 128 256; do
          install -Dm644 -t "${pkgdir}/usr/share/icons/hicolor/${i}x${i}/apps" \
            "usr/share/icons/hicolor/${i}x${i}/apps/${pkgname}.png"
        done
        cp -a usr/lib/astronciaiptv/data "${pkgdir}"/usr/lib/astronciaiptv/data
 
        # Translations
        cp -a usr/share/locale "${pkgdir}"/usr/share/locale
}
