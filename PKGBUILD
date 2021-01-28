# Maintainer: yjun <jerrysteve1101@gmail.com>
# Maintainer: Kevin_Liu <we123445@outlook.com>

pkgname=vofa+
_pkgname=vofaplus
pkgver=1.3.4
pkgrel=1
pkgdesc="A high degree of freedom embedded debugging tool with plugins support."
arch=('x86_64')
url="https://www.vofa.plus/"
license=('unknown')
provides=("${_pkgname}")
options=('!strip')
source=("${pkgname}-${pkgver}.pkg.tar.zst::https://gutega.gitee.io/vofa_plus_res/downloads/${pkgname}-${pkgver}-1-${CARCH}.pkg.tar.zst")
sha256sums=('db7b11903f5ca6d49ecb2b90c520d9470e44b19851aae4314767497efc66da49')

package() {
  cd ${srcdir}/opt/${pkgname}/

  # fix the wrong permission of the files

  # doc
  find doc/ -type f -exec install -Dm 644 {} ${pkgdir}/opt/${pkgname}/{} \;

  # lib
  find lib/ -type f -exec install -Dm 644 {} ${pkgdir}/opt/${pkgname}/{} \;

  # plugins
  find plugins/ -type f -exec install -Dm 644 {} ${pkgdir}/opt/${pkgname}/{} \;

  # qml
  find qml/ -type f -exec install -Dm 644 {} ${pkgdir}/opt/${pkgname}/{} \;

  # translations
  find translations/ -type f -exec install -Dm 644 {} ${pkgdir}/opt/${pkgname}/{} \;

  # icon
  install -Dm 644 ${pkgname}.png -t ${pkgdir}/opt/${pkgname}/ 

  # qt.conf
  install -Dm 644 qt.conf -t ${pkgdir}/opt/${pkgname}/ 

  # binary
  install -Dm 755 ${pkgname} -t ${pkgdir}/opt/${pkgname}/ 

  # desktop entry
  install -Dm 644 ${srcdir}/usr/share/applications/${pkgname}.desktop -t ${pkgdir}/usr/share/applications/

  # changelog
  install -Dm 644 ${srcdir}/usr/share/doc/${pkgname}/changelog.gz -t ${pkgdir}/usr/share/doc/${pkgname}

  #symbolic link
  install -dm755 ${pkgdir}/usr/bin/
  ln -sf /opt/${pkgname}/${pkgname} ${pkgdir}/usr/bin/${pkgname}
 }
# vim: set sw=2 ts=2 et:
