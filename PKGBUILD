# Maintainer: Piotr Grabowski <fau999@gmail.com>
_pkgname='kamite'
pkgname="${_pkgname}-bin"
pkgver=0.7
pkgrel=1
_gitname="v${pkgver}"
_archivename="Kamite_${pkgver}_Linux.zip"
pkgdesc="A language immersion companion for learners of Japanese"
arch=('x86_64')
url="https://github.com/fauu/Kamite"
license=('AGPL3')
depends=()
optdepends=(
  'slop: OCR support on Xorg'
  'slurp: OCR support on wlroots'
  'grim: OCR support on wlroots'
  'wlrctl: OCR Auto Block Instant mode support on wlroots'
  'mpv: media playback integration'
  'tesseract: Tesseract OCR engine'
)
provides=()
conflicts=()
source=(
    https://github.com/fauu/Kamite/releases/download/"${_gitname}"/"${_archivename}"
)
b2sums=('b7bb38421fb7776e12df79de5b9653977fc8b9f2b56dbe588524658b0fa66a7960889d2cbff030480fe6651dc65641dffc996d5d75e9b21f8e91abaa90009904')

package() {
    cd "${srcdir}"/"${_pkgname}"

    # Icons
    for res in 16 32 48 128 256; do
      install -Dm644 res/icon/icon-"${res}".png \
                      "${pkgdir}"/usr/share/icons/hicolor/"${res}"x"${res}"/apps/"${_pkgname}".png
    done

    # Desktop file
    install -Dm644 res/"${_pkgname}".desktop "${pkgdir}"/usr/share/applications/"${_pkgname}".desktop

    rm -r res/
    rm install.sh

    cd ..

    # Program directory
    install -d "${pkgdir}"/opt/"${_pkgname}"
    mv "${_pkgname}" "${pkgdir}"/opt/

    # Launcher link
    install -d "${pkgdir}"/usr/bin
    ln -s /opt/"${_pkgname}"/bin/"${_pkgname}" "${pkgdir}"/usr/bin/"${_pkgname}"
}

