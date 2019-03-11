# Maintainer: Spike29 <leguen.yannick@gmail.com>
# Contributor: goetzc <goetzchrist@gmail.com>
# Contributor: Lucas Saliés Brum <lucas@archlinux.com.br>
 
pkgname=audio-recorder
pkgver=3.0.5
pkgrel=1
pkgdesc="Audio Recorder Application"
arch=('i686' 'x86_64')
url='https://launchpad.net/~audio-recorder'
license=('GPL3')
depends=('gst-plugins-base' 'gst-plugins-good' 'libappindicator-gtk3')
makedepends=('intltool')
optdepends=('pulseaudio: for extended recording capabilities'
            'gst-plugins-bad: for AAC encoding'
            'gst-plugins-ugly: for MP3 encoding'
            'gst-libav: plugin for the libav library')
source=("https://launchpad.net/~${pkgname}/+archive/ubuntu/ppa/+sourcefiles/${pkgname}/${pkgver}~disco/${pkgname}_${pkgver}~disco.tar.gz")
md5sums=('69e4e6643bf457de7fb36cb9c4fb07d6')
 
build() {
  cd "${srcdir}/trunk"
  ./configure --prefix=/usr
  make
}
 
package() {
  cd "${srcdir}/trunk"
  make DESTDIR="${pkgdir}/" install
}
