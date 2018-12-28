# Maintainer: bitwave <aur [aT] oomlu {d.0t} de>
# Contributor: Daniel Dietrich <shaddow2k@@gmail..com>
pkgname=kleiner-brauhelfer
pkgver=1.4.4.5
pkgrel=1
pkgdesc="A Qt-based tool for hobby brewer to calculate and manage the beer brewing process."
arch=("i686" "x86_64")
url="http://www.joerum.de/kleiner-brauhelfer"
license=('GPL3')
depends=('qt5-svg' 'qt5-webengine')
provides=('kleiner-brauhelfer')
source=("https://github.com/Gremmel/$pkgname/archive/v$pkgver.tar.gz"
        kleiner-brauhelfer.desktop
        brauhelfer
        release.patch)

prepare() {
	cd "${srcdir}"
	patch -p1 -i release.patch
}

build() {
  mkdir -p build
  cd build

  cd "${srcdir}/${pkgname}-${pkgver}/source/"
  qmake-qt5 brauhelfer.pro
  make
}

package(){
  cd "${srcdir}/${pkgname}-${pkgver}/source/"

  #bin
  install -d "$pkgdir/usr/bin/kleiner-brauhelfer"
  install -D -m755 "bin/kleiner-brauhelfer" "$pkgdir/usr/bin/kleiner-brauhelfer"
  install -D -m755 "${srcdir}/brauhelfer" "$pkgdir/usr/bin"

  # languages
  install -d "$pkgdir/usr/bin/kleiner-brauhelfer/languages"
  install -D -m644 "languages/"*.qm "$pkgdir/usr/bin/kleiner-brauhelfer/languages"
  install -D -m644 "languages/"*.png "$pkgdir/usr/bin/kleiner-brauhelfer/languages"

    #Desktop Launcher
  install -D -m644 "$srcdir/kleiner-brauhelfer.desktop" "$pkgdir/usr/share/applications/kleiner-brauhelfer.desktop"

  #Icon
  install -D -m644 "res/logo.svg" "$pkgdir/usr/share/pixmaps/kleiner-brauhelfer.svg"
}
sha256sums=('588432a1cdd52097e11bef5c8ecac2f11bbb810f8f32094d3116af44612bf9c8'
            '737f4e890a9c5993865a4885e0291d4bdeba1a6586da67716b3bb6ff15e6ee61'
            '9d034a6c58a6adf7f584df6aba96251bcba52cdab65d661f0aa1a88761ed2067'
            '7b2e676cb6e9e278163d8f5b65ac9fcbf7ef492b88bcfb497d64becea9ba226e')
