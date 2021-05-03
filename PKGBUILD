# Maintainer:
# Contributor: Felix Golatofski <contact@xdfr.de>
# Contributor: Yunhui Fu (yhfudev@gmail.com)
# Contributor: Julien Sopena (jsopena.archlinux@free.fr)
# Contributor: Oleg Smirnov (oleg.smirnov@gmail.com)
# Contributor: angrycore (angrycore@gmail.com)
# Contributor: Christophe Guéret (christophe.gueret@gmail.com)
# Contributor: oguzkagan <me at oguzkaganeren dot com dot tr>

pkgname='omnetpp'
pkgver=5.6.2
pkgrel=2
pkgdesc='Component-based simulation package designed for modeling communication networks'
url='http://www.omnetpp.org'
license=('Academic Public License')
depends=('tcl' 'openscenegraph' 'tk' 'blt' 'osgearth')
makedepends=('libxml2' 'bison' 'flex' 'openscenegraph' 'qt4' 'osgearth')
arch=('i686' 'x86_64')
optdepends=('openmpi: message passing library for parallel simulation',
  'java-environment: Java runtime for using OMNeT++/OMNEST IDE')
install=${pkgname}.install
_pkgname='omnetpp'

DLAGENTS=(
  'http::/usr/bin/wget --no-check-certificate -c -r -np -nd -H --referer https://omnetpp.org/ %u'
  'https::/usr/bin/wget --no-check-certificate -c -r -np -nd -H --referer https://omnetpp.org/ %u'
)
source=(
  omnetpp-${pkgver}-src-linux.tgz::"https://github.com/omnetpp/omnetpp/releases/download/omnetpp-${pkgver}/omnetpp-${pkgver}-src-linux.tgz"
  OMNeT++.desktop
)
sha512sums=('d36e1e1aee75ddaba3e61340e3fdd71beb00fc0d8bbf934ac4781ed65a2a9697495855f5fa3d7a5e54745cfc50c6df71e9538b274a8d3eaa341f408e5260991f'
  'd92f9f791d6347317a1e833ca52a5423f30feaac6212ea5d280ad334541bcd8786252076598d45551b3c41d4b64423d9f4c05e67fe1a535bb03d951881f7e544')

build() {
  cd ${srcdir}/${_pkgname}-${pkgver}
  PATH=${srcdir}/${_pkgname}-${pkgver}/bin:$PATH
  changeText1=". .\/configure.user"
  changeText2=".\/configure.user"
  LD_LIBRARY_PATH=${srcdir}/${_pkgname}-${pkgver}/lib:$LD_LIBRARY_PATH

  sed -i 's!OMNETPP_ROOT/images!OMNETPP_ROOT/images;/usr/share/omnetpp/images!' configure*
  sed -i '/for arg in \$ac_configure_args/,+8 d' configure
  ./configure --prefix=/usr

  sed -i 's!IDEDIR=.*!IDEDIR=/opt/omnetpp/ide!' src/utils/omnetpp src/utils/omnest
  sed -i 's!osgi.instance.area.default=.*$!#osgi.instance.area.default=/usr/share/omnetpp/samples!g' ide/configuration/config.ini

  make || return 1
}

package() {
  cd ${srcdir}/${_pkgname}-${pkgver}
  mkdir -p ${pkgdir}/usr/bin
  install -m755 bin/* ${pkgdir}/usr/bin

  sed "s|${srcdir}/${_pkgname}-${pkgver}|/usr|g" -i ${pkgdir}/usr/bin/opp_makemake
  sed "s|OMNETPP_INCL_DIR=/usr/include|OMNETPP_INCL_DIR=/usr/include/omnetpp|" -i ${pkgdir}/usr/bin/opp_makemake

  mkdir -p ${pkgdir}/usr/lib
  install lib/* ${pkgdir}/usr/lib

  mkdir -p ${pkgdir}/usr/include/omnetpp
  mkdir -p ${pkgdir}/usr/include/omnetpp/platdep
  install -m644 include/*.h ${pkgdir}/usr/include/omnetpp
  install -m644 include/platdep/*.h ${pkgdir}/usr/include/omnetpp/platdep

  install -d ${pkgdir}/usr/share/omnetpp/{images,doc,samples}
  cp -R images/* ${pkgdir}/usr/share/omnetpp/images
  cp -R doc/* ${pkgdir}/usr/share/omnetpp/doc
  cp -R samples/* ${pkgdir}/opt/omnetpp

  install -d ${pkgdir}/usr/share/emacs/site-lisp
  install -m644 misc/emacs/ned-mode.el ${pkgdir}/usr/share/emacs/site-lisp
  install -m644 misc/emacs/ini-mode.el ${pkgdir}/usr/share/emacs/site-lisp

  install -d ${pkgdir}/opt/omnetpp
  cp -R ide ${pkgdir}/opt/omnetpp
  touch ${pkgdir}/opt/omnetpp/ide/error.log
  chmod a+rw ${pkgdir}/opt/omnetpp/ide/error.log

  mkdir -p ${pkgdir}/usr/share/icons/
  cp ${srcdir}/omnetpp-${pkgver}/ide/icon.png ${pkgdir}/usr/share/icons/omnetpp.png

  mkdir -p ${pkgdir}/usr/share/applications/
  cd ${srcdir}
  cp OMNeT++.desktop ${pkgdir}/usr/share/applications/
}
