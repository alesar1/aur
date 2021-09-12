# Maintainer: Marco A Rojas <marco.rojas@zentek.com.mx>

pkgbase='python-nbterm'
pkgname=('python-nbterm')
_module='nbterm'
pkgver='0.0.11'
pkgrel=2
pkgdesc="A tool for viewing, editing and executing Jupyter Notebooks in the terminal"
url="https://github.com/davidbrochart/nbterm.git"
depends=('python' 'python-kernel-driver' 'python-rich' 'python-pyzmq' 'python-typer')
makedepends=('python-setuptools')
license=('MIT')
arch=('any')
source=("https://files.pythonhosted.org/packages/source/${_module::1}/$_module/$_module-$pkgver.tar.gz")
sha256sums=('7dec2e13435c7a4fcfdd3fd2c733aedb60ba2af1a87f9babfd9ced693188e3f3')

build() {
    cd "${srcdir}/${_module}-${pkgver}"
    python setup.py build
}

package() {
    depends+=()
    cd "${srcdir}/${_module}-${pkgver}"
    install -D -m644 LICENSE "${pkgdir}/usr/share/licenses/python-nbterm/LICENSE"
    python setup.py install --root="${pkgdir}" --optimize=1 --skip-build
}
