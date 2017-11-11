# Maintainer: Christopher Arndt <aur -at- chrisarndt -dot- de>

pkgname=polyphone
pkgver=1.9
pkgrel=1
pkgdesc="Graphical user interface for editing sf2 and sfz files"
arch=('i686' 'x86_64')
url="http://polyphone-soundfonts.com/"
license=('GPL')
depends=('qt5-svg' 'portaudio')
source=("https://github.com/davy7125/polyphone/raw/master/versions/polyphone-1.9-src.zip"
        "$pkgname.desktop"
        "$pkgname.mime")
changelog='ChangeLog'
md5sums=('780937189d74182078ac7d9a59989bc7'
         'c796f82cd0ab742741de5c607cd87169'
         'f0808717b27757c80b508f6114a535ce')

prepare() {
  cd "$srcdir/trunk"
  sed -i \
    -e 's/^#DEFINES += USE_LOCAL/DEFINES += USE_LOCAL/g' \
    -e 's/__LINUX_ALSASEQ__/__LINUX_ALSA__ __UNIX_JACK__/g' \
    polyphone.pro
}

build() {
  cd "$srcdir/trunk"
  qmake
  make
}

package() {
  cd "$srcdir/trunk"
  install -D RELEASE/polyphone "$pkgdir/usr/bin/$pkgname"
  install -Dm644 ressources/polyphone.png "$pkgdir/usr/share/pixmaps/$pkgname.png"
  install -Dm644 "$srcdir/$pkgname.desktop" "$pkgdir/usr/share/applications/$pkgname.desktop"
  install -Dm644 "$srcdir/$pkgname.mime" "$pkgdir/usr/share/mime/packages/$pkgname.xml"
}
