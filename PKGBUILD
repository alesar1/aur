pkgname=maya
pkgver=2016_SP5
pkgrel=1
pkgdesc="Maya software helps you tackle challenging character creation and digital animation productions. Get powerful, integrated 3D tools on a robust, extensible CG pipeline core."
arch=('x86_64')
url="http://www.autodesk.com/products/maya/overview"
license=('custom: unlimited')
depends=('libpng12' 'tcsh' 'libxp' 'openssl' 'libjpeg' 'libtiff')
makedepends=('rpmextract' 'gcc')
conflicts=()
install=maya.install
source=('http://download.autodesk.com/us/support/files/maya_2016_service_pack_5/Autodesk_Maya_2016_SP5_EN_Linux_64bit.tgz'
        'maya_start.sh::https://aur.archlinux.org/maya.git')
md5sums=('5b88676c1c3239ea26b9de656340e974'
         '9ba05fd94f32ae0a4462851063316d4e')

package() {

  install "$pkgdir"/opt/Autodesk/MayaSetup
  rsync -av --exclude='*.rpm' ./ "$pkgdir"/opt/Autodesk/MayaSetup

  cd "$pkgdir"

  msg2 "Unpacking Red Hat .rpm files. This could take a while..."

  for i in "$srcdir"/*.rpm; do
      msg2 $i
      rpmextract.sh $i
  done

  mv "$pkgdir"/usr/local/bin/maya "$pkgdir"/usr/local/bin/oriMaya

  cp "$srcdir"/maya_start.sh  "$pkgdir"/usr/local/bin/maya

}

