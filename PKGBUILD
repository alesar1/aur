# Maintainer: Andrei Pavel <andrei.pavel@cti.pub.ro>
_gitrepository='curate-pkg'
_gitbranch='master'
pkgname='curate-pkg-git'
pkgver=1.65
pkgrel=2
pkgdesc='curate-pkg: the script that keeps a consistent state of installed packages across **ALL** Linux package managers and distributions'
arch=('i686' 'x86_64')
url='https://github.com/andrei-pavel/curate-pkg'
license=('MIT')
depends=('unp' 'yq')
makedepends=('git')
provides=('curate-pkg')
source=("git+https://github.com/andrei-pavel/${_gitrepository}.git#branch=${_gitbranch}")
md5sums=('SKIP')

pkgver() {
  cd "${_gitrepository}"
  printf '1.%s\n' "$(( $(git rev-list --count master) ))"
}

package() {
  cd "${srcdir}/${_gitrepository}"
  ./install -p "${pkgdir}"
}

