# Contributor: Isaac Curtis <isaaccurtis1@gmail.com>
# Maintainer: Isaac Curtis <isaaccurtis1@gmail.com>

pkgname=zotero-beta
pkgver="5.0.49_beta.7+cfbb3d3d4"
pkgrel=1
pkgdesc="Zotero Standalone. A free, easy-to-use tool to help you collect, organize, cite, and share your research sources."
arch=('i686' 'x86_64')
url="http://www.zotero.org/download"
license=('GPL3')
depends=('dbus-glib' 'gtk2' 'gtk3' 'gcc-libs' 'nss' 'libxt')
optdepends=('xpdf: PDF indexing')
conflicts=('zotero')
sha256sums=('8ec2a82b5c9b37e30cbe5ef968f5baa29e324a0e024a8cc28c38738ca3db7c7a')
sha256sums_i686=('78d5565d3823441d4f0006f4e207278e7beed844e74d8854d3f689390bade3b8')
sha256sums_x86_64=('f4808979e9549295e814b576027d8a3a717e1521d2ad898ccf1504860b95f4bd')

_ver=${pkgver//_/-}
_ver=${_ver//+/%2B}
install='zotero-beta.install'

source=("zotero-beta.desktop")
source_i686=("https://download.zotero.org/client/beta/${_ver}/Zotero-${_ver}_linux-i686.tar.bz2")
source_x86_64=("https://download.zotero.org/client/beta/${_ver}/Zotero-${_ver}_linux-x86_64.tar.bz2")

package() {
  mkdir -p "$pkgdir"/usr/{bin,lib/zotero}
  mv "$srcdir"/Zotero_linux-$CARCH/* "$pkgdir"/usr/lib/zotero
  ln -s /usr/lib/zotero/zotero "$pkgdir"/usr/bin/zotero
  install -Dm644 "$srcdir"/zotero-beta.desktop "$pkgdir"/usr/share/applications/zotero-beta.desktop
  # Copy zotero icons to a standard location
  install -Dm644 "$pkgdir"/usr/lib/zotero/chrome/icons/default/default16.png "$pkgdir"/usr/share/icons/hicolor/16x16/apps/zotero.png
  install -Dm644 "$pkgdir"/usr/lib/zotero/chrome/icons/default/default32.png "$pkgdir"/usr/share/icons/hicolor/32x32/apps/zotero.png
  install -Dm644 "$pkgdir"/usr/lib/zotero/chrome/icons/default/default48.png "$pkgdir"/usr/share/icons/hicolor/48x48/apps/zotero.png
}
sha256sums=('8ec2a82b5c9b37e30cbe5ef968f5baa29e324a0e024a8cc28c38738ca3db7c7a')
sha256sums_i686=('b195f588832a7110f2435f4ccfa0d234d4402a1225cb75a05a12ba7e72964c3b')
sha256sums_x86_64=('559c8dbe1efe2f4e40bf2d50f6dec075b4422b7081c1361fbf859421737ae277')
sha256sums=('8ec2a82b5c9b37e30cbe5ef968f5baa29e324a0e024a8cc28c38738ca3db7c7a')
sha256sums_i686=('9ffda00dcaeb0c21390703b65ef9e63474d3b224105a8678a0dd8c97108f7c45')
sha256sums_x86_64=('38c20b5152394953c5a5c557b63480db6d37831733599661471610856abe5d1c')
sha256sums=('8ec2a82b5c9b37e30cbe5ef968f5baa29e324a0e024a8cc28c38738ca3db7c7a')
sha256sums_i686=('f6c7e9279e8c842ad228105171850cb74300b84e65bdadc3b94150dd989d71f5')
sha256sums_x86_64=('5047c3d774362e25d8e83b961605120e9d7f8e5be6dff562deb30d010bbcfa76')
sha256sums=('8ec2a82b5c9b37e30cbe5ef968f5baa29e324a0e024a8cc28c38738ca3db7c7a')
sha256sums_i686=('2b6bb973f52f921601185688dd88e4e3eed792f6f4a4a051995d324a385979d5')
sha256sums_x86_64=('df5f9d0d02c8b827ef330622f8ca8f50ce534126d7ce587df7ee7330861e3948')
sha256sums=('8ec2a82b5c9b37e30cbe5ef968f5baa29e324a0e024a8cc28c38738ca3db7c7a')
sha256sums_i686=('d127de83f7a1135636f9533f1f95a8a561e978484ac5fa3bf51ce709d42e6265')
sha256sums_x86_64=('aaba30feb032877fce94f39f39204335a38ceab72ec1c9171c2eaaf934c0f4fc')
sha256sums=('8ec2a82b5c9b37e30cbe5ef968f5baa29e324a0e024a8cc28c38738ca3db7c7a')
sha256sums_i686=('d506eadf1e8776b5009ee30e9752c057632a12a45d7574d8b81553d5e876f63d')
sha256sums_x86_64=('2bfb6f80d5d29c6f0bdf7099588d62edf817adeb1c7adbf8ff6b70d387e61105')
sha256sums=('8ec2a82b5c9b37e30cbe5ef968f5baa29e324a0e024a8cc28c38738ca3db7c7a')
sha256sums_i686=('0e824b90e47d00ea4fd29e8951628240866032fede14b0e3be2961803ad05736')
sha256sums_x86_64=('09ed756bbb82bca9544386a679a2dd86452ab466f3ca4fd43b08b6844b0e51cb')
