# Maintainer: Andy Weidenbaum <archbaum@gmail.com>

pkgname=coyim
pkgver=0.3
pkgrel=1
pkgdesc="A safe and secure chat client"
arch=('i686' 'x86_64')
depends=('cairo' 'glib2' 'gtk3' 'pango')
makedepends=('git' 'go' 'pkg-config')
url="https://coy.im"
license=('GPL3')
options=('!strip' '!emptydirs')
source=($pkgname-$pkgver.tar.gz::https://codeload.github.com/twstrike/coyim/tar.gz/v$pkgver)
sha256sums=('476f2f79d1d82329de520f5b212b5b2403161ec9e5f0c48b68a16286393dabb9')

build() {
  cd "$srcdir/$pkgname-$pkgver"

  msg2 'Building...'
  export GTK_VERSION=$(pkg-config --modversion gtk+-3.0 | tr . _ | cut -d '_' -f 1-2)
  export GOPATH="$srcdir"
  export TMPDIR=/tmp
  go get -v -u -tags "gtk_${GTK_VERSION}" github.com/gotk3/gotk3/...
  go get -v -u github.com/twstrike/coyim/...
}

package() {
  cd "$srcdir/$pkgname-$pkgver"

  msg2 'Installing license...'
  install -Dm 644 LICENSE* -t "$pkgdir/usr/share/licenses/$pkgname"

  msg2 'Installing documentation...'
  install -Dm 644 *.md -t "$pkgdir/usr/share/doc/$pkgname"

  msg2 'Installing...'
  install -Dm 755 "$srcdir/bin/coyim" -t "$pkgdir/usr/bin"
}
