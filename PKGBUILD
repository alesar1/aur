# Maintainer: Carl Smedstad <carl.smedstad at protonmail dot com>

pkgname=qatlib
pkgver=22.07.1
pkgrel=1
pkgdesc="User space library for Intel(R) QuickAssist Technology"
url="https://github.com/intel/qatlib"
license=('BSD')
arch=('any')
makedepends=('yasm')

source=(
  "$pkgname-$pkgver.tar.gz::$url/archive/refs/tags/$pkgver.tar.gz"
  "qatlib.sysusers"
)
sha256sums=(
  '3cff417a1a9adb2350b82a9b939c482c8e1108ba2eae7fd88d36baa6b7f6d9d5'
  '67ccaef8fc91484bf103ee6e321d03f820f633cc2a8d73926b568bd9a358bd8f'
)

build() {
  cd "$pkgname-$pkgver"

  mkdir -p m4
  ./autogen.sh
  ./configure --prefix=/usr
  make
}

package() {
  cd "$pkgname-$pkgver"

  make \
    prefix="$pkgdir/usr" \
    sbindir="$pkgdir/usr/bin" \
    systemdsystemunitdir="$pkgdir/usr/lib/systemd/system" \
    systemd_scriptsdir="$pkgdir/usr/bin" \
  install
  install -Dm644 "$srcdir/qatlib.sysusers" "$pkgdir/usr/lib/sysusers.d/qatlib.conf"
  install -Dm644 "LICENSE" "$pkgdir/usr/share/licenses/$pkgname/LICENSE"
}
