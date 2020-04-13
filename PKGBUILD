# Maintainer & Contributor: Guillermo Blanco <guillermoechegoyenblanco@gmail.com>
# Upstream URL: https://github.com/m0n0l0c0/mutant
#
# For improvements/fixes to this package, please send a pull request:
# https://github.com/m0n0l0c0/mutant

pkgname=mutant
_pkgname=Mutant
pkgrel=1
pkgver=0.2.1
pkgdesc="Linux Spotlight Productivity launcher, but more customizable."
url="https://github.com/m0n0l0c0/mutant"
provides=('mutant')
arch=('x86_64')
license=('MIT')
depends=(
  'nodejs-lts-erbium'
  'pkg-config'
  'sqlite'
  'git'
  'npm'
  'gtk3'
  'librsvg'
)
makedepends=()
backup=()
install=''
source=(
  "$pkgname-$pkgver::https://github.com/m0n0l0c0/$pkgname/archive/v$pkgver.tar.gz"
)
sha256sums=(
  '369b371689566d84b3700e6416a278a70baf7173bccce8aa4cc23bda98de7732'
)

package() {
  # Launch npm installer
  cd "$srcdir/$_pkgname-$pkgver/"
  msg2 "Installing dependencies"
  ./install/install.sh
  npm run postinstall
  msg2 "Packaging application"
  ./install/mkDist.sh
  # Create necessary dirs
  install -dm755 "$pkgdir"/{opt,usr/{bin,share}}
  # Copy executable to fakeroot
  # cp -R "$srcdir/$pkgname-$pkgver/dist/$pkgname-linux-x64" "$pkgdir/opt/$pkgname"
  cp -R "$srcdir/$_pkgname-$pkgver/dist/$pkgname" "$pkgdir/opt/$pkgname"
  # Set permissions on pkgdir
  chmod 755 "$pkgdir/opt/$pkgname/$pkgname"
  install -Dm644 "$srcdir/$_pkgname-$pkgver/dist/$pkgname.desktop" "$pkgdir/usr/share/applications/$pkgname.desktop"
  for res in 32 48 64; do
    install -Dm644 "$srcdir/$_pkgname-$pkgver/install/icons/$res/$pkgname.png" "$pkgdir/usr/share/icons/hicolor/$res/$pkgname.png"
  done

  ln -s "/opt/$pkgname/$pkgname" "$pkgdir/usr/bin/$pkgname"

}

