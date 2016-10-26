# Maintainer: Jingbei Li <i@jingbei.li>

pkgname=python-ruamel.yaml-hg
_hgname=yaml
pkgver=0.12.14.r1.486262651aa3
pkgrel=1
pkgdesc="YAML parser/emitter that supports roundtrip preservation of comments, seq/map flow style, and map key order"
arch=('i686' 'x86_64')
url="https://bitbucket.org/ruamel/yaml"
license=('MIT')
groups=('devel')
depends=('python')
makedepends=('python-pip' 'mercurial')
provides=('python-ruamel.yaml')
conflicts=('python-ruamel.yaml')
replaces=('python-ruamel.yaml')
source=("hg+$url")
md5sums=('SKIP')

pkgver() {
      cd "${_hgname}"
      hg log -r . --template '{latesttag}.r{latesttagdistance}.{node|short}\n'
}
package() {
      cd "$srcdir/$_hgname"
      pip install --install-option="--prefix=$pkgdir/usr" .
}

# vim:set ts=2 sw=2 et:
