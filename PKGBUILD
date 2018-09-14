# Maintainer: Richard Neumann aka. rne <r dot neumann at homeinfo fullstop de>

_pkgbase='usernotify'
pkgname="python-${_pkgbase}-git"
pkgver=r30.681f135
pkgrel=1
pkgdesc="Python 3 library and scripts for notifying desktop users"
arch=('any')
url="https://github.com/conqp/${_pkgbase}"
license=('GPLv3')
depends=('python' 'libnotify')
optdepends=('python-docopt: scripts')
makedepends=('git' 'python')
source=("${pkgname}::git+${url}.git")
md5sums=('SKIP')
pkgdir='pkg'
srcdir='src'


pkgver() {
  cd "$pkgname"
  printf "r%s.%s" "$(git rev-list --count HEAD)" "$(git rev-parse --short HEAD)"
}


package() {
    cd "${srcdir}/${pkgname}"

    # Install python packages to $pkgdir
    python setup.py install --root ${pkgdir} --optimize=1
}
