# Maintainer: Radek Podgorny <radek@podgorny.cz>
# Previous maintainer: Renato Garcia <fgarcia.renato@gmail.com>

pkgname=python-elpy
pkgver=1.27.0
pkgrel=1
pkgdesc="Package to bring powerful Python editing to Emacs. Python library only."
install="python-elpy.install"
arch=('any')
url="https://github.com/jorgenschaefer/elpy"
license=('GPL')
depends=('python-epc')
optdepends=('flake8: The modular source code checker: pep8, pyflakes and co'
            'python-autopep8: format code according to PEP8'
            'python-jedi: autocompletion library support'
            'python-rope: refactory library support'
            'yapf: Python style guide checker')
options=(!emptydirs)
source=("https://github.com/jorgenschaefer/elpy/archive/${pkgver}.tar.gz")
md5sums=('210054aa3a3670e29a4b241c696ac15b')

package() {
  cd "${srcdir}/elpy-${pkgver}"
  python setup.py install --root="${pkgdir}/" --optimize=1
}
