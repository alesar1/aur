# Maintainer: eolianoe <eolianoe [At] GmaiL [Dot] com>
# Contributor: Dmitriy Morozov <archlinux@foxcub.org>
pkgname=visit-bin
_pkgname=visit
pkgver=2.10.0
_pkgver=2_10_0
pkgrel=1
pkgdesc="Interactive parallel visualization and graphical analysis tool"
url="https://wci.llnl.gov/simulation/computer-codes/visit"
arch=('x86_64')
license=('BSD' 'custom')
provides=('visit')
conflicts=('visit' 'visit-build')
depends=('libpng12' 'glu')
makedepends=('bash' 'cpio')
_ver=rhel6
#_url="http://portal.nersc.gov/svn/${_pkgname}/trunk/releases/${pkgver}/"
_url="http://visit.ilight.com/svn/${_pkgname}/trunk/releases/${pkgver}/"
source=("${_url}/${_pkgname}${_pkgver}.linux-x86_64-${_ver}.tar.gz"
        "${_url}/${_pkgname}-install${_pkgver}"
        'visit-bin.sh'
        'visit-libs.patch')
noextract=("${_pkgname}${_pkgver}.linux-x86_64-${_ver}.tar.gz")
sha256sums=('ccd712634ab75754a94c3b46d2c18aeb6ca0ca5b488c86a7f2ae55890ed81e41'
            '0f9ddb0bd9a5a91458aced70ae960d612750bad8b07658d28b33441d658a3841'
            'd07a11e67ad646579fbc341f30e1eb63ebd38a5fbdd4f3ea36e8f460419028da'
            'abc1c05f6567281cb8654dfbe3d0ef87ec3537e8e60191ba0625d4f99feb27c7')

package() {
  cd "${srcdir}"

  # Create destination directory
  install -dm755 "${pkgdir}/opt/${_pkgname}"

  # Install visit
  bash ${_pkgname}-install${_pkgver} -c none ${pkgver} linux-x86_64-${_ver} \
    "${pkgdir}/opt/${_pkgname}"

  # Patch to force the use of the libs provided by VisIt
  patch "${pkgdir}/opt/visit/bin/frontendlauncher" < "${srcdir}/visit-libs.patch"

  # Install script to set $PATH
  install -Dm755 visit-bin.sh "${pkgdir}/etc/profile.d/visit-bin.sh"

  # Fix permissions
  chown -R root:root "${pkgdir}/opt/${_pkgname}"
}
