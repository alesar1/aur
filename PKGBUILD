# Maintainer: Butui Hu <hot123tea123@gmail.com>

pkgname=3dslicer-nightly-bin
_pkgname=3dslicer
pkgver=4.13.0.r20210722
pkgrel=1
pkgdesc='A free, open source and multi-platform software package widely used for medical, biomedical, and related imaging research (nightly build)'
arch=('x86_64')
url='https://www.slicer.org'
license=('BSD')
depends=(
  'dbus'
  'glib2'
)
makedepends=('gendesk')
provides=(3dslicer=${pkgver})
conflicts=('3dslicer')
source=(
    "${_pkgname}-${pkgver}.tar.gz::http://download.slicer.org/download?os=linux&stability=nightly"
    "${_pkgname}.svg::https://github.com/Slicer/Slicer/raw/v4.11/Resources/3DSlicerLogo-app-icon.svg"
)
noextract=("${_pkgname}.tar.gz")
sha512sums=('dc2dcdb88d20909cedb2ce41100935cdc0171b007e6fdea79c8f2ec8bc9c84882fa58b5f0c9d394280bdd3d2fa1d8bea4728d111ef27f779990b6e9796e23a2d'
            'c23104efcbec3d49b5c26ad5514ed74316423db4aa9e6c7894f02f7ddbe509b577de358dfdd2f7c492963f312b7c146f03d5e41a89ab1298811894dc18746225')
options=('!strip' '!emptydirs')

prepare() {
# manually extract tarball due to their unpredicted name
  mkdir "${srcdir}/${_pkgname}"
  tar xvf "${srcdir}/${_pkgname}-${pkgver}.tar.gz" -C "${srcdir}/${_pkgname}" --strip-components 1

  echo "Creating desktop file"
  gendesk -f -n --pkgname ${_pkgname} \
    --pkgdesc "${pkgdesc}" \
    --categories "Graphics;MedicalSoftware;Science;" \
    --icon "${_pkgname}" \
    --exec "Slicer"
}

package() {
  install -d "${pkgdir}/opt" "${pkgdir}/usr/bin"
  mv -v "${srcdir}/${_pkgname}" "${pkgdir}/opt"
  ln -s /opt/${_pkgname}/Slicer "${pkgdir}/usr/bin"
  install -Dm644 "${srcdir}/${_pkgname}.desktop" "${pkgdir}/usr/share/applications/${_pkgname}.desktop"
  install -Dm644 "${srcdir}/${_pkgname}.svg" "${pkgdir}/usr/share/pixmaps/${_pkgname}.svg"
}
# vim:set ts=2 sw=2 et:

