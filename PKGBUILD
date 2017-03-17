# Maintainer: Andy Weidenbaum <archbaum@gmail.com>
# Contributor: kaylyn
# Contributor: Giuseppe Calà <jiveaxe@gmail.com>

pkgname=cryfs
pkgver=0.9.7
pkgrel=4
pkgdesc="Cryptographic filesystem for the cloud"
arch=('armv7h' 'i686' 'x86_64')
depends=('boost'
         'boost-libs'
         'crypto++'
         'curl'
         'fuse'
         'openssl'
         'python2')
makedepends=('cmake' 'git' 'make')
url="https://www.cryfs.org"
license=('LGPL3')
source=($pkgname-$pkgver.tar.gz::https://codeload.github.com/cryfs/$pkgname/tar.gz/$pkgver
        git+https://github.com/cryfs/cryfs.wiki
        spdlog.diff::https://github.com/cryfs/cryfs/commit/f1c6fa044f44e33c0c9e6eab78877d47ac4c87be.diff)
sha256sums=('4d65c462fa988f698090f00052cbb236cfc7e7524b872f96409187bc5285eedd'
            'SKIP'
            '10540361f6fcf99bd88c6c3673677af5c005a449595df96670bc776b52a6bf78')

prepare() {
  cd "$srcdir/$pkgname-$pkgver"

  msg2 'Updating spdlog to 0.12.0...'
  patch -p1 -i "$srcdir/spdlog.diff"
}

build() {
  cd "$srcdir/$pkgname-$pkgver"

  msg2 'Building...'
  mkdir cmake && cd cmake
  cmake \
    -DCMAKE_INSTALL_PREFIX=/usr \
    -DCMAKE_BUILD_TYPE=Release \
    -DBUILD_TESTING=off \
    -DCRYFS_UPDATE_CHECKS=off \
    ..
  make -j$(($(nproc)/2))
}

package() {
  cd "$srcdir/$pkgname-$pkgver"

  msg2 'Installing license...'
  install -Dm 644 LICENSE -t "$pkgdir/usr/share/licenses/$pkgname"

  msg2 'Installing documentation...'
  install -Dm 644 README.md -t "$pkgdir/usr/share/doc/$pkgname"

  msg2 'Installing wiki...'
  cp -dpr --no-preserve=ownership "$srcdir/$pkgname.wiki" \
    "$pkgdir/usr/share/doc/$pkgname/wiki"

  msg2 'Installing...'
  make DESTDIR="$pkgdir" install -C cmake

  msg2 'Cleaning up pkgdir...'
  find "$pkgdir" -type d -name .git -exec rm -r '{}' +
}
