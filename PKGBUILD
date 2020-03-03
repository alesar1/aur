# Maintainer: Stunts <f.pinamartins@gmail.com>
_pkgname=landslide
pkgname=${_pkgname}-git
pkgver=0.4.0.r405.g8f00b46
pkgrel=1
pkgdesc="Generate html5 slideshow from Markdown or reStructuredText sources"
arch=(any)
url="http://github.com/adamzap/landslide"
license=('Apache License')
depends=('python2' 'python2-pygments' 'python2-markdown' 'python2-jinja' 'python2-docutils' 'python2-six')
makedepends=('python2-distribute')
optdepends=('prince-bin')
conflicts=(landslide)
source=('git+git://github.com/adamzap/landslide.git')
md5sums=('SKIP')

pkgver() {
  cd ${srcdir}/${_pkgname}
  git describe --long | sed 's/^v//;s/\([^-]*-g\)/r\1/;s/-/./g'
}

build() {
  cd ${srcdir}/${_pkgname}
  sed -i '25,31s/==/>=/' setup.py
  python2 setup.py build
}

package() {
  cd ${srcdir}/${_pkgname}
  python2 setup.py install --prefix=/usr --root="${pkgdir}"
  find "${pkgdir}/" -name '*.pyc' -delete
  find "${pkgdir}/" -type d -empty -delete
}
