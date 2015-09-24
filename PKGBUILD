# Maintainer: Sebastian Jug <sebastian.jug@gmail.com>
# Contributor: John Reese <jreese@noswap.com>
# Upstream URL: https://github.com/atom/atom
#
# For improvements/fixes to this package, please send a pull request:
# https://github.com/sjug/atom-editor

pkgname=atom-editor
pkgver=1.0.18
pkgrel=1
pkgdesc='Chrome-based text editor from Github'
arch=('x86_64' 'i686')
url='https://github.com/atom/atom'
license=('MIT')
depends=('alsa-lib' 'gconf' 'gtk2' 'libgnome-keyring' 'libnotify' 'libxtst' 'nodejs' 'nss' 'python2')
optdepends=('gvfs: file deletion support')
makedepends=('git' 'npm')
conflicts=('atom-editor-bin' 'atom-editor-git')
source=("https://github.com/atom/atom/archive/v${pkgver}.tar.gz"
        'atom-python.patch'
        'package.patch')
sha256sums=('a4355cc62ddd53e483f3a8828cd34efada93921ea0a78f0b22722777f5a564fa'
            '9a1f4e2efa7c0b2fb053d27979b0231f75f1f0d928e06413ddebeadd5d7ed46c'
            '37f6c05ad8b4bd1406265873164d82cd9c769bb5418c104b3275cc9e2cd6766e')

prepare() {
  cd "atom-$pkgver"

  patch -Np0 -i "$srcdir/atom-python.patch"
  patch -Np0 -i "$srcdir/package.patch"

  sed -i -e "/exception-reporting/d" \
      -e "/metrics/d" package.json

  sed -e "s/<%= description %>/$pkgdesc/" \
    -e "s|<%= executable %>|/usr/bin/atom|"\
    -e "s|<%= iconName %>|atom|"\
    resources/linux/atom.desktop.in > resources/linux/Atom.desktop
}

build() {
  cd "$srcdir/atom-$pkgver"

  export PYTHON=python2
  script/build --build-dir "$srcdir/atom-build"
}

package() {
  cd "$srcdir/atom-$pkgver"

  script/grunt install --build-dir "$srcdir/atom-build" --install-dir "$pkgdir/usr"

  install -Dm644 resources/linux/Atom.desktop "$pkgdir/usr/share/applications/atom.desktop"
  install -Dm644 resources/atom.png "$pkgdir/usr/share/pixmaps/atom.png"
  install -Dm644 LICENSE.md "$pkgdir/usr/share/licenses/$pkgname/LICENSE.md"
}
