# Maintainer: Mikołaj Chwalisz <chwalisz at tkn dot tu-berlin dot de>

pkgname=jfed
_pkgname=jFed
pkgver=5.9.0
pkgrel=1
pkgdesc="jFed is a Java-based framework  for testbed federation"
arch=('x86_64')
url="http://jfed.iminds.be/"
license=('MIT')
depends=('java-openjfx')
options=('!emptydirs' '!strip')
#install=$pkgname.install
source=(
    "http://jfed.iminds.be/downloads/stable/installers/${_pkgname}_linux_${pkgver//./_}.deb"
    "jFed-Experimenter.desktop"
    )
md5sums=('000b8be8998498bd992c7461dccd7423'
         '9e73fa7a04bf623897057e402f6ac5c6')

package() {
  msg2 "Extracting the data.tar.xz..."
  bsdtar -xf data.tar.gz -C "$pkgdir/"
  msg2 "Moving stuff in place..."

  install -d $pkgdir/{usr/{bin,share/applications},opt}
  install -d $pkgdir/opt

  ln -s /opt/jFed/jFed-Experimenter $pkgdir/usr/bin/jFed-Experimenter
  ln -s /opt/jFed/jFed-Automated-Tester $pkgdir/usr/bin/jFed-Automated-Tester
  ln -s /opt/jFed/jFed-Probe $pkgdir/usr/bin/jFed-Probe
  install -m644 $srcdir/jFed-Experimenter.desktop $pkgdir/usr/share/applications/
}
