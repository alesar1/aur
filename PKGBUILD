# Maintainer: Giuseppe Nebbione <giuseppenebbione at gmail dot com>
# Maintainer: Filipe Nascimento <flipee at tuta dot io>

pkgname=kb
_module=kb-manager
pkgver=0.1.7
pkgrel=1
pkgdesc="A command line minimalist knowledge base manager"
arch=('any')
url="https://github.com/gnebbia/kb"
license=('GPL3')
depends=('python-attrs' 'python-colored' 'python-gitpython' 'python-setuptools' 'python-toml')
checkdepends=('python-pytest-cov')
conflicts=("python-kb")
replaces=("python-kb")
source=("https://files.pythonhosted.org/packages/source/${_module::1}/$_module/$_module-$pkgver.tar.gz")
sha256sums=('4c2919d6c3441ae69d9ce8ee86b79f64cc27ba928ef57cf8fa8a0ac5fc8683da')

build() {
    cd ${_module}-${pkgver}
    python setup.py build
}

check() {
    cd ${_module}-${pkgver}
    pytest -v
}

package() {
    cd ${_module}-${pkgver}
    python setup.py install --root="${pkgdir}" --optimize=1 --skip-build
}
