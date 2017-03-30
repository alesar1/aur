# Maintainer: Emeric <emeric.grange@gmail.com>
# Created: 31/01/2017
pkgname=autopanopro
pkgver=4.4.0
pkgrel=1
pkgdesc='Create beautiful panoramas by stitching multiple photos automatically with Autopano Pro (trial version).'
arch=('x86_64')
url='http://www.kolor.com/autopano/'
license=('custom: "commercial"')
install="$pkgname.install"
_archiveversion=400
_archivename=AutopanoPro_Linux64_${pkgver}.tar.xz

source=("$_archivename::http://download.kolor.com/app/stable/linux64tarxz/${pkgver}.${_archiveversion}"
        "$pkgname"
        "$pkgname.desktop")

sha256sums=('e1d87e151253956f3df7a082450e0dc75b0b6207a3ceb155f97887292f92d6f5'
            '4e24feb19978c7f62dc5ee7d6c9140dd2c79d751bfd2ad7cf69f8b66570fc9d2'
            '919b667b78deb2b3e57f3245207a1954fbb5723a6bb8dacd417c5065e9c4362c')

package() {
  cd "$srcdir/AutopanoPro"
  install -dm755 $pkgdir/{opt/kolor/,usr/share/licenses/$pkgname/}
  cp -r $srcdir/AutopanoPro $pkgdir/opt/kolor/$pkgname
  mv $pkgdir/opt/kolor/$pkgname/copyright $pkgdir/usr/share/licenses/$pkgname/
  install -Dm755 $srcdir/$pkgname $pkgdir/usr/bin/$pkgname
  install -Dm644 "$srcdir/$pkgname.desktop" "$pkgdir/usr/share/applications/$pkgname.desktop"
}
