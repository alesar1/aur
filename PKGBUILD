# Maintainer: Frederik Schwan <frederik dot schwan at linux dot com>
# Contributor: Olaf Bauer <hydro@freenet.de>

pkgname=makemkv-cli
pkgver=1.9.5
pkgrel=1
pkgdesc="DVD and Blu-ray to MKV converter and network streamer - CLI only"
arch=('i686' 'x86_64')
url="http://www.makemkv.com"
license=('LGPL' 'MPL' 'custom')
depends=('ffmpeg')
conflicts=('makemkv')
if [ "$CARCH" = "x86_64" ]; then
  optdepends=('lib32-glibc: dts support')
fi
install=makemkv.install
source=(${url}/download/makemkv-bin-${pkgver}.tar.gz
        ${url}/download/makemkv-oss-${pkgver}.tar.gz
        makemkvcon.1
        mmdtsdec.1)
sha256sums=('57468cc5d34fc442f2d4a7888e1baa2ec7f006027dc5ba3322472724636ef3e3'
            'cfd1729a40063dde2a52d3100091d2a0002aa616f87597108fa8d11c3ab5b5c6'
            'f12c0facf2f0071a9f728b138986f0a4c2b4ff6ace2dfb2e96364e215e9fda6f'
            '2a6237d3d5ce073734c658c7ec5d2141ecd0047e6d3c45d1bd594135c928878f')

build() {
  cd $srcdir/makemkv-oss-${pkgver}
  ./configure --prefix=/usr --disable-gui
  make
}

package() {
  cd ${srcdir}/makemkv-oss-${pkgver}
  make DESTDIR="${pkgdir}" install

  cd $srcdir/makemkv-bin-${pkgver}
  install -d ${pkgdir}/usr/bin/
  install -t ${pkgdir}/usr/bin/ bin/i386/mmdtsdec
  if [ "$CARCH" = "x86_64" ]; then
    install -t ${pkgdir}/usr/bin/ bin/amd64/makemkvcon
  else
    install -t ${pkgdir}/usr/bin/ bin/i386/makemkvcon
  fi
  install -d ${pkgdir}/usr/share/MakeMKV
  install -m 644 -t ${pkgdir}/usr/share/MakeMKV src/share/makemkv_*.mo.gz src/share/*.mmcp.xml
  
  install -Dm 644 ${srcdir}/makemkv-bin-${pkgver}/src/eula_en_linux.txt ${pkgdir}/usr/share/licenses/$pkgname/eula_en_linux.txt

  cd $srcdir/
  install -d ${pkgdir}/usr/share/man/man1/
  install -m 644 -t ${pkgdir}/usr/share/man/man1/ makemkvcon.1 mmdtsdec.1
}
