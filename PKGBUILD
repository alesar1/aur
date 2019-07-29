# Maintainer: Axel Gembe <derago@gmail.com>
pkgname='plexdrive-git'
_pkgname=${pkgname/-git/}
pkgdesc='Plexdrive allows you to mount your Google Drive account as read-only fuse filesystem'
pkgver=5.0.0.r18.gbf61a47
pkgrel=2
url='https://github.com/dweidenfeld/plexdrive'
arch=('any')
license=('MIT')
depends=('fuse')
makedepends=(
  'go-pie'
  'git'
)
provides=("$_pkgname")
conflicts=("$_pkgname")
source=("$pkgname::git+https://github.com/dweidenfeld/plexdrive.git")
sha256sums=('SKIP')

pkgver() {
  cd "$pkgname"
  git describe --long --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
  cd "$pkgname"
  go build \
    -gcflags "all=-trimpath=$PWD" \
    -asmflags "all=-trimpath=$PWD" \
    -ldflags "-extldflags $LDFLAGS" \
    -o $_pkgname .
}

package() {
  cd "$pkgname"
  install -Dm755 $_pkgname "$pkgdir"/usr/bin/$_pkgname
}
