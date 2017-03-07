pkgname=aurutils-git
pkgver=1.5.0.r0.g4655b49
pkgrel=1
pkgdesc='helper tools for the arch user repository'
arch=('any')
url=https://github.com/AladW/aurutils
license=('ISC')
source=("git+$url")
md5sums=('SKIP')
conflicts=('aurutils')
provides=('aurutils')
depends=('pacman>=5.0' 'git' 'jq' 'pacutils')
checkdepends=('shellcheck')
makedepends=('git')
optdepends=('devtools: systemd-nspawn support'
	'vifm: build file interaction'
	'aria2: threaded downloads'
	'parallel: threaded downloads'
	'expac: aursift script'
	'repose: repo-add alternative')

pkgver() {
  cd aurutils
  git describe --long --tags | sed 's/\([^-]*-g\)/r\1/; s/-/./g'
}

check() {
  cd aurutils
  make check
}

package() {
  cd aurutils
  make DESTDIR="$pkgdir" PREFIX="/usr" install
}
