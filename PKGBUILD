# Maintainer: Joaquín I. Aramendía <samsagax at gmail dot com>

pkgname=gamescope-session-git
_gitdir=gamescope-session
pkgver=r70.3f43594
pkgrel=2
pkgdesc="Steam Big Picture Mode session based on gamescope for ChimeraOS"
arch=('any')
url="https://github.com/ChimeraOS/gamescope-session"
license=('WTFPL')
groups=()
depends=('gamescope')
optdepends=('chimera: for steam-tweaks integration'
            'frzr: chimeraos update system')
makedepends=('git')
install=gamescope-session.install
source=("${_gitdir}::git+https://github.com/ChimeraOS/${_gitdir}.git")
md5sums=('SKIP')

pkgver() {
	cd "$srcdir/${_gitdir}"

# Git, no tags available
	printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}

package() {
	cd "$srcdir/${_gitdir}"
  cp -rv ${srcdir}/${_gitdir}/usr ${pkgdir}/usr
  cp -rv ${srcdir}/${_gitdir}/etc ${pkgdir}/etc
}
