# Maintainer: Olaf Bauer <hydro@freenet.de>

pkgname=makemkv
pkgver=1.10.1
pkgrel=1
pkgdesc="DVD and Blu-ray to MKV converter and network streamer"
arch=('i686' 'x86_64')
url="http://www.makemkv.com"
license=('LGPL' 'MPL' 'custom')
depends=('qt5-base' 'libxkbcommon-x11' 'hicolor-icon-theme' 'icu' 'ffmpeg')
if [ "$CARCH" = "x86_64" ]; then
  optdepends=('lib32-glibc: dts support')
fi
install=makemkv.install
source=(${url}/download/${pkgname}-bin-${pkgver}.tar.gz
        ${url}/download/${pkgname}-oss-${pkgver}.tar.gz
        makemkv.1
        makemkvcon.1
        mmdtsdec.1)
md5sums=('f48c37556971bf100cf265940122e684'
         '9103c445fa299dcfe2e4d98743aef699'
         '1f9b3a91427a2015434e501542443f4c'
         '7f4b112c5178860cc2eb25059ae1af2a'
         '9476154228bf1b1f983178ba8565ac44')

build() {
  cd "${srcdir}/${pkgname}-oss-${pkgver}"
  ./configure --prefix=/usr
  make
}

package() {
  cd "${srcdir}/${pkgname}-oss-${pkgver}"
  make DESTDIR=\""${pkgdir}"\" install

  cd "${srcdir}/${pkgname}-bin-${pkgver}"
  install -d "${pkgdir}/usr/bin/"
  install -t "${pkgdir}/usr/bin/" bin/i386/mmdtsdec
  if [ "$CARCH" = "x86_64" ]; then
    install -t "${pkgdir}/usr/bin/" bin/amd64/makemkvcon
  else
    install -t "${pkgdir}/usr/bin/" bin/i386/makemkvcon
  fi
  install -d "${pkgdir}/usr/share/MakeMKV"
  install -m 644 -t "${pkgdir}/usr/share/MakeMKV" src/share/makemkv_*.mo.gz src/share/*.mmcp.xml src/share/blues.jar
  
  install -Dm 644 src/eula_en_linux.txt "${pkgdir}/usr/share/licenses/${pkgname}/eula_en_linux.txt"

  cd "${srcdir}/"
  install -d "${pkgdir}/usr/share/man/man1/"
  install -m 644 -t "${pkgdir}/usr/share/man/man1/" makemkv.1 makemkvcon.1 mmdtsdec.1
}
