# $Id: PKGBUILD 273896 2017-12-11 20:04:09Z jlichtblau $
# Maintainer: 
# Contributor: Sergej Pupykin <pupykin.s+arch@gmail.com>

pkgname=motion
pkgver=4.1.1
pkgrel=1
pkgdesc="A software motion detector which grabs images from video4linux devices and/or from webcams"
arch=('x86_64')
license=('GPL')
url="http://www.lavrsen.dk/foswiki/bin/view/Motion/WebHome"
depends=('sqlite' 'ffmpeg')
backup=('etc/motion/motion.conf')
source=("$pkgname-$pkgver.tar.gz::https://github.com/Motion-Project/motion/archive/release-$pkgver.tar.gz")
sha256sums=('2074b935bdfe28f84c2c3233274b06908336778f303bb13530d4299c3f8aa4e2')

build() {
  cd "${srcdir}/${pkgname}-release-${pkgver}"
  autoreconf
  ./configure --prefix=/usr \
    --without-pgsql \
    --without-mysql \
    --sysconfdir=/etc \
    --with-ffmpeg \
    --with-webp
  make
}

package(){
  cd "${srcdir}/${pkgname}-release-${pkgver}"
  make DESTDIR="${pkgdir}" install
  install -Dm644 "motion-dist.conf" "${pkgdir}/etc/motion/motion.conf"
  install -Dm644 "motion.service" "${pkgdir}/usr/lib/systemd/system/motion.service"
}
