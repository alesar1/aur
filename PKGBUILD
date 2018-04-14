# Maintainer: Your Name <youremail@domain.com>
pkgname=terminus-terminal-git
_pkgname=Terminus
pkgver=v1.0.0.alpha.44.r4.128fe24
pkgrel=1
pkgdesc="A terminal for a more modern age"
arch=('x86_64')
url="https://github.com/Eugeny/terminus"
license=('MIT')
depends=('nodejs')
makedepends=('git' 'npm' 'yarn') # 'bzr', 'git', 'mercurial' or 'subversion'
provides=("terminus-terminal")
conflicts=("terminus-terminal")
replaces=('terminus-terminal')
source=("$_pkgname::git+$url")
sha256sums=('SKIP')

pkgver() {
	cd "$srcdir/${_pkgname}"
	printf "%s" "$(git describe --long --tags | sed 's/\([^-]*-\)g/r\1/;s/-/./g')"
}

prepare() {
	cd "$srcdir/${_pkgname}"
  yarn add shelljs npmlog
  node ./scripts/install-deps.js
}

build() {
	cd "$srcdir/${_pkgname}"
  yarn add angular
  yarn install
  node ./scripts/build-native
  node ./scripts/vars
  node ./scripts/prepackage-plugins
  node ./scripts/build-linux
}

package() {
	cd "$srcdir/${_pkgname}"
  appdir=/opt/${_pkgname}
  install -d "${pkgdir}"${appdir}
  cp -r dist/linux-unpacked/* "${pkgdir}"${appdir}
  ar x dist/*.deb
  tar -xf data.tar.xz
  cp -r usr/ $pkgdir
  install -Dm755 /dev/stdin "$pkgdir"/usr/bin/$_pkgname <<END
  #!/usr/bin/bash
  /opt/Terminus/terminus

END
}
