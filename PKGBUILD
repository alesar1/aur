pkgname=singlebox-appimage
pkgver=20.3.2
pkgrel=1
pkgdesc='All-in-One Messenger'
arch=('x86_64')
url='https://webcatalog.io/singlebox/'
license=('MIT')
provides=("singlebox=${pkgver}")
conflicts=('singlebox' 'singlebox-bin')
source=("https://cdn-2.webcatalog.io/singlebox/Singlebox-${pkgver}.AppImage"
	"singlebox.desktop.patch"
	"singlebox.sh")
sha256sums=('5e53212340f718074b39afd724abe38d1aa0097d4a9a06ebbacee2ab392a2bb3'
	'7cd20bcac165714b8128aefc57df29faae58ab1f829e4f4acdbdb3c8100ac7bd'
	'a48c0cd52b212fbecca39a6066a2a8d0ddd21abea0d769c727d727f775ed3b9b')
options=(!strip)

_filename=./Singlebox-${pkgver}.AppImage

prepare() {
  cd "${srcdir}"
  chmod +x ${_filename}
  ${_filename} --appimage-extract
  patch -Np0 < ./singlebox.desktop.patch
}


package() {
  install -Dm755 "${srcdir}/${_filename}" "${pkgdir}/opt/appimages/singlebox.AppImage"
  install -Dm755 "${srcdir}/singlebox.sh" "${pkgdir}/usr/bin/singlebox"

  install -dm755 "${pkgdir}/usr/share/"
  cp -r --no-preserve=mode,ownership "${srcdir}/squashfs-root/usr/share/icons" "${pkgdir}/usr/share/"

  install -Dm644 "${srcdir}/squashfs-root/singlebox.desktop" "${pkgdir}/usr/share/applications/singlebox.desktop"
}
