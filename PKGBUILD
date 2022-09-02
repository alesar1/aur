# Maintainer: naetherm <naether.markus@gmail.com>
# Maintainer: Adrien Jussak <adrien.jussak@wascardev.com>
# Maintainer: sum01 <sum01@protonmail.com>
# Contributor: j1simon
pkgname=buttercup-desktop
_pkgexename=buttercup
pkgver=2.17.0
pkgrel=1
pkgdesc='Javascript Password Vault - Multi-Platform Desktop Application'
arch=('x86_64')
url="https://github.com/buttercup/buttercup-desktop"
license=('GPL3')
depends=('gtk3' 'libxss' 'nss' 'libsass')
makedepends=('npm' 'sed' 'nodejs')
source=(
	"$pkgname-$pkgver.tar.gz::https://github.com/buttercup/buttercup-desktop/archive/v$pkgver.tar.gz"
	badge.svg
	buttercup-desktop.desktop
	arch_fix.patch)
sha512sums=(
	'b2704d690af2b6754ddf9c10aebb6bead0a88dd94877ddb2b5489e935ed36254659164485ad31496d89d3b2234efc63286751257907d9279c379a8caa2120367'
	SKIP
	SKIP
	SKIP)
prepare() {
  sed -i '/"rpm",/d' "$srcdir/$pkgname-$pkgver/package.json"
  sed -i '/"AppImage",/d' "$srcdir/$pkgname-$pkgver/package.json"
  sed -i '/"snap",/d' "$srcdir/$pkgname-$pkgver/package.json"
  sed -i 's/"deb"/"dir"/' "$srcdir/$pkgname-$pkgver/package.json"
  if [[ $CARCH == "i686" ]]; then
    sed -i 's/build --linux --x64/build --linux --ia32/' "$srcdir/$pkgname-$pkgver/package.json"
  fi
  patch --directory="$pkgname-$pkgver" --forward --strip=1 --input="${srcdir}/arch_fix.patch"
}
build() {
  export NODE_ARCHITECTURE=x64
  cd "$srcdir/$pkgname-$pkgver"
  npm install keytar
  npm install --cache "$srcdir/npm-cache"
  npm run build
  npm run package:linux
}
package() {
  cp "$srcdir"/badge.svg "$srcdir/$pkgname-$pkgver/build/badge.svg"
  cp "$srcdir"/buttercup-desktop.desktop "$srcdir/$pkgname-$pkgver/build/$pkgname.desktop"
  install -Dm644 "$srcdir/$pkgname-$pkgver/build/badge.svg" "$pkgdir/usr/share/icons/hicolor/scalable/apps/buttercup.svg"
  install -Dm644 "$srcdir/$pkgname-$pkgver/build/$pkgname.desktop" "$pkgdir/usr/share/applications/$pkgname.desktop"
  if [[ $CARCH == "i686" ]]; then
    _distname="linux-ia32-unpacked"
  else
    _distname="linux-unpacked"
  fi
  mkdir -p "$pkgdir"/{usr/bin,share}
  cp -rf "$srcdir/$pkgname-$pkgver/dist/$_distname" "$pkgdir/usr/share/$pkgname"
  # cp -rf "$srcdir/$pkgname-$pkgver/dev-app-update.yml" "$pkgdir/opt/$pkgname/resources/app-update.yml"
  ln -sf /usr/share/$pkgname/buttercup "$pkgdir/usr/bin/buttercup"
}
