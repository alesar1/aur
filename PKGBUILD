# Maintainer: Eric Engestrom <aur [at] engestrom [dot] ch>

pkgname=cov-analysis
pkgver=2019.03
pkgrel=3
pkgdesc='Coverity Scan Build Tool for C/C++ - REQUIRES MANUAL DOWNLOAD'
url='https://scan.coverity.com/download'
arch=('i686' 'x86_64')
license=('custom')
depends=('java-environment')
source=("$pkgname.sh")
sha256sums=('a36e738b4eae818cbc2c6ace3cae8a075c7e6f5d282c059397441e91208c8e97')
makedepends=('libarchive')
options=('!strip')

source_i686=(  "cov-analysis-linux-$pkgver.tar.gz")
source_x86_64=("cov-analysis-linux64-$pkgver.tar.gz")
sha256sums_i686=('a0e6c35db1effbbc33194f5aa8db63619911306314ce29c278a0bec2002038ed')
sha256sums_x86_64=('831289253c4630423cdb3dc7b80782b045c0dbf66d0fee51e8337025fe23b72b')

package() {
  tar=$(echo *.tar)
  msg2 "Extracting $tar with bsdtar"
  install -dm755 "$pkgdir/opt/$pkgname"
  cd "$pkgdir/opt/$pkgname"
  bsdtar --strip-components=1 -xf "$srcdir/$tar"
  chown root: -R "$pkgdir/opt/$pkgname/"

  cd "$srcdir"
  install -dm755 "$pkgdir/etc/profile.d"
  sed "s#@PATH@#/opt/$pkgname/bin#g" "$pkgname.sh" > "$pkgdir/etc/profile.d/$pkgname.sh"
  chmod 644 "$pkgdir/etc/profile.d/$pkgname.sh"
}
