# Maintainer: Mark Wagie <mark dot wagie at tutanota dot com>
# Co-Maintainer: Igor Dyatlov <dyatlov.igor@protonmail.com>
# Contributor: Eli Schwartz
pkgname=smile
pkgver=1.7.1
pkgrel=1
pkgdesc="An emoji picker with custom tags support"
arch=('any')
url="https://smile.mijorus.it"
license=('GPL3')
depends=('libwnck3' 'python-manimpango')
makedepends=('meson')
checkdepends=('appstream-glib' 'desktop-file-utils')
conflicts=("$pkgname-emoji-picker")
replaces=("$pkgname-emoji-picker")
source=("$pkgname-$pkgver.tar.gz::https://github.com/mijorus/smile/archive/refs/tags/$pkgver.tar.gz")
sha256sums=('3ae82cc4a704d768ca0cdabc9c41cad3a7b0c44d9d8f10fb420599faeb99f598')

prepare() {
  cd "$pkgname-$pkgver"

  # https://github.com/mijorus/smile/issues/3#issuecomment-1089216803
  sed -i 's/MESON_INSTALL_PREFIX/MESON_INSTALL_DESTDIR_PREFIX/g' \
    precompile/emoji_list/generate_emoji_dict.py
  sed -i 's/MESON_INSTALL_PREFIX/MESON_INSTALL_DESTDIR_PREFIX/g' \
    build-aux/meson/postinstall.py

  # This is not a flatpak
  sed -i 's|flatpak run {self.application_id}|/usr/bin/smile|g' src/Settings.py
}

build() {
  arch-meson "$pkgname-$pkgver" build
  meson compile -C build
}

check() {
  meson test -C build --print-errorlogs || :
}

package() {
  meson install -C build --destdir "$pkgdir"
}
