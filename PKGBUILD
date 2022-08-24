pkgbase='python-ikernel-remote'
pkgname=('python-ikernel-remote')
_module='ikernel_remote'
pkgver='1.0.2'
pkgrel=1
pkgdesc="Running IPython kernels remotely and through batch queues"
url="https://github.com/macdems/ikernel_remote"
depends=('python' 'python-pexpect' 'jupyter-notebook')
conflicts=('jupyter-nbclassic')
makedepends=('python-setuptools')
license=('BSD')
arch=('any')
source=("https://files.pythonhosted.org/packages/source/${_module::1}/$_module/$_module-$pkgver.tar.gz")
sha256sums=('d454ed2177b430d5674028b8f6cdd3e1bb4b8ff55fc7b0bd6723d049182b1192')

build() {
    cd "${srcdir}/${_module}-${pkgver}"
    python setup.py build
}

package() {
    depends+=()
    cd "${srcdir}/${_module}-${pkgver}"
    python setup.py install --root="${pkgdir}" --optimize=1 --skip-build
}
