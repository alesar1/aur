# Maintainer: Achmad Fathoni<fathoni.id(at)gmail.com>
# Contributor: Tong Chunli<t.cunly at 163 dot com>
pkgname=python-colcon-bash
_name=${pkgname:7}
pkgver=0.4.2
pkgrel=1
pkgdesc="An extension for colcon-core to provide Bash scripts."
arch=(any)
url="https://pypi.org/project/$_name"
license=('Apache')
depends=('python-colcon-core')
makedepends=('python-setuptools')
source=(https://files.pythonhosted.org/packages/source/${_name::1}/$_name/$_name-$pkgver.tar.gz)
sha256sums=('86950ca62293b655ef8d655d2994d110321fff2fc6739c46a64f005a0cee1bdd')

package() {
    cd ${srcdir}/${_name}-${pkgver}

    python setup.py install --root=${pkgdir} --prefix=/usr --optimize=1
    install -D -m644 README.rst -t "${pkgdir}/usr/share/doc/${pkgname}"
}
