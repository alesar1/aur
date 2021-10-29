# Maintainer: Laura Demkowicz-Duffy <laura@demkowiczduffy.co.uk>
pkgname=openrocket-git
pkgver=r2955.f67ea41c
pkgrel=2
pkgdesc="A free and fully featured rocket flight simulator - 6 degrees of freedom"
arch=('any')
url=https://github.com/openrocket/openrocket
license=('GPL3')
depends=('java-environment=8' 'desktop-file-utils')
makedepends=('git' 'ant')
provides=('openrocket')
conflicts=('openrocket')
source=("git+https://github.com/openrocket/openrocket.git#branch=unstable"
	"openrocket.sh")
noextract=("openrocket.sh")
sha256sums=('SKIP'
            '74ab605cb11161784d4af96d018eb88adf7a2e4a8b1088a64b94b1e8ec5e18d1')

pkgver() {
  cd openrocket
  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

build() {
  cd openrocket
  ant -f ./build.xml
}

package() {
  cd openrocket
  install -Dm644 swing/build/jar/OpenRocket.jar $pkgdir/usr/share/java/openrocket/openrocket.jar
}
