# Maintainer: Roman Perepelitsa <roman.perepelitsa@gmail.com>

pkgname=gitstatus
# Whenever pkgver is updated, _libgit2ver below must also be updated.
pkgver=1.4.1
pkgrel=1
pkgdesc='Git status for Bash and Zsh prompt'
arch=('any')
url="https://github.com/romkatv/gitstatus"
license=('GPL3')
depends=('glibc')
# _libgit2ver depends on pkgver. They must be updated together. See libgit2_version in:
# https://raw.githubusercontent.com/romkatv/gitstatus/v${pkgver}/build.info
_libgit2ver="tag-82cefe2b42300224ad3c148f8b1a569757cc617a"
source=(
  "${pkgname}-${pkgver}.tar.gz::https://github.com/romkatv/gitstatus/archive/v${pkgver}.tar.gz"
  "libgit2-${_libgit2ver}.tar.gz::https://github.com/romkatv/libgit2/archive/${_libgit2ver}.tar.gz")
sha512sums=(
  'f38bb3d660bd0e6aac08860a52bc29badc47c96d57094058c2f3b7cad736c5b3f6a43597e783a5f6b9ba6f6fdea746db067eb4d7ae553c313a7cd5426718c3b4'
  'b2760593b9ff0223e10b170702e21fb022c13bd07d360ecffece7fae20ef2fdc9e42597e609dd26803bd02dc5c22bc6a5b85aac91496710ddbf433b67db5a1c0')
makedepends=('git' 'cmake' 'zsh')
install='gitstatus.install'

build() {
  # Put libgit2-${_libgit2ver}.tar.gz where build expects it.
  ln -sf "$srcdir/libgit2-${_libgit2ver}.tar.gz" "$srcdir/gitstatus-${pkgver}/deps/"
  cd "$srcdir/gitstatus-${pkgver}"
  ./build
  rm "./deps/libgit2-${_libgit2ver}.tar.gz"
  for file in *.zsh install; do
    zsh -fc "emulate zsh -o no_aliases && zcompile -R -- $file.zwc $file"
  done
}

package() {
  cd "$srcdir/gitstatus-${pkgver}"
  find . -type f -exec install -D '{}' "$pkgdir/usr/share/gitstatus/{}" ';'
}
