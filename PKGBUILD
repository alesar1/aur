# Maintainer: Eklektisk <eklektisk at eklektiskiscoding dot xyz>
# Project Maintainer: Jeison Yehuda Amihud <blenderdumbass at gmail dot com>
# Project Maintainer: vertbyqb <vertbyqb at tuta dot io>

_pkgname=fastlbry-terminal
pkgname=${_pkgname}-git
pkgver=0.5.r175.gfcd1b89
pkgrel=1
pkgdesc="A fully featured, terminal application to interact with LBRY"
arch=('any')
url="https://www.notabug.org/jyamihud/FastLBRY-terminal"
license=('GPL3')
makedepends=('git')
depends=('python')
optdepends=('lbry-app-bin: for login support to the LBRY network'
            'lbry-desktop-git: for login support to the LBRY network')
source=("git+$url.git"
        "${_pkgname}.desktop")
sha256sums=('SKIP' 'SKIP')

pkgver() {
  cd ${srcdir}/FastLBRY-terminal
  git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

package() {
  install -dm 0755 "${pkgdir}/usr/share/applications"
  install -m 0644 "${_pkgname}.desktop" "${pkgdir}/usr/share/applications"

  cd ${srcdir}/FastLBRY-terminal

  install -dm 0755 "${pkgdir}/usr/lib/${_pkgname}"
  cp -r flbry "${pkgdir}/usr/lib/${_pkgname}/"
  cp -r help "${pkgdir}/usr/lib/${_pkgname}/"
  cp -r themes "${pkgdir}/usr/lib/${_pkgname}/"
  install -m 0644 analytics.json "${pkgdir}/usr/lib/${_pkgname}/"
  install -m 0644 devs.json "${pkgdir}/usr/lib/${_pkgname}/"
  install -m 0644 How-To-Use.md "${pkgdir}/usr/lib/${_pkgname}/"
  install -m 0644 icon.png "${pkgdir}/usr/lib/${_pkgname}/"
  install -m 0644 LBRYNET-LICENSE.md "${pkgdir}/usr/lib/${_pkgname}/"
  install -m 0644 LICENSE.md "${pkgdir}/usr/lib/${_pkgname}/"
  install -m 0644 README.md "${pkgdir}/usr/lib/${_pkgname}/"
  install -m 0644 run.py "${pkgdir}/usr/lib/${_pkgname}/"

  install -dm 0755 "${pkgdir}/usr/share/licenses/${_pkgname}"
  install -m 0644 LICENSE "${pkgdir}/usr/share/licenses/${_pkgname}/"
  install -m 0644 LBRYNET-LICENSE.md "${pkgdir}/usr/share/licenses/${_pkgname}/"

  install -dm 0755 "${pkgdir}/usr/bin/"
  cd "${pkgdir}/usr/bin/"
  echo "#!/bin/sh" > ${_pkgname}
  echo "cd /usr/lib/${_pkgname} && exec python3 run.py" >> ${_pkgname}
  chmod 755 ${_pkgname}
}

