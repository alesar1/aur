# Maintainer: Eli Schwartz <eschwartz@archlinux.org>

# All my PKGBUILDs are managed at https://github.com/eli-schwartz/pkgbuilds

_pkgname=html5-parser
pkgbase='python-html5-parser'
pkgname=('python-html5-parser' 'python2-html5-parser')
pkgver=0.4.2
pkgrel=1
pkgdesc="Fast C based HTML 5 parsing for python"
arch=('i686' 'x86_64')
url="https://github.com/kovidgoyal/${_pkgname}"
license=('Apache')
makedepends=('python-chardet' 'python-lxml' 'python-setuptools'
             'python2-chardet' 'python2-lxml' 'python2-setuptools')
source=("https://files.pythonhosted.org/packages/source/${_pkgname:0:1}/${_pkgname}/${_pkgname}-${pkgver}.tar.gz"{,.asc})
sha256sums=('0e28e1e4acf2fa6c5ee1f4e983f61eb4fc37c4d6ec18fdd745f42379c3aa06a4'
            'SKIP')
validpgpkeys=('3CE1780F78DD88DF45194FD706BC317B515ACE7C')

build() {
    cd "${srcdir}/${_pkgname}-${pkgver}"

    python setup.py build
    python2 setup.py build
}

package_python-html5-parser() {
    depends=('python-chardet' 'python-lxml')
    optdepends=('python-beautifulsoup4: to use the soup treebuilder')

    cd "${srcdir}/${_pkgname}-${pkgver}"
    python setup.py install --root="${pkgdir}" --optimize=1 --skip-build
}

package_python2-html5-parser() {
    depends=('python2-chardet' 'python2-lxml')
    optdepends=('python2-beautifulsoup4: to use the soup treebuilder')

    cd "${srcdir}/${_pkgname}-${pkgver}"
    python2 setup.py install --root="${pkgdir}" --optimize=1 --skip-build
}
