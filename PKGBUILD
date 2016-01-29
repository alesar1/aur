# Maintainer: Grey Christoforo <first name [at] last name [dot] net>

pkgname=albiononline
pkgver=20160128110122
pkgrel=1
pkgdesc="The first true cross-platform Sandbox MMO"
url="https://albiononline.com/"
arch=('i686' 'x86_64')
license=('custom')
depends=('libgl' 'gstreamer0.10-good')
source=("https://live.albiononline.com/clients/${pkgver}/albion-online-setup" "albiononline.desktop")

options=(!strip docs libtool emptydirs !zipman staticlibs !upx)
md5sums=('4eeee3350a862b8dbbc8a89e9ecf6c59'
         'cec7e1ad7f4f8acfc0628d0dd8d421e6')


PKGEXT='.pkg.tar'

package() {
  mkdir -p "${pkgdir}/opt/albiononline"
  mv data/* "${pkgdir}/opt/albiononline/."

  # this fixes a bug in how the dirs are unpacked
  mv ${pkgdir}/opt/albiononline/launcher ${pkgdir}/opt/albiononline/launcher.extra
  mv ${pkgdir}/opt/albiononline/launcher.extra/launcher ${pkgdir}/opt/albiononline/launcher
  
  # link exe
  mkdir -p ${pkgdir}/usr/bin
  ln -s /opt/albiononline/Albion-Online ${pkgdir}/usr/bin/albiononline 

  # install .desktop file
  install -m755 -D ${srcdir}/albiononline.desktop -t ${pkgdir}/usr/share/applications
}

# vim:set ts=2 sw=2 et:

