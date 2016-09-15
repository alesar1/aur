# Maintainer: grimi <grimi at poczta dot fm>

_pkgname=fs-uae
pkgname=fs-uae-devel
pkgver=2.7.16dev
pkgrel=1
pkgdesc="Cross-platform Amiga emulator based on UAE/WinUAE (development version)."
arch=("i686" "x86_64")
url="http://fs-uae.net/download-devel"
license=("GPL2")
depends=("sdl2" "libpng" "openal" "mesa" "libxi" "libmpeg2" "gettext" "freetype2" "hicolor-icon-theme"
         "desktop-file-utils" "shared-mime-info") # 'glib2' provided by 'gettext', 'zlib' by 'libpng'
makedepends=('zip')
source=("http://fs-uae.net/devel/${pkgver}/${_pkgname}-${pkgver}.tar.gz")
#source=("http://ppa.launchpad.net/fengestad/devel/ubuntu/pool/main/f/${_pkgname}/${_pkgname}_${pkgver}.orig.tar.gz")
provides=("fs-uae")
conflicts=("fs-uae")
md5sums=('a1c8d968b18c8b09bdd0180658787fff')

#MAKEFLAGS="-j1"



build() {
   cd ${_pkgname}-${pkgver}

   ./configure --prefix=/usr
   make
}



package() {
   cd ${_pkgname}-${pkgver}

   make install DESTDIR="${pkgdir}"
}


# vim:set ts=3 sw=3 sts=3 et:

