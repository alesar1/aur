# Maintainer: MoetaYuko <loli at yuko dot moe>

pkgname=python-jupytext
pkgver=1.13.8
pkgrel=1
pkgdesc="Jupyter notebooks as Markdown documents, Julia, Python or R scripts"
url="https://github.com/mwouts/jupytext"
depends=('jupyter-nbformat' 'python-pyaml' 'python-toml' 'python-markdown-it-py' 'python-mdit_py_plugins')
makedepends=('jupyterlab' 'python-jupyter_packaging' 'python-setuptools' 'python-wheel')
license=('MIT')
arch=('any')
source=("$pkgname-$pkgver.tar.gz::$url/archive/v$pkgver.tar.gz")
sha256sums=('8282b07117222d8c714ff2df1efb6859d1e33369b7f00fb79beda791d30d981b')

build() {
    cd $srcdir/jupytext-$pkgver
    BUILD_JUPYTERLAB_EXTENSION=1 python setup.py build
}

package() {
    cd $srcdir/jupytext-$pkgver
    BUILD_JUPYTERLAB_EXTENSION=1 python setup.py install --root="$pkgdir" --optimize=1
    install -Dm644 LICENSE $pkgdir/usr/share/licenses/$pkgname/LICENSE
}
