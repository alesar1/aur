# Maintainer: Daniel Milde <daniel@milde.cz>

pkgname=gdu-git
_gitname=gdu
pkgver=v1.2.1.r1.ge230e0f
pkgrel=1
license=('MIT')
pkgdesc="Fast disk usage analyzer"
makedepends=('go')
conflicts=("gdu")
arch=('x86_64')
url="https://github.com/Dundee/gdu"
source=("$_gitname::git+https://github.com/Dundee/gdu")
sha256sums=('SKIP')

pkgver() {
  cd "$_gitname"
  git describe --tags | sed 's/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
   cd "$_gitname"
   export CGO_LDFLAGS="${LDFLAGS}"
   export CGO_CFLAGS="${CFLAGS}"
   export CGO_CPPFLAGS="${CPPFLAGS}"
   export CGO_CXXFLAGS="${CXXFLAGS}"
   export GOFLAGS="-buildmode=pie -trimpath -modcacherw"
   go build -o $_gitname .
}

package() {
  cd $_gitname
  install -Dm755 $_gitname "${pkgdir}"/usr/bin/$_gitname
}

