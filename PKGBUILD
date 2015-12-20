# Maintainer: Moritz Lipp <mlq@pwmt.org>
pkgname=python2-gitinspector-git
pkgver=v0.4.2.75.g9b5bbc4
pkgrel=1
pkgdesc="The statistical analysis tool for git repositories."
arch=('any')
url="http://code.google.com/p/gitinspector/"
license=('GPL')
depends=('python2')
provides=('python2-gitinspector')
conflicts=('python2-gitinspector')
makedepends=('git')
options=(!emptydirs)
source=('gitinspector::git+https://github.com/ejwa/gitinspector')
md5sums=('SKIP')
_gitname=gitinspector

package() {
  cd "$_gitname"
  python2 setup.py install --root="$pkgdir/" --optimize=1
}

pkgver() {
  cd "$_gitname"
  local ver="$(git describe --long --tags)"
  printf "%s" "${ver//-/.}"
}

# vim:set ts=2 sw=2 et:
