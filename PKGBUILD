# Maintainer: Jan Ypma <jan at ypmania dot nl>
pkgname=jjazzlab-x-bin
pkgver=3.1.0
pkgrel=1
pkgdesc="A Midi-based framework dedicated to backing tracks generation"
arch=('i686' 'x86_64')
url="https://www.jjazzlab.com/"
license=('LGPL')
depends=('java-environment>=8')
source=("https://www.jjazzlab.com/pkg/JJazzLab-${pkgver}-Linux.zip" "jjazzlab-x.desktop")
sha256sums=('0f39e9436373164c76047a340066baf504b60bd04f2f938091624b410a6b1eed'
            'ca15408fd0f11505def63f04359bc3c9745c0077a9f3b5953edc31391ee7a882')

package() {
  cd "$srcdir/JJazzLab-${pkgver}-Linux"

  # Let's use the system JDK instead of the bundled one
  rm -r jdk
  sed 's/\(^jdkhome="jdk"$\)/#\1/' etc/jjazzlab.conf > etc/jjazzlab.conf

  install -d "${pkgdir}/opt/jjazzlab-x"
  cp -rp * "${pkgdir}/opt/jjazzlab-x"

  install -d "${pkgdir}/usr/bin"
  ln -s /opt/jjazzlab-x/bin/jjazzlab ${pkgdir}/usr/bin/jjazzlab

  install -d "${pkgdir}/usr/share/applications"
  install ../jjazzlab-x.desktop "${pkgdir}/usr/share/applications"
}
