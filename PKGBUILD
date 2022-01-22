# Maintainer: Your Name <youremail@domain.com>
pkgname=archipelago-git
_pkgname=archipelago
pkgver=v4.0.0.rc8.r13.d6ddb72
pkgrel=1
pkgdesc="A terminal for a more modern age"
arch=('x86_64')
url="https://github.com/npezza93/archipelago"
license=('MIT')
depends=('glib2' 'libx11' 'python')
makedepends=('git' 'npm' 'yarn' 'libx11' 'libxkbfile' 'openssl' 'nodejs-lts-gallium')
provides=("archipelago")
conflicts=("archipelago")
replaces=('archipelago')
source=("$_pkgname::git+$url")
sha256sums=('SKIP')

pkgver() {
	cd "$srcdir/${_pkgname}"
	printf "%s" "$(git describe --long --tags | sed 's/\([^-]*-\)g/r\1/;s/-/./g')"
}


build() {
	cd "$srcdir/${_pkgname}"
    yarn install
    yarn run dist -- -l deb
}

package() {
  cd "$srcdir/${_pkgname}"
  ar x dist/*.deb
  tar -xf data.tar.xz
  cp -r usr/ $pkgdir
  cp -r opt/ $pkgdir
  install -Dm755 /dev/stdin "$pkgdir"/usr/bin/$_pkgname <<END
  #!/usr/bin/bash
  /opt/Archipelago/archipelago

END
}
