# Maintainer: neilg <neil.r.green+aur@gmail.com>
# Contributor: Julien Nicoulaud <julien.nicoulaud@gmail.com>
pkgname=yourkit
_version=2021.3
_build=235
pkgver=${_version}b${_build}
pkgrel=1
pkgdesc="Java CPU and memory profiler."
arch=(i686 x86_64)
url="http://www.yourkit.com"
license=(custom)
depends=(desktop-file-utils bash)
optdepends=('intellij-idea-community-edition: A Java IDE that integrates with Yourkit'
            'eclipse: A Java IDE that integrates with Yourkit'
            'netbeans: A Java IDE that integrates with Yourkit')
options=(!strip)
source=(
  https://www.yourkit.com/download/YourKit-JavaProfiler-${_version}-b${_build}.zip
  yourkit-yjp.desktop
  yourkit.sh
)
sha256sums=(
  '2db4df5d68415724caf8b18622d2e75b7e961e6b1fa9af0c0e7ff3fd6d4088a0'
  'b071670d8264f4ec8c61d83f3717e83c7c87873c678a75d60670a002e185373d'
  '6fc9612a76e2b50bb84130b0c40fcaccd04fe513e23ced398e707087459cc50e'
)

package() {

  cd "$srcdir"
  install -d "${pkgdir}/opt/${pkgname}"

  mv YourKit-JavaProfiler-"${_version}"/* "${pkgdir}/opt/${pkgname}"

  install -D -m755 "${pkgname}.sh" "${pkgdir}/usr/bin/${pkgname}"

  install -d -m755 "${pkgdir}/usr/share/doc/${pkgname}"
  ln -s /opt/${pkgname}/probes  "${pkgdir}/usr/share/doc/${pkgname}/probes"
  ln -s /opt/${pkgname}/samples "${pkgdir}/usr/share/doc/${pkgname}/samples"

  install -d -m755 "${pkgdir}/usr/share/licenses/${pkgname}"
  ln -s /opt/${pkgname}/license.html        "${pkgdir}/usr/share/licenses/${pkgname}/"
  ln -s /opt/${pkgname}/license-redist.txt  "${pkgdir}/usr/share/licenses/${pkgname}/"

  install -Dm644 yourkit-yjp.desktop "${pkgdir}"/usr/share/applications/yourkit-yourkit.desktop
}

# vim:set ts=2 sw=2 et:
