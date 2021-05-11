# Maintainer: lxgr <lxgr@protonmail.com>

pkgbase=scrap_engine-git
pkgname=('python-scrap_engine-git' 'lil_t-git')
pkgver=249.5569b69
pkgrel=1
arch=(any)
url="https://github.com/lxgr-linux/scrap_engine"
license=('GPL3')
depends=('python')
makedepends=('git')
source=("$pkgbase"::'git+https://github.com/lxgr-linux/scrap_engine')
md5sums=('SKIP')

pkgver() {
  cd "$pkgbase"
  echo $(git rev-list --count HEAD).$(git rev-parse --short HEAD)
}

package_python-scrap_engine-git() {
  provides=('python-scrap_engine')
  depends=('python')
  pkgdesc="Python scrap_engine module"
  _python_version=$(python -c "import sys; print(sys.version[:3])")
  cd "${srcdir}/$pkgbase"
  install -Dm0755 -t "$pkgdir/usr/lib/python${_python_version}/site-packages" "scrap_engine.py"
  install -D -m644 LICENSE "${pkgdir}/usr/share/licenses/scrap_engine/LICENSE"
}

package_lil_t-git() {
  provides=('lil_t')
  depends=('python' 'python-scrap_engine-git')
  pkgdesc="Experimantal jump and run game written in python3"
  cd "${srcdir}/$pkgbase"
  install -Dm0755 -t "$pkgdir/usr/bin" "examples/lil_t_endless.py"
  install -D -m644 LICENSE "${pkgdir}/usr/share/licenses/lil_t/LICENSE"
}
