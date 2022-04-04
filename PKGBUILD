# Maintainer: Specter119 <spcter119 AT gmail.com>

pkgname=jupyterlab-lsp
pkgver=3.10.1
pkgrel=1
pkgdesc='Coding assistance for JupyterLab with Language Server Protocol.'
arch=(any)
url=https://pypi.org/project/$pkgname
license=(MIT)
depends=(python jupyter-lsp jupyterlab)
makedepends=(python-setuptools)
source=(https://files.pythonhosted.org/packages/source/${pkgname::1}/$pkgname/$pkgname-$pkgver.tar.gz)
sha256sums=('9ad6ef22c4972b85480797034fc7914728eb78f1856b4dab3361686e4f20c9dd')

build() {
  cd $srcdir/$pkgname-$pkgver
  python setup.py build
}

package() {
  cd $srcdir/$pkgname-$pkgver
  python setup.py install --root $pkgdir --skip-build --optimize=1
  install -Dm644 LICENSE $pkgdir/usr/share/licenses/$pkgname/LICENSE
  _dev_ups=krassowski
  _dir_ext=$pkgdir/usr/share/jupyter/labextensions/@$_dev_ups/$pkgname
  rm -rf ${_dir_ext}
  _dir_sitepackage=$(python -c 'import sysconfig; print(sysconfig.get_paths()["purelib"])')
  ln -s ${_dir_sitepackage}/${pkgname//-/_}/labextensions/@$_dev_ups/$pkgname ${_dir_ext}
  cd $pkgdir/${_dir_sitepackage}/${pkgname//-/_}/labextensions/@$_dev_ups/$pkgname
  ln -sf ../../../install.json ./
}
